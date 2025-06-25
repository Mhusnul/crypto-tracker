import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page, setPage, totalPages }) {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, page - delta);
      i <= Math.min(totalPages - 1, page + delta);
      i++
    ) {
      range.push(i);
    }

    if (page - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (page + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center space-x-2 mt-8"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPage(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Prev</span>
      </motion.button>

      <div className="flex items-center space-x-1">
        {getPageNumbers().map((pageNum, index) => (
          <React.Fragment key={index}>
            {pageNum === "..." ? (
              <span className="px-3 py-2 text-gray-400">...</span>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setPage(pageNum)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  page === pageNum
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-gray-300"
                }`}
              >
                {pageNum}
              </motion.button>
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
      >
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
}

export default Pagination;
