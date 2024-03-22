import {useState, useEffect} from 'react';
import BackgroundImage from '../../../assets/images/backgroundlog.jpg';
import Logo from '../../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import {Input, Button, Typography} from '@material-tailwind/react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import AOS from 'aos';
import { DemoAction1 } from '../../../actions/DemoActions';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';

export function SignIn () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect (() => {
    AOS.init ();
  }, []);
  const [showPassword, setShowPassword] = useState (false);
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword (!showPassword);
  };
  const [formData, setFormData] = useState ({username: '', password: ''});

  const handleChange = e => {
    e.preventDefault ();
    setFormData ({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData>>>>", formData);
    try {
      const response = await DemoAction1(formData,dispatch);
      console.log("response>>>>", response);
      console.log("status>>>>", response.status);
      if (response.access) {
        console.log("acesses grantedc >>>>");
        navigate('/')
      } else {
        alert("Login Failed");
        navigate('/sign-in'); // Use navigate instead of redirect
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  }
  return (
    <section className="m-8 flex gap-4">
      <div
        className="w-full lg:w-3/5 mt-24"
        data-aos="fade-bottom"
        data-aos-duration="2000"
      >
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Sign In
          </Typography>

        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Mobile Number
            </Typography>
            <Input
              type="number"
              size="lg"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className=" font-medium flex -mb-3"
            >
              <div className=" w-11/12">
                Password
              </div>
              <div className="w-1/12">
                <button onClick={handleTogglePassword} className=" w-full">
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
            </Typography>
            <Input
              type={showPassword ? 'text' : 'password'}
              size="lg"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Sign In
          </Button>
          <Link to="/auth/Forgot-pw">
            <Button className="mt-6" fullWidth>
              Forgot Password
            </Button>
          </Link>

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">
              Create account
            </Link>
          </Typography>
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
          className="h-[600px] w-[600px]  object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;