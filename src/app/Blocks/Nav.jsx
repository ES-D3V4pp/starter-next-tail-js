import { useSpaNavScroll } from '../hooks/useSpaNavScroll';
import { routes } from '../config/routes';
import Logo from '../components/Logo';

export default function Nav() {
  const { activePath, scrollTo } = useSpaNavScroll(routes);

  const isActive = (pathname) => activePath === pathname ? 'active' : '';
  const goTo = (target, pathname) => (e) => {
    e.preventDefault();
    scrollTo(target, pathname);
  };

  return (
    <header>
      <nav className='container'>
        <a
          href="/"
          onClick={goTo('hero', '/')}>
            <Logo color="white" height="20px"/>
        </a>
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
