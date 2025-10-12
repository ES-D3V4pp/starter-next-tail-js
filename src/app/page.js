import Image from "next/image";
import Hero from "./Hero";
import Button from "./Components/Button";

export default function Home() {
  // pour une simple fonction, même non hook, il faut passer le composant en client
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Template Next, tailwind js for spa
      </footer>
    </div>
  );
}
