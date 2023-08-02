import Axios from "axios";


const axios = Axios.create({
    baseURL: "https://semanaback.onrender.com/",
    headers: { Auth: 'Simple AUTH'},
    timeout: 10000
})

export default axios