
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'El iPhone 8 es un smartphone lanzado por Apple en 2017. La pantalla del iPhone 8 es una pantalla Retina HD LCD de 4,7 pulgadas con una resolución de 1334x750 píxeles. Una de las principales actualizaciones del iPhone 8 es el chip A11 Bionic con arquitectura de 64 bits..'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'x!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'x.'
      },
    ]
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
