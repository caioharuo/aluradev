import { Container } from './styles';

interface ButtonProps {
  text: string;
  isOutline: boolean;
}

export function Button({ text, isOutline }: ButtonProps) {
  return <Container isOutline={isOutline}>{text}</Container>;
}
