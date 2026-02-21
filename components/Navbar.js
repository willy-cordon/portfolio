import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <header id="header" className="d-flex flex-column justify-content-center">

                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link href="/">
                                <a><i className="bx bx-home"></i> <span>Inicio</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a><i className="bx bx-user"></i> <span>Sobre mí</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resume">
                                <a><i className="bx bx-file-blank"></i> <span>Currículum</span></a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/portfolio">
                                <a><i className="bx bx-book-content"></i> <span>Portfolio</span></a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact">
                                <a><i className="bx bx-envelope"></i> <span>Contacto</span></a>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
        </div>
    )
}

export default Navbar
