

import Axios from "axios";

const token = localStorage.getItem('token')
const axios = Axios.create({
    baseURL: "http://localhost:8060/",
    // baseURL: "https://semanaback.onrender.com/",
    headers: { 'Authorization': 'Bearer ' + token },
    timeout: 10000
})

export default axios