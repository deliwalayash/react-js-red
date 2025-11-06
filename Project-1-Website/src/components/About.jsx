import React from "react";
import Headingbtn from "./Headingbtn";
import AboutUsBox from "./AboutUsBox";
import logo1 from "../assets/images/icon-about-item-1.svg";
import logo2 from "../assets/images/about-item-image-1.png";

const About = () => {
  // 🔹 step 1: put your AboutUsBox data in one array
  const aboutItems = [
    { heading: "Seamless Integration", count: 298 },
    { heading: "AI Projects Delivered", count: 978 },
    { heading: "Handled By I BOTS", count: 300 },
    { heading: "Fast time to market", count: 298 },
  ];

  return (
    <div>
      <div className="text-center section-title section-title-center">
        <Headingbtn text={"About us"} />
        <h2 className="display-5">
          Our team of data scientists, engineers, and <br />
          designers work at the intersection technology <br />
          and strategy turning complex challenges into <br />
          simple, AI powered solutions.
        </h2>
      </div>
    
      <div className="container mb-5">
        <div className="row">
          {aboutItems.map((item, index) => (
            <div className="col-3" key={index}>
              <AboutUsBox
                heading={item.heading}
                count={item.count}
                imgsrc={logo1}
                imgsrc2={logo2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
