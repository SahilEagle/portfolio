import React from 'react';

const About = () => {
    return (
        <>
            <div className="container mt-5 about d-flex flex-column align-item-center" id='About'>
                <div className='border-about rounded'>
                    <h2>About Me</h2>
                    <p>
                        Hello! 👋 I'm a web developer based in <strong>Gujarat, India</strong>. Passionate about creating user-friendly websites, I'm currently mastering HTML, CSS, and JavaScript, with a focus on React.js. Motivated by the ongoing learning journey in web development, I'm open to collaborations and connections. Let's chat at <strong>skeaglecompany@gmail.com</strong> or connect on <a className='about-link' href="https://www.linkedin.com/in/sahil-vara/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Excited to learn, code, and grow together!
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;