import React from 'react'
import image from '../Image/gettyimages-1338912354-612x612.jpg'
import './Images.css'
import linkedin from '../Image/Likedin.png'
import github from '../Image/Github.jpg'
import twitter from '../Image/Twitter.png'
function Intro() {
    return (
        <div >
            <div className="card mb-3 intro">
                <div className="row g-0 container">
                    <div className="col-md-4 my-5">
                        <div className="c">
                            <div className="image">
                                <img src={image} alt="" />
                            </div>
                            <div className="content">
                                <a href="https://github.com/yadavikash02" className='mx-1'><img src={github} height="44"alt="" /></a>
                                <a href="https://www.linkedin.com/in/vikash-yadav-b9a09126b/" className='mx-1' ><img src={linkedin} height="44"alt="" /></a>
                                <a href="https://www.linkedin.com/in/vikash-yadav-b9a09126b/" className='mx-1'><img src={twitter} height="44"alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className='card-text green'>Hi, this is</p>
                            <h2 className="card-title mb-5 mt-1 bold">Vikash Yadav</h2>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                            <p className="card-text"><small className="text-body-secondary">Working For Myself to improve my skills</small></p>
                            <button type="button" className="btn btn-light mx-2 Cv">Download CV</button>
                            <button type="button" className="btn btn-light mx-1 Cv">Contact</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro
