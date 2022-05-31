import axios from 'axios'
import { dev } from '../env/config';
export const baseService = {}

baseService.get = async (endpoint) => {
    try {
        const response = await axios.get(dev.API_ENDPOINT_URL + endpoint);
        return response;
    } catch (error) {
        console.error(`baseService.get ${dev.API_ENDPOINT_URL + endpoint}`, error);
    }
}

export async function getData(endpoint) {
    return await baseService.get(endpoint);
}