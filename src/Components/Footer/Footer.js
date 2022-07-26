import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div style={{ height: "180px" }} className=' text-center bg-dark text-light p-5'>
                <h5>SA Ecommerce</h5>
                <p>Copyright &copy; {(new Date().getFullYear())} All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;