import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current.checkValidity()) {
            showSuccess();
        }

        emailjs.sendForm('service_y342rfe', 'template_4mj3r5e', form.current, 'O14O7dXewW7V1EkCF')
            .then((result) => {
                console.log(result.text);
                console.log("msg sent budd");
            }, (error) => {
                console.log(error.text);
            });
    };

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const myFunction = () => {
        setButtonDisabled(false);
        document.getElementById('alert-box').style.opacity = '0';
    }

    const showSuccess = (e) => {

        // show success transition
        document.getElementById('alert-box').style.opacity = '1';

        // disabled the button
        setButtonDisabled(true);
        setTimeout(myFunction, 5000);
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
                    <input type="submit" disabled={isButtonDisabled} id='btnTriggerr' className='btn btn-dark mt-2 form-button' value="Send" />
                </form>

                <div className='mt-5' id='alert-box'>
                    <p className='d-inline text-white bg-success rounded ps-2 pe-2 pt-3 pb-3'>Thank you for being awesome!</p>
                </div>
            </div>
        </>
    )
}

export default Contact
