import { Container, ProjectSettings, PersonalizationSettings } from './styles';

export function ProjectMenu() {
  return (
    <Container>
      <ProjectSettings>
        <h2>Seu projeto</h2>
        <input type="text" placeholder="Nome do seu projeto" />
        <textarea
          name="description"
          placeholder="Descrição do seu projeto"
        ></textarea>
      </ProjectSettings>

      <PersonalizationSettings>
        <h2>Personalização</h2>
        <select name="language" id="language">
          <optgroup label="Programming Languages" defaultValue="javascript">
            <option value="javascript">JavaScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </optgroup>
        </select>
        <div className="input-color-wrapper">
          <input type="color" name="color-picker" id="color-picker" />
        </div>
      </PersonalizationSettings>
    </Container>
  );
}
