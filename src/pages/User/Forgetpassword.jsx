import { useState } from 'react';
import BackgroundImage from '../../assets/images/bgImageUser.jpg';
import logo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Forgetpassword() {
    const navigate=useNavigate();
const [formData,setFormData]=useState({phonenumber:''}) 

const handleChange = (e) => {
    setFormData({
     ...formData,
        [e.target.id]: e.target.value,
    });
}

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
    try {
       navigate('/Otp')
    } catch (error) {
        console.error('error while sending phone number:', error.message);
    }
}
    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <img className="absolute inset-0 w-full h-full object-cover" src={BackgroundImage} alt="bg-image" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <img className='h-auto w-[200px] md:w-[300px] ml-2 mt-2 absolute left-2 top-8' src={logo} alt='' />
                <h1 className="text-white text-2xl md:text-3xl font-semibold ml-4 md:ml-2 mb-4">Forget Password</h1>
                <form onClick={handleSubmit} className='flex flex-col gap-2'>
                    <div className="mt-4 text-white">
                        <div className='flex flex-col gap-3'>
                            <input onChange={handleChange} type="number" id="phonenumber" value={formData.phonenumber} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl decoration-transparent focus:ring-blue-500 focus:border-blue-500 block w-full px-28 py-2 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none" 
                                   placeholder="Enter your Number" required  />
                        </div>
                        <button
                            className='bg-red-500 text-white rounded-full mt-4 px-5 py-2 flex ml-28 md:ml-23 cursor-pointer hover:opacity-80 disabled:opacity-80'
                            type='submit'
                        >
                            Send OTP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forgetpassword
