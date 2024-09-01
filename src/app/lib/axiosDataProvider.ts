import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { log } from './log';


const instance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000, // 10 sec
});

const api = setupCache(instance)

// //? Initiate interceptor for logging while in development
api.interceptors.request.use((request) => {
  if (process.env.NODE_ENV === 'development') {
    log('axios', 'Starting Request:', request);
  }
  return request;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

//? Response interceptor for logging and error handling
api.interceptors.response.use((response) => {
  if (process.env.NODE_ENV === 'development') {
    log('axios', 'Response:', response);
  }
  return response;
}, (error: AxiosError) => {
  if (error.response) {
    log('axios-error', 'Response Error:', error.response);
  } else if (error.request) {
    log('axios-error', 'No Response:', error.request);
  } else {
    log('axios', 'Error:', error.response);
  }
  return Promise.reject(error);
});

const fetchData = async <T>(url: string, options: AxiosRequestConfig = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(url, options);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data',);
  }
};

export { fetchData, api };
