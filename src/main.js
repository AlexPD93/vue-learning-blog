import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import createRouter from "vue-router";
import Routes from "./routes.js";

import "./assets/main.css";
import VueRouter from "vue-router";

Vue.use(VueResource);
Vue.use(createRouter);

const router = new VueRouter({
  routes: Routes,
  //Removes the hash tag from the url.
  mode: "history",
});

//Custom directives

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg === "column") {
      el.style.background = "#ddd";
    }
  },
});

//Filters
Vue.filter("snippet", function (value) {
  return value.slice(0, 100) + "...";
});

new Vue({
  render: (h) => h(App),
  //Use routes in the Vue instance
  router: router,
}).$mount("#app");
