import React from 'react';
import './SignUpPage.css';




import teacher from './image/teacher.svg';
import student from './image/student.svg';
import Sicon from './image/studenticon.png';
import Ticon from './image/teachericon.png';

import {Link} from 'react-router-dom';


function SignUpPage() {
    return (  
          <section className='container-fluid dd'  id="dis1">
                <div className='row justify-content-center'>
                    <div className='col-10'>
                        <h2>Register as:</h2>
                        <div className='row'>
                            <div className='col-6'>
                        
                            <div className='row justify-content-center'>
                                <div className='col-8 d-none d-lg-block d-md-block mt-4'>
                                    <img src={teacher} className="img-fluid TAnimation" alt="" />
                            
                                </div>
                            </div>
                                
                            <Link to="/TeacherForm">
                                <button className='Sbutton'><img src={Ticon} className="icon" alt="" /> Teacher</button>
                            </Link>
                        
                            </div>
                            <div className='col-6'>
                                    <div className='row justify-content-center'>
                                        <div className='col-8 d-none d-lg-block d-md-block '>
                                            <img src={student} className="img-fluid SAnimation" alt="" />
                                    
                                        </div>
                                    </div>
                            
                                    <Link to="/StudentForm">
                                        <button  className='Sbutton'> <img src={Sicon} className="icon" alt="" /> Student </button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    );
}

export default SignUpPage;