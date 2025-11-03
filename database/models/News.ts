import mongoose, { Schema, model, models } from "mongoose";

const newsSchema = new Schema(
  {
    title: String,
    summary: String,
    symbol: String, // e.g., "BTC", "GOLD"
    source: String,
    url: String,
    publishedAt: Date,
  },
  { timestamps: true }
);

export const News = models.News || model("News", newsSchema);
