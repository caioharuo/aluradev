import { useColor } from '../../hooks/useColor';
import { Button } from '../Button';
import { Container, BorderColor } from './styles';

export function CodeEditor() {
  const { borderColor } = useColor();

  return (
    <Container>
      <BorderColor borderColor={borderColor}>
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mac_buttons.svg" alt="Mac Circles" />
        <textarea name="code-editor" />
      </BorderColor>
      <Button isOutline text="Visualizar com o highlight" />
    </Container>
  );
}
