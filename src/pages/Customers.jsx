import { useState } from 'react';
import customersData from '../data/customers.json';

const Customers = () => {
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
  const filteredCustomers = customersData.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(_searchTerm) ||
      customer.email.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? customer.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [...new Set(customersData.flatMap((customer) => customer.tags))];


  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Data Pelanggan</h1>
      <p className="text-sm text-gray-500 mb-6">Daftar dan informasi pelanggan</p>
      <input
        type="text"
        name="searchTerm"
        placeholder="Cari nama atau email pelanggan..."
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

      {filteredCustomers.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-sm bg-white">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-base font-bold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.email}</p>
              <p className="text-sm text-gray-500">{item.phone}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Total Belanja</p>
              <p className="text-base font-semibold text-[#4F46E5]">{item.totalBelanja}</p>
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

      {filteredCustomers.length === 0 && (
        <p className="text-center text-gray-400 mt-8">Tidak ada pelanggan yang ditemukan.</p>
      )}
    </div>
  );
};

export default Customers;
