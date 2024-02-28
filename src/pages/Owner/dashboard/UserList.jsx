import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from '@material-tailwind/react';
import {
  useMaterialTailwindController
} from "../../../context/index";
import {authorsTableData} from '../../../data/authors-table-data';
export function UserList() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType} =
    controller;
  return (
    <div className={`mt-12 mb-8 flex flex-col gap-12 rounded-t-xl ${
      sidenavType === "dark" ? "bg-black" : "bg-white"
    }`}>
    <Card className={`${sidenavType === 'dark'? "bg-black" : "bg-white"}`}>
        <CardHeader variant="filled" color="gray" className={`mb-8 p-6 ${sidenavType === 'dark'? "bg-red-700" : "bg-black"}`}>
          <Typography variant="h6" color="white">
            Members List
          </Typography>
        </CardHeader>
        <CardBody className={`overflow-x-scroll px-0 pt-0 pb-2 ${sidenavType === 'dark'? "bg-black" : "bg-white"}`}>
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  'Member',
                  'Job',
                  'status',
                  'Joined',
                  '',
                ].map (el => (
                  <th
                    key={el}
                    className={`py-3 px-5 text-left ${sidenavType ==='dark'? "border-b border-gray-900" :"border-b border-blue-50" }`}
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
              {authorsTableData.map (
                ({img, name, email, job, online, date}, key) => {
                  const className = `py-3 px-5 ${key === authorsTableData.length - 1 ? '' : (sidenavType === 'dark' ? 'border-b border-gray-900' : 'border-b border-red-50')}`;

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
                              color={sidenavType === 'dark'? "white" : "blue-gray"}
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className={`text-xs font-semibold ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? 'green' : 'red'}
                          value={online ? 'active' : 'inactive'}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className={`text-xs font-semibold ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className={`text-xs font-semibold ${
                            sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                          }`}
                        >
                          Edit
                        </Typography>
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
  )
}

export default UserList