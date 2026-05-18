// DashboardLayout dihapus — sekarang sudah ditangani oleh MainLayout via <Outlet/>
const Dashboard = () => {
    const transactions = [
        { id: 'TRX-001234', name: 'Siti Rahmawati', eco: true, total: 'Rp 450.000', status: 'Selesai' },
        { id: 'TRX-001235', name: 'Ahmad Fauzi', eco: false, total: 'Rp 280.000', status: 'Selesai' },
        { id: 'TRX-001236', name: 'Dewi Lestari', eco: true, total: 'Rp 625.000', status: 'Pending' },
        { id: 'TRX-001237', name: 'Budi Santoso', eco: false, total: 'Rp 195.000', status: 'Selesai' },
        { id: 'TRX-001238', name: 'Nina Permata', eco: true, total: 'Rp 840.000', status: 'Selesai' },
    ];

    return (
        <div>
            <div className="grid grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Laba Hari Ini</p>
                        <h2 className="text-2xl font-bold text-gray-800">Rp 2.450.000</h2>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-green-50 text-green-500 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Pelanggan Baru</p>
                        <h2 className="text-2xl font-bold text-gray-800">24</h2>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Stok Kritis</p>
                        <h2 className="text-2xl font-bold text-gray-800">8</h2>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Produk Kadaluwarsa</p>
                        <h2 className="text-2xl font-bold text-gray-800">3</h2>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-800 mb-6">Tren Penjualan Bulanan</h3>
                    <div className="relative h-64 w-full flex flex-col pb-6">
                        <div className="absolute inset-0 left-16 right-0 bottom-6 flex flex-col justify-between">
                            <div className="border-b border-dashed border-gray-200 w-full h-0"></div>
                            <div className="border-b border-dashed border-gray-200 w-full h-0"></div>
                            <div className="border-b border-dashed border-gray-200 w-full h-0"></div>
                            <div className="border-b border-dashed border-gray-200 w-full h-0"></div>
                            <div className="border-b border-gray-300 w-full h-0"></div>
                        </div>
                        <div className="relative flex-1 flex">
                            <div className="w-16 flex flex-col justify-between text-xs text-gray-400 text-right pr-4 z-10 pb-[-10px]">
                                <span>22000000</span>
                                <span>16500000</span>
                                <span>11000000</span>
                                <span>5500000</span>
                                <span>0</span>
                            </div>
                            <div className="flex-1 flex justify-around items-end z-10 px-4">
                                <div className="w-[12%] max-w-12.5 bg-[#5c54f5] rounded-t-md h-[45%]"></div>
                                <div className="w-[12%] max-w-12.5 bg-[#5c54f5] rounded-t-md h-[55%]"></div>
                                <div className="w-[12%] max-w-12.5 bg-[#5c54f5] rounded-t-md h-[70%]"></div>
                                <div className="w-[12%] max-w-12.5 bg-[#5c54f5] rounded-t-md h-[60%]"></div>
                                <div className="w-[12%] max-w-12.5 bg-[#5c54f5] rounded-t-md h-[80%]"></div>
                                <div className="w-[12%] max-w-12.5 bg-[#5c54f5] rounded-t-md h-[75%]"></div>
                            </div>
                        </div>
                        <div className="ml-16 flex justify-around text-xs text-gray-400 pt-3 px-4">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col">
                    <h3 className="font-semibold text-gray-800 mb-6">Aksi Cepat</h3>
                    <div className="flex gap-4">
                        <button className="flex-1 bg-[#5c54f5] hover:bg-indigo-700 text-white rounded-xl flex flex-col items-center justify-center py-1 px-2 transition-colors shadow-sm">
                            <span className="text-3xl font-light mb-1">+</span>
                            <span className="text-sm font-medium text-center">Tambah<br />Stok Baru</span>
                        </button>
                        <button className="flex-1 bg-[#059669] hover:bg-emerald-700 text-white rounded-xl flex flex-col items-center justify-center py-1 px-2 transition-colors shadow-sm">
                            <svg className="w-7 h-7 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                            <span className="text-sm font-medium text-center">Buka Kasir<br />POS</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">Transaksi Terbaru</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-200">
                                <th className="pb-3 font-medium">ID Transaksi</th>
                                <th className="pb-3 font-medium">Nama Pelanggan</th>
                                <th className="pb-3 font-medium">Total Harga</th>
                                <th className="pb-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((trx, index) => (
                                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="py-4 text-gray-700">{trx.id}</td>
                                    <td className="py-4 text-gray-700 flex items-center">
                                        {trx.name}
                                        {trx.eco && (
                                            <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-600 border border-green-100 flex items-center">
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg> Eco
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 text-gray-700">{trx.total}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${trx.status === 'Selesai'
                                            ? 'bg-green-50 text-green-600'
                                            : 'bg-yellow-50 text-yellow-600'
                                            }`}>
                                            {trx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;