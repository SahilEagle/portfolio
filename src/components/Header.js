import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <>
            <div className='head container' id='Home'>
                <div className="header-wrapper d-flex flex-lg-row flex-column mt-5">
                    <div>
                        <div className="flex-column d-flex justify-content-center">
                            <div className="mt-5"></div>
                            <h1 style={{ fontSize: "50px" }}>Full Stack Developer</h1>
                            <Typed
                                className='typed-text'
                                strings={["MERN Maestro"
                                    , "Stack Synchronizer"
                                    , "React Ranger"
                                    , "Node Ninja"]}
                                loop
                                typeSpeed={40}
                                backSpeed={50}
                            />
                            <p style={{ fontSize: "20px" }}>Hi, I'm Sahil Vara. A passionate Full-Stack Developer based in Gujarat, India. 📍</p>
                            <div className="d-flex mr-md-5 p-2 gap-3 fs-2">

                                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/sahil-vara/"><svg className='svg-color' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></a>

                                <a target='_blank' rel='noreferrer' href="https://github.com/SahilEagle"><svg className='svg-color' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
                            </div>

                        </div>
                    </div>
                    <div className='hero'>
                        <div className="hero-profile d-flex justify-content-start justify-content-lg-center mt-5">
                            <img src="../Subject.png" className='hero-img' alt="hero" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex flex-row gap-4 justify-content-start">
                        <p className='tech-stack'>Tech Stack</p>
                        <p className='vertical'>|</p>
                        <div className="tech-box d-flex gap-1">
                            <img width={50} src={'../img/html.svg'} alt="html" />
                            <img width={50} src={'../img/css.svg'} alt="css" />
                        </div>
                        <div className="tech-box d-flex gap-1">
                            <img width={50} src={'../img/js.svg'} alt="js" />
                            <img width={43} src={'../img/react.svg'} alt="react" />
                        </div>
                        <div className="tech-box d-flex gap-1">
                            <img width={50} src={'../img/mongo.svg'} alt="mongo" />
                            <img width={50} src={'../img/bootstrap.svg'} alt="bootstrap" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header