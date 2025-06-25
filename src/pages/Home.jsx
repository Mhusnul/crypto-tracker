import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DollarSign, Activity, Coins, Globe } from "lucide-react";
import { getCoins } from "../api/coinGecko";
import SearchBar from "../components/SearchBar";
import CoinTable from "../components/CoinTable";
import Pagination from "../components/Pagination";
import StatCard from "../components/StatCard";
import ErrorBoundary from "../components/ErrorBoundary";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const data = await getCoins(page, 10);
        setCoins(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [page]);

  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Crypto Market
            </span>
            <br />
            <span className="text-white">Indonesia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Pantau pergerakan cryptocurrency terbaru dengan data real-time dan
            analisis mendalam
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <StatCard
            icon={<DollarSign />}
            label="Total Market Cap"
            value="$1.2T"
            change="+2.34%"
            positive={true}
          />
          <StatCard
            icon={<Activity />}
            label="24h Volume"
            value="$89.5B"
            change="-1.23%"
            positive={false}
          />
          <StatCard
            icon={<Coins />}
            label="Active Coins"
            value="2,847"
            change="+15"
            positive={true}
          />
          <StatCard
            icon={<Globe />}
            label="Markets"
            value="748"
            change="+3"
            positive={true}
          />
        </motion.div>

        <SearchBar search={search} setSearch={setSearch} />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"
            />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-8">Error: {error}</div>
        ) : (
          <CoinTable coins={coins} search={search} />
        )}

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </motion.div>
    </ErrorBoundary>
  );
}

export default Home;
