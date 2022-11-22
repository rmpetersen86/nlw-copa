import axios from "axios"

export const api = axios.create({
  baseURL: "http://192.168.100.163:3333",
  /* baseURL: process.env.BASE_URL */
})
