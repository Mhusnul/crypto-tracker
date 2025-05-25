import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0f172a] text-gray-200 px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-cyan-400 font-bold text-2xl tracking-wide">
          📊 CryptoTracker
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
