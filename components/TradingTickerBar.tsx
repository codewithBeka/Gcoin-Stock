"use client";

import { useEffect, useRef } from "react";

const TradingTickerBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
        { proName: "TVC:GOLD", title: "Gold" },
        { proName: "TVC:USOIL", title: "Crude Oil" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
        { proName: "COINBASE:ETHUSD", title: "Ethereum" },
      ],
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
      showSymbolLogo: true,
      largeChartUrl: "",
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="sticky top-0 z-50 w-full bg-[#0E0E0E] border-b border-gray-800 shadow-lg overflow-x-auto scrollbar-hide"
      style={{
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        ref={containerRef}
        className="min-w-max flex items-center"
      />
    </div>
  );
};

export default TradingTickerBar;
