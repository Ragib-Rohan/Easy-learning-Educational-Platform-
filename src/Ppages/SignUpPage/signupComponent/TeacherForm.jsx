import React from 'react';

import Axios from 'axios';
// import { useState } from "react";
// import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"; 

import teacher from '../image/teacher.svg';

const schema = yup.object().shape({
    username: yup.string().required("User Name Required..."),
    Profession:yup.string().required(""),
    status:yup.string().required(""),
    gender:yup.string().required(""),
    subjectName:yup.string().required("Fill the filds ..."),
    AcademicName: yup.string().required("Fill the Address field..."),
    userNumber:yup.string().min(11).max(11).required("Contact number required..."),
    userEmail: yup.string().email().required("Email number required..."),
    userAddress:yup.string().required("Fill the Address field..."),
    userPassword:yup.string().min(4).max(15).required("Fill the password field..."),
    userPassword2:yup.string().oneOf([yup.ref("userPassword"), null])
});


function TeacherForm() {

    const { register, handleSubmit,formState: {errors} } = useForm({
        resolver: yupResolver(schema),
      });



      const submitForm = (data) => {
        console.log(data);
        Axios.post("/teacherRegister",{
            username:data.username,
            Profession:data.Profession,
            status:data.status,
            subjectName:data.subjectName,
            gender:data.gender,
            organizationName:data.organizationName,
            userEmail:data.userEmail,
            userNumber:data.userNumber,
            userAddress:data.userAddress,
            userPassword:data.userPassword

        }).then((response)=>{
            console.log(response);
        });
       
      };


    return ( 
        <section className='container'>
            <div className='row justify-content-center'>
                <div className='col-10 d1'>
                    <div className='row'>
                        <div className='col-5'>
                         <img src={teacher} className='img-fluid' alt="" />
                        </div>
                        <div className='col-7'>
                        <form action="" className='dd'method='POST' onSubmit={handleSubmit(submitForm)}>
                    <h2>Teachers Info...</h2>

                    <div className='f-control'>
                                    <i className="fas fa-user-circle"></i>
                                    <input type="text" name="username"  id="username"  placeholder='Enter Full Name..'
                                    {...register('username')}
                                    />
                                <small> {errors.username?.message} </small>

                                </div>
                                

                                

                        <div className='SpaN'>
                                <span className="SpanA">Profession :</span>
                                    
                                    <div className="SpanB">
                                        <input type="radio" name="Profession" value="self-Employed" {...register('Profession', { required: true })}/><span>Self-Employed</span>
                                        <input type="radio" name="Profession" value="teacher" {...register('Profession', { required: true })}/><span>Teacher</span>                                      
                                    </div>
                                <small>{errors.Profession?.message}</small>         
                        </div>

                        
                        <div className='SpaN'>
                                    <div className="SpanB">
                                        <input type="radio" name="status" value="serving-in"  {...register('status', { required: true })} /><span>Serving-in</span>
                                        <input type="radio" name="status" value="studying-in" {...register('status', { required: true })} /><span>Studying-in</span>
                                        
                                    </div>
                                    <small>{errors.status?.message}</small>  
                        </div>


                        <div className='f-control'>
                            <i className="fas fa-book"></i>
                            <input type="text" name="organizationName" id="organizationName"  placeholder='Enter School or Collage name..'
                                   
                            {...register('orgazationName')}
                                />
                            <small>{errors.organizationName?.message}</small>                          
                        </div>


                        <span className='SpanA'>Teaching Subjects names:</span>
                        <div className='f-control'>
                                <input type="text"name="subjectName" placeholder='Subject Names'
                                {...register('subjectName')}
                                />
                                <small>{errors.subjectName?.message}</small>   
                        </div>
                        

                        <div className='f-control'>
                            <div className='SpaN'>
                                <span className="SpanA">Gender :</span>
                                    
                                    <div className="SpanB">
                                        <input type="radio" name="gender" value="Female" {...register('gender', { required: true })}/><span>Female</span>
                                        <input type="radio" name="gender" value="Male" {...register('gender', { required: true })}/><span>Male</span>
                                        
                                    </div>
                                </div>
                                <small>{errors.gender?.message}</small>  
                        </div>
                            
                                
                        <div className='f-control'>
                                <i className="fas fa-phone"></i>
                                    <input type="text" name="userNumber" id="userNumber"  placeholder='Contact Number'
                                   
                                    {...register('userNumber')}
                                    />
                                     <small>{errors.userNumber?.message}</small>  
                                </div>

                                <div className='f-control'>
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" name="userEmail" id="userEmail"  placeholder='Your Email@gmail.com'
                                    
                                    {...register('userEmail')}
                                    />
                                     <small>{errors.userEmail?.message}</small> 
                                </div>
                               

                                <div className='f-control'>
                                    <i className="fas fa-house-user"></i>
                                    <input type="text" name="userAddress" id="userAddress"  placeholder='Address'
                                    
                                    {...register('userAddress')}
                                    />
                                     <small>{errors.userAddress?.message}</small> 
                                </div>

                                <div className='f-control'>
                                    <i className="fas fa-unlock-alt"></i>
                                    <input type="password" name="userPassword" id="userPassword"  placeholder='Password'
                                    
                                    {...register('userPassword')}
                                    />
                                     <small>{errors.userPassword?.message}</small> 
                                </div>


                                <div className='f-control'>
                                <i className="fas fa-lock"></i>
                                    <input type="password" name="userPassword2" id="userPassword2"  placeholder='Confirm Password'
                                    {...register('userPassword2')}
                                    />
                                    <small>{errors.userPassword2 && "Passwords Should Match"}</small> 
                                </div>    
                                <div>       
                                    <input type="submit" name="signup" value="Signup" className='Fbutton' />
                                </div>
                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default TeacherForm;