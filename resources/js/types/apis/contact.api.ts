export interface ContactApi {
  name: string;
  phone_number: string;
  email?: string;
  cep: string;
  city: string;
  district: string;
  address: string;
  residence_number: string;
  states_id: string;
  avatar_filename: string;
}