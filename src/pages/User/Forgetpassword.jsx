import { useState } from 'react';
import BackgroundImage from '../../assets/images/bg-image-girl2.jpg';
import logo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { SEND_OTP } from '../../actions/AuthActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forgetpassword() {  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ phonenumber: '' });
  
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await SEND_OTP(formData);
            toast.success('OTP sent successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/Otp', { state: { phoneNumber: formData.phonenumber } });
        } catch (error) {
            toast.error('Error while sending OTP. Please try again later.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error('Error while sending phone number:', error.message);
        }
    }

    return (
        <div className="relative h-screen">
            <img className="absolute inset-0 w-full h-full object-cover filter grayscale" src={BackgroundImage} alt="bg-image" />
            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60"></div>
            <img className='h-auto w-[200px] md:w-[300px] ml-2 mt-2 absolute left-2 top-8' src={logo} alt='' />
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-md lg:max-w-xl opacity-70 border-1 border-gray-700">
                    <h1 className="text-3xl font-semibold text-center text-white ">
                        Forget Password
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-white"
                            >
                                Phone Number
                            </label>
                            <input
                                onChange={handleChange} type="number" id="phonenumber" value={formData.phonenumber} required
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:red-purple-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button type='submit' className=" w-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-xl hover:bg-red-300 focus:outline-none focus:bg-red-800 ">
                                Send OTP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Toast Container for displaying messages */}
            <ToastContainer />
        </div>
    )
}

export default Forgetpassword;
