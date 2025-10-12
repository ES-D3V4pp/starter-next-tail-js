'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useSectionNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    const section = pathname.split('/')[1]; // supporte /contact, /hero, etc.
    if (!section) return;

    const el = document.getElementById(section);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 50); // petit délai pour laisser le DOM se stabiliser
    }
  }, [pathname]);
}
