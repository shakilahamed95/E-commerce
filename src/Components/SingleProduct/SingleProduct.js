import React from 'react';
import { useNavigate } from 'react-router-dom';
import './singleProduct.css'

const SingleProduct = ({ product }) => {
    const { title, price, image, rating, _id } = product
    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/product/${_id}`)
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 card me-2'>
            <img src={image} class="card-img-top ms-5" style={{ width: "270px", height: "270px" }} alt="..." />
            <div class="card-body ms-0">
                <h5 class="card-title">{title}</h5>
                <h5>Price: ${price}</h5>
                <h5>Rating: {rating.rate} <i className="fa-solid fa-star text-danger"></i></h5>
            </div>

            <div className='button'> <button onClick={() => handleNavigate(_id)} className='btn btn-primary'> View Detail</button>
            </div>
        </div>
    );
};

export default SingleProduct;