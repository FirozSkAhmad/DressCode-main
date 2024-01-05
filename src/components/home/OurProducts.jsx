import React from 'react';
import "./ourproducts.css";

const OurProducts = () => {
    return (
        <div className='ourProduct__Wrap'>
            <div className='ourProduct__Sec'>
                <div className='ourProduct_Ttl'>
                    <h2>
                        Our Products
                    </h2>
                </div>
                <div className='our_products'>
                    <div className='or_prd-row or_prd-row1'>
                        <div className='or_prd-col'>
                            <div className='or_prd-img'>
                                <img src="assets/images/shirt.png" alt="shirt" />
                            </div>
                            <div className='or_prd-cnt'>
                                <h3>School Shirts</h3>
                                <div className='hl'></div>
                                <p>
                                    a large selection of school uniforms
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='or_prd-row or_prd-row2'>
                        <div className='or_prd-col'>
                            <div className='or_prd-cnt'>
                                <h3>Trousers</h3>
                                <div className='hl'></div>
                                <p>
                                    excellent comfort and fit for all ages
                                </p>
                            </div>
                            <div className='or_prd-img'>
                                <img src="assets/images/trouser.png" alt="trouser" />
                            </div>
                        </div>
                    </div>
                    <div className='or_prd-row or_prd-row3'>
                        <div className='or_prd-col'>
                            <div className='or_prd-cnt'>
                                <h3>School Shoes</h3>
                                <div className='hl'></div>
                                <p>
                                    athletic and footwear for school
                                </p>
                            </div>
                            <div className='or_prd-img'>
                                <img src="assets/images/school-shoe.png" alt="school-shoe" />
                            </div>
                        </div>
                    </div>
                    <div className='or_prd-row or_prd-row4'>
                        <div className='or_prd-col'>
                            <div className='or_prd-img'>
                                <img src="assets/images/school-socks.png" alt="school socks" />
                            </div>
                            <div className='or_prd-cnt'>
                                <h3>School Socks</h3>
                                <div className='hl'></div>
                                <p>
                                    comfy and soft socks
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts