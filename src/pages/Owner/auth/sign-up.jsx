import BackgroundImage from "../../../assets/images/backgroundreg.jpg"
import Logo from "../../../assets/images/Gymsoft_Logo1.jpg"
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function SignUp() {
  return (
    <section className="m-8 flex">
            <div className="w-2/5 h-full hidden lg:block">
            <img src={Logo} alt="" className=" w-[200px] absolute p-2" />
        <img src={BackgroundImage} alt="Background_image"
          className="h-[600px] w-[600px]  object-cover rounded-3xl"/>
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Register</Typography>
          
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
  <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
    <div className="mb-1 flex flex-col flex-grow">
      <Typography variant="small" color="blue-gray" className=" font-medium ">
        First name
      </Typography>
      <Input
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
    <div className="mb-1 flex flex-col flex-grow">
      <Typography variant="small" color="blue-gray" className=" font-medium">
        Last name
      </Typography>
      <Input
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  </div>
  <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
    <div className="mb-1 flex flex-col flex-grow">
      <Typography variant="small" color="blue-gray" className=" font-medium">
        Mobile number
      </Typography>
      <Input
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
    <div className="mb-1 flex flex-col flex-grow">
      <Typography variant="small" color="blue-gray" className=" font-medium">
        Name of your gym
      </Typography>
      <Input
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  </div>
  <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
    <div className="mb-1 flex flex-col flex-grow">
      <Typography variant="small" color="blue-gray" className=" font-medium">
        City
      </Typography>
      <Input
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
    <div className="mb-1 flex flex-col flex-grow">
      <Typography variant="small" color="blue-gray" className=" font-medium">
        Pincode
      </Typography>
      <Input
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  </div>
  <div className="mb-1 flex flex-col gap-6">
    <Typography variant="small" color="blue-gray" className="-mb-6 font-medium">
      Address
    </Typography>
    <Input
      size="lg"
      placeholder=""
      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-[425px]"
      labelProps={{
        className: "before:content-none after:content-none",
      }}
    />
  </div>
  {/* <Checkbox
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center justify-start font-medium"
          >
            I agree the&nbsp;
            <a
              href="#"
              className="font-normal text-black transition-colors hover:text-gray-900 underline"
            >
              Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      /> */}
  <Button className="mt-6 lg:w-[425px]" fullWidth>
    Register Now
  </Button>

  <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
    Already have an account?
    <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
  </Typography>
</form>


      </div>
    </section>
  );
}

export default SignUp;
