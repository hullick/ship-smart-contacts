import "reflect-metadata";

import Vue from "vue";
import TheAddContactPage from "./pages/TheAddContactPage";
import { services } from "./dependency-injections.js";
import { store } from "./store.js";

new Vue({
  el: "#add-contact",
  services: services,
  components: {
    TheAddContactPage,
  },
  store: store,
});
