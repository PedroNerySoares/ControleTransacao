import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
interface CustomHeaders {
  Authorization: string;
}

const Http = axios.create({
  baseURL: 'http://localhost:8080'

})
Http.interceptors.request.use(function (config) {

  const token = localStorage.getItem('token')

  if (!config.headers) {
    config.headers = {};
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default Http