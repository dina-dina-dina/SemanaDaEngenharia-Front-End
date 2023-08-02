import Axios from "axios";

const token = localStorage.getItem('token')
const axios = Axios.create({
    // baseURL: "https://semanadaengenharia-backend.herokuapp.com/",
    baseURL: "https://semanaback.onrender.com/",
    headers: { 'Authorization': 'Bearer ' + token },
    timeout: 10000
})

export default axios