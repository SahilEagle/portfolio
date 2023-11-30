import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y342rfe', 'template_4mj3r5e', form.current, 'O14O7dXewW7V1EkCF')
            .then((result) => {
                console.log(result.text);
                console.log("msg sent budd");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="form-section container rounded" id='Contact'>


                <h2>Feel Free To Contact Me</h2>

                <form ref={form} onSubmit={sendEmail}>
                    <label>Username</label>
                    <input type="text" className='form-control' name="user" placeholder='Name' required />
                    <label className='mt-1'>Email</label>
                    <input type="email" className="form-control" placeholder='name@example.com' name="email" required />
                    <label className='mt-1'>Message</label>
                    <textarea className='form-control' name="message" rows={3} required />
                    <input type="submit" className='btn btn-dark mt-2' value="Send" />
                </form>


            </div>
        </>
    )
}

export default Contact
