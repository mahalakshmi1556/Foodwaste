# FoodSaver AI — Sustainability & Food Waste Prevention Platform

FoodSaver AI is a full-stack application built with Next.js, TypeScript, Tailwind CSS, Supabase PostgreSQL, and Google Gemini AI.

---

## Setup Instructions for Android & Acode

1. Extract this ZIP archive on your Android device into a project folder (e.g., using ZArchiver or your file manager).
2. Open your code editor (such as **Acode** on Android) and open the extracted `foodsaver_ai_complete` folder.
3. Create a `.env.local` file in the root directory and add your keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_gemini_api_key
   ```
4. Execute `supabase/schema.sql` inside your Supabase SQL Editor.
5. Install dependencies and run using Node.js / Termux:
   ```bash
   npm install
   npm run dev
   ```
