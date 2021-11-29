import { Address } from "./address";

export interface Contact {
  id?: string;
  name: string;
  phoneNumber: string;
  email?: string;
  address?: Address;
  avatarFilename?: string;
}

//Workaround for warnings
export const Contact = undefined;
