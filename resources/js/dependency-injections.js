import Vue from "vue";
import Vuec from "vue-container";
import ModalService from "./services/modal.service.ts";
import CepService from "./services/cep.service.ts";
import ContactService from "./services/contact.service.ts";
import StateService from "./services/state.service.ts";
import FileService from "./services/file.service.ts";
import UrlHelper from "./helpers/UrlHelper.ts";

Vue.use(Vuec);

Vue.$ioc.register("$modalService", new ModalService());
Vue.$ioc.register("$cepService", new CepService());
Vue.$ioc.register("$contactService", new ContactService());
Vue.$ioc.register("$fileService", new FileService());
Vue.$ioc.register("$stateService", new StateService());

Vue.prototype.$helpers = ["$urlHelper"];
Vue.prototype.$helpers["$urlHelper"] = UrlHelper;

export const services = [
  "$modalService",
  "$cepService",
  "$contactService",
  "$stateService",
  "$fileService",
];

export const helpers = ["$urlHelper"];
