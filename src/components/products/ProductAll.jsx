import React from "react";
import ProductList from "../../constants/Products";

const ProductAll = () => {
    return (
        <div className='container pt-3'>
            <h3>All Products</h3>
            <div className='row'>
                {ProductList.map((item) => {
                    return (
                        <div key={item.id} className='col-6 col-md-4 col-lg-3'>
                            <div className='shadow shadow-sm m-3 p-3'>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={`https://images.bewakoof.com/t640/${item.display_image}`}
                                        alt={item.name}
                                    />
                                </div>
                                <div>
                                    <h5>{item.name}</h5>
                                    <div className='d-flex justify-content-between'>
                                        <div>Price: {item.price}</div>
                                        <div>Price: {item.mrp}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductAll;
