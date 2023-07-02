import React from 'react'
import logo1 from './Image/website.png'
import logo2 from './Image/mobile.webp'
import logo3 from './Image/certificate.png'
function Showtime() {
    return (
        <div className="Container row mt-5 con">
            <div className="col-md-4">
                <div className="web border Cv">
                    <div className="con">
                        <div className=" col-md-4">
                            <img src={logo1} width="80" alt="" />
                        </div>
                        <div className="col-md-8 mx-4">
                            <h5>Website</h5>
                            <p>5+ Full Stack Project</p>
                        </div>
                    </div>

                </div>
                <div className="app my-3 border Cv">
                    <div className="con">
                        <div className="col-md-4">
                            <img src={logo2} width="80" alt="" />
                        </div>
                        <div className="col-md-8 mx-4">
                            <h5>Mobile APP</h5>
                            <p>1+ Project For Both Device</p>
                        </div>
                    </div>
                </div>
                <div className="cer my-3 border Cv">
                    <div className="con">
                        <div className="col-md-4">
                            <img src={logo3} width="80" alt="" />
                        </div>
                        <div className="col-md-8 mx-4">
                            <h5>Certification</h5>
                            <p>10+ On DSA and Internship</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dec col-md-6 mt-3 ml-3">
                <h4 className='mb-5 bold'>What do I help?</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consequuntur non sed nulla aut placeat vitae assumenda perferendis ea ducimus.z
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, aut deleniti. Ea harum magni nemo laudantium maiores est voluptatibus ipsa quas, fugit eum quia, quasi dolor quae. Repellendus, modi beatae.</p>
                <p className='row'>
                    <div className="col-md-4">
                        <big>
                        <span className='bold'>15+</span>
                        </big>
                        <small><p> Project Completed</p></small>
                        
                    </div>
                    <div className="col-md-4">
                        <big>
                        <span className='bold'>18+</span>
                        </big>
                        <small><p>
                            Happy client
                        </p></small>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default Showtime
