import Image from 'next/image';
import { Container } from './styles';

export function NavigationMenu() {
  return (
    <Container>
      <h2>Menu</h2>
      <nav>
        <a href="">
          <Image
            src="/images/code.svg"
            alt="Editor de código"
            width={48}
            height={48}
          />
          <span>Editor de código</span>
        </a>
        <a href="community">
          <Image
            src="/images/community.svg"
            alt="Editor de código"
            width={48}
            height={48}
          />
          <span>Comunidade</span>
        </a>
      </nav>
    </Container>
  );
}
