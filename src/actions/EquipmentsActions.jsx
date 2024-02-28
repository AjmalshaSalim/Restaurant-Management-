import axios from '../axios';
import {API_URLS} from '../constants/config';

export const ADD_Equipments = async data => {
    console.log ('equipments adding');
    console.log ('data', data);
    try {
      const response = await axios.post (API_URLS.ADD_EQUIPMENTS, data);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };