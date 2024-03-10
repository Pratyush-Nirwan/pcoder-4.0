import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const handleItemClick = (path, navigate) => {
    const pageBody = document.getElementById("page-body");
    pageBody.style.animation = 'fadeOut .3s';
    setTimeout(() => {
        pageBody.style.animation = 'fadeOut .3s';
        pageBody.style.display = 'none';
        setTimeout(() => {
            navigate(path)
            pageBody.style.animation = 'fadeIn .3s';
            setTimeout(() => {
                pageBody.style.display = 'flex';

            }, 300);
        }, 100);
    }, 300);
};

export const V1 = () => {
    const navigate = useNavigate();

    return (
        <>
            <Link id="back-arrow" onClick={() => handleItemClick('/projects', navigate)}>
                <IoMdArrowRoundBack />
            </Link>
            <iframe id='web-iframe' src="https://pcoder.me/pcoder-1.0/">
            </iframe>
        </>
    )
}

export const V2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Link id="back-arrow" onClick={() => handleItemClick('/projects', navigate)}>
                <IoMdArrowRoundBack />
            </Link>
            <iframe id='web-iframe' src="https://pcoder.me/pcoder-2.0/">
            </iframe>
        </>
    )
}

export const V3 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Link id="back-arrow" onClick={() => handleItemClick('/projects', navigate)}>
                <IoMdArrowRoundBack />
            </Link>
            <iframe id='web-iframe' src="https://pcoder.me/pcoder-3.0/">
            </iframe>
        </>
    )
}

