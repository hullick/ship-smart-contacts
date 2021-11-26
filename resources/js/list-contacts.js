import 'reflect-metadata';
import Vue from "vue";
import TheContactsListPage from "./pages/TheContactsListPage";
import ConfirmContactDeleteModel from "./modals/ConfirmContactDeleteModel";
import { services } from "./dependency-injections.js";
import { store } from "./store.js";

new Vue({
  el: "#list",
  services: services,
  components: {
	TheContactsListPage,
	ConfirmContactDeleteModel
  },
  store: store,
});