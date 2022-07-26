import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailref = useRef('')
    const passref = useRef('')
    const handleLogin = (event) => {
        event.preventDefault()
        const email = emailref.current.value;
        const pass = passref.current.value;
        console.log(email, pass);
        signInWithEmailAndPassword(email, pass)
    }
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/register')
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='background-img ' >
            <h1 className='text-center text-light mt-5'> Please Login</h1>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <div class="card mt-3" style={{ width: "30%" }}>
                    <div class="card-body">
                        <Form className='mb-3' onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailref} type="email" required placeholder="Please Enter Your email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passref} type="password" required placeholder="Please Enter Your Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p>Don't Have An Account? <span className='ms-2 text-primary' style={{ cursor: "pointer" }} onClick={handleNavigate}>Please Register</span></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;