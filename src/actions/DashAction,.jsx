import axios from '../axios';
import {API_URLS} from '../constants/config';

export const Fetch_Dash = async () => {
  try {
    const response = await axios.get (API_URLS.Fetch_Dash);
    return response.data;
  } catch (error) {
    console.error ('Error Fetching Dash:', error);
    throw error;
  }
};