'use client';
import "./globals.css";
import { useSectionNavigation } from './hooks/useSectionNavigation';
import Nav from "./blocks/Nav";
import Footer from './sections/footer';

import { Montserrat, Poppins } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--title-font',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--body-font',
})

export default function RootLayout({ children }) {
  useSectionNavigation();
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
