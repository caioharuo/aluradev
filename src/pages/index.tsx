import Head from 'next/head';
import { CodeEditor } from '../components/CodeEditor';
import { NavigationMenu } from '../components/NavigationMenu';
import { ProjectSettingsMenu } from '../components/ProjectSettingsMenu';
import { Container } from './home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>AluraDev</title>
      </Head>
      <section>
        <main>
          <NavigationMenu />
          <CodeEditor />
          <ProjectSettingsMenu />
        </main>
      </section>
    </Container>
  );
}
