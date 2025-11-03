import NewsFeed from "@/components/NewsFeed";
import HeroSection from "@/components/HeroSection";
import TradingViewWidget from "@/components/TradingViewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
  INDICES_WIDGET_CONFIG,
  CRYPTO_WIDGET_CONFIG,
  COMMODITIES_WIDGET_CONFIG,
} from "@/lib/constants";
import Footer from "@/components/Footer";

const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  return (
    <div className="flex flex-col min-h-screen ">

  

      {/* ✅ Page Sections */}
      <div className="flex flex-col gap-10 p-4 md:p-8 home-wrapper">
        {/* Hero Section */}
        <section className="home-section">
          <HeroSection />
        </section>
        {/* Market Overview & Heatmap */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 home-section">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            height={600}
          />
          <div className="xl:col-span-2">
            <TradingViewWidget
              title="Stock Heatmap"
              scriptUrl={`${scriptUrl}stock-heatmap.js`}
              config={HEATMAP_WIDGET_CONFIG}
              height={600}
            />
          </div>
        </section>

        {/* Top Stories & Market Data */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 home-section">
          <TradingViewWidget
            title="Top Market Stories"
            scriptUrl={`${scriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
          />
          <div className="xl:col-span-2">
            <TradingViewWidget
              title="Market Quotes"
              scriptUrl={`${scriptUrl}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={600}
            />
          </div>
        </section>

        {/* Indices, Crypto, Commodities */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 home-section">
          <TradingViewWidget
            title="Major Indices"
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={INDICES_WIDGET_CONFIG}
            height={600}
          />
          <TradingViewWidget
            title="Top Cryptocurrencies"
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={CRYPTO_WIDGET_CONFIG}
            height={600}
          />
          <TradingViewWidget
            title="Commodities"
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={COMMODITIES_WIDGET_CONFIG}
            height={600}
          />
        </section>
        

        {/* Live Market News Feed */}
        <NewsFeed />

      </div>
        <Footer />
    </div>
  );
};

export default Home;
