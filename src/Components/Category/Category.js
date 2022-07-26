import React from 'react';
import './Category.css'
import man from '../../Images/man.jpg'
import jwelery from '../../Images/jwelery.jpg'
import electronics from '../../Images/electronics.jpg'
import women from '../../Images/women.jpg'

const Category = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className='text-primary text-center mb-5'> We Have</h2>
            <div className="row g-4">
                <div className="col-lg-3">
                    <div className="p-3 border d-flex align-items-center justify-content-between rounded-3" id="man">
                        <h1>Men's Clothing</h1>
                        <img className="category-img" src={man} alt="" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center p-3 border justify-content-between rounded-3" id="jewelery">
                        <h1>Jewelery</h1>
                        <img className="category-img" src={jwelery} alt="" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center p-3 border justify-content-between rounded-3" id="electronics">
                        <h1>Electro nics</h1>
                        <img className="category-img" src={electronics} alt="" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center p-3 border justify-content-between rounded-3" id="Women">
                        <h1>Women's Clothing</h1>
                        <img className="category-img" src={women} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;