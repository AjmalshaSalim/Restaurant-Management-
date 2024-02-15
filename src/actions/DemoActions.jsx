import axios from "../axios";
import { API_URLS } from "../constants/config";

export const DemoAction1  = async (data) => {
  console.log("thgjhbjhjjhjh");
  console.log("data",data);
    try {
      const response = await axios.post(API_URLS.LOGIN_API_PATH,data)
      localStorage.setItem('userAccessToken', response.data.access);
      return response.data;
    } catch (error) {
    console.error('Error fetching Demo Data:', error);
      throw error; 
    }
  };

  