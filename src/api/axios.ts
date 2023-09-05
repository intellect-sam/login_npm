import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://xpresscore.etechnosoft.org/',
});

export default instance;
