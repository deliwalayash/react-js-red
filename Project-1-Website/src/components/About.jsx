import React from "react";
import Headingbtn from "./Headingbtn";
import AboutUsBox from "./AboutUsBox";

const About = () => {
  return (
    <div>
      <div className="text-center section-title section-title-center ">
        <Headingbtn text={"About us"}></Headingbtn>
        <h2 className="display-5">
          Our team of data scientists, engineers, and <br />
          designers work at the intersection technology <br />
          and strategy turning complex challenges into <br />
          simple, AI powered solutions.
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <AboutUsBox heading={"Seamless Integreation"} count={298}></AboutUsBox>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
