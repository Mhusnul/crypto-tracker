import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, RefreshCw } from "lucide-react";

function SearchBar({ search, setSearch }) {
  const [isFocused, setIsFocused] = useState(false);
  const [sortBy, setSortBy] = useState("market_cap");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-8 space-y-4">
      <motion.div
        animate={{ scale: isFocused ? 1.02 : 1 }}
        className="relative"
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Cari cryptocurrency..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all backdrop-blur-sm"
        />
      </motion.div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </motion.button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="market_cap">Market Cap</option>
            <option value="price">Harga</option>
            <option value="volume">Volume</option>
            <option value="change">Perubahan 24h</option>
          </select>
        </div>

        <motion.button
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-gray-400 hover:text-orange-400 transition-colors"
        >
          <RefreshCw className="h-5 w-5" />
        </motion.button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-slate-800/30 rounded-xl border border-slate-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Range Harga
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Market Cap
                </label>
                <select className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white text-sm">
                  <option>Semua</option>
                  <option>Large Cap ($10B)</option>
                  <option>Mid Cap ($1B-$10B)</option>
                  <option>Small Cap ($1B)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Perubahan 24h
                </label>
                <select className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-white text-sm">
                  <option>Semua</option>
                  <option>Naik</option>
                  <option>Turun</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchBar;
