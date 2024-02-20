import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../../assets/images/bgImageUser.jpg';
import logo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import { useRef, useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { data } from 'jquery';
import { VERIFY_OTP } from '../../actions/AuthActions';

function Otp() {
    const location = useLocation();
    const phoneNumber = location.state.phoneNumber;
    console.log("Phone Number:", phoneNumber); 
    const [otp,setOtp]=useState('')
    const [minutes,setMinutes]=useState(1)
    const [seconds,setSeconds]=useState(30)
const navigate=useNavigate()
const inputRefs = useRef([]);

const resendOTP=()=>{
setMinutes(1)
setSeconds(30)
}

useEffect(()=>{
const interval=setInterval(()=>{
    
    if(seconds>0){
        setSeconds(seconds-1)
    }
    if(seconds===0){
        if(minutes===0){
            clearInterval(interval)
        }else{
            setSeconds(59)
            setMinutes(minutes-1)
        }
    }
},1000)
return ()=>{
    clearInterval(interval)
}
},[seconds])

const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
    }
    const newOtp=[...otp];
    newOtp[index] = value;
    setOtp(newOtp.join(''));
    console.log(otp);
};

const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
        inputRefs.current[index - 1].focus();
    }
};
const handleSubmit= async(e)=>{
    const data = {
        phoneNumber: phoneNumber,
        otp: otp
    };
e.preventDefault();
try {
    const response=await VERIFY_OTP(data)
    navigate('/changepassword')
    console.log(response);
} catch (error) {
 console.error('Error', error);
}
}
    return (

        <div className="relative h-screen">
        <img className="absolute inset-0 w-full h-full object-cover" src={BackgroundImage} alt="bg-image" />
      
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60"></div>
        <img className='h-auto w-[200px] md:w-[300px] ml-2 mt-2 absolute left-2 top-8' src={logo} alt='' />
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full max-w-[400px] p-6 m-auto bg-gray-900 rounded-md shadow-md lg:max-w-xl opacity-70 border-1 border-gray-700">
        <h1 className="text-3xl font-semibold text-center text-white ">
           Enter OTP
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
    <div className="mb-2">
        <div className="flex justify-center flex-wrap">
            {[...Array(4).keys()].map((index) => (
                <input
                className='hover:transform hover:scale-105 transition-transform duration-500 ease-in-out'
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={otp[index]}
                    style={{
                        width: '40px',
                        margin:'10px',
                        height: '40px',
                        textAlign: 'center',
                        fontSize: '20px',
                        border: '2px solid #ccc',
                        borderRadius: '5px',
                        outline: 'none',
                    }}
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                />
            ))}
        </div>
    </div>
    
    <div className="mt-6 flex justify-center flex-wrap">
            <button type='submit' className="w-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-xl hover:bg-red-300 focus:outline-none focus:bg-red-800">
                Verify Otp
            </button>
        
    </div>
    <div className='flex justify-between items-center'>
    <div className='ml-4 mt-3 text-white flex flex-row'>
        <span className='text-white'>Time Remaining :  {" "}</span>
        <span className='font-semibold text-white '>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
    <button onClick={resendOTP} style={{color:seconds>0 || minutes >0 ? '#DFE3E8':' #0000FF'}} className=' font-semibold mt-3 mr-4' type='button' disabled={seconds > 0 || minutes > 0}>Resend OTP</button>
</div>

        
</form>

       
    </div>
</div>
</div>
    );
}

export default Otp;
