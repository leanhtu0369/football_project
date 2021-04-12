// API token: 725cdc0c05ef4ac6870402e11beb7ddc
import axios from "axios";

// Set config defaults when creating the instance
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    'X-Auth-Token': '725cdc0c05ef4ac6870402e11beb7ddc'
  }
});

// Add a request interceptor
axiosClient.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error)
});

// Add a response interceptor
axiosClient.interceptors.response.use(response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log(process.env.REACT_APP_API_URL)
  if (response && response.data) {
    // console.log(response);
    // console.log(response.data);
    return response.data
  }
  return response
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  
  // console.log(process.env.REACT_APP_API_URL)
  // return Promise.reject(error)
  throw error;
});

export default axiosClient
