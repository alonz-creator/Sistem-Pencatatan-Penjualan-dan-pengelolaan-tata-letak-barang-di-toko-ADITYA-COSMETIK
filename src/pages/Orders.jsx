import { useState } from 'react';
import toast from 'react-hot-toast';
import ordersData from '../data/orders.json';
import InputField from '../components/InputField';

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [orderForm, setOrderForm] = useState({
    customer: '',
    product: '',
    price: 0,
    quantity: 1,
  });

  const handleOrderChange = (evt) => {
    const { name, value } = evt.target;
    setOrderForm({
      ...orderForm,
      [name]: value,
    });
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!orderForm.customer || !orderForm.product) return;
    const newOrder = {
      id: `TRX-${Math.floor(Math.random() * 10000)}`,
      customer: orderForm.customer,
      product: orderForm.product,
      total: `Rp ${(orderForm.price * orderForm.quantity).toLocaleString()}`,
      status: 'Selesai',
      tags: ['Baru']
    };
    setOrders([newOrder, ...orders]);
    setOrderForm({ customer: '', product: '', price: 0, quantity: 1 });
    toast.success('Transaksi berhasil disimpan!');
  };
  const [dataForm, setDataForm] = useState({
    searchTerm: '',
    selectedTag: '',
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(_searchTerm) ||
      order.product.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? order.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [...new Set(orders.flatMap((order) => order.tags))];
  const statusColor = (status) => {
    if (status === 'Selesai') return 'bg-green-100 text-green-700';
    if (status === 'Diproses') return 'bg-yellow-100 text-yellow-700';
    if (status === 'Dibatalkan') return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Input Penjualan & Orders</h1>
      <p className="text-sm text-gray-500 mb-6">Kelola data transaksi dan input penjualan baru</p>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Tambah Transaksi Baru</h2>
        <form onSubmit={handleAddOrder} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Nama Pelanggan" name="customer" value={orderForm.customer} onChange={handleOrderChange} placeholder="Masukkan nama pelanggan" />
          <InputField label="Nama Produk" name="product" value={orderForm.product} onChange={handleOrderChange} placeholder="Masukkan nama produk" />
          <InputField label="Harga Satuan" type="number" name="price" value={orderForm.price} onChange={handleOrderChange} placeholder="Contoh: 15000" />
          <InputField label="Jumlah" type="number" name="quantity" value={orderForm.quantity} onChange={handleOrderChange} placeholder="1" />
          
          <div className="md:col-span-2 p-4 bg-indigo-50 rounded-lg flex justify-between items-center">
            <span className="text-gray-700 font-medium">Total Harga:</span>
            <span className="text-xl font-bold text-[#4F46E5]">Rp {(orderForm.price * orderForm.quantity).toLocaleString()}</span>
          </div>
          
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-[#4F46E5] text-white p-2 rounded-lg font-medium hover:bg-indigo-700 transition cursor-pointer">
              Simpan Transaksi
            </button>
          </div>
        </form>
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-4">Daftar Transaksi</h2>
      <input
        type="text"
        name="searchTerm"
        placeholder="Cari nama pelanggan atau produk..."
        value={dataForm.searchTerm}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg mb-3 text-sm"
      />
      <select
        name="selectedTag"
        value={dataForm.selectedTag}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg mb-6 text-sm"
      >
        <option value="">Semua Kategori</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>{tag}</option>
        ))}
      </select>

      {filteredOrders.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-sm bg-white">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-base font-bold text-gray-800">{item.customer}</h2>
              <p className="text-sm text-gray-500">{item.product}</p>
            </div>
            <div className="text-right">
              <p className="text-base font-semibold text-[#4F46E5]">{item.total}</p>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor(item.status)}`}>
                {item.status}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map((tag, index) => (
              <span key={index} className="bg-indigo-50 text-[#4F46E5] px-2 py-1 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      {filteredOrders.length === 0 && (
        <p className="text-center text-gray-400 mt-8">Tidak ada transaksi yang ditemukan.</p>
      )}
    </div>
  );
};

export default Orders;