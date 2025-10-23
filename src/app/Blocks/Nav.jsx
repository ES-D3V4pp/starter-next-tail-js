import {useState} from 'react';
import { useSpaNavScroll} from '../hooks/useSpaNavScroll';
import { routes } from '../config/routes';
import Logo from '../components/Logo';
import { Menu } from 'lucide-react';

export default function Nav() {
  const { activePath, scrollTo } = useSpaNavScroll(routes);
  const [ menuDisplay, setMenuDisplay] = useState('hidden');

  const displayMobileNav = () => {
    setMenuDisplay(prev => (prev === 'hidden' ? '' : 'hidden'));
  }

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
        <ul className={menuDisplay}>
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
        <button className='block md:hidden' onClick={displayMobileNav}>
         <Menu style={{ color: 'var(--secondary)' }} className='w-6 h-6'/>
         </button>
      </nav>
    </header>
  );
}
