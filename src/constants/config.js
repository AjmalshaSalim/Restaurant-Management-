

const LOGIN_API_PATH = '/api/login/'
const Forgot_password = '/api/send_otp/'
const Ver_otp ='/api/verify_otp/'
const Reset_password = '/api/reset-password/'
const Add_equipments ='/api/add-equipment/'
const List_equipments='/api/list-equipment/'
const Add_members='/api/add_user/'
const Edit_equipments='/api/edit-equipment/id:/'
const fetchProfileData ='/api/user-profile/'
const Fetch_Dash = '/api/dash/count/'
const Owner_Register ='/api/register-gym-owner/'
const Slot_Listing='/api/slots/'
const Book_Slot='/api/book-slot/'
const My_Bookings='/api/my-bookings/'
const Cancel_Bookings='/api/cancel-booking/'
const Delete_Equipments='/api/delete-equipment/'
const Create_Slot='/api/create-slots/'
const Filter_Attendance ='/api/search-attendance/'
const ADD_Attendance ='/api/mark-attendance/'
const View_Attendance ='/api/attendance/'
const Search_user_For_Attendance ='/api/user-details/'


export const API_URLS = {
    LOGIN_API_PATH: `${LOGIN_API_PATH}`,
    FORGOT_PASSWORD : `${Forgot_password}`,
    VERIFY_OTP:`${Ver_otp}`,
    RESET_PASSWORD:`${Reset_password}`,
    ADD_EQUIPMENTS:`${Add_equipments}`,
    LIST_EQUIPMENTS:`${List_equipments}`,
    EDIT_EQUIPMENTS:`${Edit_equipments}`,
    fetchProfileData:`${fetchProfileData}`,
    ADD_MEMBERS:`${Add_members}`,
    Fetch_Dash :`${Fetch_Dash}`,
    OWNER_REGISTER :`${Owner_Register}`,
    SLOT_LISTING:`${Slot_Listing}`,
    BOOK_SLOT:`${Book_Slot}`,
    MY_BOOKINGS:`${My_Bookings}`,
    CANCEL_BOOKINGS:`${Cancel_Bookings}`,
    DELETE_EQUIPMENTS:`${Delete_Equipments}`,

    CREATE_SLOT:`${Create_Slot}`
   
    // Filter_Attendance:`${Filter_Attendance}`,
    // ADD_Attendance:`${ADD_Attendance}`,
    // View_Attendance:`${View_Attendance}`,
    // Search_user_For_Attendance:`${Search_user_For_Attendance}`,

}

