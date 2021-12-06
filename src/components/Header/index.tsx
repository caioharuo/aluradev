import Image from 'next/image';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <Image src="/images/logo.svg" alt="AluraDev" width={145} height={35} />
        <input type="text" placeholder="Busque por algo" />
        <div>
          <Image
            src="https://github.com/caioharuo.png"
            alt="AluraDev"
            width={32}
            height={32}
          />
          <span>Caio</span>
        </div>
      </div>
    </Container>
  );
}
