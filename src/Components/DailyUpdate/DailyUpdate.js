import React from 'react';
import { Form } from 'react-bootstrap';
import './DailyUpdate.css'

const DailyUpdate = () => {
    return (
        <div className=' background-img text-light'>
            <div className='col-12 col-md-6 col-lg-6 p-5'>
                <h1>Stay home & get your daily <br /> needs from our shop </h1>
                <h3>Start You'r Daily Shopping with <span className='text-primary'>SA Ecommerce</span></h3>
                <Form.Group className="mb-3 w-50 mt-2" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <button className='btn btn-primary p-2 mt-2'>Suscribe</button>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
            </div>
        </div>
    );
};

export default DailyUpdate;