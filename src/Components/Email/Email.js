import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import './email.css'
import { Form } from 'react-bootstrap';


const Email = (event) => {
    const [from_name, setfrom_name] = useState('')
    const [to_name, setto_name] = useState('')
    const [message, setmessage] = useState('')
    const submitInfo = () => {
        const emailContent = {
            to_name: to_name,
            from_name: from_name,
            message: message
        }
        emailjs.send('project', 'template_7qsz7v5', emailContent, 'yZwVlmMOTWpIMbF6e')
            .then((result) => {
            }, (error) => {

            });
    }
    return (
        <div className='emil'>
            <h1 className='text-center'>Email Us</h1>
            <div className='d-flex align-items-center justify-content-center '>
                <div className=' width'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onChange={(event) => { setto_name(event.target.value) }} type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control onChange={(event) => { setfrom_name(event.target.value) }} type="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Message</Form.Label>
                        <textarea onChange={(event) => { setmessage(event.target.value) }} rows="6" cols="50" name="comment" placeholder='Type Your Message Here' className='rounded'/>

                    </Form.Group>
                    <button onClick={submitInfo} className='btn btn-primary mb-5'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Email;