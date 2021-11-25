import Vue from "vue";
import TheAddContactPage from "./pages/TheAddContactPage";

import Vuex from 'vuex'
import Vuec from 'vue-container';

import ModalService from './services/modal.service.ts';

Vue.use(Vuex)
Vue.use(Vuec);

Vue.$ioc.register('$modalService', new ModalService());

const store = new Vuex.Store({
  state: {  },
  mutations: {  }
});

new Vue({
  el: "#add-contact",
  services: ['$modalService'],
  components: {
	TheAddContactPage,
  },
  store: store,
});