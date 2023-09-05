import axios, { AxiosResponse } from 'axios';
export class AuthSDK {
  private _baseurl: string;

  constructor() {
    this._baseurl = import.meta.env.VITE_BASE_API_URL ?? '';
  }

  async login<T>(payload: object): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.post(
        `${this._baseurl}/api/Authentication/login`,
        payload,
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      );
      return response;
    } catch (error: unknown) {
      console.log(error);
      throw error;
    }
  }
}
