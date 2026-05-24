import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.message);
                    return;
                }
                setProduct(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [id]);

    if (error) return (
        <div className="p-6">
            <Link to="/products" className="text-[#4F46E5] hover:underline mb-4 inline-block">&larr; Kembali ke Produk</Link>
            <div className="text-red-600 bg-red-50 p-4 rounded-lg border border-red-200">{error}</div>
        </div>
    );
    
    if (!product) return (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <ImSpinner2 className="animate-spin text-3xl mb-4 text-[#4F46E5]" />
            Memuat detail produk...
        </div>
    );

    return (
        <div>
            <Link to="/products" className="text-[#4F46E5] hover:underline mb-6 inline-block font-medium">
                &larr; Kembali ke Kelola Produk
            </Link>
            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto mt-2">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="rounded-xl w-full h-64 object-cover border border-gray-200"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <span className="text-xs font-medium bg-indigo-50 text-[#4F46E5] px-3 py-1 rounded-full w-max mb-3">
                            {product.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
                        <p className="text-gray-500 mb-4">{product.description}</p>
                        <p className="text-gray-600 mb-2">Brand: <span className="font-semibold">{product.brand || '-'}</span></p>
                        <p className="text-[#4F46E5] font-bold text-2xl mt-auto">
                            Rp {(product.price * 15000).toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
