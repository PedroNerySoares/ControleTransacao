import axios, { AxiosRequestConfig } from "axios";
import { config } from "process";
interface CustomHeaders {
    Authorization: string;
  }
  
const Http = axios.create({
    baseURL: 'http://localhost:8080'

})



export default Http