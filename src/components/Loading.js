import React, { useState, useEffect } from "react";
import photo from '../assets/Logo.png'


const Loading = () => {
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        const root = document.getElementById('root')
        const loadingScreen = document.getElementById('loading-screen');

        const setCookie = (cname, cvalue, exhours) => {
            const d = new Date();
            d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
            const expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        const getCookie = (cname) => {
            const name = cname + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        root.style.display = 'none';

        const cookieValue = getCookie("isLoaded");
        if (cookieValue) {
            setLoaded(true)
            loadingScreen.style.display = 'none';
            root.style.animation = 'fadeIn .3s';
            setTimeout(() => {
                root.style.display = 'flex'
            }, 300);
        } else {

            setCookie("isLoaded", true, 2)
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                root.style.animation = 'fadeIn .3s';
                setTimeout(() => {
                    root.style.display = 'flex'
                }, 300);
            }, 3100);
        }
    })
    return (
        <>
            <img src={photo} alt='' id="loading-photo" />
            <div id="loading-bar">
                <div id="loading-bar-fill"></div>
            </div>
        </>
    )
}

export default Loading;