"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HeroSection() {
  const [search, setSearch] = useState("");
  

  const handleSearch = () => {
    console.log("Searching for:", search);
    // Add logic to redirect to symbol page or filter news/market
  };

  return (
    <section className="relative w-full bg-[#0E0E0E] text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center gap-10">
      {/* Hero Content */}
      <div className="max-w-4xl text-center flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent 
          bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 animate-gradient-x">
          Gcoin Stock
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Track <span className="text-yellow-400 font-semibold">real-time crypto</span>,{" "}
          <span className="text-orange-400 font-semibold">stocks</span>, indices, and{" "}
          <span className="text-amber-400 font-semibold">commodities</span> — all in one dashboard.
        </p>

   
      </div>

      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-400/20 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-orange-400/20 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-amber-500/10 blur-2xl animate-pulse-slow" />
      </div>
    </section>
  );
}
