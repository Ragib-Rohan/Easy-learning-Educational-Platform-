import React from 'react';
import './HCommon.css';

function Common(props) {
    return ( 
        <section>
            <div className="container-fluid">
                <div className="row justify-content-center p-3">
                    <div className="col-10">
                        <div className="row " >
                            <div className=" col-6 Pp ">
                                <h1>{props.heading}</h1>
                                <div className="row justify-content-center " >
                                    <div className=" col-10 pt-1 " >
                                        <h4>{props.heading2}</h4>
                                        <p>{props.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-6 ">
                            <div className="row justify-content-center " >
                                    <div className=" col-10 Cimg " >
                                        <img src={props.image} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Common;