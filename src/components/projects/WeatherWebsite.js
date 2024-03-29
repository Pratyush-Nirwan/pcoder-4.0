import photo from '../../assets/projects/weatherWebsite.png'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function href(url) {
    window.open(url, "_blank");
}




function WeatherWebsite() {
    const desc = 'This is a simple weather application that allows users to check the current weather conditions for a specified city. Users can enter the name of a city, and the application will display the temperature, weather description, humidity, and wind speed for that location. Additionally, the application provides weather condition icons for a more visual representation.';
    return (
        <div id='project-main'>

            <img src={photo} alt='' id='project-photo' />
            <div id='project-text'>
                <h1 className='title' id='project-title'>WEATHER WEBSITE</h1>
                <div id='tag-list' className='text'>
                    <p className='project-tag'>WEB DEVELOPMENT</p>
                    <p className='project-tag'>OPEN WEATHER API</p>
                </div>

                <p className='text' id='project-desc'>{desc.toUpperCase()}</p>

                <h1 className='title' id='project-features-title'>FEATURES</h1>
                <div id='features-links'>
                    <div id='features' className='text'>
                        <p>• USERS CAN INPUT THEIR DESIRED LOCATION TO GET REAL-TIME WEATHER INFORMATION. <br />
                            • THE APPLICATION NOTIFIES USERS IF THEY ENTER AN INVALID CITY NAME. <br />
                            • UPON SUCCESSFUL SEARCH, THE APP PRESENTS TEMPERATURE, WEATHER STATE, HUMIDITY, AND WIND SPEED INFORMATION.
                        </p>
                    </div>
                    <div id='project-links'>
                        <FaExternalLinkAlt className='link' onClick={() => href('https://pratyush-nirwan.github.io/weather-website/')} />
                        <FaGithub className='link' onClick={() => href('https://github.com/Pratyush-Nirwan/weather-website')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherWebsite;
