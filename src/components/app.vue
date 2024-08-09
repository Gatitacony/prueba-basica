<template>
  <f7-app v-bind="f7params">

    <!-- Left panel with cover effect-->
    <f7-panel left cover dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Panel Izquierdo"></f7-navbar>
          <f7-block>El contenido del panel izquierdo va aquí.</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>


    <!-- Right panel with reveal effect-->
    <f7-panel right reveal dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Panel Derecho"></f7-navbar>
          <f7-block>El contenido del panel derecho va aquí.</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>


    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar icons bottom>
        <f7-link tab-link="#view-home" tab-link-active icon-ios="f7:house_fill" icon-md="material:home"
          text="Inicio"></f7-link>
        <f7-link tab-link="#view-catalog" icon-ios="f7:square_list_fill" icon-md="material:view_list"
          text="Catalogo"></f7-link>
        <f7-link tab-link="#view-settings" icon-ios="f7:gear" icon-md="material:settings"
          text="Configuración"></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Catalog View -->
      <f7-view id="view-catalog" name="catalog" tab url="/catalog/"></f7-view>

      <!-- Settings View -->
      <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>

    </f7-views>


    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Cerrar</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>El contenido del Popup esta aquí.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <!-- Popup -->
    <f7-popup id="mi-nota">
      <f7-view>
        <f7-page>
          <f7-navbar title="Notas Rapidas">
            <f7-nav-right>
              <f7-link popup-close>Cerrar</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Ingresa lo que desees</p>
            <input type="text">
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Acceso</f7-login-screen-title>
          <f7-list form>
            <f7-list-input type="text" name="nombre de usuario" placeholder="nombre de usuario"
              v-model:value="username"></f7-list-input>
            <f7-list-input type="password" name="contraseña" placeholder="contraseña"
              v-model:value="password"></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Iniciar sesión" @click="alertLoginData"></f7-list-button>
            <f7-block-footer>
              Some text about login information.<br>Click "Sign In" to close Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
import { ref, onMounted } from 'vue';
import { f7, f7ready } from 'framework7-vue';
import Sortable from 'sortablejs';


import routes from '@/js/routes.js';
import store from '@/js/store';

export default {
  setup() {
    const tasks = ref([{ text: "Tarea 1", completed: false }, { text: "Tarea 2", completed: false }]);
    // Framework7 Parameters
    const f7params = {
      name: 'simple-framework7', // App name
      theme: 'md', // Automatic theme detection

      // App store
      store: store,
      // App routes
      routes: routes,
    };
    // Login screen data
    const username = ref('');
    const password = ref('');

    const alertLoginData = () => {
      f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
        f7.loginScreen.close();
      });
    }
    onMounted(() => {
      f7ready(() => {
        // Call F7 APIs here
      });
      const sortable = Sortable.create(document.getElementById('sortable'), {
        onEnd: (event) => {
          // Lógica para manejar el reordenamiento
          const movedTask = tasks.value.splice(event.oldIndex, 1)[0];
          tasks.value.splice(event.newIndex, 0, movedTask);
        }
      });
    });

    return {
      f7params,
      username,
      password,
      alertLoginData,
      tasks
    }
  }
}
</script>