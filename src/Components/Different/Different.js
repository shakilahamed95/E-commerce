import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import SingleProduct from '../SingleProduct/SingleProduct';

const Different = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch('https://stormy-depths-46428.herokuapp.com/products')
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const filterProduct = (name) => {
        const newList = data.filter((x) => x.category === name)
        setFilter(newList)
    }
    const Loading = () => {
        return <>
            <Spinner animation="border" variant="primary" />
        </>
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button onClick={() => filterProduct("men's clothing")} className='btn btn-outline-dark me-3'>Men's clothing</button>
                    <button onClick={() => filterProduct("women's clothing")} className='btn btn-outline-dark me-3'>Women's clothing</button>
                    <button onClick={() => filterProduct("jewelery")} className='btn btn-outline-dark me-3'>Jwelery</button>
                    <button onClick={() => filterProduct("electronics")} className='btn btn-outline-dark me-3'>Electronics</button>
                </div>
                {
                    filter.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center text-primary my-4'>Our Latest Product</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }

                </div>
            </div>
        </div>
    );
};

export default Different;