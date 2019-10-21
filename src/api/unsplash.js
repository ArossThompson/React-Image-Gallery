import axios from 'axios';
import { Api_Key } from '../constants'

export const unsplash = axios.create({
    baseURL : "https://api.unsplash.com",
    headers: {
        Authorization: `Authorization: Client-ID ${Api_Key}`
    }
})
