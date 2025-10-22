import { useEffect, useRef, useState } from 'react';

export function useSpaNavScroll(routes) {
  const [activePath, setActivePath] = useState(routes[0].pathname);
  const isManualScroll = useRef(false);

  const scrollTo = (target, pathname) => {
    const el = document.getElementById(target);
    if (!el) return;

    isManualScroll.current = true;
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', pathname);
    setActivePath(pathname);

    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname;
      const route = routes.find((r) => r.pathname === path);
      if (route) scrollTo(route.target, route.pathname);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [routes]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          const route = routes.find((r) => r.target === id);
          if (route) {
            window.history.replaceState({}, '', route.pathname);
            setActivePath(route.pathname);
          }
        }
      },
      { threshold: 0.6 }
    );

    const sections = routes
      .map((r) => document.getElementById(r.target))
      .filter((el) => el !== null);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [routes]);

  return { activePath, scrollTo };
}