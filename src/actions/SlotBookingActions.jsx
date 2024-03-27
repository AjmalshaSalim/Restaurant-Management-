import axios from '../axios';
import { API_URLS } from '../constants/config';

export const Slot_List = async data => {
    try {
        const response = await axios.get(API_URLS.SLOT_LISTING)
        return response.data

    } catch (error) {
        console.error('while fetching equipments', error);
        throw error;
    }
}

export const Book_Slot = async (data )=> {
    console.log(data.id, data.date);
    try {
        const response = await axios.post(`${API_URLS.BOOK_SLOT}${data.id}/`,{date:data.date});
        return response.data;
    } catch (error) {
        console.error('Error booking slot:', error);
        throw error;
    }
};

export const My_Bookings = async data => {
    try {
        const response = await axios.get(API_URLS.MY_BOOKINGS)
        return response.data

    } catch (error) {
        console.error('while fetching bookings', error);
        throw error;
    }
}
export const Cancel_Bookings = async id => {
    try {
        const response = await axios.delete(`${API_URLS.CANCEL_BOOKINGS}${id}`)
        return response.data

    } catch (error) {
        console.error('while deleting bookings', error);
        throw error;
    }
}