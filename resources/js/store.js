import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    states: [],
    lastDeletedContact: undefined,
  },
  mutations: {
    setStates(state, newStates) {
      state.states = newStates;
    },
    setLastDeletedContact(state, newLastDeletedContact) {
      state.lastDeletedContact = newLastDeletedContact;
    },
  },
});
