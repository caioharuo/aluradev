import Image from 'next/image';
import { Container, BorderColor, CardCodeEditor, CardContent } from './styles';

interface ProjectCardProps {
  borderColor: string;
}

const text = `
const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
`;

export function ProjectCard({ borderColor }: ProjectCardProps) {
  return (
    <Container>
      <CardCodeEditor>
        <BorderColor borderColor={borderColor}>
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mac_buttons.svg" alt="Mac Circles" />
          <textarea name="code-editor" disabled value={text}></textarea>
        </BorderColor>
      </CardCodeEditor>

      <CardContent>
        <h2>Título do projeto</h2>
        <p>Essa é a descrição do meu projeto.</p>

        <div className="card-action">
          <div className="actions">
            <button className="comments">
              <Image
                src="/images/comment-icon.svg"
                width={24}
                height={24}
                alt="Comentários"
              />
              <span>9</span>
            </button>
            <button className="likes">
              <Image
                src="/images/heart-icon.svg"
                width={24}
                height={24}
                alt="Curtidas"
              />
              <span>9</span>
            </button>
          </div>
          <div className="user-info">
            <Image
              src="https://github.com/caioharuo.png"
              alt="AluraDev"
              width={32}
              height={32}
            />
            <span>Caio</span>
          </div>
        </div>
      </CardContent>
    </Container>
  );
}
