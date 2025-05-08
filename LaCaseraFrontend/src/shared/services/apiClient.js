import axios from "axios"
import { env } from "../../config/env.config"

const {backendURL} = env;

export const apiClient = axios.create({
    baseURL:backendURL,
    timeout: 5000,
});