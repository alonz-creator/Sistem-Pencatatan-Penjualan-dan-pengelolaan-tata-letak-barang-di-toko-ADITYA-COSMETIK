import React, { useState } from 'react';
import toast from 'react-hot-toast';

const LaporanLengkap = () => {
    const [transactions] = useState([
        { id: 'TRX-001234', date: '2025-05-20', name: 'Siti Rahmawati', product: 'Lipstik Wardah, Bedak Tabur', total: 450000, status: 'Selesai', payment: 'Transfer Bank' },
        { id: 'TRX-001235', date: '2025-05-20', name: 'Ahmad Fauzi', product: 'Parfum Pria, Sabun Cuci Muka', total: 280000, status: 'Selesai', payment: 'Qris' },
        { id: 'TRX-001236', date: '2025-05-21', name: 'Dewi Lestari', product: 'Serum Wajah, Moisturizer', total: 625000, status: 'Selesai', payment: 'Transfer Bank' },
        { id: 'TRX-001237', date: '2025-05-22', name: 'Budi Santoso', product: 'Pomade Rambut', total: 195000, status: 'Selesai', payment: 'Tunai' },
        { id: 'TRX-001238', date: '2025-05-23', name: 'Nina Permata', product: 'Paket Perawatan Kulit', total: 840000, status: 'Selesai', payment: 'Kartu Kredit' },
    ]);
    const [search, setSearch] = useState('');
    
    const filteredTrx = transactions.filter(t => 
        t.name.toLowerCase().includes(search.toLowerCase()) || 
        t.id.toLowerCase().includes(search.toLowerCase()) ||
        t.product.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Laporan Lengkap</h1>
                    <p className="text-sm text-gray-500">Rekapitulasi seluruh transaksi penjualan toko</p>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => toast.success('Berhasil mengunduh Laporan Excel')} className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center cursor-pointer">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Export Excel
                    </button>
                    <button onClick={() => toast.success('Mencetak Laporan PDF...')} className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center cursor-pointer">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                        Cetak PDF
                    </button>
                </div>
            </div>

            <input
                type="text"
                placeholder="Cari transaksi, nama pelanggan, atau produk..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-6 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm outline-none"
            />

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-200">
                                <th className="pb-3 font-medium">Tanggal</th>
                                <th className="pb-3 font-medium">ID Transaksi</th>
                                <th className="pb-3 font-medium">Pelanggan</th>
                                <th className="pb-3 font-medium">Produk</th>
                                <th className="pb-3 font-medium">Metode</th>
                                <th className="pb-3 font-medium text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTrx.map((trx, index) => (
                                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50">
                                    <td className="py-4 text-gray-600">{trx.date}</td>
                                    <td className="py-4 text-gray-700 font-medium">{trx.id}</td>
                                    <td className="py-4 text-gray-700">{trx.name}</td>
                                    <td className="py-4 text-gray-500">{trx.product}</td>
                                    <td className="py-4 text-gray-500">{trx.payment}</td>
                                    <td className="py-4 text-gray-800 font-bold text-right">Rp {trx.total.toLocaleString()}</td>
                                </tr>
                            ))}
                            {filteredTrx.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-6 text-gray-400">Tidak ada transaksi ditemukan</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LaporanLengkap;
