import axios from '../axios';
import {API_URLS} from '../constants/config';

export const List_Enquiries = async () => {

    try {
      const response = await axios.get (API_URLS.List_Enquiries);
      console.log("List_Enquiries",response.data);
      return response.data;
    } catch (error) {
      console.error ('List_Enquiries', error);
      throw error;
    }
  };