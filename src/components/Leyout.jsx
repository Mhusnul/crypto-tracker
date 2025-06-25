import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { BarChart3 } from "lucide-react";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background SVG sebagai inline style agar tidak error */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-white">IndoDAX Tracker</span>
              </div>
              <p className="text-gray-400 text-sm">
                Platform terpercaya untuk tracking cryptocurrency di Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Fitur</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Real-time Pricing</li>
                <li>Advanced Analytics</li>
                <li>Portfolio Tracking</li>
                <li>Price Alerts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Bantuan</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>FAQ</li>
                <li>Support</li>
                <li>API Documentation</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 IndoDAX Tracker. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
