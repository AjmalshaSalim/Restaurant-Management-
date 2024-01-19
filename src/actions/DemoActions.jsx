import axios from "../axios";
import { API_URLS } from "../constants/config";

export const DemoAction1  = async () => {
    try {
      const response = await axios.get(`${API_URLS.DEMO_PATH}/${id}`)
      console.log(response.data);
      return response.data;
    } catch (error) {
    console.error('Error fetching Demo Data:', error);
      throw error; 
    }
  };