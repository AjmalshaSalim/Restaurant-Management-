import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('/api/token/refresh/', {
          refresh: localStorage.getItem('userRefreshToken'),
        });
        const newAccessToken = response.data.access;
        localStorage.setItem('userAccessToken', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
