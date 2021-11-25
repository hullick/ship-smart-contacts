import 'reflect-metadata';

import Vue from "vue";
import TheAddContactPage from "./pages/TheAddContactPage";
import { services } from "./import-services.js";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
});

new Vue({
  el: "#add-contact",
  services: services,
  components: {
    TheAddContactPage,
  },
  store: store,
});
