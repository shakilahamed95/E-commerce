import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorelement;
    if (error) {

        errorelement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 mx-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorelement}
            <div className='d-flex align-items-center justify-content-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-75 '><i class="fa-brands fa-google text-light me-2"></i>   Continue With google</button>
            </div>
        </div>
    );
};

export default SocialLogin;