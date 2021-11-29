import axios from "axios";
import { Service } from "typedi";
import UrlHelper from "../helpers/UrlHelper.ts";
import * as store from "../store";
import { State } from "../types/state";

@Service()
export default class StateService {
  private readonly axios = axios;

  list(): Promise<State[]> {
    return this.axios.get(UrlHelper.getStateApi()).then((response) => {
      store.store.commit("setStates", response.data);
      return response.data;
    });
  }
}
