// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getCoins } from "../api";
import SearchBar from "../components/SearchBar";
import CoinTable from "../components/CoinTable";
import Pagination from "../components/Pagination";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const data = await getCoins(page);
        setCoins(data);
      } catch (error) {
        alert("Gagal mengambil data coin!");
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [page]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        🚀 Market Overview
      </h1>
      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : (
        <>
          <CoinTable coins={coins} search={search} />
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}
