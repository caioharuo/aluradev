import Head from 'next/head';
import { CodeEditor } from '../components/CodeEditor';
import { ProjectSettingsMenu } from '../components/ProjectSettingsMenu';
import { Container } from '../styles/home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | AluraDev</title>
      </Head>
      <section>
        <main>
          <CodeEditor />
          <ProjectSettingsMenu />
        </main>
      </section>
    </Container>
  );
}
