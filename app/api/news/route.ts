// app/api/news/route.ts
import { News } from "@/database/models/News";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/database/mongoose";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const symbol = searchParams.get("symbol") || "";

    await connectToDatabase();
    console.log("🔍 Fetching news for:", symbol || "general");

    // Try to load from DB
    const dbNews = await News.find().sort({ publishedAt: -1 }).limit(15);

    if (dbNews.length > 0) {
      console.log("✅ Returning DB news");
      return NextResponse.json(dbNews);
    }

    // Fallback to live API fetch
    console.log("🌍 Fetching from News API...");
    const apiRes = await fetch(
      `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await apiRes.json();
    console.log("🌍 API result:", data?.articles?.length || 0, "articles");

    if (!data.articles) {
      console.error("⚠️ News API returned no articles:", data);
      return NextResponse.json([]);
    }

    const formatted = await Promise.all(
      data.articles.slice(0, 10).map(async (a: any) => {
        const doc = await News.create({
          title: a.title,
          summary: a.description || "No summary available.",
          source: a.source?.name || "Unknown",
          url: a.url,
          publishedAt: new Date(a.publishedAt),
        });
        return doc;
      })
    );

    console.log("✅ Saved", formatted.length, "articles to DB");
    return NextResponse.json(formatted);
  } catch (error) {
    console.error("❌ News fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
