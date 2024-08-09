<template>
  <f7-page name="menu">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>simple-framework7</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>Proyecto - Simple - framework7</f7-nav-title-large>
    </f7-navbar>

    <!-- Page content-->
    <f7-block>
      <p>Este es un ejemplo de aplicación de diseño de pestañas. El punto principal de este diseño con pestañas es que cada pestaña contiene una vista independiente con su propia ruta y navegación.</p>

      <p>Cada pestaña/vista puede tener un diseño diferente, un tipo de barra de navegación diferente (dinámica, fija o estática) o sin barra de navegación como esta pestaña.</p>
    </f7-block>
    <f7-block-title>Navegación</f7-block-title>
    <f7-list strong inset dividersIos>
      <f7-list-item link="/about/" title="Acerca de"></f7-list-item>
      <f7-list-item link="/form/" title="Forma"></f7-list-item>
      <f7-list-item link="/to-do/" title="To-Do"></f7-list-item> <!-- Enlace añadido -->
    </f7-list>

    <f7-block-title>Modales</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill popup-open="#my-popup">Popup</f7-button>
      <f7-button fill login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>

    <f7-block-title>Paneles</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill panel-open="Izquierdo">Panel Izquierdo</f7-button>
      <f7-button fill panel-open="Derecho">Panel Derrecho</f7-button>
    </f7-block>

    <f7-list strong inset dividersIos>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>