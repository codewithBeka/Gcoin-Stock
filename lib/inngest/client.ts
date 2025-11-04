import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: 'signalist',
  eventKey: process.env.INNGEST_EVENT_KEY!, // ✅ Add this
  ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } }
});
