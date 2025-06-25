import React from "react";
import { motion } from "framer-motion";
import { ArrowUpDown } from "lucide-react";

function SortableHeader({ title, field, sortConfig, onSort, align = "left" }) {
  return (
    <th
      className={`px-6 py-4 text-${align} text-sm font-medium text-gray-300 cursor-pointer hover:text-orange-400 transition-colors select-none`}
      onClick={() => onSort(field)}
    >
      <div
        className={`flex items-center ${
          align === "right" ? "justify-end" : ""
        } space-x-1`}
      >
        <span>{title}</span>
        <ArrowUpDown className="h-3 w-3" />
        {sortConfig.key === field && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`text-orange-400 ${
              sortConfig.direction === "asc" ? "rotate-0" : "rotate-180"
            }`}
          >
            ↑
          </motion.div>
        )}
      </div>
    </th>
  );
}

export default SortableHeader;
