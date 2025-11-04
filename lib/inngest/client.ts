import { Inngest } from "inngest";

const eventKey = process.env.INNGEST_EVENT_KEY;
if (!eventKey) throw new Error("INNGEST_EVENT_KEY is missing");

export const inngest = new Inngest({
  id: "signalist",
  eventKey,  // ← explicitly pass it
  ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } }
});
