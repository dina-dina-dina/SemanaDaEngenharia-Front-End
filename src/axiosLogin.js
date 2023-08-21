import Axios from "axios";


const axios = Axios.create({
    // baseURL: "https://semanaback.onrender.com/",
    baseURL: "http://dinamicaengjr.kinghost.net:21191/",

    headers: { Auth: 'Simple AUTH'},
    timeout: 10000
})

export default axios