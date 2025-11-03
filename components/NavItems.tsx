"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchCommand from "@/components/SearchCommand";
import { StockWithWatchlistStatus } from "@/types";

interface SearchNavProps {
  initialStocks: StockWithWatchlistStatus[];
}

export default function SearchNav({ initialStocks }: SearchNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Open search on Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex items-center gap-2 relative">
      {/* Desktop input */}
      <div className="hidden md:block w-80">
        <Input
          placeholder="Search symbol (BTC, AAPL, GOLD...)"
          readOnly
          onClick={() => setIsOpen(true)}
          className="border-yellow-400 focus:border-orange-400 focus:ring-amber-400 cursor-pointer"
        />
      </div>

      {/* Mobile button */}
      <div className="md:hidden">
        <Button onClick={() => setIsOpen(true)} className="px-3 py-2">
          🔍
        </Button>
      </div>

      {/* SearchCommand modal */}
      {isOpen && (
        <SearchCommand
          renderAs="text"
          label="Search"
          initialStocks={initialStocks}
        />
      )}
    </div>
  );
}
