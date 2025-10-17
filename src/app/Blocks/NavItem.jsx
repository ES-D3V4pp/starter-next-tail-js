'use client';
import Alink from '../components/Alink';

export default function NavItem({ link }) {
  if (link.sub) {
    return (
      <li key={link.id}>
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
    );
  }

  return (
    <li key={link.id}>
      <Alink id={link.id} className="nav-link">
        {link.label}
      </Alink>
    </li>
  );
}