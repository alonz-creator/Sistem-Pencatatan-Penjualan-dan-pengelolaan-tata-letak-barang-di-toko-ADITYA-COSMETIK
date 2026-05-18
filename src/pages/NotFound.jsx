import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
      <h1 className="text-6xl font-bold text-[#4F46E5]">404</h1>
      <p className="text-xl text-gray-600 mt-4">Halaman tidak ditemukan</p>
      <button
        onClick={() => navigate('/dashboard')}
        className="mt-6 px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Kembali ke Dashboard
      </button>
    </div>
  );
};

export default NotFound;