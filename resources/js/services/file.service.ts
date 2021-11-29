import axios from "axios";
import { Service } from "typedi";

@Service()
export default class FileService {
  private readonly axios = axios;

  upload(file: File, folder: string): Promise<string> {
    const formData = new FormData();

    formData.append("file", file);

    return this.axios
      .post(`${process.env.MIX_APP_FILE_API}/upload/${folder}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data.avatar_filename;
      });
  }
}
