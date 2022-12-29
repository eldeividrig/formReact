import React from 'react';
import { Formulario, Label, GrupoInput, Input, IconoValidacion, LeyendaError, ContenedorTerminos, ContenedorBotonCentrado, Boton } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <main>
      <Formulario action=''>
        <div>
          <Label htmlFor=''>Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder='usuario' id="nombre"/>
            <IconoValidacion icon={faCheckCircle}/>
          </GrupoInput>
          <LeyendaError>Lorem ipsum dolor sit amet.</LeyendaError>
        </div>
        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name='teminos' id="terminos" />
            Acepto los Terminos y Condiciones
          </Label>
        </ContenedorTerminos>
        <div>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </div>
        <ContenedorBotonCentrado>
          <Boton type='submit'>Enviar</Boton>
          <p>Formulario enviado exitosamente!</p>
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  )
}

export default App