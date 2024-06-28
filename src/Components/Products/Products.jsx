import React from 'react'
import './Product.css'
import productimg1 from '../../assets/productimg1.png'
import productimg2 from '../../assets/productimg2.png'
import productimg4 from '../../assets/productimg4.png'
// import product5 from '../../assets/product5.png'

function Products() {
    return (
        <div>
            <div className="product_head">
                <div className="container">
                    <h3 className='pro_heading px-2 fw-bold m-0'>Products</h3>
                    <small className='px-3'>What We Offer</small>
                    <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                        <div class="col product_card">
                            <div class="card border-2 border-primary overflow-hidden">
                                <img src={productimg1} alt="" className='product_img' />
                                <div className="intro border-top border-5 border-primary">
                                    <h6 className='text-center mt-4 text-primary'>Launch and Recovery</h6>
                                    {/* <i class="bi bi-arrow-up-square-fill"></i> */}
                                    {/* <img src={product5} alt="" className='pro_icon'/> */}
                                    <div className="card_text text-center">
                                    <p>We design and manufacture end-to-end solutions for launch and recovery/delivery of UAVs and Lighter Than Air Systems.</p>
                                    <p className='border-top text-center p-3 border-primary border-2'>Discover<i class="bi bi-arrow-right-short"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col product_card">
                            <div class="card border-2 border-primary overflow-hidden">
                                <img src={productimg2} alt="" className='product_img' />
                                <div className="intro border-top border-5 border-primary">
                                    <h6 className='text-center mt-4 text-primary'>Parachutes & LTA Systems</h6>
                                    {/* <i class="bi bi-arrow-up-square-fill"></i> */}
                                    {/* <img src={product5} alt="" className='pro_icon'/> */}
                                    <div className="card_text text-center">
                                    <p>We design, develop, test and certify products in the para category for  various spectrum of users and are motivated to remain segment leaders in  India.</p>
                                    <p className='border-top text-center p-1 border-primary border-2'>Discover<i class="bi bi-arrow-right-short"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col product_card">
                            <div class="card border-2 border-primary overflow-hidden">
                                <img src={productimg4} alt="" className='product_img' />
                                <div className="intro border-top border-5 border-primary">
                                    <h6 className='text-center mt-4 text-primary'>Advance Manufacturing </h6>
                                    {/* <i class="bi bi-arrow-up-square-fill"></i> */}
                                    {/* <img src={product5} alt="" className='pro_icon'/> */}
                                    <div className="card_text text-center">
                                    <p>We design and manufacture end-to-end  Sustainable solutions for technology </p>
                                    <p className='border-top text-center p-4 border-primary border-2'>Discover<i class="bi bi-arrow-right-short"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col product_card">
                            <div class="card border-2 border-primary overflow-hidden">
                                <img src={productimg1} alt="" className='product_img' />
                                <div className="intro border-top border-5 border-primary">
                                    <h6 className='text-center mt-4 text-primary'>Advanced Composites</h6>
                                    {/* <i class="bi bi-arrow-up-square-fill"></i> */}
                                    {/* <img src={product5} alt="" className='pro_icon'/> */}
                                    <div className="card_text text-center">
                                    <p>We design, develop and manufacture rotary-propulsion composites components ,critical aero-structure members and sub-systems.</p>
                                    <p className='border-top text-center p-1 border-primary border-2'>Discover<i class="bi bi-arrow-right-short"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Products
