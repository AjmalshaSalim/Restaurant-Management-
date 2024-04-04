import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from '@material-tailwind/react';
import { List_Attendance,FIlter_Attendance } from "../../../actions/AttendanceAction"
import {
  useMaterialTailwindController
} from "../../../context/index";

export const AttendanceList = () => {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [ActiveFilter, SetActiveFilter] = useState(false);
  const [userType, setUserType] = useState('');

  const handleFilterToggle = (() => {
    SetActiveFilter(!ActiveFilter);
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    const fetchAttendanceList = async () => {
      try {
        const response = await List_Attendance();

        const formattedAttendanceList = response.map(item => ({
          ...item,
          time: formatTime(item.time),
          date: formatDate(item.date)
        }));
        setAttendanceList(formattedAttendanceList);
      } catch (error) {
        console.error('Failed to fetch attendance list', error);
      }
    };

    fetchAttendanceList();
  }, []);

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  
  const handleFiltering = async (data) => {
    console.log("Selected user type:", data); // Log the selected value
    
    try {
      const response = await FIlter_Attendance(data);
      console.log(response);
      const formattedAttendanceList = response.map(item => ({
        ...item,
        time: formatTime(item.time),
        date: formatDate(item.date)
      }));
      setAttendanceList(formattedAttendanceList);
    } catch (error) {
      console.error('Failed to filter attendance:', error);
    }
  }
  

  return (
    <>
      <div className="w-full h-[920px] overflow-scroll">
        <div className={`mt-12 mb-8 flex flex-col gap-12 rounded-xl ${sidenavType === "dark" ? "bg-transparent border-x border-y border-gray-800" : "bg-white"
          }`} data-aos="fade-up"
          data-aos-duration="700">
          <Card className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90" : "bg-white"}`}>
            <CardHeader variant="filled" color="gray" className={`mb-8 p-6 ${sidenavType === 'dark' ? "bg-gray-900 border-x border-y border-gray-800" : "bg-gray-900"}`}>
              <Typography variant="h6" color="white">
                Attendance List
              </Typography>
            </CardHeader>
            <CardBody className={`overflow-x-scroll px-0 pt-0 pb-2 ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-40" : "bg-white"}`}>
              <div className='w-full flex justify-between items-center pr-6'>

                <div className="pr-2 ml-10">
                <select
              id="user_type"
              className={`py-2 pl-2 rounded-lg bg-transparent border-x border-y w-full ${sidenavType ? " text-gray-400 border-gray-700" : " text-blue-gray-600 border-blue-gray-100"}`}
                onChange={(e) => handleFiltering(e.target.value)} // Pass the selected value directly
                    >
                    <option className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>All</option>
                    <option value="user" className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>Members</option>
                    <option value="trainer" className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>Trainers</option>
                    <option value="staff" className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>Other Staffs</option>
                  </select>
                </div>
                <Button size='sm' className={` py-3 flex ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}
                  onClick={handleFilterToggle}><FaFilter /> &nbsp;Filter</Button>
              </div>
              {
                ActiveFilter ?
                  <div className={` w-[350px] h-[350px] z-1 rounded-lg border-x border-y ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800" : "bg-white border-blue-gray-100 "} absolute right-5`}>
                    <div>
                      <div></div>
                      <div className='w-full h-10'>
                        <button className={`${sidenavType === 'dark' ? " bg-gray-700 hover:bg-gray-600 text-black" : " bg-blue-gray-200 hover:bg-blue-gray-300"} w-8 h-8 rounded-full absolute right-2 top-2`} onClick={handleFilterToggle}>
                          <IoMdClose className='w-5 h-5 m-auto' />
                        </button>
                      </div>
                    </div>
                    <div className=' mt-5 w-full'>
                      <h4 className=' ml-20 pb-2'>Select Date</h4>
                      <input type="date" className={` ml-20 border-x border-y p-2 rounded-md ${sidenavType === 'dark' ? " border-gray-600 bg-gray-900 text-white" : " border-blue-gray-100"}`} />
                    </div>
                    <div className=' mt-32 ml-60'>
                      <Button size='sm' className={` py-3 flex ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}
                        onClick={handleFilterToggle}>Apply</Button>
                    </div>
                  </div>
                  :
                  ''
              }
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    <th className={`py-3 px-5 text-left ${sidenavType === 'dark' ? "border-b border-gray-900" : "border-b border-blue-50"}`}>
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        Profile Image
                      </Typography>
                    </th>
                    <th className={`py-3 px-5 text-left ${sidenavType === 'dark' ? "border-b border-gray-900" : "border-b border-blue-50"}`}>
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        Full Name
                      </Typography>
                    </th>
                    <th className={`py-3 px-5 text-left ${sidenavType === 'dark' ? "border-b border-gray-900" : "border-b border-blue-50"}`}>
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        Time
                      </Typography>
                    </th>
                    <th className={`py-3 px-5 text-left ${sidenavType === 'dark' ? "border-b border-gray-900" : "border-b border-blue-50"}`}>
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        Date
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceList.slice(0).reverse().map((data, key) => (
                    <tr key={key}>
                      <td className={`py-3 px-5 ${key === attendanceList.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`}>
                        <div className="flex items-center gap-4">
                          <Avatar
                            src={data.profile_image}
                            alt="profile_image"
                            size="sm"
                            variant="rounded"
                          />
                        </div>
                      </td>
                      <td className={`py-3 px-5 ${key === attendanceList.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`}>
                        <Typography
                          variant="small"
                          color={sidenavType === 'dark' ? "white" : "blue-gray"}
                          className="font-semibold"
                        >
                          {data.full_name}
                        </Typography>
                      </td>
                      <td className={`py-3 px-5 ${key === attendanceList.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`}>
                        <Typography className={`text-xs font-semibold ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"}`}>
                          {data.time}
                        </Typography>
                      </td>
                      <td className={`py-3 px-5 ${key === attendanceList.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`}>
                        <Typography className={`text-xs font-semibold ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"}`}>
                          {data.date}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default AttendanceList;
               



