import axios from "axios";
import { api } from "./config/config";

export const httpAxios = axios.create({
  baseURL: api,
});
