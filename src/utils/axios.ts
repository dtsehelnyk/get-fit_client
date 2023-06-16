import axios from 'axios';
import { LoginParams } from '../types/requestParams';

export const instance = axios.create({
  baseURL: 'http://localhost:5050',
});

instance.interceptors.request.use((config) => {
  try {
    config.headers.Authorization = window.localStorage.getItem('token');
      return config;
  } catch (err) {
    console.log(err);

    return config;
  }
});

export const handleLogin = (params: LoginParams): any => {
  try {
    return instance.post('/auth/login', {...params})
      .then((data) => data)
      .catch((err) => err);
  } catch (err) {
    console.log('__err: ', err);

    return err;
  }
}

export const authMe = (): any => {
  try {
    return instance.get('/users/me')
      .then((data) => data)
      .catch((err) => err);
  } catch (err) {
    console.log('__err: ', err);
    
    return err;
  }
}
