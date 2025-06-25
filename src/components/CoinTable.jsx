import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Eye, Bookmark, TrendingUp, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SortableHeader from "./SortableHeader";

function CoinTable({ coins = [], search }) {
  const [favorites, setFavorites] = useState(new Set());
  const navigate = useNavigate();

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedCoins = useMemo(() => {
    let sortableCoins = [...filteredCoins];
    if (sortConfig.key) {
      sortableCoins.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableCoins;
  }, [filteredCoins, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const toggleFavorite = (coinId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(coinId)) {
      newFavorites.delete(coinId);
    } else {
      newFavorites.add(coinId);
    }
    setFavorites(newFavorites);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-slate-800 to-slate-700">
            <tr>
              <th className="px-6 py-4 text-left">
                <Star className="h-4 w-4 text-gray-400" />
              </th>
              <SortableHeader
                title="#"
                field="market_cap_rank"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                title="Coin"
                field="name"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableHeader
                title="Harga"
                field="current_price"
                sortConfig={sortConfig}
                onSort={handleSort}
                align="right"
              />
              <SortableHeader
                title="24j %"
                field="price_change_percentage_24h"
                sortConfig={sortConfig}
                onSort={handleSort}
                align="right"
              />
              <SortableHeader
                title="Market Cap"
                field="market_cap"
                sortConfig={sortConfig}
                onSort={handleSort}
                align="right"
              />
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            <AnimatePresence>
              {sortedCoins.map((coin, index) => (
                <motion.tr
                  key={coin.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                  className="group cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={() => toggleFavorite(coin.id)}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <Star
                        className={`h-4 w-4 ${
                          favorites.has(coin.id)
                            ? "fill-yellow-400 text-yellow-400"
                            : ""
                        }`}
                      />
                    </motion.button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {coin.market_cap_rank || index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={coin.image}
                        alt={coin.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {coin.name}
                        </div>
                        <div className="text-sm text-gray-400 uppercase">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="font-semibold text-white">
                      ${coin.current_price?.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div
                      className={`flex items-center justify-end space-x-1 font-semibold ${
                        coin.price_change_percentage_24h >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {coin.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>
                        {Math.abs(coin.price_change_percentage_24h)?.toFixed(2)}
                        %
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-gray-300">
                    ${(coin.market_cap / 1e9).toFixed(1)}B
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate(`/coin/${coin.id}`)}
                        className="p-1 text-gray-400 hover:text-blue-400 transition-colors"
                        title="Lihat Detail"
                      >
                        <Eye className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 text-gray-400 hover:text-green-400 transition-colors"
                        title="Bookmark"
                      >
                        <Bookmark className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default CoinTable;
