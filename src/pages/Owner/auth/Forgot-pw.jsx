import BackgroundImage from '../../../assets/images/BackgroundForg.jpg';
import Logo from '../../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// import { SEND_OTP } from "../../../actions/AuthActions";
import {Input, Button, Typography} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function ForgotPassword () {
useEffect(()=>{
  AOS.init();
})
  const navigate = useNavigate ();
  const [formData, setFormData] = useState ({phonenumber: ''});
  const handleChange = e => {
    setFormData ({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log (formData);

  const handleSubmit = async e => {
    if (formData.phonenumber.trim () === '') {
      alert ('Please enter your mobile number');
      return;
    } else {
      navigate ('/Otp');
    }
    // e.preventDefault();
    // console.log(formData.phonenumber);
    // try {
    //     const response = await SEND_OTP(formData);
    //     navigate('/Otp');

    // } catch (error) {
    //     console.error('Error while sending phone number:', error.message);
    // }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24" data-aos="fade-bottom" data-aos-duration="2000">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Forgot Password
          </Typography>

        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Mobile Number
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              id="phonenumber"
              value={formData.phonenumber}
              name="phonenumber"
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              type="number"
            />

          </div>

          <Button
            className="mt-6"
            fullWidth
            onClick={handleSubmit}
            type="submit"
          >
            Send OTP
          </Button>
          <Link to="/auth/Otp">
            <Button className="mt-6" fullWidth>
              Back to Sign In
            </Button>
          </Link>

        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block" data-aos="fade-left" data-aos-duration="2000">
        <img src={Logo} alt="" className=" w-[200px] absolute p-2"  data-aos="fade-right" data-aos-duration="2000"/>
        <img
          src={BackgroundImage}
          alt="BackgroundImage"
          className="h-[600px] w-[600px]  object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default ForgotPassword;
