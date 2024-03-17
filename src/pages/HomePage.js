import '../css/HomePage.css'
import React, { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import photo from '../assets/my-photo.svg'
import { Helmet, HelmetProvider } from 'react-helmet-async';


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
const SpotifyRp = () => {

    const API_KEY = 'f6d9f010ca24dc38f275af06eb7a719f';
    const username = 'pratyush_nirwan';

    const [track, setTrack] = useState('');
    const [artist, setArtist] = useState(` `)

    async function getCurrentlyPlaying() {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${API_KEY}&format=json&limit=2`);
        const data = await response.json();

        if (data && data.recenttracks && data.recenttracks.track.length > 0) {
            const track = data.recenttracks.track[0];
            const nowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';

            if (nowPlaying) {
                setArtist(track.artist['#text'].toUpperCase());
                setTrack(track.name.toUpperCase());
            } else {
                const recentTrack = data.recenttracks.track[1]; // Get the most recently played track
                setArtist(recentTrack.artist['#text'].toUpperCase());
                setTrack(recentTrack.name.toUpperCase());
            }
        }
    }
    useEffect(() => {
        getCurrentlyPlaying();
        setInterval(() => {
            getCurrentlyPlaying();
        }, 10 * 1000);
    })

    return (
        <div id="music">
            <FaSpotify id="spotify-icon" />
            <h5 className="text ls-1">{track}</h5>
            <h6 className="text ls-1">{"//" + artist}</h6>
        </div>
    )
}

const HomePage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="title" content="PCODER // Pratyush Nirwan" />
                    <meta name="description"
                        content="Pratyush Nirwan is a Front-End Developer, Graphics Designer. Believing in hands-on experiences, eagerly sharing his knowledge with others." />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://pcoder.me/" />
                    <meta property="og:title" content="PCODER // Pratyush Nirwan" />
                    <meta property="og:description"
                        content="Pratyush Nirwan is a Front-End Developer, Graphics Designer. Believing in hands-on experiences, eagerly sharing his knowledge with others." />
                    <meta property="og:image" content="meta_img.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://pcoder.me" />
                    <meta property="twitter:title" content="PCODER // Pratyush Nirwan" />
                    <meta property="twitter:description"
                        content="Pratyush Nirwan is a Front-End Developer, Graphics Designer. Believing in hands-on experiences, eagerly sharing his knowledge with others." />
                    <meta property="twitter:image" content="metadata_img.png" />
                </Helmet>
            </HelmetProvider>
            <Term />
            <SpotifyRp />
        </>
    )
}

export default HomePage