import Axios from "axios";


const axios = Axios.create({
    // baseURL: "https://semanaback.onrender.com/",
    // baseURL: "http://dinamicaengjr.kinghost.net:21191/",
    // baseURL: "http://dinamicaengjr.kinghost.net:21191/",
    baseURL: "https://semanadaengenharia-back.onrender.com",
    headers: { Auth: 'Simple AUTH'},
    timeout: 50000
})

export default axios