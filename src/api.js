import axios from "axios";
const api = axios.create({
    baseURL: "https://642f51f5b289b1dec4b0f4cd.mockapi.io/musicas"
})

export default api;