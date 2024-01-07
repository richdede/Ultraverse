import React from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="600"
              className="col-md-6"
            >
              <div className="spacer-single"></div>
              <h6
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <span className="text-uppercase id-color-2">
                  Ultraverse Market
                </span>
              </h6>
              <div className="spacer-10"></div>
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Create, sell or collect digital items.
              </h1>
              <p
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="300"
                className="lead"
              >
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </p>
              <div className="spacer-10"></div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-easing="ease-in-back"
              >
                <Link className="btn-main lead" to="/explore">
                  Explore
                </Link>
              </div>
              <div className="mb-sm-30"></div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              data-aos-delay="500"
              className="col-md-6 xs-hide"
            >
              <img src={NFT} className="lazy img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
