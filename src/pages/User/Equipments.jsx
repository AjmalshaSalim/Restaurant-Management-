import React from 'react'
import img2 from '../../assets/gym-equipments/img2.png'
import img3 from '../../assets/gym-equipments/img3.png'
import img4 from '../../assets/gym-equipments/img4.png'
import img5 from '../../assets/gym-equipments/img5.png'
import img6 from '../../assets/gym-equipments/img6.png'
import img7 from '../../assets/gym-equipments/img7.png'
import img8 from '../../assets/gym-equipments/img8.png'
import  Navbar  from "../../components/User/Navbar.jsx"
import { TERipple } from 'tw-elements-react';

const equipments=[{
    id:1,
    img:img7,
    title:'Equipment 1',
    description:'The gym equipment enhances your strength.'
},{
    id:2,
    img:img2,
    title:'Equipment 2',
    description:'The gym equipment enhances your strength.'
},{
    id:3,
    img:img3,
    title:'Equipment 3',
    description:'The gym equipment enhances your strength.'
},{
    id:4,
    img:img4,
    title:'Equipment 4',
    description:'The gym equipment enhances your strength.'
},{
    id:5,
    img:img5,
    title:'Equipment 5',
    description:'The gym equipment enhances your strength.'
},{
    id:6,
    img:img6,
    title:'Equipment 6',
    description:'The gym equipment enhances your strength.'
},{
    id:7,
    img:img7,
    title:'Equipment 7',
    description:'The gym equipment enhances your strength.'
},{
    id:8,
    img:img8,
    title:'Equipment 8',
    description:'The gym equipment enhances your strength.'
},
{
    id:9,
    img:img4,
    title:'Equipment 8',
    description:'The gym equipment enhances your strength.'
},
{
    id:10,
    img:img3,
    title:'Equipment 8',
    description:'The gym equipment enhances your strength.'
}]

export default function Equipments() {
  return (
   <div className='min-h-screen bg-black'>
      <Navbar bgColor="bg-black" />
      <h1 className="text-4xl font-bold text-white text-center pt-32 animate-pulse"> Equipments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 mt-16" data-aos="fade-up">
        {equipments.map((equipment) => (
          <div   
          className="block rounded-lg bg-white shadow-inner shadow-red-900 dark:bg-neutral-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:text-red-500">
          <TERipple>
            <div data-aos="fade-up"
          data-aos-delay={`${equipment.id * 100}`} 
              className="relative overflow-hidden bg-cover bg-no-repeat object-cover h-64 ">
              <img
                className="rounded-t-lg h-full w-full transition duration-300 ease-in-out"
                src={equipment.img}
                alt={equipment.title} />
           
            </div>
          </TERipple>
          <div className="p-4" data-aos="fade-up" data-aos-delay={`${equipment.id * 100}`}>
            <h5
              className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50 transition duration-300 ease-in-out">
              {equipment.title}
            </h5>
            <p className="text-sm text-neutral-600 dark:text-neutral-200 transition duration-300 ease-in-out">
              {equipment.description}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
