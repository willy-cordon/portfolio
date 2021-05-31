import React from 'react'
import Link from 'next/link'

const navbar = () => {
    return (
        <div>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <header id="header" className="d-flex flex-column justify-content-center">

                <nav className="nav-menu">
                <ul>
                    <li >
                        <Link href="/">  
                            <a ><i className="bx bx-home"></i> <span>Home</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">                           
                            <a ><i className="bx bx-user"></i> <span>About</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">                          
                            <a ><i className="bx bx-file-blank"></i> <span>Resume</span></a>
                        </Link>
                    </li>
                         
                    <li>
                        <Link href="/portfolio">
                            <a ><i className="bx bx-book-content"></i> <span>Portfolio</span></a>
                        </Link>
                    </li>
                        {/*
                    <li>
                        <Link>
                            
                            <a href="#services"><i className="bx bx-server"></i> <span>Services</span></a>
                        </Link>
                        </li>
                        */}
                    <li>
                        <Link href="/contact">                         
                            <a ><i className="bx bx-envelope"></i> <span>Contact</span></a>
                        </Link>
                    </li> 
                </ul>
            </nav>

            </header>
        </div>
    )
}

export default navbar
