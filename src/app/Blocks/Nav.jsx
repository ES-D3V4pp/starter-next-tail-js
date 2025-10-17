'use client';
import { navLinks } from '../config/navLinks';
import Logo from '../components/Logo';
import Alink from '../components/Alink';

export default function Nav() {
  return (
    <header id="menu">
      <nav className="container">
        <Logo color="white" height="24px" />
        <ul>
          {navLinks.map((link, index) => (
            link.sub ? (
              <li key={`group-${index}`}>
                <span className="dropdown-label">{link.label}</span>
                <ul className="sub-menu">
                  {link.sub.map((sublink) => (
                    <li key={sublink.id}>
                      <Alink id={sublink.id} className="nav-link">
                        {sublink.label}
                      </Alink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.id}>
                <Alink id={link.id} className="nav-link">
                  {link.label}
                </Alink>
              </li>
            )
          ))}
        </ul>
      </nav>
    </header>
  );
}
