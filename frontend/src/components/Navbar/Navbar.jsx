import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <header
        id="header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/5 backdrop-blur-md shadow-lg"
    >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-3xl font-medium neon-logo">
                Edunex
            </Link>
            <ul className="hidden md:flex items-center space-x-8 text-lg">
                <li>
                    <Link to="/" className="hover:text-cyan-400 transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/course" className="hover:text-cyan-400 transition-colors">
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/" className="hover:text-cyan-400 transition-colors">
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link to="/" className="hover:text-cyan-400 transition-colors">
                        Examples
                    </Link>
                </li>
                <li>
                    <a href="#contact" className="hover:text-cyan-400 transition-colors">
                        Contact
                    </a>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <Button text="Signup" type="filled" isLink={true} path='/signup'/>
                <Button text="Login" type="outlined" isLink={true} path='/login' />
            </div>
            {/* <button id="mobile-menu-btn" className="md:hidden text-3xl text-cyan-400">
                        &#9776;
                </button> */}
        </nav>
    </header>
)
}

export default Navbar