import "reflect-metadata";
import Vue from "vue";
import TheEditContactPage from "./pages/TheEditContactPage";
import { services, helpers } from "./dependency-injections.js";
import { store } from "./store.js";

new Vue({
  el: "#edit-contact",
  services: services,
  helpers: helpers,
  components: {
    TheEditContactPage,
  },
  store: store,
});
