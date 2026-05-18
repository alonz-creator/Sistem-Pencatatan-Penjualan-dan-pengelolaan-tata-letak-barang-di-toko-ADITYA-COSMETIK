import { useState } from "react";
import { Link } from "react-router-dom";

export default function Forgot() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementasi kirim reset link dapat ditambahkan di sini
        alert(`Link reset password telah dikirim ke: ${email}`);
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
                Lupa Password?
            </h2>

            <p className="text-sm text-gray-500 mb-6 text-center">
                Masukkan email Anda dan kami akan mengirimkan link untuk mereset password.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300"
                >
                    Kirim Link Reset
                </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
                Ingat password Anda?{" "}
                <Link to="/login" className="text-indigo-600 hover:underline font-medium">
                    Kembali ke Login
                </Link>
            </p>
        </div>
    );
}
