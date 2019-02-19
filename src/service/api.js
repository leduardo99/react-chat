import Axios from "axios";

const api = Axios.create({ baseURL: "http://localhost:3001" });

export default api;