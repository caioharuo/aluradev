import Head from 'next/head';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Container } from './home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>AluraDev</title>
      </Head>
      <Header />
      <Menu />
    </Container>
  );
}
