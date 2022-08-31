import React from 'react';
import './Our service.css'

const OurService = () => {
    return (
        <div className='row background-image p-3 mt-4 '>
            <h2 className='text-center mb-5'>Our Policy</h2>
            <div className='col-6 col-md-6 col-lg-3 mt-4'>
                <i class="fas fa-truck ms-5" style={{ fontSize: "30px" }}></i>
                <h4>Free Shipping</h4>
                <p>From all orders over $200</p>
            </div>
            <div className='col-6 col-md-6 col-lg-3'>
                <i class="fas fa-exchange ms-5" style={{ fontSize: "30px" }}></i>
                <h4>FREE RETURNS</h4>
                <p>Return money within 30 days</p>
            </div>
            <div className='col-6 col-md-6 col-lg-3'>
                <i class="fas fa-smile ms-5" style={{ fontSize: "30px" }}></i>
                <h4>SECURE SHOPPING</h4>
                <p>You're in safe hands</p>
            </div>
            <div className='col-6 col-md-6 col-lg-3'>
                <i class="fas fa-chart-line ms-5" style={{ fontSize: "30px" }}></i>
                <h4>Product Variation</h4>
                <p>We have everything you need</p>
            </div>
        </div>
    );
};

export default OurService;