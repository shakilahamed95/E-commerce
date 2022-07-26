import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/login')
    }
    return (
        <div className='background-img' >
            <h1 className='text-center text-light mt-5'>Create A New Account</h1>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <div class="card mt-3" >
                    <div class="card-body">
                        <Form className='mb-3'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Please Enter Your email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Please Enter Your Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="confirmPassword" placeholder="Confirm Your Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p>Already Have An Account? <span className='ms-2 text-primary' style={{ cursor: "pointer" }} onClick={handleNavigate}>Please Login</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;