import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { FiTwitter } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    let navItems=<>
    <li><NavLink className="text-black text-xs lg:text-xl" to="/">Home</NavLink></li>
    <li><NavLink className="text-black text-xs lg:text-xl" to="/create">Create</NavLink></li>
    <li><NavLink className="text-black text-xs lg:text-xl" to="/category">Details</NavLink></li>
    <li><NavLink className="text-black text-xs lg:text-xl" to="/about">About</NavLink></li>
    </>
    return (
        <div>
            <footer className="footer items-center p-14 border-t-2 border-primary bg-secondary text-neutral-content">
            <div className="items-center grid-flow-col">
                <ul className='flex items-center justify-center gap-5'>
                    {navItems}
                </ul>
            </div> 
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <AiOutlineInstagram className='text-3xl text-white bg-primary rounded-full p-1'/>
                <ImPinterest2 className='text-3xl text-white bg-primary rounded-full p-1'/>
                <FiTwitter className='text-3xl text-white bg-primary rounded-full p-1'/>
                <BsFacebook className='text-3xl text-white bg-primary rounded-full p-1'/>
                <AiOutlineGoogle className='text-3xl text-white bg-primary rounded-full p-1'/>
            </div>
            </footer>
        </div>
    );
};

export default Footer;