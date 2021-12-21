import Head from 'next/head';

import { ProjectCard } from '../components/ProjectCard';
import { Container } from '../styles/community';

export default function Community() {
  return (
    <Container>
      <Head>
        <title>Comunidade | AluraDev</title>
      </Head>
      <ProjectCard borderColor="#9AFF6B" />
      <ProjectCard borderColor="#6B83FF" />
      <ProjectCard borderColor="#FFC46B" />
      <ProjectCard borderColor="#FF6BCD" />
    </Container>
  );
}
