import React from 'react'
import './CompositeLearn.css'
import compositeLearnimg1 from '../../assets/compositeLearnimg1.png'
import compositeLearnimg2 from '../../assets/compositeLearnimg2.png'
import compositeLearnimg3 from '../../assets/compositeLearnimg3.png'
const CompositeLearn = () => {
  return (
    <div>
        <div className="mt-5">
              <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 px-5">
                <div class="col">
                    <div class="card h-100 border-primary ">
                        <div className='d-flex justify-content-center align-items-center p-5'>
                        <img src={compositeLearnimg1} class="learn_img" alt="..." />
                        </div>
                        <div class="card-footer border-5 border-primary">
                            <h6 className='text-primary text-center'>Rotary Composites</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-primary">
                    <div className='d-flex justify-content-center align-items-center p-5'>
                        <img src={compositeLearnimg2} class="learn_img" alt="..." />
                        </div>
                        <div class="card-footer border-5 border-primary">
                            <h6 className='text-primary text-center'>Aero-Structure Members</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-primary">
                    <div className='d-flex justify-content-center align-items-center p-5'>
                        <img src={compositeLearnimg3} class="learn_img" alt="..." />
                        </div>
                        <div class="card-footer border-5 border-primary">
                        <h6 className='text-primary text-center'>Avionics Composites</h6>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default CompositeLearn
