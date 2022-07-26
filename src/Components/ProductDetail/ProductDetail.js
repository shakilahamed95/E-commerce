import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../../Redux/Actions/ProductAction'

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => dispatch(selectedProduct(data)))
        return () => { dispatch(removeSelectedProduct()) }
    }, [])
    return (
        <div>
            {
                product.id === '' ? (
                    <div> <Spinner animation="border" variant="primary" /></div>
                ) : (
                    <div>
                        <h2 className='text-primary text-dark text-center mt-5'> Product Details :{product.title} </h2>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="card mb-3 mt-5" style={{ width: "1000px", }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.image} className="img-fluid rounded-start img ms-3" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body ms-5">
                                            <h5>Category:{product.category}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <h5>Price: ${product.price}</h5>
                                            <h5>Rating: {product.rating?.rate}  <i className="fa-solid fa-star text-danger"></i></h5>
                                            <h5>Rated by: {product.rating?.count} People</h5>
                                            <button className='btn btn-primary mt-3'> Buy Now  <i className="fa-solid fa-cart-arrow-down"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default ProductDetail;