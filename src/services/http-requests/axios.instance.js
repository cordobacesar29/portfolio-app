import axios from 'axios';
import store from '../../app/store';  

const httpAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});


httpAxios.interceptors.request.use(
  async config => {
    const { user } = store.getState();
    const accessToken = user.user;
    if (user && accessToken) {
      const token = 'Bearer ' + accessToken.token;
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

  export const get = httpAxios.get;
  export const post = httpAxios.post;
  export const put = httpAxios.put;
  export const patch = httpAxios.patch;
  export const deleteItem = httpAxios.delete;