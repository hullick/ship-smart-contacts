import axios, { AxiosResponse } from "axios";
import { Service } from "typedi";
import toContactApi from "../casters/toContactApi";
import { Contact } from "../types/contact";

@Service()
export default class ContactService {
  private readonly axios = axios;

  list(): Promise<Contact[]> {
    return this.axios.get("/public/index.php/api/contato").then((response) => {
      return response.data;
    });
  }

  save(contact: Contact): Promise<AxiosResponse> {
    return this.axios.post("/public/index.php/api/contato", toContactApi(contact));
  }
}
