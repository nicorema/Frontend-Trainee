import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://react-trainee-burger-builder.firebaseio.com/'
});

export default axiosInstance;