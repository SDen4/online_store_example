import axios from 'axios';

// обычные запросы, не требующие авторизации
const $host = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// запросы, требующие авторизации
const $authHost = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
