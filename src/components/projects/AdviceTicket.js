import photo from '../../assets/projects/adviceTicket.png'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
function href(url) {
    window.open(url, "_blank");
}

function AdviceTicket() {
    const desc = 'The "Advice Ticket" is a web application that provides users with random pieces of advice. It generates a unique advice number and a QR code for each piece of advice, making it a fun and interactive way to discover helpful insights.';
    return (
        <div id='project-main'>

            <img src={photo} alt='' id='project-photo' />
            <div id='project-text'>
                <h1 className='title' id='project-title'>ADVICE TICKET</h1>
                <div id='tag-list' className='text'>
                    <p className='project-tag'>WEB DEVELOPMENT</p>
                    <p className='project-tag'>ADVICE SLIP JSON API</p>
                    <p className='project-tag'>GOQR.ME</p>
                </div>

                <p className='text'>{desc.toUpperCase()}</p>

                <h1 className='title' id='project-features-title'>FEATURES</h1>
                <div id='features-links'>
                    <div id='features' className='text'>
                        <p>• FETCHES RANDOM ADVICE FROM THE ADVICE SLIP API. <br />
                            • DISPLAYS THE ADVICE ALONG WITH AN ADVICE NUMBER. <br />
                            • OFFERS A RESPONSIVE AND VISUALLY APPEALING USER INTERFACE.<br />
                        </p>
                    </div>
                    <div id='project-links'>
                        <FaExternalLinkAlt className='link' onClick={() => href('https://pcoder.me/AdviceTicket/')} />
                        <FaGithub className='link' onClick={() => href('https://github.com/Pratyush-Nirwan/AdviceTicket')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdviceTicket;
