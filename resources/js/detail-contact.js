import "reflect-metadata";
import Vue from "vue";
import TheContactDetailPage from "./pages/TheContactDetailPage";
import { services, helpers } from "./dependency-injections.js";
import { store } from "./store.js";

new Vue({
  el: "#detail-contact",
  services: services,
  helpers: helpers,
  components: {
    TheContactDetailPage,
  },
  store: store,
});
