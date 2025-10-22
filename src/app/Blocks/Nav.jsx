import { useSpaNavScroll } from '../hooks/useSpaNavScroll';
import { routes } from '../config/routes';

export default function Nav() {
  const { activePath, scrollTo } = useSpaNavScroll(routes);

  const isActive = (pathname) => activePath === pathname ? 'active' : '';
  const goTo = (target, pathname) => (e) => {
    e.preventDefault();
    scrollTo(target, pathname);
  };

  return (
    <header>
      <nav>
        <ul>
        {routes.map((link) => (
          <li key={link.pathname}>
          <a
            href={link.pathname}
            className={isActive(link.pathname)}
            onClick={goTo(link.target, link.pathname)}
          >
            {link.label}
          </a>
          </li>
        ))}
        
        </ul>
      </nav>
    </header>
  );
}
