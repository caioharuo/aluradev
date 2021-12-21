import { useEffect, useRef } from 'react';
import { useColor } from '../../hooks/useColor';
import { Button } from '../Button';
import { Container, BorderColor } from './styles';

export function CodeEditor() {
  const { borderColor } = useColor();

  const textAreaEl = useRef(null);

  useEffect(() => {
    textAreaEl.current.focus();
  }, []);

  return (
    <Container>
      <BorderColor borderColor={borderColor}>
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mac_buttons.svg" alt="Mac Circles" />
        <textarea ref={textAreaEl} name="code-editor"></textarea>
      </BorderColor>

      <Button isOutline text="Visualizar com o highlight" />
    </Container>
  );
}
