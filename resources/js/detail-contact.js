import "reflect-metadata";
import Vue from "vue";
import TheContactDetailPage from "./pages/TheContactDetailPage";
import { services } from "./dependency-injections.js";
import { store } from "./store.js";

new Vue({
  el: "#detail-contact",
  services: services,
  components: {
    TheContactDetailPage,
  },
  store: store,
});
