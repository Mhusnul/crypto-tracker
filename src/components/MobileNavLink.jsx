import React from "react";
import { motion } from "framer-motion";

function MobileNavLink({ icon, text, active = false }) {
  return (
    <motion.a
      href="#"
      whileTap={{ scale: 0.98 }}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        active
          ? "text-orange-400 bg-orange-500/10"
          : "text-gray-300 hover:text-orange-400 hover:bg-slate-800"
      }`}
    >
      {React.cloneElement(icon, { className: "h-5 w-5" })}
      <span className="font-medium">{text}</span>
    </motion.a>
  );
}

export default MobileNavLink;
