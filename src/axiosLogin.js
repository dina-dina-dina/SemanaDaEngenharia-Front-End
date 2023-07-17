import Axios from "axios";


const axios = Axios.create({
    baseURL: "http://localhost:8060/",
    headers: { Auth: 'Simple AUTH'},
    timeout: 10000
})

export default axios