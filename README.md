# 🪙 Gcoin Stock

<p align="center">
  <img src="./public/logo.png" alt="Gcoin Stock Logo" width="120" />
</p>

<p align="center">
  <b>AI-powered crypto and stock analytics platform.</b><br/>
  Built with <strong>Next.js 16, Tailwind CSS, Shadcn UI, MongoDB, Inngest, Gemini AI, and Nodemailer.</strong>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" alt="Next.js"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/Shadcn_UI-18181B?style=for-the-badge&logo=react&logoColor=white" alt="Shadcn UI"/></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/></a>
  <a href="https://www.inngest.com/"><img src="https://img.shields.io/badge/Inngest-3B82F6?style=for-the-badge&logo=inngest&logoColor=white" alt="Inngest"/></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel"/></a>
</p>

---

## ✨ Overview

**Gcoin Stock** brings together **real-time market data**, **AI-powered financial insights**, and **automated news delivery** — giving users everything they need to stay ahead in crypto and stock trading.

> 💡 From daily AI-curated news to automated hourly updates — everything runs seamlessly via Inngest background jobs and Gemini AI.

---

## 🖼️ Preview

<p align="center">
  <img src="./public/dashboard.png" alt="Gcoin Stock App dashboard" width="800"/>
</p>

> ⚠️ You can replace the above image with your app screenshot (`/public/dashboard.png`)
> Example: homepage with ticker, hero section, and news cards.

---

## 🌟 Features

### 🧠 AI-Powered News

* Fetches latest crypto & market news every hour from **News API**
* Summarized using **Gemini AI**
* Saved in **MongoDB** and revalidated live on homepage via **Inngest**

### 📬 Automated Email System

* Sends welcome email on signup (via **Nodemailer + Inngest**)
* Daily AI-curated digest delivered to all users automatically
* Fully customizable email templates

### 🔒 Auth System

* Secure signup/login flow
* Email verification and password reset
* JWT-based session handling

### 📰 Live News Section

* Clean, responsive design with **Shadcn UI**
* Dark/light theme support
* Always up to date with automatic revalidation

---

## 🧩 Tech Stack

| Layer      | Technology                                                                      |
| :--------- | :------------------------------------------------------------------------------ |
| Frontend   | **Next.js 16 (App Router)**, **Tailwind CSS**, **Shadcn UI**, **Framer Motion** |
| Backend    | **Next.js API Routes**, **MongoDB**                                             |
| AI Engine  | **Gemini AI** for summarization                                                 |
| Automation | **Inngest** for background jobs & cron tasks                                    |
| Email      | **Nodemailer**                                                                  |
| Hosting    | **Vercel**                                                                      |

---

## ⚙️ Architecture

```
gcoin-stock/
├── app/
│   ├── (auth)/             # Auth pages (login, register)
│   ├── news/               # AI summarized news feed
│   ├── api/                # API routes (auth, news, inngest triggers)
│   ├── inngest/            # Inngest functions (cron jobs, event handlers)
│   └── layout.tsx          # Shadcn layout wrapper
│
├── lib/
│   ├── db.ts               # MongoDB connection
│   ├── inngest.ts          # Inngest config
│   ├── gemini.ts           # Gemini API summarizer
│   ├── mail.ts             # Nodemailer setup
│   └── utils.ts            # Helpers
│
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── sections/           # Hero, Footer, Ticker
│   └── NewsCard.tsx        # News card component
│
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   └── preview.png
│
├── styles/
│   └── globals.css
└── README.md
```

---

## 🧠 How It Works

1. **User signs up**

   * Inngest triggers an event.
   * Nodemailer sends a beautiful welcome email.

2. **Every hour**

   * Inngest fetches top news from the News API.
   * Gemini AI summarizes each article.
   * MongoDB saves them, and homepage auto-revalidates.

3. **Every day**

   * Inngest sends AI-generated daily summaries to all users’ inboxes.

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gcoin-stock.git
cd gcoin-stock

# Install dependencies
npm install
```

### 🧾 Environment Variables

Create `.env.local`:

```env
MONGODB_URI=your_mongodb_uri
NEWS_API_KEY=your_newsapi_key
GEMINI_API_KEY=your_gemini_api_key
EMAIL_HOST=smtp.yourmail.com
EMAIL_PORT=465
EMAIL_USER=your@email.com
EMAIL_PASS=your_password
NEXT_PUBLIC_BASE_URL=https://gcoinstock.vercel.app
INNGEST_API_KEY=your_inngest_key
```

---

## ▶️ Development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deployment

1. Push your repo to GitHub.
2. Deploy via **Vercel**.
3. Add all environment variables under `Vercel → Settings → Environment Variables`.
4. Your **Inngest background tasks** and **AI automation** start working instantly.

---

## 🧭 Roadmap

* [ ] Add user portfolio tracking
* [ ] Real-time market tickers (CoinGecko API)
* [ ] Push notifications for major price movements
* [ ] AI sentiment analysis for each asset

---

## 🪙 Credits

Developed by **Bereket Wale**
Made with ❤️ using **Next.js**, **Tailwind CSS**, **Shadcn UI**, **MongoDB**, **Inngest**, and **Gemini AI**

