import React, { useState, useEffect } from "react";
import { Divide as Hamburger } from 'hamburger-react'
import { FaLinkedinIn, FaInstagram, FaDev } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import Time from '../../components/others/Time'
const MenuBtn = ({ isOpen, setOpen }) => {
    let pageBody, menu;
    useEffect(() => {
        pageBody = document.getElementById('page-body');
        menu = document.getElementById('menu');
    })
    let hideMenu, showMenu;
    return (
        <div id="header">
            <Time />
            <div id="menu-icon">
                <Hamburger
                    size={30}
                    color="white"
                    toggled={isOpen}
                    toggle={setOpen}
                    onToggle={toggled => {
                        if (toggled) {
                            clearTimeout(hideMenu)
                            pageBody.style.animation = 'fadeOut .3s'
                            menu.style.animation = 'fadeIn .3s'
                            showMenu = setTimeout(() => {
                                pageBody.style.display = 'none'
                                menu.style.display = 'flex'
                            }, 300);
                        } else {
                            clearTimeout(showMenu)
                            pageBody.style.animation = 'fadeIn .3s'
                            menu.style.animation = 'fadeOut .3s'
                            hideMenu = setTimeout(() => {
                                pageBody.style.display = 'flex'
                                menu.style.display = 'none'
                            }, 300);
                        }
                    }}
                />
            </div>
        </div>
    )
}


const Menu = () => {
    const [isOpen, setOpen] = useState(false);

    // Function to handle menu item click
    const handleMenuItemClick = () => {
        const pageBody = document.getElementById('page-body')
        const menu = document.getElementById('menu');

        menu.style.animation = 'fadeOut .3s'
        pageBody.style.animation = 'fadeIn .3s';

        setTimeout(() => {
            menu.style.display = 'none'
            pageBody.style.display = 'flex'
            setOpen(false); // Close the menu
        }, 300);// Close the menu
    };

    return (
        <>
            <div id="menu" style={{ display: isOpen ? 'flex' : 'none' }}>
                <div id="menu-btns">
                    <Link to="/" className="menu-btn" onClick={() => { handleMenuItemClick(); }}>
                        <h6 className="text ls-1">01//</h6>
                        <h1 className="title">HOME</h1>
                    </Link>
                    <Link to="/about" className="menu-btn" onClick={() => { handleMenuItemClick(); }}>
                        <h6 className="text ls-1">02//</h6>
                        <h1 className="title">ABOUT ME</h1>
                    </Link>
                    <Link to="/projects" className="menu-btn" onClick={() => { handleMenuItemClick(); }}>
                        <h6 className="text ls-1">03//</h6>
                        <h1 className="title">PROJECTS</h1>
                    </Link>
                    <Link to="/blogs" className="menu-btn" onClick={() => { handleMenuItemClick(); }}>
                        <h6 className="text ls-1">04//</h6>
                        <h1 className="title">BLOGS</h1>
                    </Link>
                </div>
                <div id="socials">
                    <a href="https://www.linkedin.com/in/pratyush-nirwan/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.instagram.com/pratyush_nirwan" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="mailto:pratyusnirwan123@gmail.com">
                        <MdOutlineEmail />
                    </a>
                    <a href="https://twitter.com/nirwan_pratyush" target="_blank">
                        <FaXTwitter />
                    </a>
                    <a href="https://github.com/Pratyush-Nirwan/" target="_blank">
                        <FiGithub />
                    </a>
                    <a href='https://dev.to/pratyushnirwan/' target="_blank">
                        <FaDev />
                    </a>
                </div>
            </div >
            <MenuBtn isOpen={isOpen} setOpen={setOpen} />
        </>
    );
};
export default Menu;