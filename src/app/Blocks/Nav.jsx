'use client';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();

  const handleNav = (section) => {
    router.push(`/${section}`); // change l’URL
  };

  return (
    <nav className="flex gap-4">
      <button onClick={() => handleNav('hero')}>Hero</button>
      <button onClick={() => handleNav('contact')}>Contact</button>
    </nav>
  );
}
