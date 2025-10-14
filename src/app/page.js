import Hero from "./sections/hero";
import S2 from "./sections/s2";
import S3 from "./sections/s3";
import S4 from "./sections/s4";
import Contact from "./sections/contact";

export const metadata = {
  title: 'Mon site vitrine',
  description: 'Coaching en entreprise via des formations team',
};

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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Template Next, tailwind js for spa
      </footer>
    </div>
  );
}
