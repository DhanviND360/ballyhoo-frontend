Overview

Ballyhoo.ai is a full-stack SaaS MVP that automates trend discovery → idea generation → script creation for short-form video creators.

Creators today waste hours manually scanning YouTube, Instagram, Reddit, etc. to see what’s hot. Ballyhoo.ai streamlines this: it fetches trending topics, analyzes them, and uses an LLM to generate hooks, content ideas, captions, and short-script formats in seconds.

This reduces 2-3 hours of ideation work to under 15 seconds — turning creators from “researching” into publishing.

Tech Stack
Layer	Stack
Frontend	Next.js + React + Tailwind, deployed on Vercel
Backend	FastAPI (Python), deployed on Railway
Data Sources	YouTube Data API • Reddit Hot API • Google Trends (pytrends) • Instagram via Apify
AI	OpenRouter API (GPT-4o-mini) for language generation
Infra	CORS-enabled REST, JSON endpoints, fetch-based API bridge
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

VIDEO LINK
https://drive.google.com/file/d/1SAgrsQOMyY4VTFywBwsucu0m0VO-OxPN/view?usp=drivesdk

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
