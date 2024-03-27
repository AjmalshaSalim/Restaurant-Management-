import axios from '../axios';
import {API_URLS} from '../constants/config';

export const FIlter_Attendance = async data => {

    try {
      const response = await axios.get (API_URLS.Filter_Attendance, data);
      return response.data;
    } catch (error) {
      console.error ('Filtering Attendance:', error);
      throw error;
    }
  };

export const List_Attendance = async () => {

    try {
      const response = await axios.get (API_URLS.View_Attendance);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };

  export const ADD_Attendance = async data => {

    try {
      const response = await axios.post (API_URLS.ADD_Attendance, data);
      return response.data;
    } catch (error) {
      console.error ('Adding equipments:', error);
      throw error;
    }
  };