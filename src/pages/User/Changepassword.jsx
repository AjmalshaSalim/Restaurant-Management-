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
    navigate('/login')
    try {
       
    } catch (error) {
        console.error('error while sending phone number:', error.message);
    }
}
    return (
        <div className="relative h-screen">
        <img className="absolute inset-0 w-full h-full object-cover" src={BackgroundImage} alt="bg-image" />
      
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60"></div>
        <img className='h-auto w-[200px] md:w-[300px] ml-2 mt-2 absolute left-2 top-8' src={logo} alt='' />
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-md lg:max-w-xl opacity-70 border-1 border-gray-700">
        <h1 className="text-3xl font-semibold text-center text-white ">
           Change Password
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-white"
                    >
                      New Password
                    </label>
                    <input
                       type="password" id="password" value={formData.password} required onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-white"
                    >
                       Confirm Password
                    </label>
                    <input
                       type="password" id="password" value={formData.password} required onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </div>
              
          
            <div className="mt-6 flex justify-center">
              
                <button type='submit' className=" w-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-xl hover:bg-red-300 focus:outline-none focus:bg-red-800 ">
                Confirm
                </button>
              
            </div>
        </form>
       
    </div>
</div>
</div>
    )
}

export default Forgetpassword
