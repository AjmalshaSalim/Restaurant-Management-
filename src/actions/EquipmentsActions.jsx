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

  export const List_Equipments=async data =>{
  try {
    const response=await axios.get(API_URLS.LIST_EQUIPMENTS)
    return response.data
  } catch (error) {
    console.error ('while fetching equipments', error);
    throw error;
  }
  }

  export const Edit_Equipments=async data =>{
    try {
      const response =await axios.put(API_URLS.EDIT_EQUIPMENTS)
      return response.data
    } catch (error) {
      console.error ('while editing equipments', error);
      throw error;
    }
  }