import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../Redux/Actions/ProductAction'
import SingleProduct from '../SingleProduct/SingleProduct';
const Products = () => {
    const products = useSelector((state) => state.allproducts.products)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => dispatch(setProducts(data)))
    }, [])
    console.log(products);

    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-3'>Our Total Products</h1>
            <div className='row g-4 p-5'>
                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>

                    )
                }

            </div>
        </div>
    );
};

export default Products;