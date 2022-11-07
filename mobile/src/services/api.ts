import axios from "axios"

export const api = axios.create({
  baseURL: "http://10.200.15.79:3333",
})
