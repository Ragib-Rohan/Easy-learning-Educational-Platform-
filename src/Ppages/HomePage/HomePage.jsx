import React, {useState} from 'react';
import Common from '../../ComonPages/PHome/HCommon';





import imgL from "./SVG/Laptop.svg";
import hand from "./SVG/hand.png"
import imgB from "./SVG/Book.svg";
import imgC from "./SVG/coffee.svg";
import imgP from "./SVG/penAphone.svg";
import imgS from "./SVG/Sheet.svg";


import welcome from "./Dsvg/welcome.svg";
import teacher from "./Dsvg/teacher.svg";
import student from "./Dsvg/Exam.svg";
import Communication from "./Dsvg/Communication.svg";



import "./HomePage.css";



function HomePage() {

    const [offset, setOffset]= useState()

    const handleScroll = () => setOffset(window.pageYOffset)

    window.addEventListener('scroll', handleScroll)

    return (  
               <section className=" Dis1" >
                       <div className="Dis">
                            <img src={imgL} id="imgL" alt="" 
                                // style={{top: `-${0 + offset * 0.1 + '%'}`}}
                            />
                            <img src={hand} id="imgH" alt="" 
                                 style={{top: `-${0.08 + offset * 0.01 + '%'}`}}
                            />
                            <img src={imgB} id="imgB" alt="" 
                                 style={{left: (50 + offset * 0.035) + '%'}}
                            />
                            <img src={imgC} id="imgC" alt="" 
                                style={{right: (45 + offset * 0.02) + '%'}}
                            />
                            <img src={imgP} id="imgP" alt="" 
                                style={{right: (45 + offset * 0.01) + '%'}}
                            />
                            <img src={imgS} id="imgS" alt="" 
                                style={{right: (50 + offset * 0.015) + '%'}}
                            />
          
                       </div>
                       <div className="blr"></div>
                       <div>
                           <Common
                           heading="Welcome"
                           heading2="Become a student or a Tutor"
                           paragraph=" Find the best teachers for you, And guide other to the bright Future. 
                           "
                            image={welcome}
                           
                           />
                       </div>
                       <div>
                           <Common
                           heading="Teacher"
                           heading2="Become a student or a Tutor"
                           paragraph=" Find the best teachers for you, And guide other to the bright Future. 
                           "
                            image={teacher}
                           
                           />
                       </div>
                       <div>
                           <Common
                           heading="Student"
                           heading2="Become a student or a Tutor"
                           paragraph=" Find the best teachers for you, And guide other to the bright Future. 
                           "
                            image={student}
                           
                           />
                       </div>
                       <div>
                           <Common
                           heading="Welcome"
                           heading2="Become a student or a Tutor"
                           paragraph=" Find the best teachers for you, And guide other to the bright Future. 
                           "
                            image={Communication}
                           
                           />
                       </div>
                        
                    </section>

        
    );
}



export default HomePage;