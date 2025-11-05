import React from "react";

const AboutUsBox = ({ heading, count, imgsrc, imgsrc2 }) => {
  return (
    <div>
      <div className="about-us-box">
        <div className="about-us-item">
          <div className="">
            <div className="d-flex mb-4">
              <div>
                <h3 className="text-white fs-5 fw-bold">{heading}</h3>
              </div>
              <div className="icon-box">
                <img src={imgsrc} alt="" />
              </div>
            </div>
            <h2 className="fs-1 text-white">
              <span className="counter">{count}</span>+
            </h2>
          </div>
        </div>
        <div className="about-item-image">
          <img src={imgsrc2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBox;
