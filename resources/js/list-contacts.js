import 'reflect-metadata';

import Vue from "vue";
import TheContactsListPage from "./pages/TheContactsListPage";
import ConfirmContactDeleteModel from "./modals/ConfirmContactDeleteModel";
import Vuex from 'vuex'
import { services } from "./import-services.js";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lastDeletedContact: undefined
  },
  mutations: {
    setLastDeletedContact (state, newLastDeletedContact) {
      state.lastDeletedContact = newLastDeletedContact;
    }
  }
});

new Vue({
  el: "#list",
  services: services,
  components: {
	TheContactsListPage,
	ConfirmContactDeleteModel
  },
  store: store,
});