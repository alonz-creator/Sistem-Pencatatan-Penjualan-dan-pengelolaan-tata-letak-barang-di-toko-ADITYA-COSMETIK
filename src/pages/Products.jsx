import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true);
            axios
                .get(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => {
                    if (response.status !== 200) {
                        setError(response.data.message);
                        return;
                    }
                    setProducts(response.data.products);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message || "An unknown error occurred");
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

    const errorInfo = error ? (
        <div className="bg-red-50 border border-red-200 mb-5 p-4 text-sm font-light text-red-700 rounded-lg flex items-center">
            <BsFillExclamationDiamondFill className="text-red-500 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Kelola Produk</h1>
                    <p className="text-sm text-gray-500">Daftar produk dari DummyJSON API</p>
                </div>
            </div>

            {errorInfo}

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk..."
                className="mb-6 p-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr className="text-gray-500 font-medium">
                            <th className="px-6 py-4">#</th>
                            <th className="px-6 py-4">Gambar</th>
                            <th className="px-6 py-4">Nama Produk</th>
                            <th className="px-6 py-4">Kategori</th>
                            <th className="px-6 py-4">Harga</th>
                            <th className="px-6 py-4">Brand</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center py-10 text-gray-500">
                                    <ImSpinner2 className="animate-spin inline-block mr-2" />
                                    Memuat data...
                                </td>
                            </tr>
                        ) : products.length > 0 ? (
                            products.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-500">{index + 1}.</td>
                                    <td className="px-6 py-4">
                                        <img src={item.thumbnail} alt={item.title} className="w-10 h-10 object-cover rounded-md border border-gray-200" />
                                    </td>
                                    <td className="px-6 py-4 font-medium">
                                        <Link to={`/products/${item.id}`} className="text-[#4F46E5] hover:underline">
                                            {item.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{item.category}</td>
                                    <td className="px-6 py-4 text-gray-700 font-medium">Rp {(item.price * 15000).toLocaleString()}</td>
                                    <td className="px-6 py-4 text-gray-600">{item.brand || '-'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-10 text-gray-500">
                                    Tidak ada produk ditemukan.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
