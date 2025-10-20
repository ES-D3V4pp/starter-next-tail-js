import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { useHistory } from "../hooks/useHistory";
import { useScroll } from "../hooks/useScroll";
import { routes } from "../config/routes";

export default function Nav() {
  const { updateUrl } = useHistory();
  const { scrollTo } = useScroll();
  const [currentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const goTo = (e, target, pathname) => {
    e.preventDefault();
    scrollTo(target);
    updateUrl(pathname);
    setCurrentPath(pathname); // pour mettre à jour l’état actif
  };

  return (
    <header>
      <nav>
        <Logo color="white" height={24} />
        <ul>
          {routes.map((tab) => {
            const isActive = tab.pathname === currentPath;
            const isSubActive = tab.sub?.some((sub) => sub.pathname === currentPath);

            return tab.sub ? (
              <li key={tab.label} className={isSubActive ? "active" : ""}>
                <span>{tab.label}</span>
                <ul>
                  {tab.sub.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href="#"
                        className={sub.pathname === currentPath ? "active" : ""}
                        onClick={(e) => goTo(e, sub.target, sub.pathname)}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={tab.label}>
                <a
                  href="#"
                  className={isActive ? "active" : ""}
                  onClick={(e) => goTo(e, tab.target, tab.pathname)}
                >
                  {tab.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
