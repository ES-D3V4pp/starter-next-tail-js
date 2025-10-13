'use client';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./blocks/Nav";
import { navLinks } from './config/navLinks';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useSectionNavigation();
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
