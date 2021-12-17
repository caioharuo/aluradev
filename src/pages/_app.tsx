import { Header } from '../components/Header';
import { NavigationMenu } from '../components/NavigationMenu';
import { ColorProvider } from '../hooks/useColor';
import { Container, Content } from '../styles/app';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ColorProvider>
      <Container>
        <Header />
        <Content>
          <NavigationMenu />
          <Component {...pageProps} />
        </Content>
        <GlobalStyle />
      </Container>
    </ColorProvider>
  );
}

export default MyApp;
