import { Button } from '../Button';
import { Container } from './styles';

export function CodeEditor() {
  return (
    <Container>
      <div className="code-editor-border">
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mac_buttons.svg" alt="Mac Circles" />
        <textarea name="code-editor" />
      </div>
      <Button isOutline text="Visualizar com o highlight" />
    </Container>
  );
}
