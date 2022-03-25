import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            products: [
                {
                  id: "1",
                  image:
                    "https://joefresh-resource-dev.joefresh.com/JF/b1/S2MR025328/Black/T@2x.jpg",
                  title: "Raincoat",
                  price: "69",
                },
                {
                  id: "2",
                  image:
                    "https://joefresh-resource-dev.joefresh.com/JF/b1/S2MR025306/Dusty%20Red/T@2x.jpg",
                  title: "Printed Tee",
                  price: "15",
                },
                {
                  id: "3",
                  image:
                    "https://joefresh-resource-dev.joefresh.com/JF/b1/Y0MR014851/Dark%20Charcoal%20Mix/T@2x.jpg",
                  title: "Jogger",
                  price: "35",
                },
                {
                  id: "4",
                  image:
                    "https://joefresh-resource-dev.joefresh.com/JF/b1/Y0MR006719/Dark%20Vintage/T@2x.jpg",
                  title: "Denim",
                  price: "29",
                }
              ],

              cart: {
                count: 0
              }
        };
    },
    mutations: {
      addToCart(state, qty) {
        state.cart.count += qty;
      },
      removeFromCart(state, qty) {
        qty > 0 && state.cart.count > 0 ? state.cart.count -= qty : 0;
      }
    },
    actions: {
      addToCart(context, count) {
        context.commit("addToCart", count);
      }, 
      removeFromCart(context, count) {
        context.commit("removeFromCart", count);
      }
    },
    getters: {
        products(state) {
            return state.products;
        },
        product(state) {
          return (productId) => {
            return state.products.find(product => product.id === productId);
          };
        },
        cartCount(state) {
          return state.cart.count;
        },
    }
});

export default store;