import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premier Auto - European Vehicle Specialists",
  description:
    "Premium automotive services specializing in European vehicles. Expert maintenance, repair, and performance tuning for BMW, Mercedes, Audi, Porsche, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
      <Script
        id="ixhello-chat-widget"
        type="module"
        src="https://d3at15qgbg1tx6.cloudfront.net/chat-widget/assets/chat-widget.js"
        data-org-id="095cf8eb-b79d-4542-9ae1-dbd9cce8ed28"
        data-chat-widget-id="f16f74f6-c3c2-47c2-a1ac-deb58ba351bb"
        data-flow-id="b92102e3-dc88-4dc5-acad-4d89137c9f68"
      />
    </html>
  );
}
