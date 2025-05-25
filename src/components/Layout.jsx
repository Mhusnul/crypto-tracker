import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-[#1e293b] min-h-screen text-white">
      <Navbar />
      <main className="p-4 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
