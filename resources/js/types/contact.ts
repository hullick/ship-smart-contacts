import { Address } from "./address";

export interface Contact {
  name: string;
  phoneNumber: string;
  email?: string;
  address: Address;
}

//Workaround for warnings
export const Contact = undefined;
