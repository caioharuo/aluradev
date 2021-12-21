import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container } from './styles';

export function NavigationMenu() {
  const route = useRouter();

  const actualRoute = route.pathname;

  const [activePage, setActivePage] = useState(() => {
    if (actualRoute === '/community') {
      return 'community';
    } else {
      return 'home';
    }
  });

  return (
    <Container>
      <h2>Menu</h2>
      <nav>
        <Link href="/">
          <a
            onClick={() => setActivePage('home')}
            className={activePage === 'home' ? 'active' : ''}
          >
            <Image
              src="/images/code.svg"
              alt="Editor de código"
              width={48}
              height={48}
            />
            <span>Editor de código</span>
          </a>
        </Link>

        <Link href="/community">
          <a
            onClick={() => setActivePage('community')}
            className={activePage === 'community' ? 'active' : ''}
          >
            <Image
              src="/images/community.svg"
              alt="Editor de código"
              width={48}
              height={48}
            />
            <span>Comunidade</span>
          </a>
        </Link>
      </nav>
    </Container>
  );
}
