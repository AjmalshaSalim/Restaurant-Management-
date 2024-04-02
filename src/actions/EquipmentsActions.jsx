import axios from '../axios';
import {API_URLS} from '../constants/config';

export const ADD_Equipments = async data => {

    console.log ('equipments adding');
    console.log ('dataaaaaaaaaa', data);
    if(data.name){
      console.log("entered if");
      try {
        const response = await axios.post (API_URLS.ADD_EQUIPMENTS, data);
        return response.data;
      } catch (error) {
        console.error ('Adding equipments:', error);
        throw error;
      }
    }

  };

  export const List_Equipments = async data =>{
  try {
    const response=await axios.get(API_URLS.LIST_EQUIPMENTS)
    return response.data
  } catch (error) {
    console.error ('while fetching equipments', error);
    throw error;
  }
  }

  export const Edit_Equipments= async data =>{
    try {
      // const response = await axios.delete(`${API_URLS.CANCEL_BOOKINGS}${id}`)
      const response =await axios.put(`${API_URLS.EDIT_EQUIPMENTS}${data}`)
      console.log(response.data);
      return response.data
    
    } catch (error) {
      console.error ('while editing equipments', error);
      throw error;
    }
  }

  export const Delete_Equipments=async data =>{
    try {
      const response =await axios.delete(`${API_URLS.DELETE_EQUIPMENTS}${data}`)
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error ('while deleting equipments', error);
      throw error;
    }
  }