<template>
  <f7-page name="form">
    <f7-navbar title="Form" back-link="Back"></f7-navbar>

    <f7-block-title>Ejemplo de formulario</f7-block-title>
    <f7-list strong-ios dividers-ios outline-ios>
      <f7-list-input label="Nombre" type="text" placeholder="Tú nombre"></f7-list-input>

      <f7-list-input label="E-mail" type="email" placeholder="E-mail"></f7-list-input>

      <f7-list-input label="URL" type="url" placeholder="URL"></f7-list-input>

      <f7-list-input label="Contraseña" type="password" placeholder="Contraseña"></f7-list-input>

      <f7-list-input label="Telefono" type="tel" placeholder="Telefono"></f7-list-input>

      <f7-list-input label="Genero" type="select">
        <option>Masculino</option>
        <option>Femenino</option>
        <option>Prefiero no responder</option>
      </f7-list-input>

      <f7-list-input
        label="Fecha de nacimiento"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></f7-list-input>

      <f7-list-item title="Palanca">
        <template #after>
          <f7-toggle />
        </template>
      </f7-list-item>

      <f7-list-input label="Rango" :input="false">
        <template #input>
          <f7-range :value="50" :min="0" :max="100" :step="1" />
        </template>
      </f7-list-input>

      <f7-list-input type="textarea" label="Descripción" placeholder="Biografía"></f7-list-input>
      <f7-list-input type="textarea" label="Redimensionable" placeholder="Biografía" resizable></f7-list-input>
    </f7-list>

    <f7-block-title>Botones</f7-block-title>
    <f7-block strong-ios outline-ios class="grid grid-cols-2 grid-gap">
      <f7-button>Botón</f7-button>
      <f7-button fill>Llenar</f7-button>

      <f7-button raised>Aumentó</f7-button>
      <f7-button raised fill>Rellenado elevado</f7-button>

      <f7-button round>Redondo</f7-button>
      <f7-button round fill>Rellenado redondo</f7-button>

      <f7-button outline>Describir</f7-button>
      <f7-button round outline>Contorno redondo</f7-button>

      <f7-button small outline>Pequeña</f7-button>
      <f7-button small round outline>Radio pequeña</f7-button>

      <f7-button small fill>Pequeña</f7-button>
      <f7-button small round fill>Radio pequeña</f7-button>

      <f7-button large raised>Largo</f7-button>
      <f7-button large fill raised>Relleno Largo</f7-button>

      <f7-button large fill raised color="red">Largo Rojo</f7-button>
      <f7-button large fill raised color="green">Largo Verde</f7-button>
    </f7-block>

    <f7-block-title>Grupo de casillas de verificación</f7-block-title>
    <f7-list strong-ios outline-ios dividers-ios>
      <f7-list-item checkbox name="my-checkbox" value="Books" title="Libros"></f7-list-item>
      <f7-list-item checkbox name="my-checkbox" value="Movies" title="Peliculas"></f7-list-item>
      <f7-list-item checkbox name="my-checkbox" value="Food" title="Comida"></f7-list-item>
    </f7-list>

    <f7-block-title>Grupo de botones de radio</f7-block-title>
    <f7-list strong-ios outline-ios dividers-ios>
      <f7-list-item radio name="radio" value="Books" title="Libros"></f7-list-item>
      <f7-list-item radio name="radio" value="Movies" title="Peliculas"></f7-list-item>
      <f7-list-item radio name="radio" value="Food" title="Comida"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
