import React, { useState } from 'react';
// importing fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";


function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    // console.log(activeLink);

    const handleToggleClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (link) => {
        setMenuOpen(false);
        setActiveLink(link.target.innerHTML);
        // console.log(link.target.innerHTML);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id='navbar-example2'>
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href="/#">Sahil.dev</a>
                    <button
                        className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
                        type="button"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isMenuOpen}
                        onClick={handleToggleClick}
                    >
                        <FontAwesomeIcon className='menu' icon={faBars} style={{ color: "#000" }} />
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item `}>
                                <a className={`nav-link text-white ${activeLink === 'Home' ? 'active-link' : ''}`} onClick={handleMenuItemClick} aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-white ${activeLink === 'About' ? 'active-link' : ''}`} onClick={handleMenuItemClick} href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-white ${activeLink === 'Project' ? 'active-link' : ''}`} onClick={handleMenuItemClick} href="#Project">Project</a>
                            </li>
                            <li className="nav-item ">
                                <a className={`nav-link text-white ${activeLink === 'Resume' ? 'active-link' : ''}`} onClick={handleMenuItemClick} href="../Sahil_Resume.pdf" download={"SahilResume"}>
                                    Resume <FontAwesomeIcon className='resume' icon={faDownload} style={{ color: "#000", }} />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-white ${activeLink === 'Contact' ? 'active-link' : ''}`} onClick={handleMenuItemClick} href="#Contact">Contact</a>
                            </li>
                            {/* <div class="vr ms-1 me-1"></div>
                        <li className="nav-item">
                            <a className='nav-link text-white' href="/#"><FontAwesomeIcon icon={faStarAndCrescent} /></a>
                        </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar