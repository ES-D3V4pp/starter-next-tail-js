'use client';
import { useRouter } from 'next/navigation';

export default function Alink({ id, children, className = '' }) {

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/${id}`);
  };

  return (
    <a href={`/${id}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}