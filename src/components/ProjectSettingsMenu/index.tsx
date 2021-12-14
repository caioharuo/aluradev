import { FormEvent } from 'react';
import { Button } from '../Button';
import { Container, ProjectSettings, PersonalizationSettings } from './styles';

function handleSubmitForm(event: FormEvent) {
  event.preventDefault();
}

export function ProjectSettingsMenu() {
  return (
    <Container onSubmit={handleSubmitForm}>
      <ProjectSettings>
        <h2>Seu projeto</h2>
        <input type="text" placeholder="Nome do seu projeto" name="title" />
        <textarea
          name="description"
          placeholder="Descrição do seu projeto"
        ></textarea>
      </ProjectSettings>

      <PersonalizationSettings>
        <h2>Personalização</h2>

        <div>
          <select name="language" id="language">
            <optgroup label="Programming Languages" defaultValue="javascript">
              <option value="javascript">JavaScript</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </optgroup>
          </select>
          <div className="input-color-wrapper">
            <input
              type="color"
              name="color-picker"
              id="color-picker"
              defaultValue="#6BD1FF"
            />
          </div>
        </div>
        <Button isOutline={false} text="Salvar projeto" />
      </PersonalizationSettings>
    </Container>
  );
}
