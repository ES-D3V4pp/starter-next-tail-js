import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/hero">Hero</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

