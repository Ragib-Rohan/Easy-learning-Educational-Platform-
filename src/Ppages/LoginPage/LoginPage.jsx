import React from 'react';
import './LoginPage.css';
import rocket from './image/rocket.svg';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import {useForm} from "react-hook-form";


const schema = yup.object().shape({ 
    userEmail: yup.string().email().required("Email number required..."),
    userPassword:yup.string().min(4).max(15).required("Fill the password field..."),
})




function LoginPage() {
    const { register, handleSubmit,formState: {errors} } = useForm({
        resolver: yupResolver(schema),
      });

      const submitForm = (data) => {
        console.log(data.username);
        // Axios.post("/studentRegister",{
            

        // }).then((response)=>{
        //    console.log(response);
        // });
      };

    return (  
        <section id="dis">
            <div className="container-fluid dis1">
                <div className="row justify-content-center" >
                    <div className="col-12">
                        <div className="row">
                            <div className=" col-6 d-none d-lg-block">
                                <img className="img-fluid Rocket" src={rocket} alt="" />
                            </div>
                            <div className=" col-lg-6 col-sm-12 LBox">
                                
                                <form action="" method='POST' className='LForm' onSubmit={handleSubmit(submitForm)} >
                                <h2>User LogIn</h2>
                                    <input type="email" placeholder="Enter Email Address"name="userEmail" id="userEmail" 
                                        {...register('userEmail')}
                                    />
                                     <small> {errors.username?.message} </small>
                                    <input type="password" placeholder="Enter Password" name="userPassword" id="userPassword"
                                        {...register('userPassword')}
                                    />
                                     <small> {errors.username?.message} </small>
                                     <div>     

                                    <input type="submit" name="signup" value="register" className='Fbutton' />
                                    </div>
                                </form>
                            </div>
                         
                        </div>
              
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;