import React, { useState, useEffect } from "react";
import photo from "../assets/my-photo.svg";
import { FaRegCircle } from "react-icons/fa";
import { FaMotorcycle, FaHeadphones, FaCamera, FaPen, FaCode, FaGamepad, FaCircle } from "react-icons/fa6";
import { MdOutlineVideoSettings } from "react-icons/md";
import { IoPlanet } from "react-icons/io5";
import '../css/AboutMe.css'
import { Helmet, HelmetProvider } from "react-helmet-async";
const intrestArrTop = ["MOTOCYCLING", "MUSIC", "PHOTOGRAPHY", "VIDEO EDITING"];
const intrestArrBottom = ["GRAPHICS", "CODING", "ASTRONOMY", "GAMING"];
const languageArr = [["en-US", "ENGLISH"], ["en-IN", "ENGLISH"], ["hi-IN", "HINDI"], ["mr-IN", "MARATHI"]];
const IntrestTop = () => {
    return (
        intrestArrTop.map((intrest, index) => (
            <div key={index} className="text ls-1">
                <h6 className="text ls-1 intrest">{intrest}</h6>
            </div>
        ))
    );
}

const IntrestBottom = () => {
    return (
        intrestArrBottom.map((intrest, index) => (
            <div key={index} className="text ls-1">
                <h6 className="text ls-1 intrest">{intrest}</h6>
            </div>
        ))
    );
}

const LanguageComp = () => {
    return (
        languageArr.map((language, index) => (
            <div key={index} className="text ls-1 langauge">
                <h5 className="text ls-1">{language[0]}</h5>
                <h5 className="text ls-1">{language[1]}</h5>
            </div>
        ))
    );
}

const Age = () => {
    const [ageInDays, setAge] = useState(0);

    useEffect(() => {
        function calculateAge() {
            const currentDate = new Date();
            const birthDateObj = new Date("2003-08-02");
            const diffInMs = currentDate - birthDateObj;
            const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            setAge(days);
        }
        calculateAge();
        const interval = setInterval(() => {
            calculateAge()
        }, 86400000);

        return () => clearInterval(interval);
    }, []);

    return (ageInDays);
}

const AboutMe = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="title" content="Pratyush Nirwan" />
                    <meta name="description"
                        content="Who am I?" />
                </Helmet>
            </HelmetProvider>
            <div id="about-me-page">
                <div id="about-me-grid">
                    <h1 className="title" id="about-me-title">ABOUT ME</h1>
                    <div id="bio">
                        <div id="bio-text">
                            <h6 className="text ls-1">NAME: PRATYUSH NIRWAN</h6>
                            <h6 className="text ls-1">AGE: <Age /> DAYS</h6>
                            <h6 className="text ls-1">SPECIES: HUMAN</h6>
                        </div>
                        <div id="bio-photo">
                            <img src={photo} alt='' />
                        </div>
                    </div>
                    <div id="about-me-desc" className="text card">
                        <p className="text ls-1">
                            DESIGNER AND DEVELOPER <br />
                            ADDICTED TO MUSIC, CODING, GAMES, AND MOTERCYCLING. <br />
                            I LIKE TO LEARN THINGS BY HANDS ON EXPERIENCE AND TRY TO TELL THE SAME TO EVERYONE TOO. <br />
                            CURRENTLY PURSUING BTECH IN COMPUTER TECHNOLOGY AT YESHWANTRAO CHAVHAN COLLEGE OF ENGINEERING, NAGPUR <br />
                            HAVE SOMETHING IN MIND? HIT ME UP I WOULD LOVE TO WORK TOGETHER! <br />
                            RADHE RADHE ♥ <br />
                        </p>
                    </div>
                    <div id="skills" className="card">
                        <p className="text ls-5">
                            LOGICAL & STRATIGIC THINKING
                            WEB DEVELOPMENT GRAPHICS DESIGN JAVASCRIPT C PYTHON HTML CSS NODE.JS NPM ILLUSTRATOR AFTER EFFECTS CANVA LINUX VSCODE REACT.JS
                        </p>
                    </div>
                    <div id="languages" className="card">
                        <LanguageComp />
                    </div>
                    <div id="intrests">
                        <div className="intrests-row">
                            <IntrestTop />
                        </div>
                        <div className="icon-row">
                            <FaMotorcycle />
                            <FaPen />
                            <FaHeadphones />
                            <FaCode />
                            <FaCamera />
                            <IoPlanet />
                            <MdOutlineVideoSettings />
                            <FaGamepad />
                        </div>
                        <div className="intrests-row">
                            <IntrestBottom />
                        </div>
                    </div>
                </div>
                <div id="roadmap">
                    <div className="milestone" >
                        <FaCircle className="roadmap-dot" />
                        <div className="rightSide">
                            <h2 className="title roadmap-year">2021</h2>
                            <h3 className="title">Started Studying in college</h3>
                            <h6 className="text ls-1">Btech in Computer Technology <br />Yeshwantrao Chavan College of Engineering,<br />Nagpur 441110</h6>
                        </div>
                    </div>
                    <hr className="normal-hr" />
                    <div className="milestone">
                        <FaCircle id="latest-circle" className="roadmap-dot" />
                        <FaRegCircle id="latest" />
                        <div className="leftSide">
                            <h2 className="title roadmap-year">2024</h2>
                            <h3 className="title">Started Freelancing</h3>
                            <h6 className="text ls-1">Curretly freelancing as a Front-End developer</h6>
                        </div>
                    </div>
                    <hr className="fading-hr" />
                    <h6 className="text ls-1">FUTURE AWAITS</h6>
                </div>

            </div>
        </>
    )
}

export default AboutMe;