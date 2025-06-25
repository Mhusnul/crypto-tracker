import React from "react";
import { motion } from "framer-motion";

function NavLink({ icon, text, active = false }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
        active
          ? "text-orange-400 bg-orange-500/10"
          : "text-gray-300 hover:text-orange-400 hover:bg-slate-800"
      }`}
    >
      {React.cloneElement(icon, { className: "h-4 w-4" })}
      <span className="font-medium">{text}</span>
    </motion.a>
  );
}

export default NavLink;
