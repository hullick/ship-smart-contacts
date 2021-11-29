import axios, { AxiosResponse } from "axios";
import Container, { Service } from "typedi";
import toContact from "../casters/toContact";
import toContactApi from "../casters/toContactApi";
import { Contact } from "../types/contact";
import { ContactApi } from "../types/apis/contact.api";
import FileService from "./file.service.ts";

@Service()
export default class ContactService {
  private readonly axios = axios;

  list(): Promise<Contact[]> {
    return this.axios
      .get(`${process.env.MIX_APP_CONTACT_API}`)
      .then((response) => response.data.map((contactApi: ContactApi) => toContact(contactApi)));
  }

  save(contact: Contact): Promise<AxiosResponse> {
    return this.axios
      .post(`${process.env.MIX_APP_CONTACT_API}`, toContactApi(contact))
      .then((response) => response.data.id);
  }

  update(contactId: Number, contact: Contact): Promise<undefined> {
    return this.axios.patch(
      `${process.env.MIX_APP_CONTACT_API}/${contactId}`,
      toContactApi(contact)
    );
  }

  associate(avatar: File, contact: Contact) {
    // TODO: Check contact id and display message
    const fileService: FileService = Container.get(FileService);

    return fileService.upload(avatar, "avatars").then((uploadedAvatarFilename: string) => {
      return this.axios.post(
        `${process.env.MIX_APP_CONTACT_API}/associar-avatar/${contact.id}/${uploadedAvatarFilename}`
      );
    });
  }

  change(avatar: File, contact: Contact) {
    // TODO: Check contact id and display message if hasn't
    const fileService: FileService = Container.get(FileService);

    return fileService.upload(avatar, "avatars").then((uploadedAvatarFilename: string) => {
      return this.axios.post(
        `${process.env.MIX_APP_CONTACT_API}/trocar-avatar/${contact.id}/${uploadedAvatarFilename}`
      );
    });
  }

  get(contactId: number): Promise<Contact> {
    return this.axios
      .get(`${process.env.MIX_APP_CONTACT_API}/${contactId}`)
      .then((response) => toContact(response.data));
  }

  delete(contactId: number): Promise<AxiosResponse> {
    return this.axios.delete(`${process.env.MIX_APP_CONTACT_API}/${contactId}`);
  }
}
