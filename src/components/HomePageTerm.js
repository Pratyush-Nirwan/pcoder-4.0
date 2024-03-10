import React from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import photo from '../assets/my-photo.svg'

const Term = () => {
    return (
        <div id="term-window">
            <h3 id="term-btns"><FaCircle /><FaCircle /><FaRegCircle /></h3>
            <h6 id="term-start" className="text ls-1">visitor@pcoder.me~$ check-version <br /> pcoder4.0</h6>
            <div id="term">
                <div id="term-text">
                    <h1 id='term-name' className="title">PRATYUSH NIRWAN</h1>
                    <h5 id="term-dd" className="text ls-10">DEVELOPER + DESIGNER</h5>
                </div>
                <div id="term-photo-div">
                    <img src={photo} alt='' id="term-photo" />
                </div>
            </div>
            <h6 id="term-open4work" className="text ls-1" >OPEN FOR WORK  <FaCircle id="work-dot" /></h6>
        </div>
    )
}

export default Term