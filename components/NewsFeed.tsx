"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";


export default function NewsFeed() {
  const [news, setNews] = useState<any[]>([]);
  const [symbol, setSymbol] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch news safely (default: API → fallback: DB)
  const fetchNews = async (symbolFilter = "") => {
    try {
      setLoading(true);
      const res = await fetch(`/api/news${symbolFilter ? `?symbol=${symbolFilter}` : ""}`);
      const data = await res.json();
      setNews(data || []);
    } catch (err) {
      console.error("❌ Failed to fetch news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(symbol);
  }, [symbol]);

  const symbols = ["All", "BTC", "ETH", "S&P", "GOLD"];

  return (
    <Card className="bg-[#0E0E0E] border border-[#1C1C1C] rounded-2xl p-4 text-gray-200 w-full max-w-4xl mx-auto">
      <CardHeader className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
        <h2 className="text-xl font-semibold tracking-tight">📰 Live Market News</h2>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {symbols.map((sym) => (
            <Button
              key={sym}
              variant={symbol === sym || (sym === "All" && !symbol) ? "default" : "outline"}
              className={`text-sm ${
                symbol === sym || (sym === "All" && !symbol)
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
              }`}
              onClick={() => setSymbol(sym === "All" ? "" : sym)}
            >
              {sym}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-3">
              <Skeleton className="w-24 h-16 rounded-lg bg-gray-800" />
              <div className="flex-1 space-y-2">
                <Skeleton className="w-3/4 h-4 bg-gray-800" />
                <Skeleton className="w-1/2 h-3 bg-gray-800" />
              </div>
            </div>
          ))
        ) : news.length === 0 ? (
          <p className="text-center text-gray-500 mt-5">No news available.</p>
        ) : (
          news.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 p-3 rounded-lg hover:bg-[#1A1A1A] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {item.image && (
                <div className="w-24 h-16 flex-shrink-0 relative rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium leading-snug text-gray-100 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-sm text-gray-400 line-clamp-2 mt-1">{item.summary}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {item.source} · {new Date(item.publishedAt).toLocaleTimeString()}
                </p>
              </div>
            </motion.a>
          ))
        )}
      </CardContent>
    </Card>
  );
}
