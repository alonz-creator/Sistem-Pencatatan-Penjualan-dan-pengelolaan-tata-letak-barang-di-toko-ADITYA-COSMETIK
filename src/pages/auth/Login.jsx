import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        axios
            .post("https://dummyjson.com/user/login", {
                username: dataForm.username,
                password: dataForm.password,
            })
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message);
                    return;
                }
                navigate("/dashboard");
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message || "Login gagal. Periksa kembali username dan password.");
                } else {
                    setError(err.message || "Terjadi kesalahan yang tidak diketahui.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const errorInfo = error ? (
        <div className="bg-red-50 border border-red-200 mb-5 p-4 text-sm text-red-700 rounded-lg flex items-center">
            <BsFillExclamationDiamondFill className="text-red-500 me-2 text-lg flex-shrink-0" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-gray-100 mb-5 p-4 text-sm text-gray-600 rounded-lg flex items-center">
            <ImSpinner2 className="me-2 animate-spin" />
            Mohon Tunggu...
        </div>
    ) : null;

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Selamat Datang 👋
            </h2>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={dataForm.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Masukkan username"
                        required
                    />
                    <p className="text-xs text-gray-400 mt-1">
                        Gunakan: <span className="font-medium text-indigo-500">emilys</span> / <span className="font-medium text-indigo-500">emilyspass</span>
                    </p>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={dataForm.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300"
                >
                    {loading ? "Memproses..." : "Login"}
                </button>
            </form>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <Link to="/register" className="text-indigo-600 hover:underline font-medium">
                    Buat akun baru
                </Link>
                <Link to="/forgot" className="text-indigo-600 hover:underline font-medium">
                    Lupa password?
                </Link>
            </div>
        </div>
    );
}
