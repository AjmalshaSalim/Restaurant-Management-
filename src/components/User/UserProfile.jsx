import React, { useEffect, useState } from 'react';
import "./UserProfile.css";
import { GiFireFlower } from "react-icons/gi";
import backgroundImage from '../../assets/images/breadcrumb-bg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import store from "../../store"
import { User_Profile, Edit_User_Profile } from "../../actions/UserActions"

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    weight: 0,
    height: 0,
    days_since_joining: 0,
    profile_picture: null,
    initial_weight: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await User_Profile();
        setFormData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserProfile();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'profile_picture' ? files[0] : value,
    }));
  };

  const handleGoBack = () => {
    setIsEditing(false);
  };

  const handleLogout = () => {
    store.dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('userAccessToken');
    localStorage.removeItem('userRefreshToken');
    navigate('/userlogin')
  };

  const handleChangePassword = () => {
    console.log("Change Password");
  };

  const handleSaveClick = async () => {
    try {
      console.log(formData)
      const response = await Edit_User_Profile(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
                  <Link to='/home'>
                    <p>Home</p>
                  </Link>
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
            <div className="col-md-6 mt-4">
              <div className="about-img">
                {
                  formData.profile_picture ? (<div className="img"> <img src={formData.profile_picture} className="img-fluid h-[350px]" alt="" /> </div>) :
                    (<div className='text-gray-500 font-poppins justify-center'>Loading profile image...</div>)
                }
              </div>
            </div>
            <div className="col-md-6">
              <div className="details">
                {isEditing ? (
                  <div className="flex flex-col items-center justify-center mx-auto max-w-md p-4 space-y-4">
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-3 py-2 rounded font-poppins border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-3 py-2 rounded font-poppins border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="Weight"
                      className="w-full px-3 py-2 rounded font-poppins border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="Height"
                      className="w-full px-3 py-2 rounded font-poppins border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="number"
                      name="days_since_joining"
                      value={formData.days_since_joining}
                      onChange={handleInputChange}
                      placeholder="Days Since Joining"
                      className="w-full px-3 py-2 rounded font-poppins border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="file"
                      name="profile_picture"
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded font-poppins bg-white border-gray-300 focus:outline-none focus:border-blue-500"
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
                        <p className=" mt-2 text-lg md:text-3xl">{formData.first_name}<span className='ml-2'>{formData.last_name}</span> </p>
                      </div>
                    </div>
                    <ul className="list-unstyled list mb-10">
                      <li>
                        <div className="list-icon"> <span><GiFireFlower /></span> </div>
                        <div className="list-text">
                          <p className='font-poppins'>Age : {formData.age} years old</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-icon"> <span><GiFireFlower /></span>  </div>
                        <div className="list-text">
                          <p className='font-poppins'>Initial Weight :  {formData.initial_weight} Kg</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-icon"> <span><GiFireFlower /></span>  </div>
                        <div className="list-text">
                          <p className='font-poppins'>Current Weight :  {formData.weight} Kg</p>
                        </div>
                      </li>

                      <li>
                        <div className="list-icon"> <span><GiFireFlower /></span>  </div>
                        <div className="list-text">
                          <p className='font-poppins'>Height : {formData.height} cm</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-icon"> <span><GiFireFlower /></span>  </div>
                        <div className="list-text">
                          <p className='font-poppins'>Days Completed : {formData.days_since_joining} days</p>
                        </div>
                      </li>
                    </ul>
                    <div className='flex flex-col sm:flex-row sm:justify-between mb-4'>
                      <button onClick={handleEditClick} className='text-gray-500 lg:text-4xl text-2xl hover:text-red-600 pb-2 mb-2 sm:mb-0 sm:mr-2'>Edit</button>
                      <button onClick={handleChangePassword} className='text-gray-500 lg:text-4xl text-2xl hover:text-red-600 pb-2 mb-2 sm:mb-0 sm:mr-2'>Change Password</button>
                      <button onClick={handleLogout} className='text-gray-500 lg:text-4xl text-2xl hover:text-red-600 pb-2 mb-2 sm:mb-0 sm:mr-2'>Logout</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
