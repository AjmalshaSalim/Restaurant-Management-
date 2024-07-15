import {useState, useEffect} from 'react';
import BackgroundImage from '../../../assets/images/backgroundreg.jpg';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import Logo from '../../../assets/images/Gymsoft_Logo1-removebg-preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Input, Button, Typography} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import { OWNER_REGISTER } from '../../../actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import {redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function SignUp () {

  const navigate=useNavigate();


  useEffect (() => {
    AOS.init ();
  }, []);
  const [showPassword, setShowPassword] = useState (false);
  const [showConfirmPassword, setShowConfirmPassword] = useState (false);
  const handleTogglePassword = () => {
    setShowPassword (!showPassword);
  };
  const handleToggleConfirmPassword = (e) => {
    e.preventDefault ()
    setShowConfirmPassword (!showConfirmPassword);
  };
  const [formData, setFormData] = useState ({
    first_name: '',
    last_name: '',
    phone_number: null,
    email:'',
    password: '',
    gym_name: '',
    address:'',
    state:'',
    city: '',
    branch_count: null,
    district:'',
    gym_contact: null
  });
  const handleChange = e => {
    setFormData ({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData>>>>",formData);
    try {
        const response = await OWNER_REGISTER(formData)

        console.log("status>>>>",response);
        if(response.message === 'Gym owner registered successfully.') {
          toast.success("Gym owner registered successfully.")
            navigate('/Ownerlogin/')
           
        } else {
          toast.error('Register Failed');
            redirect('/OwnerRegister')
        }
    } catch (error) {
      toast.error('Register Failed add all input fields');
        console.error('Registration error:', error.message);
    }
}
  return (
    <section className="m-8 flex">
      <ToastContainer />
      <div
        className="w-2/5 h-full hidden lg:block"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img
          src={Logo}
          alt=""
          className=" w-[200px] absolute p-2"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <img
          src={BackgroundImage}
          alt="Background_image"
          className="h-[600px] w-[600px]  object-cover rounded-3xl"
        />
      </div>
      <div
        className="w-full lg:w-3/5 flex flex-col items-center justify-center"
        data-aos="fade-bottom"
        data-aos-duration="2000"
      >
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Register
          </Typography>

        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium "
              >
                First name
              </Typography>
              <Input
                size="lg"
                type="string"
                onChange={handleChange}
                value={formData.first_name}
                id="first_name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                Last name
              </Typography>
              <Input
                size="lg"
                type="string"
                onChange={handleChange}
                value={formData.last_name}
                id="last_name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                Mobile number
              </Typography>
              <Input
                size="lg"
                type="number"
                onChange={handleChange}
                value={formData.phone_number}
                id="phone_number"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                Name of your gym
              </Typography>
              <Input
                size="lg"
                type="string"
                onChange={handleChange}
                value={formData.gym_name}
                id="gym_name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
           
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
          <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                Email
              </Typography>
              <Input
                size="lg"
                type="email"
                onChange={handleChange}
                value={formData.email}
                id="email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                City
              </Typography>
              <Input
                size="lg"
                type="string"
                onChange={handleChange}
                value={formData.city}
                id="city"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                District
              </Typography>
              <Input
                size="lg"
                type="string"
                onChange={handleChange}
                value={formData.district}
                id="district"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                State
              </Typography>
              <Input
                size="lg"
                type="string"
                onChange={handleChange}
                value={formData.state}
                id="state"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            </div>
          <div className="mb-2 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-6 font-medium"
            >
              Full Address
            </Typography>
            <Input
              size="lg"
              type="string"
              onChange={handleChange}
              value={formData.address}
              id="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-[425px]"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                Number of branches
              </Typography>
              <Input
                size="lg"
                type="number"
                onChange={handleChange}
                value={formData.branch_count}
                id="branch_count"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div className="mb-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium"
              >
                Gym Contact
              </Typography>
              <Input
                size="lg"
                type="number"
                onChange={handleChange}
                value={formData.gym_contact}
                id="gym_contact"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            </div>
          <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
            <div className="mb-1 mt-1 flex flex-col flex-grow">
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium flex"
              >
                <div className=" w-11/12">
                  Password
                </div>
                <div className="w-1/12">
                  <button onClick={handleTogglePassword} className=" w-full">
                    {showPassword
                      ? <AiOutlineEye />
                      : <AiOutlineEyeInvisible />}
                  </button>
                </div>
              </Typography>
              <Input
                size="lg"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                value={formData.password}
                id="password"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
            <div className="mb-1 mt-1 flex flex-col flex-grow">
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
                id="confirmPw"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
            </div>
          </div>
          <Button type="submit" className="mt-6 lg:w-[425px]" fullWidth>
            Register Now
          </Button>

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;

