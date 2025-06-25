import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Bell,
  Settings,
  Menu,
  X,
  Coins,
  LineChart,
  PieChart,
  Activity,
} from "lucide-react";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-xl">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              IndoDAX Tracker
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<Coins />} text="Market" active />
            <NavLink icon={<LineChart />} text="Trading" />
            <NavLink icon={<PieChart />} text="Portfolio" />
            <NavLink icon={<Activity />} text="Analytics" />
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Bell className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Settings className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-orange-400"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-700 py-4"
            >
              <div className="space-y-2">
                <MobileNavLink icon={<Coins />} text="Market" active />
                <MobileNavLink icon={<LineChart />} text="Trading" />
                <MobileNavLink icon={<PieChart />} text="Portfolio" />
                <MobileNavLink icon={<Activity />} text="Analytics" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
