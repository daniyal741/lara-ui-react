import React from 'react';
import './index.css';
import Hamburger from 'hamburger-react'
import { useState } from "react";


function Home() {

    const [isOpen, setOpen] = useState(false)

    return (

        <div className="main-container">
            <div className="container">
                <nav>


                    <ul className={isOpen ? 'showNav' : 'hideNav'}>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>


                    <Hamburger toggled={isOpen} toggle={setOpen} />


                </nav>
            </div>

            <div className="wrapper">

                <h1>WEB</h1>
                <p>Web Design Portfolio</p>

            </div>

            <svg className="arrows">
                <path strokeLinecap="round" className="a1" d="M0 0 L20 22 L40 0"></path>
            </svg>



        </div>
    );
}

export default Home;
