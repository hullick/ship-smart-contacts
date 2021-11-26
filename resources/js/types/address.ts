import { State } from "./state";

export interface Address {
  cep: string;
  city: string;
  district: string;
  address: string;
  residenceNumber: string;
  state: State;
}

//Workaround for warnings
export const Address = undefined;
