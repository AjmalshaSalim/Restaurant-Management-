import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardHeader, CardBody, Typography, Button, Input, FileInput } from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { Link } from 'react-router-dom';

// Sample payment data
export const paymentData = [
  {
    id: 1,
    name: 'John Doe',
    amount: 1500,
    status: 'Pending',
    date: '2024-04-01',
    plan: 'Basic Plan',
    transactionId: '123456',
    transactionTime: '10:30 AM',
    screenshot: 'https://storage.googleapis.com/support-forums-api/attachment/thread-62866824-7957245932779480394.jpg' // URL or path to the screenshot
  },
  // Add more payment objects as needed
];

export function PaymentDetail() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="w-full h-full overflow-auto py-5">
      <div className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6`} data-aos="fade-up" data-aos-duration="700">
        {paymentData.map(({ id, name, amount, status, date, plan, transactionId, transactionTime, screenshot }) => (
          <Card key={id} className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-gray-800" : "bg-white"} shadow-xl mt-2 pb-12 border-x border-y`}>
            <CardHeader className={`flex justify-center ${sidenavType === 'dark' ? "bg-gray-800" : "bg-white"} rounded-md py-4`}>
              <Typography variant="h6" color={sidenavType === 'dark' ? 'white' : 'black'} className="text-center">
                Payment Details
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h6" className={`text-center pb-2 border-b ${sidenavType === 'dark' ? "text-white border-gray-800" : "text-blue-gray-900"}`}>
               Amount :  ₹ {amount}
              </Typography>
              <Typography className={`text-center pb-2 ${status === 'Confirmed' ? 'text-green-600 ' : 'text-yellow-600'}`}>
                Status  :  {status}
              </Typography>
              <Typography className="text-center">Date : {date}</Typography>
              <Typography className={`text-center pb-2 border-b ${sidenavType === 'dark' ? "text-gray-400 border-gray-800" : "text-blue-gray-500"}`}>
                Plan: {plan}
              </Typography>
              <div className="flex flex-col items-center gap-2">
                <Typography className={`text-center ${sidenavType === 'dark' ? "text-gray-400" : "text-blue-gray-500"}`}>
                  Transaction ID: {transactionId}
                </Typography>
                <Typography className={`text-center ${sidenavType === 'dark' ? "text-gray-400" : "text-blue-gray-500"}`}>
                  Time of Transaction: {transactionTime}
                </Typography>
                <Typography className={`text-center ${sidenavType === 'dark' ? "text-gray-400" : "text-blue-gray-500"}`}>
                  Screenshot:
                </Typography>
                <div className=' w-72 h-60 overflow-scroll'>
                <img src={screenshot} alt="Screenshot" className="" />
                </div>               
              </div>
              <div className="flex justify-center">
                <Link to='/dashboard/ConfirmPayments'>
                <Button variant="filled" className={`${sidenavType === 'dark' ? "bg-red-700 hover:bg-red-900" : "bg-black"} mr-2`}>
                  Back
                </Button>
                </Link>
                
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PaymentDetail;
