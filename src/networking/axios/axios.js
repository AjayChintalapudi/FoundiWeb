import axios from 'axios';
const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

axiosInstance.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
  localStorage.getItem('token')
)}`;

axiosInstance.interceptors.response.use(
    (response)=>response,
    (error)=>
    Promise.reject(
        (error.response && error.response.data) || "something went wrong"
    )
)

export default axiosInstance;