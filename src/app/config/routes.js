export const routes = [
  {
    label: 'Accueil',
    target: 'hero',
    pathname: '/'
  },
  {
    label: 'Présentation',
    target: 's2',
    pathname: '/intro'
  },
  {
    label: 'À propos',
    target: 's3',
    pathname: '/about'
  },
  {
    label: 'Contact',
    target: 'contact',
    pathname: '/contact'
  }
];

/* structure de groupe
  {
    label: 'Groupe',
    sub: [
      { label: 'Section 3', target: 's3', pathname: '/group/s3' },
      { label: 'Section 4', target: 's4', pathname: '/group/s4' },
    ]
  },
*/