import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { useNavigate } from 'react-router-dom';


// Assume this is your payment data
export const paymentData = [
  {
    id: 1,
    name: 'John Doe',
    amount: 1500,
    status: 'Pending',
    date: '2024-04-01',
    plan: 'Basic Plan'
  },
  {
    id: 2,
    name: 'Jane Smith',
    amount: 1200,
    status: 'Confirmed',
    date: '2024-03-28',
    plan: 'Premium Plan'
  },
  // Add more payment objects as needed
];

export function ConfirmPayments() {
  const navigate= useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const handleClickView = ()=>{
navigate('../PaymentDetail')
  }
  return (
    <div className="w-full h-full overflow-auto p-5">
      <div className={`flex w-full pt-3 pb-4 border-x border-y rounded-xl ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-gray-800" : ""} `}>
        <div className=' w-5/6 h-10'>
          <Typography variant="h6" color="white" className='pl-5 mt-2'>
            Payments to Confirm
          </Typography>
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`} data-aos="fade-up" data-aos-duration="700">
        {paymentData.map(({ id, name, amount, status, date, plan }) => (
          <Card key={id} className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90" : "bg-white"} shadow-xl mt-16`}>
            <CardHeader className={`flex justify-center ${sidenavType === 'dark' ? "bg-gray-800" : "bg-white"} rounded-md py-4`}>
              <Typography variant="h6" color={sidenavType === 'dark' ? 'white' : 'black'} className="text-center">
                {name}
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h6" className={`text-center ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-900"}`}>
                ₹ {amount}
              </Typography>
              <Typography className={`text-center ${status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                {status}
              </Typography>
              <Typography className="text-center">{date}</Typography>
              <Typography className={`text-center ${sidenavType === 'dark' ? "text-gray-400" : "text-blue-gray-500"}`}>
                Plan: {plan}
              </Typography>
              <div className="flex justify-center">
                
                <Button variant="filled" className={`${sidenavType === 'dark' ? "bg-red-700 hover:bg-red-900" : "bg-black"} mr-2`} onClick={handleClickView}>
                  View
                </Button>
          
                {status === 'Confirmed'?
                <div></div>
              :
<Button variant="filled" className={`${sidenavType === 'dark' ? "bg-green-600 hover:bg-green-700" : "bg-green-500"} mr-2`}>
                  Confirm
                </Button>
              }
                
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ConfirmPayments;
