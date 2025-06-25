import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { getCoinDetail } from "../api/coinGecko";
import { ArrowLeft } from "lucide-react";

function CoinDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      setLoading(true);
      try {
        const data = await getCoinDetail(id);
        setCoin(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-400 py-8">Error: {error}</div>;
  }

  if (!coin) {
    return (
      <div className="text-center text-gray-400 py-8">No data available</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="flex items-center space-x-2 text-gray-300 hover:text-orange-400"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Market</span>
      </motion.button>

      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={coin.image?.large}
            alt={coin.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">{coin.name}</h2>
            <p className="text-gray-400 uppercase">{coin.symbol}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Market Data
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-medium">Price:</span> $
                {coin.market_data?.current_price?.usd?.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Market Cap:</span> $
                {(coin.market_data?.market_cap?.usd / 1e9).toFixed(1)}B
              </p>
              <p>
                <span className="font-medium">24h Change:</span>{" "}
                <span
                  className={
                    coin.market_data?.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {coin.market_data?.price_change_percentage_24h?.toFixed(2)}%
                </span>
              </p>
              <p>
                <span className="font-medium">Rank:</span> #
                {coin.market_cap_rank}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Details</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-medium">Website:</span>{" "}
                <a
                  href={coin.links?.homepage[0]}
                  target="_blank"
                  rel="noopener"
                  className="text-orange-400 hover:underline"
                >
                  {coin.links?.homepage[0]}
                </a>
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {coin.description?.en
                  ? coin.description.en.substring(0, 200) + "..."
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CoinDetail;
