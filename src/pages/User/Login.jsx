import { useState } from 'react';
import BackgroundImage from '../../assets/images/bgImageUser.jpg';
import logo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import { Link} from 'react-router-dom';
import  {DemoAction1}  from './../../actions/DemoActions';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [formData, setFormData] = useState({ username:'', password: '' });
    const navigate=useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response= DemoAction1(formData)
            if(response.success) {
                navigate('/home')
            }
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    }
    

    return (
        <div className="relative h-screen">
            <img className="absolute inset-0 w-full h-full object-cover filter grayscale" src={BackgroundImage} alt="bg-iage" />
          
            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60"></div>
            <Link to='/home'>
            <img className='h-auto w-[200px] md:w-[300px] ml-2 mt-2 absolute left-2 top-8' src={logo} alt='' />
            </Link>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-gray-900 rounded-md shadow-xl lg:max-w-xl opacity-70 border-1 border-gray-700 ">
            <h1 className="text-3xl font-semibold text-center text-white ">
               Sign in
            </h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (formData.username.length === 10) {
                    handleSubmit(e);
                } else {
                    alert("Phone number must be 10 digits.");
                }
            }} className="mt-6">
                <div className="mb-2 ">
                    <label
                        htmlFor="username"
                        className="block text-sm font-semibold text-white"
                    >
                        Phone Number
                    </label>
                    <input
                        type="text" value={formData.username} id="phonenumber" onChange={handleChange} required pattern="\d{10}"
                        className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-red-purple-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
                        title="Phone number must be 10 digits"
                        maxLength="10"
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-white"
                    >
                        Password
                    </label>
                    <input
                       type="password" id="password" value={formData.password} required onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-red-purple-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40 hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </div>
                <Link to='/forgotpassword'>
                <button className='text-base text-blue-600 hover:underline'>  Forgot Password?</button>
                </Link>
                  
              
                <div className="mt-6 flex justify-center">
                    <button type='submit' className="w-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-xl hover:bg-red-300 focus:outline-none focus:bg-red-800 ">
                        Login
                    </button>
                </div>
            </form>
           
        </div>
    </div>
    </div>
        
    );
}

export default Login;
