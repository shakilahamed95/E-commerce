import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { title, price, description, image, rating, id } = product
    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 card me-2'>
            <img src={image} class="card-img-top ms-5" style={{ width: "270px", height: "270px" }} alt="..." />
            <div class="">
                <h5 class="card-title">{title}</h5>
            </div>
            <h5>Price: ${price}</h5>
            <h5>Rating: {rating.rate}</h5>
            <button onClick={() => handleNavigate(id)} className='btn btn-primary'> View Detail</button>
        </div>
    );
};

export default SingleProduct;