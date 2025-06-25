import React from "react";
import { motion } from "framer-motion";

function StatCard({ icon, label, value, change, positive }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 p-6 flex items-center space-x-4"
    >
      <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
        {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-xl font-semibold text-white">{value}</p>
        <p
          className={`text-sm font-medium ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {change}
        </p>
      </div>
    </motion.div>
  );
}

export default StatCard;
