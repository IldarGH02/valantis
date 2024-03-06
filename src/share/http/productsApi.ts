import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import CryptoJS from 'crypto-js'
import { generateTimeToPass, prepareIds } from '../../features/func'

const URL = process.env.REACT_APP_PUBLIC_API_URL
const pass = 'Valantis'
const date = generateTimeToPass()
const joinParams = `${pass}_${date}`
const hash = CryptoJS.MD5(joinParams).toString()

export const productsApiIds = async (): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        method: 'POST',
        url: `${URL}`,
        headers: {
            "X-Auth": hash,
            "content-type": "application/json"
        },
        data: JSON.stringify({
            action: 'get_ids', 
            params: {
                "offset": 10, 
                "limit": 50
            }
        })
    }
    return axios.request(options)
}

export const productsApiItems = async (ids: string[]): Promise<AxiosResponse> => {    
    const options: AxiosRequestConfig = {
        method: 'POST',
        url: `${URL}`,
        headers: {
            "X-Auth": hash,
            "content-type": "application/json"
        },
        data: JSON.stringify({
            action: 'get_items', 
            params: {
                "ids": ids
            }
        })
    }
    return axios.request(options)
}


