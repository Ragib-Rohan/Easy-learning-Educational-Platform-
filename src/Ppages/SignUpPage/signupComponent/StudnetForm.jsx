import student from '../image/student.svg';
import Axios from 'axios';
// import { useState } from "react";
// import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"; 

const schema = yup.object().shape({
    username: yup.string().required("User Name Required..."),
    AcademicName: yup.string().required("Fill the Address field..."),
    userNumber:yup.string().min(11).max(11).required("Contact number required..."),
    userEmail: yup.string().email().required("Email number required..."),
    userAddress:yup.string().required("Fill the Address field..."),
    userPassword:yup.string().min(4).max(15).required("Fill the password field..."),
    userPassword2:yup.string().oneOf([yup.ref("userPassword"), null])
})


const StudnetForm=()=> {

    const { register, handleSubmit,formState: {errors} } = useForm({
        resolver: yupResolver(schema),
      });



    const submitForm = (data) => {
        console.log(data);
        Axios.post("/studentRegister",{
            username:data.username,
            AcademicName:data.AcademicName,
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
                <div className='col-10 d1 '>
                 <div className='row justify-content-center'>
                    <div className='col-6 formImage d-none d-lg-block'>
                        <img src={student} className='img-fluid' alt="" />
                    </div>
                    <div className='col-6 '>
                    <form action="" method='POST' className='dd' onSubmit={handleSubmit(submitForm)}>

                                <h2>Students Info...</h2>
                                <div className='f-control'>
                                    <i className="fas fa-user-circle"></i>
                                    <input type="text" name="username"  id="username"  placeholder='Enter Full Name..'
                                    {...register('username')}
                                    />
                                <small> {errors.username?.message} </small>

                                </div>
                                

                                <div className='f-control'>
                                    <i className="fas fa-book"></i>
                                    <input type="text" name="AcademicName" id="AcademicName"  placeholder='Enter School or Collage name..'
                                   
                                    {...register('AcademicName')}
                                    />
                                     <small>{errors.AcademicName?.message}</small>                          

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
                                    <input type="submit" name="signup" value="Sign Up" className='Fbutton' />
                                </div>
                               
                                </form>
                    </div>
                 </div>
                    
                </div>
            </div>
        </section>
     );
     
}

export default StudnetForm;