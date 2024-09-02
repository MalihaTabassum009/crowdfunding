import React from 'react';
import './DashBoard.css';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaIdCard } from "react-icons/fa";


const DashBoard = () => {
    return (
        <div className='wrapper'>
            <div className=''>
                <form action=''>
                    <h1 className='font-bold text-neutral-100'>Personal Information Form</h1>


                    {/* FIRST NAME AND LAST NAME */}
                    <div className='name-box'>
                        <div className='input-box'>
                            <input type='text' placeholder='enter your first name' required />
                            <FaUser className='icon' />
                        </div>

                        <div className='input-box'>
                            <input type='text' placeholder='enter your last name' required />
                            <FaUser className='icon' />
                        </div>
                    </div>

                    
                    <div className='FM-box'>
                        {/* Father's name */}
                        <div className='input-box'>
                            <input type='text' placeholder="enter your father's name" required />
                        </div>

                        {/* MOTHER's name */}
                        <div className='input-box'>
                            <input type='text' placeholder="enter your mother's name" required />
                        </div>
                    </div>

                    

                    {/* BIRTHDATE AND GENDER */}
                    <div className='BG-box'>

                        {/* BIRTHDATE */}
                        <div className='input-box'>
                            <input type='date' placeholder='enter your Birthdate' required />
                        </div>

                        {/* GENDER */}
                        <div className='input-box'>
                            {/* <select required>
                                <option value="" disabled selected hidden>Gender</option>
                                <option value="male">Male</option>                           
                                <option value="female">Female</option>
                            </select> */}

                            <select required value="defaultValue"> {/* or use defaultValue */}
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    

                    {/* PLACE OF BIRTH */}
                    <div className='input-box'>
                        <input type='text' placeholder='place of birth' required />
                    </div>


                    {/* PRESENT ADDRESS */}
                    <div className='input-box'>
                        <input type='text' placeholder='present address' required />
                        <FaMapMarkerAlt className='icon' />
                    </div>

                    
                    {/* PARMANENT ADDRESS */}
                    <div className='input-box'>
                        <input type='text' placeholder='parmanent address' required />
                    </div>


                    {/* PHONE NUMBER */}
                    <div className='input-box'>
                        <input type='tel' placeholder='01975-921799' required />
                        <FaPhoneAlt className='icon' />
                    </div>

                    
                    {/* SOCIAL IDENTIFICATION NUMBER */}
                    <div className='input-box'>
                        <input type='text' placeholder='Social Identification No.' required />
                        <FaIdCard className='icon' />
                    </div>



                    <button type='submit'>Submit</button> 
                    
                    <button type='reset' className='reset-button'>Reset</button>


                </form>
            </div>
        </div>
    );
};

export default DashBoard;