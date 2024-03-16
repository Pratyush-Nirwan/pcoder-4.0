import photo from '../../assets/projects/pcoder.png'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function href(url) {
    window.open(url, "_blank");
}


function Pcoder() {
    const desc = 'Its my portfolio website! This is the central hub where you can explore my work, read my blogs, and connect with me on various social platforms';
    return (
        <div id='project-main'>

            <img src={photo} alt='' id='project-photo' />
            <div id='project-text'>
                <h1 className='title' id='project-title'>PCODER.ME</h1>
                <div id='tag-list' className='text'>
                    <p className='project-tag'>WEB DEVELOPMENT</p>
                    <p className='project-tag'>REACT.JS</p>
                    <p className='project-tag'>PORTFOLIO</p>
                    <p className='project-tag'>DEV.TO API</p>
                    <p className='project-tag'>AUDIOSCROBBLER API</p>

                </div>

                <p className='text' id='project-desc'>{desc.toUpperCase()}</p>

                <h1 className='title' id='project-features-title'>FEATURES</h1>
                <div id='features-links'>
                    <div id='features' className='text'>
                        <p>• Browse through a collection of my latest projects, showcasing my skills and expertise. <br />
                            • Discover my thoughts, insights, and experiences in the world of technology, design, and more through my blog posts. <br />
                            • Stay connected with me on various social platforms. Let's engage in meaningful conversations and professional networking.
                        </p>
                    </div>
                    <div id='project-links'>
                        <FaExternalLinkAlt className='link' onClick={() => href('https://pcoder.me/')} />
                        <FaGithub className='link' onClick={() => href('https://github.com/Pratyush-Nirwan/pcoder-4.0')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pcoder;
