# 🌌 StreamVerse

StreamVerse is a high-performance, modern streaming dashboard designed to help content creators maximize their audience reach. Creators can stream to multiple platforms simultaneously, track real-time analytics, interact with live audience chat across networks, and customize their streams—all from a single, unified dashboard.

## ✨ Features

- **Multi-Streaming:** Broadcast live to YouTube, Facebook, TikTok, and Twitch simultaneously.
- **Unified Live Chat:** View and respond to audience comments from all platforms in one central feed.
- **Advanced Analytics:** Deep insights into viewer retention, growth metrics, and platform performance.
- **Stream Customization:** Fine-tune resolution, audio bitrates, and ingest settings per platform.
- **Secure Integrations:** Easy, secure OAuth links to attach streaming channels seamlessly.
- **Premium UI/UX:** Built with a dark-mode aesthetic featuring fluid animations by Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Client Components)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Scroll-driven and page-load animations)
- **Icons & Images:** Next/Image optimized assets

## Getting Started

Follow these steps to set up StreamVerse locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v18.x or higher) and **npm/pnpm/yarn** installed.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/asifInmind/stream-verse.git
   cd stream-verse
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your keys (e.g., streaming API endpoints, auth secrets):

   ```env
   NEXT_PUBLIC_API_URL=https://streamverse.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the live app.

## 📁 Project Structure

```text
├── public/              # Static assets (icons, hero graphics)
├── src/
│   ├── app/             # Next.js App Router (layout, pages)
│   ├── components/      # Reusable UI elements (KeyFeatures, HeroSection)
│   └── styles/          # Global styles & Tailwind configuration
├── package.json
└── README.md
```

## Key Animations Implemented

- **Staggered Card Entry:** Dashboard key feature cards smoothly slide up from the bottom with a time-delay cascade when scrolling into view.
- **Cinematic Hero Zoom:** The landing page front image smoothly zooms out and fades in upon page load to create an instant premium look.
