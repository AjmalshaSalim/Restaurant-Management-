import axios from '../axios';
import {API_URLS} from '../constants/config';

export const SEND_OTP = async data => {
  console.log ('data', data);
  try {
    const response = await axios.post (API_URLS.FORGOT_PASSWORD, data);
    return response.data;
  } catch (error) {
    console.error ('Error Sending OTP:', error);
    throw error;
  }
};

export const VERIFY_OTP = async data => {
  console.log ('data', data);
  try {
    const response = await axios.post (API_URLS.VERIFY_OTP, data);
    return response.data;
  } catch (error) {
    console.error ('Error Sending OTP:', error);
    throw error;
  }
};

export const CHANGE_PASSWORD = async data => {
  console.log ('data', data);
  try {
    const response = await axios.post (API_URLS.RESET_PASSWORD, data);
    return response.data;
  } catch (error) {
    console.error ('Error Sending Password:', error);
    throw error;
  }
};


export const fetchProfileData = async ()=> {

  try {
    const response = await axios.get (API_URLS.fetchProfileData);
    return response.data;
  } catch (error) {
    console.error ('Error Sending Password:', error);
    throw error;
  }
};


export const OWNER_REGISTER = async data => {
  console.log ('thgjhbjhjjhjh');
  console.log ('data', data);
  try {
    const response = await axios.post (API_URLS.OWNER_REGISTER, data);
    return response.data;
  } catch (error) {
    console.error ('Error Sending OTP:', error);
    throw error;
  }
};