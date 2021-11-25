export interface CepApiResponse {
  address: string;
  address_name: string;
  address_type: string;
  cep: string;
  city: string;
  city_ibge: string;
  ddd: string;
  district: string;
  lat: string;
  lng: string;
  state: string;
}

//Workaround for warnings
export const CepApiResponse = undefined;
