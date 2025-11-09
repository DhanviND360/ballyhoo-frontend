import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import "./globals.css";

export const metadata = {
  title: "ballyhoo.ai",
  description: "Trends → AI scripts"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        {/* FIXED TOP NAV */}
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "68px",
            display: "flex",
            alignItems: "center",
            padding: "0 32px",
            backdropFilter: "blur(14px)",
            background: "rgba(13,13,15,0.42)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            zIndex: 999
          }}
        >
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <div style={{
  display:"flex",
  alignItems:"center",
  gap:"10px",
  padding:"20px"
}}>
  <img src="logo.png" width={44} alt="logo" />
  <span style={{
    fontSize:32,
    fontWeight:600,
    fontFamily:"SFRounded, ui-rounded, system-ui, sans-serif",
    filter:"drop-shadow(0 0 12px rgba(255,165,0,0.4))"
  }}>
    ballyhoo.ai
  </span>
</div>

          </a>
        </header>

        {/* SPACE SO CONTENT NOT HIDDEN */}
        <div style={{ paddingTop: "80px" }} />

        {children}
      </body>
    </html>
  );
}

