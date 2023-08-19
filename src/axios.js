

import Axios from "axios";

const token = localStorage.getItem('token')
const axios = Axios.create({
    // baseURL: "https://semanadaengenharia-backend.herokuapp.com/",
    baseURL: "http://localhost:8060/",
    headers: { 'Authorization': 'Bearer ' + token },
    timeout: 10000
})

export default axios