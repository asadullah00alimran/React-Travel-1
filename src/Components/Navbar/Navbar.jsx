import React, {useState}  from 'react';
import './Navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navbar')
    // Show nav
    const showNav = ()=>{
        setActive('navbar activeNavbar')
    }
    // Remove Nav
    const removeNavbar = ()=>{
        setActive('navbar')
    }

    return (
        <section className='navbarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="" className="logo flex">
                        <h1> <MdOutlineTravelExplore className="icon"/> Travel</h1>
                    </a>
                </div>
                
                <div className={active}>
                    
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className='navLink'>Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className='navLink'>About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className='navLink'>Packege</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className='navLink'>Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className='navLink'>Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className='navLink'>News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className='navLink'>Contact </a>
                        </li>

                        <div className="btn">
                            <a href="#">Book NOW</a>
                        </div>
                    </ul>

                    <div onClick={removeNavbar} className="colseNavbar">
                        <IoIosCloseCircle className='icon' />
                    </div>
                </div>

                <div onClick={showNav} className="togglenavbar">
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    );
};

export default Navbar;