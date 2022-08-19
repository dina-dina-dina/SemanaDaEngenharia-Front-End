import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://semanadaengenharia-backend.herokuapp.com/",
    timeout: 10000
})

export default axios