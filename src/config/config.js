import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default http