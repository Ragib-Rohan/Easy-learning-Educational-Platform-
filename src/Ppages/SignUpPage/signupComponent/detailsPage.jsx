import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import teacher from '../image/teacher.svg';


function detailsPage(user, setUser) {


    let name,value;

    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({... user,[name]:value});
    }

    return ( 
        <section className='container'>
            <div className='row justify-content-center'>
                <div className='col-10 d1 '>
                 <div className='row justify-content-center'>
                    <div className='col-6 mt-5'>
                        <img src={teacher} className='img-fluid' alt="" />
                    </div>
                    <div className='col-6 '>
                    <form action="" method='POST' className='dd'>

                                <h2>Students Info...</h2>
                                <div className='f-control'>
                                    <input type="text" name="name" id=""  placeholder='Enter Full Name..'
                                    value={user.name}
                                    onChange={handleInputs}

                                    />
                                    <small>Error message</small> 

                                </div>
                                

                                <div className='f-control'>
                                    <input type="text" name="academicName" id=""  placeholder='Enter School or Collage name..'
                                    value={user.academicName}
                                    onChange={handleInputs}

                                    />
                                    <small>Error message</small>                             

                                </div>

                                <div className='f-control'>
                                    <input type="text" name="grade" id=""  placeholder='Which gread you are in..'
                                    value={user.grade}
                                    onChange={handleInputs}

                                    />
                                    <small>Error message</small> 
                                </div>

                                
                                <div className='f-control'>
                                    <div className='SpaN'>
                                    <span className="SpanA">Gender :</span>
                                        
                                        <div className="SpanB">
                                            <input type="radio" name="gender" 
                                            
                                            /><span>Female</span>
                                            <input type="radio" name="gender" /><span>Male</span>
                                            
                                        </div>
                                    </div>
                                </div>


                                <div className='f-control'>
                                    <input type="text" name="age" id=""  placeholder='Age'
                                    value={user.age}
                                    onChange={handleInputs}

                                    />
                                    <small>Error message</small> 
                                </div>
                                

                                <div className='f-control'>
                                    <input type="text" name="address" id=""  placeholder='Address'
                                    value={user.address}
                                    onChange={handleInputs}

                                    />
                                    <small>Error message</small> 
                                </div>
                               
                                </form>
                    </div>
                 </div>
                    
                </div>
            </div>
        </section>
     );
}

export default detailsPage;