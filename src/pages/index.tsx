import Head from 'next/head';
import { Header } from '../components/Header';
import { NavigationMenu } from '../components/NavigationMenu';
import { ProjectMenu } from '../components/ProjectMenu';
import { Container } from './home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>AluraDev</title>
      </Head>
      <Header />
      <section>
        <main>
          <NavigationMenu />
          <ProjectMenu />
        </main>
      </section>
    </Container>
  );
}
