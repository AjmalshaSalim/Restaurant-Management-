import axios from '../axios';
import {API_URLS} from '../constants/config';

export const ADD_Equipments = async data => {
    console.log ('Adding User >>>>');
    console.log ('User Data >>>>', data);
    try {
      const response = await axios.post (API_URLS.ADD_MEMBERS, data);
      return response.data;
    } catch (error) {
      console.error ('Adding User >>>>:', error);
      throw error;
    }
  };