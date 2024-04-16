import axios from '../axios';
import {API_URLS} from '../constants/config';

export const List_Gym_Plans = async () =>{
    try {
      const response=await axios.get(API_URLS.LIST_GYM_PLANS)
      return response.data
    } catch (error) {
      console.error ('while fetching gym plans', error);
      throw error;
    }
    }
export const List_Gym_Plan_Details = async (id) =>{
    try {
      const response=await axios.get(`${API_URLS.LIST_GYM_PLAN_DETAILS}/${id}`)
      return response.data
    } catch (error) {
      console.error ('while fetching gym plans', error);
      throw error;
    }
    }