import axios from "axios";
import { Service } from "typedi";
import toContactApi from "../casters/toContactApi";
import { Contact } from "../types/contact";
@Service()
export default class ContactService {
  // private queriedCeps = new Map<string, Contact>();
  private readonly axios = axios;

  save(contact: Contact) {
    return this.axios
      .post("/public/index.php/api/contato", toContactApi(contact))
      .then((response) => {
        return null;
      });
  }
}
