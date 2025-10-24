import { Children, useState } from "react";
import { useSpaNavScroll } from "../hooks/useSpaNavScroll";
import { routes } from "../config/routes";
import Logo from "../components/Logo";
import { Menu } from "lucide-react";

const A = ({ link, className, onClick, children }) => {
  return (
    <a href={link.pathname}
    className={className}
    onClick={onClick(link.target, link.pathname)}>
      {children}
    </a>
  );
};

export default function Nav() {
  const { activePath, scrollTo } = useSpaNavScroll(routes);
  const [menuDisplay, setMenuDisplay] = useState("hidden");

  const displayMobileNav = () => {
    setMenuDisplay((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  const isActive = (pathname) => (activePath === pathname ? "active" : "");
  const goTo = (target, pathname) => (e) => {
    e.preventDefault();
    scrollTo(target, pathname);
  };

  return (
    <header>
      <nav className="container">
        <A link={{pathname: '/', target:'hero'}} onClick={goTo}>
          <Logo color="white" height="20px"/>
        </A>
        <ul className={menuDisplay}>
          {routes.map((link) => (
            <li key={link.pathname}>
              <A link={link} className={isActive(link.pathname)} onClick={goTo}>
                {link.label}
              </A>
            </li>
          ))}
        </ul>
        <button className="block md:hidden" onClick={displayMobileNav}>
          <Menu style={{ color: "var(--secondary)" }} className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
