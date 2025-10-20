import { useEffect, useRef } from 'react';

export function useScroll() {
  const isManualScroll = useRef(false); // verrou pour éviter les conflits

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    isManualScroll.current = true; // on active le verrou
    el.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isManualScroll.current = false; // on le désactive après le scroll
    }, 1000);
  };

  useEffect(() => {
    const onPopState = () => {
      const section = window.location.pathname.replace('/', '') || 'hero';
      scrollTo(section); // scroll vers la section correspondant à l’URL
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return; // on ignore si on est en scroll manuel

        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          const path = id === 'hero' ? '/' : `/${id}`;
          window.history.replaceState({}, '', path); // mise à jour de l’URL
        }
      },
      { threshold: 0.6 } // déclenche quand 60% de la section est visible
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return { scrollTo };
}