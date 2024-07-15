import BackgroundImage from '../../../assets/images/BackgroundOtp.jpg';
import Logo from '../../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import {Input, Button, Typography} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useContext, useEffect, useState} from 'react';
import {CHANGE_PASSWORD} from "../../../actions/AuthActions";
import {useNavigate} from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { PhoneNumberContext } from '../../../context/phoneNumberContext';


export function ResetPwd () {
  useEffect (() => {
    AOS.init ();
  });
  const { phoneNumber } = useContext(PhoneNumberContext);
  const [showPassword, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  const handleTogglePassword = e => {
    e.preventDefault ();
    setShowPassword (!showPassword);
  };
  const handleToggleConfirmPassword = e => {
    e.preventDefault ();
    setShowConfirmPassword (!showConfirmPassword);
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState ({ phonenumber: phoneNumber });

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
    });
}
  const handleSubmit =async e => {
    e.preventDefault ();
    // const { newPassword, confirmPassword } = formData;
    // if (newPassword !== confirmPassword) {
    //   alert('New password and confirm password do not match.');
    //   return;
  // }
  try {
    const response = await CHANGE_PASSWORD(formData)
    if (response.message === 'Password reset successfully.') {
        navigate('/Ownerlogin')
    }
} catch (error) {
    console.error('error while sending phone number:', error.message);
}
    
   
  };

  return (
    <section className="m-8 flex gap-4">
      <div
        className="w-full lg:w-3/5 mt-24"
        data-aos="fade-Bottom"
        data-aos-duration="2000"
      >
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Reset Password
          </Typography>

        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className=" font-medium flex -mb-3"
            >
              <div className=" w-11/12">
                New Password
              </div>
              <div className="w-1/12">
                <button onClick={handleTogglePassword} className=" w-full">
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
            </Typography>
            <Input
              size="lg"
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange}
             id="newPassword" value={formData.newPassword} required minLength="7"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className=" font-medium flex"
            >
              <div className=" w-11/12">
                Confirm Password
              </div>
              <div className="w-1/12">
                <button
                  onClick={handleToggleConfirmPassword}
                  className=" w-full"
                >
                  {showConfirmPassword
                    ? <AiOutlineEye />
                    : <AiOutlineEyeInvisible />}
                </button>
              </div>
            </Typography>
            <Input
              size="lg"
              type={showConfirmPassword ? 'text' : 'password'}
              onChange={handleChange}
              id="confirmPassword" value={formData.confirmPassword} required minLength="7"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>

          <Button type='button' className="mt-6" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
          <Link to="/OwnerLogin">
            <Button className="mt-6" fullWidth>
              Back to Signup
            </Button>
          </Link>
          <div className="flex items-center justify-between gap-2 mt-6" />
        </form>

      </div>
      <div
        className="w-2/5 h-full hidden lg:block"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img
          src={Logo}
          alt=""
          className=" w-[200px] absolute p-2"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <img
          src={BackgroundImage}
          alt="BackgroundImage"
          className="h-[600px] w-[600px] object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default ResetPwd;
