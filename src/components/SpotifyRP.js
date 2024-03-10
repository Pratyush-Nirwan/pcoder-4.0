import React, { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";

const SpotifyRp = () => {

    const API_KEY = 'f6d9f010ca24dc38f275af06eb7a719f';
    const username = 'pratyush_nirwan';

    const [track, setTrack] = useState('');
    const [artist, setArtist] = useState(` `)

    async function getCurrentlyPlaying() {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${API_KEY}&format=json&limit=2`);
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
        const interval = setInterval(() => {
            getCurrentlyPlaying();
        }, 10 * 1000);
    })

    return (
        <div id="music">
            <FaSpotify id="spotify-icon" />
            <h5 className="text ls-1">{track}</h5>
            <h6 className="text ls-1">//{artist}</h6>
        </div>
    )
}

export default SpotifyRp;