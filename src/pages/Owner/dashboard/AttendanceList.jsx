import React, { useState } from 'react'
import { useEffect } from 'react';
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
  Chip,
  Button,
  Select,
  Option
} from '@material-tailwind/react';
import {
  useMaterialTailwindController
} from "../../../context/index";
import { AttendanceSampleData } from '../../../data/Attendance-sample-data';
export const AttendanceList = () => {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } =
    controller;
  const [ActiveFilter, SetActiveFilter] = useState(false);
  const handleFilterToggle = (() => {
    SetActiveFilter(!ActiveFilter);
  })
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className=" w-full h-[920px] overflow-scroll">
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
                    // value={userData.gender}
                    // onChange={handleChange}
                    name="gender"
                    className={`py-2 pl-2 rounded-lg bg-transparent border-x border-y w-full ${sidenavType ? " text-gray-400 border-gray-700" : " text-blue-gray-600 border-blue-gray-100"}`}
                  >
                    <option value="male" className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>All</option>
                    <option value="male" className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>Members</option>
                    <option value="female" className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>Trainers</option>
                    <option value="female" className={`${sidenavType === 'dark' ? "bg-gray-800 py-1" : "bg-white"}`}>Other Staffs</option>
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
                    {[
                      'Member',
                      'Login Time',
                      'Active Status',
                      '',
                    ].map(el => (
                      <th
                        key={el}
                        className={`py-3 px-5 text-left ${sidenavType === 'dark' ? "border-b border-gray-900" : "border-b border-blue-50"}`}
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AttendanceSampleData.map(
                    ({ img, name, phone, time, timeRange, status }, key) => {
                      const className = `py-3 px-5 ${key === AttendanceSampleData.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`;

                      return (
                        <tr key={name}>
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <Avatar
                                src={img}
                                alt={name}
                                size="sm"
                                variant="rounded"
                              />
                              <div>
                                <Typography
                                  variant="small"
                                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                                  className="font-semibold"
                                >
                                  {name}
                                </Typography>
                                <Typography className="text-xs font-normal text-blue-gray-500">
                                  {phone}
                                </Typography>
                              </div>
                            </div>
                          </td>

                          <td className={className}>
                            <Typography className={`text-xs font-semibold ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                              }`}>
                              {time + " " + timeRange}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Chip
                              variant="gradient"
                              color={status ? 'green' : 'red'}
                              value={status ? 'Regular' : 'Irregular'}
                              className="py-0.5 px-2 text-[11px] font-medium w-fit rounded-sm"
                            />
                          </td>
                        </tr>
                      );
                    }
                  )}
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