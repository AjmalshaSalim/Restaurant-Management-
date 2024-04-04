import React, { useState } from 'react'
import "./UserProfile.css"
import prfl from "../../assets/bg/about.jpg"
import { GiFireFlower } from "react-icons/gi";
import backgroundImage from '../../assets/images/breadcrumb-bg.jpg';
import { FaEdit } from "react-icons/fa";


export default function UserProfile() {

  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: "Jijomon js",
    age: "25 Years Old",
    weight: "76 Kg",
    height: "173 cm",
    daysCompleted: "25 Days Completed"
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const handleGoBack = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text" data-aos="fade-up">
                <h2>My Profile</h2>
                <div class="bt-option">
                  <a href="/home">Home</a>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {isEditing ? (
                <div className="flex flex-col items-center justify-center mx-auto max-w-md p-4 space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={profileDetails.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="age"
                    value={profileDetails.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="weight"
                    value={profileDetails.weight}
                    onChange={handleInputChange}
                    placeholder="Weight"
                    className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="height"
                    value={profileDetails.height}
                    onChange={handleInputChange}
                    placeholder="Height"
                    className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="daysCompleted"
                    value={profileDetails.daysCompleted}
                    onChange={handleInputChange}
                    placeholder="Days Completed"
                    className="w-full px-3 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={handleSaveClick}
                    className="w-full px-4 py-2 bg-red-500 text-white font-poppins rounded-md hover:bg-red-900 focus:outline-none focus:bg-blue-600"
                  >
                    Save
                  </button>

                  <button
                    onClick={handleGoBack}
                    className="w-full px-4 py-2 bg-gray-400 text-black font-poppins rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
                  >
                    Back
                  </button>

                </div>
              ) : (
                <>
                  <div className="section-title2 flex justify-between items-center">
                    <div className="flex items-center justify-start sm:justify-between w-full sm:w-auto">
                      <p className="mr-4">{profileDetails.name}</p>
                      <button onClick={handleEditClick} className='text-gray-500 text-4xl hover:text-red-600 pb-2'><FaEdit /></button>
                    </div>
                  </div>
                  <ul className="list-unstyled list mb-10">
                    <li>
                      <div className="list-icon"> <span><GiFireFlower /></span> </div>
                      <div className="list-text">
                        <p className='font-poppins'>{profileDetails.age}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon"> <span><GiFireFlower /></span>  </div>
                      <div className="list-text">
                        <p className='font-poppins'>{profileDetails.weight}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon"> <span><GiFireFlower /></span>  </div>
                      <div className="list-text">
                        <p className='font-poppins'>{profileDetails.height}</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-icon"> <span><GiFireFlower /></span>  </div>
                      <div className="list-text">
                        <p className='font-poppins'>{profileDetails.daysCompleted}</p>
                      </div>
                    </li>
                  </ul>

                </>
              )}
            </div>
            <div className="col-md-6">
              <div className="about-img">
                <div className="img"> <img src={prfl} className="img-fluid" alt="" /> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
