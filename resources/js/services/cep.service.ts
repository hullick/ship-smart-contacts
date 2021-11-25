import { CepApiResponse } from "../types/CepApiResponse";
import axios from "axios";
import { Service } from "typedi";

@Service()
export default class CepService {
  private queriedCeps = new Map<string, CepApiResponse>();
  private readonly axios = axios;

  get(cep: string): Promise<CepApiResponse> {
    return this.axios
      .get(`${process.env.MIX_APP_CEP_API}/${process.env.MIX_APP_CEP_API_FORMAT}/${cep}`)
      .then((response) => {
        return response.data;
      });
  }
}
