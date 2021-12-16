/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              alt="AluraDev"
              width={145}
              height={35}
            />
          </a>
        </Link>

        <input type="text" placeholder="Busque por algo" />

        <div className="mobile-icons">
          <img
            src="/images/search-icon.svg"
            alt="Search"
            className="search-icon"
          />
          <img
            src="/images/menu-icon.svg"
            alt="Menu"
            className="menu-hamburguer-icon"
          />
        </div>

        <div className="user-info">
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
