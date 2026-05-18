import { useState } from 'react';
import ordersData from '../data/orders.json';

const Orders = () => {
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
  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(_searchTerm) ||
      order.product.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? order.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [...new Set(ordersData.flatMap((order) => order.tags))];
  const statusColor = (status) => {
    if (status === 'Selesai') return 'bg-green-100 text-green-700';
    if (status === 'Diproses') return 'bg-yellow-100 text-yellow-700';
    if (status === 'Dibatalkan') return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Orders</h1>
      <p className="text-sm text-gray-500 mb-6">Daftar seluruh transaksi penjualan</p>
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