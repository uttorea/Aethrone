import React from "react";
import "./Product.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import productimg1 from "../../assets/productimg1.png";
import productimg2 from "../../assets/productimg2.png";
import productimg4 from "../../assets/productimg4.png";

const productData = [
  {
    id: 1,
    img: productimg1,
    title: "Launch and Recovery",
    description: "We design and manufacture end-to-end solutions for launch and recovery/delivery of UAVs and Lighter Than Air Systems.",
  },
  {
    id: 2,
    img: productimg2,
    title: "Parachutes & LTA Systems",
    description: "We design, develop, test and certify products in the para category for various spectrum of users and are motivated to remain segment leaders in India.",
  },
  {
    id: 3,
    img: productimg4,
    title: "Advance Manufacturing",
    description: "We design and manufacture end-to-end Sustainable solutions for technology.",
  },
  {
    id: 4,
    img: productimg1,
    title: "Advanced Composites",
    description: "We design, develop and manufacture rotary-propulsion composites components, critical aero-structure members and sub-systems.",
  },
];

function Products() {
  return (
    <div>
      <div className="product_head">
        <div className="container-md container-fluid p-0">
          <HeadingComponent heading="Products" subheading="What We Offer"/>
          <div className="row row-cols-4 row-cols-md-4 g-2 g-lg-4 mt-4 product-card_main">
            {productData.map((product) => (
              <div className="col product_card" key={product.id}>
                <div className="card border-2 bordermaincolor  overflow-hidden">
                  <img src={product.img} alt={product.title} className="product_img" />
                  <div className="intro border-top border-5 border-primary d-flex flex-column"> 
                    <h6 className="text-center mt-1 mt-lg-4 maincolor producttitle">{product.title}</h6>
                    <div className="card_text text-center flex-grow-1" >
                      <p>{product.description}</p>
                    </div>
                    <p className="border-top text-center  border-primary border-2 discover-text ">
                      Discover<i className="bi bi-arrow-right-short"></i>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
