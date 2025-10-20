import Logo from '../components/Logo';
import { useHistory } from '../hooks/useHistory';
import { useScroll } from '../hooks/useScroll';

export default function Nav() {
  const { updateUrl } = useHistory();
  const { scrollTo } = useScroll();

  const goTo = (id) => {
    scrollTo(id);
    updateUrl(id);
  };

  return (
    <header>
    <nav>
      <Logo color='white' height={24}/>
      <ul>
        <li onClick={() => goTo('hero')}><a>Accueil</a></li>
        <li onClick={() => goTo('s2')}><a>Section 2</a></li>
        <li onClick={() => goTo('s3')}><a>Section 3</a></li>
        <li onClick={() => goTo('contact')}><a>Contact</a></li>
      </ul>
    </nav>
    </header>
  );
}