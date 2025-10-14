import Hero from "./sections/hero";
import S2 from "./sections/s2";
import S3 from "./sections/s3";
import S4 from "./sections/s4";
import Contact from "./sections/contact";

export const metadata = {
  title: 'Mon site',
  description: 'Une SPA Next.js avec typographie optimisée',
  keywords: ['Next.js', 'SPA', 'Inter', 'Poppins', 'Design system'],
  authors: [{ name: 'Ryo', url: 'https://tonsite.com' }],
  themeColor: '#ffffff',
  openGraph: {
    title: 'Mon site',
    description: 'Une SPA Next.js avec typographie optimisée',
    url: 'https://tonsite.com',
    siteName: 'Mon site',
    images: [
      {
        url: 'https://tonsite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function SpaContent() {
  // pour une simple fonction, même non hook, il faut passer le composant en client
  return (
    <div>
      <main>
        <Hero/>
        <S2/>
        <S3/>
        <S4/>
        <Contact/>
      </main>
    </div>
  );
}
