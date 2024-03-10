import React, { useState, useEffect } from "react";

const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        let hours = time.getHours();
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${hours}:${minutes}:${seconds} ${ampm}`
    };

    return (
        <div>
            <h4 className="text ls-5" id="time">{formatTime(time)}</h4>
        </div>
    )
}

export default Time;