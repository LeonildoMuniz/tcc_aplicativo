import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.2.2.44:3333'
})

export { api };