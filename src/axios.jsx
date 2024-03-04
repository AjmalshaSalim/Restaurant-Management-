import axios from "axios";

const instance = axios.create({
  baseURL: 'https://achujozef.pythonanywhere.com',
  // baseURL: 'http://127.0.0.1:8000',
});

// Function to set headers dynamically
function setHeaders(isFormData = false, hasFile = false) {
  if (hasFile) {
    return {
      'Content-Type':'application/json',
      'Accept': 'application/json',
    };
  } else {
    return {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      'Accept': 'application/json',
    };
  }
}

instance.interceptors.request.use(
  (config) => {
    // Check if the request contains a file
    const isFormData = config.data instanceof FormData;
    const hasFile = isFormData && Array.from(config.data.values()).some(value => value instanceof File);
    config.headers = setHeaders(isFormData, hasFile);
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('/api/token/refresh/', {
          refresh: localStorage.getItem('userRefreshToken'),
        }, {
          headers: setHeaders(),
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
