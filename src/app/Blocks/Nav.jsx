'use client';
import { useRouter } from 'next/navigation';
import { navLinks } from '../config/navLinks';
import './nav.css';

export default function Nav() {
  const router = useRouter();
  const activeSection = 'hero'; // temporaire, à remplacer par un vrai système plus tard

  const handleNav = (id) => {
    router.push(`/${id}`);
  };

  return (
    <nav className="nav">
      {navLinks.map((link) => {
        if (link.sub) {
          return (
            <div key={link.label} className="dropdown">
              <a className="nav-link dropdown-toggle">{link.label}</a>
              <div className="dropdown-menu">
                {link.sub.map((sublink) => (
                  <a
                    key={sublink.id}
                    onClick={() => handleNav(sublink.id)}
                    className={`nav-link ${activeSection === sublink.id ? 'active' : ''}`}
                  >
                    {sublink.label}
                  </a>
                ))}
              </div>
            </div>
          );
        }

        return (
          <a
            key={link.id}
            onClick={() => handleNav(link.id)}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
