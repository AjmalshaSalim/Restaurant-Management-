import BackgroundImage from '../../../assets/images/BackgroundOtp.jpg';
import Logo from '../../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import {Input, Button, Typography} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
export function ResetPwd () {
  useEffect (() => {
    AOS.init ();
  });
  const navigate = useNavigate;
  const [formData, setFormData] = useState ({password: ''});
  const handleChange = e => {
    setFormData ({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log (formData);
  const handleSubmit = async e => {
    if (formData.password.trim () === '') {
      alert ('Please enter your password');
      return;
    } else {
      navigate ('/');
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
              className="-mb-3 font-medium"
            >
              New Password
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onChange={handleChange}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Re-enter Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onChange={handleChange}
            />
          </div>

          <Button className="mt-6" fullWidth>
            Submit
          </Button>
          <Link to="/auth/sign-in">
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
