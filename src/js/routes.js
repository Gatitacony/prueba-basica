import HomePage from '@/pages/home.vue'; // Importa el componente HomePage desde el archivo home.vue ubicado en el directorio ../pages.
import AboutPage from '@/pages/about.vue';
import FormPage from '@/pages/form.vue';
import CatalogPage from '@/pages/catalog.vue';
import ProductPage from '@/pages/product.vue';
import SettingsPage from '@/pages/settings.vue';

import DynamicRoutePage from '@/pages/dynamic-route.vue'; // Importa el componente DynamicRoutePage desde el archivo dynamic-route.vue en el directorio ../pages.
import RequestAndLoad from '@/pages/request-and-load.vue';
import NotFoundPage from '@/pages/404.vue';

// Importa el nuevo componente ToDoPage
import ToDoPage from '@/pages/to-do.vue';

var routes = [ // Declara un array llamado routes que contendrá las rutas de la aplicación.
  {
    path: '/', // Define una ruta para la ruta raíz (/) y asigna el componente HomePage a esta ruta.
    component: HomePage,
  },
  {
    path: '/about/',  // Define una ruta para /about/ y asigna el componente AboutPage a esta ruta.
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/', // Define una ruta para /about/ y asigna el componente AboutPage a esta ruta.
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/', //Define una ruta dinámica para /request-and-load/user/:userId/ donde :userId es un parámetro de la ruta. Utiliza una función asíncrona para manejar esta ruta.
    async: function ({ router, to, resolve }) {
      // Obtiene la instancia de la aplicación app desde el enrutador router.
      var app = router.app;

      // Muestra un preloader (cargador) en la aplicación.
      app.preloader.show();

      // Obtiene el userId desde los parámetros de la ruta.
      var userId = to.params.userId;

      // Simula una solicitud Ajax con un setTimeout de 1 segundo.
      setTimeout(function () {
        // Define un objeto user con datos ficticios del usuario.
        var user = {
          firstName: 'Franciny',
          lastName: 'Huaiquil',
          about: 'Hola bienvenido !!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Oculta el preloader.
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/to-do/', // Nueva ruta para ToDoPage
    component: ToDoPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
