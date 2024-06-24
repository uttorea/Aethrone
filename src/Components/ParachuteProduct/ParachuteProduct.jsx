import React from 'react'
import './ParachuteProduct.css'
import parachuteProduct1 from '../../assets/parachuteProduct1.png'
import parachuteProduct2 from '../../assets/parachuteProduct2.png'
import parachuteProduct3 from '../../assets/parachuteProduct3.png'
import parachuteProduct4 from '../../assets/parachuteProduct4.png'
import ParachuteLighter from '../ParachuteLighter/ParachuteLighter'
const ParachuteProduct = () => {
  return (
    <>
      <div className=' mt-5'>
        <h3 className='pp_heading px-2'>Product</h3>
        <p className='mt-4'>We Design Products In Para Vertical</p>
        <div class="row mt-5 justify-content-center">
          <div class="col-md-2 pp_card">
            <div class="card border-primary border-2">
              <img src={parachuteProduct1} className="pp_img" alt="Card image" />
              <div class="pp_card_body1"></div>
              <div class="pp_card_body2">
                <h6 class='d-flex justify-content-center ppCard_para1'>Adventure</h6>
                <div class="dotted-line"></div>
                <ol class='justify-content-center ppCard_para2'>
                  <li>Paraglider</li>
                  <li>Para Sail Canopy</li>
                  <li>Paramotor canopy</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="col-md-2 pp_card">
            <div class="card border-primary border-2">
              <img src={parachuteProduct2} className="pp_img" alt="Card image" />
              <div class="pp_card_body1"></div>
              <div class="pp_card_body2">
                <h6 className='d-flex justify-content-center ppCard_para1'>Military</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 pp_card">
            <div class="card border-primary border-2">
              <img src={parachuteProduct3} className="pp_img" alt="Card image" />
              <div class="pp_card_body1"></div>
              <div class="pp_card_body2">
                <h6 className='d-flex justify-content-center ppCard_para1'>Space</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 pp_card">
            <div class="card border-primary border-2">
              <img src={parachuteProduct4} className="pp_img" alt="Card image" />
              <div class="pp_card_body1"></div>
              <div class="pp_card_body2">
                <h6 className='d-flex justify-content-center ppCard_para1' >Inflatables</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParachuteLighter />
    </>
  )
}

export default ParachuteProduct
