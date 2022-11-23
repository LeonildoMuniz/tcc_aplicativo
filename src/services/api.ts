import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.111.206:3333'
})

export { api };