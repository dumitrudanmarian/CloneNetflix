import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { FaSistrix, FaBell } from "react-icons/fa";


const Nav = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false)
            };
        });
        return () => {
            window.removeEventListener('scroll', null)
        }
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className='nav-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix" />

            <div className="nav-links">
                <li>
                    <ul><a href="#">Home</a></ul>
                    <ul><a href="#">Series</a></ul>
                    <ul><a href="#">Movies</a></ul>
                    <ul><a href="#">Originals</a></ul>
                    <ul><a href="#">Recently Added</a></ul>
                    <ul><a href="#">My List</a></ul>
                </li>

            </div>

            <div className="nav-profile">
                <FaSistrix />
                <FaBell />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                    alt="Profile Avatar"
                />
            </div>
        </div>
    )
}

export default Nav