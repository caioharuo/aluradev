import { Header } from '../components/Header';
import { NavigationMenu } from '../components/NavigationMenu';
import { Container, Content } from '../styles/app';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Content>
        <NavigationMenu />
        <Component {...pageProps} />
      </Content>
      <GlobalStyle />
    </Container>
  );
}

export default MyApp;
