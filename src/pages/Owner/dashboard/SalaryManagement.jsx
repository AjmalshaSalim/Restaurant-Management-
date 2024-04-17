import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Table,
  Avatar,
  Typography,
  Input,
} from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { Link } from "react-router-dom";
import placeholderImage from "../../../assets/gym -icons/User_Icon.svg"

export function SalaryManagement() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  // Dummy data for salaries
  const [salaries, setSalaries] = useState([
    { id: 1, name: "John Doe", role: "Trainer", salary: 3000 },
    { id: 2, name: "Jane Smith", role: "Staff", salary: 2500 },
    // Add more dummy data as needed
  ]);

  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="mt-10 mx-auto max-w-4xl">
        <Card className={`w-full ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-x border-y border-gray-800" : "bg-white border border-blue-gray-100"}`}>
          <CardBody className="p-4">
            <div className="mb-6 flex items-center justify-between">
              <Typography color="indigo" className="text-2xl font-semibold">Salary Management</Typography>
              <Link to='/dashboard'>
                <Button variant="filled" className={`${sidenavType === 'dark' ? "bg-gray-800" : " bg-blue-gray-600"}`}>Back</Button>
              </Link>
            </div>
            <Table className="w-full">
              <Table.Header>
                <tr>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>Salary ($)</Table.HeaderCell>
                </tr>
              </Table.Header>
              <Table.Body>
                {salaries.map((salary) => (
                  <tr key={salary.id}>
                    <Table.Cell>
                      <div className="flex items-center gap-4"> 
                        <Avatar size="sm" src={placeholderImage} alt={salary.name} />
                        <Typography>{salary.name}</Typography>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <Typography>{salary.role}</Typography>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        type="number"
                        defaultValue={salary.salary}
                        className={`${sidenavType === 'dark' ? "bg-gray-800" : " bg-blue-gray-100"}`}
                        onChange={(e) => {
                          // Handle salary change here
                        }}
                      />
                    </Table.Cell>
                  </tr>
                ))}
              </Table.Body>
            </Table>
            <div className="mt-6 flex justify-end">
              <Button type="submit" variant="filled" className={`${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Save Changes</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default SalaryManagement;
