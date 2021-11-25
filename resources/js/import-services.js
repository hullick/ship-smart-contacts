import Vue from "vue";
import Vuec from "vue-container";
import ModalService from "./services/modal.service.ts";
import Axios from "axios";
import CepService from "./services/cep.service.ts";

Vue.use(Vuec);

Vue.$ioc.prepare(CepService);


Vue.$ioc.register("$modalService", new ModalService());
Vue.$ioc.register("$axios", Axios);
Vue.$ioc.register("$cepService", new CepService());

export const services = ["$modalService", "$axios", "$cepService"];
