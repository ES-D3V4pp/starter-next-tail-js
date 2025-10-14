import Hero from "./sections/hero";
import S2 from "./sections/s2";
import S3 from "./sections/s3";
import S4 from "./sections/s4";
import Contact from "./sections/contact";

export const metadata = {
  title: 'Mon Site Vitrine',
  description: 'Développeur freelance, portfolio, services et contact.',
};

export default function SpaContent() {
  // pour une simple fonction, même non hook, il faut passer le composant en client
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero/>
        <S2/>
        <S3/>
        <S4/>
        <Contact/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Template Next, tailwind js for spa
      </footer>
    </div>
  );
}
