"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-gray-400 border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Brand */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <Image src="/assets/images/logo.png" alt="Gcoin Stock" width={40} height={40} />
            <span className="text-white font-bold text-lg">Gcoin Stock</span>
          </div>
          <p className="text-sm text-gray-400">
            Your all-in-one platform for crypto, stocks, and commodities. Live prices, news,
            and market insights.
          </p>
        </div>

        {/* Market Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Markets</h3>
          <a href="#" className="hover:text-blue-400 transition">Crypto</a>
          <a href="#" className="hover:text-blue-400 transition">Stocks</a>
          <a href="#" className="hover:text-blue-400 transition">Commodities</a>
          <a href="#" className="hover:text-blue-400 transition">Indices</a>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Careers</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
          <a href="#" className="hover:text-blue-400 transition">Blog</a>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <a href="#" className="hover:text-blue-400 transition">Help Center</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">API Docs</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Gcoin Stock. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
