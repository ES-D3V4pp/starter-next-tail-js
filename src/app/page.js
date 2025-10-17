import SpaContent from './blocks/SpaContent';

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

export default function Page() {
  return <SpaContent />;
}