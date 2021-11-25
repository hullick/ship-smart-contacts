import Vue from "vue";
import TheContactsListPage from "./pages/TheContactsListPage";
import ConfirmContactDeleteModel from "./modals/ConfirmContactDeleteModel";

import Vuex from 'vuex'
import Vuec from 'vue-container';

import ModalService from './services/modal.service.ts';

Vue.use(Vuex)
Vue.use(Vuec);

Vue.$ioc.register('$modalService', new ModalService());

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
  el: "#app",
  services: ['$modalService'],
  components: {
	TheContactsListPage,
	ConfirmContactDeleteModel
  },
  store: store,
});