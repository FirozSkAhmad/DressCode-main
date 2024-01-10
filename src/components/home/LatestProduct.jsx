import React from 'react';
import "./latestProduct.css";

const LatestProduct = () => {
    return (
        <div className='latestProduct__Wrap'>
            <div className='lt_Pr-sec'>
                <div className='lt_pt-Ttl'>
                    <h2>
                        Latest<br></br>Products
                    </h2>
                    <div className='lt_pt-line'>
                        <span className='lt_ln'></span>
                    </div>
                </div>
                <div className='lt_Btm-row'>
                    <div className='lt_para'>
                        <h3>A Brand is Born</h3>
                        <p>
                            We are delighted to announce the<br></br>
                            launch of our new brand StuX. to<br></br>
                            underscore our commitment to<br></br>
                            transformation and your<br></br>
                            evolving expectations.
                        </p>
                    </div>
                    <div className='lt_Content'>
                        <div className='lt_pr-Crl lt_pr-Crl1'>
                            <img src='assets/images/lt-pr1.png' alt='product'></img>
                        </div>
                        <div className='lt_pr-Crl lt_pr-Crl2'>
                            <img src='assets/images/lt-pr2.png' alt='product'></img>
                        </div>
                        <div className='lt_pr-halfCrl'>
                            <a href=''>See All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProduct;