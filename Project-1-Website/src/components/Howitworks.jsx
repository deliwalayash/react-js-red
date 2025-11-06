import React from "react";
import Headingbtn from "./Headingbtn";
import img1 from '../assets/images/icon-how-work-step-1.svg'
import img2 from '../assets/images/icon-how-work-step-2.svg'
import img3 from '../assets/images/icon-how-work-step-3.svg'
import img4 from '../assets/images/icon-how-work-step-4.svg'
import Howiworkitem from "./Howiworkitem";
import video from '../assets/images/nextmind-how-work-video.mp4'

const processSteps = [
  {
    step: "STEP 01",
    title: "Discovery & Strategy",
    description: "We dive deep into your goals and challenges to uncover high-impact AI opportunities and craft a clear.",
    iconClass: img1// Placeholder for an icon class
  },
  {
    step: "STEP 02",
    title: "Data & Infrastructure Assessment",
    description: "We dive deep into your goals and challenges to uncover high-impact AI opportunities and craft a clear.",
    iconClass: img2 // Placeholder for an icon class
  },
  {
    step: "STEP 03",
    title: "Custom AI Development",
    description: "We dive deep into your goals and challenges to uncover high-impact AI opportunities and craft a clear.",
    iconClass: img3// Placeholder for an icon class
  },
  {
    step: "STEP 04",
    title: "Optimization & Support",
    description: "We dive deep into your goals and challenges to uncover high-impact AI opportunities and craft a clear.",
    iconClass: img4 // Placeholder for an icon class
  },
];

const Howitworks = () => {
  return (
    <div>
      <div className="how-it-work">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="how-work-content">
                <div className=" section-title section-title-center">
                  <Headingbtn text={"About us"} />
                  <h2 className="display-5">Our Process For Smarter</h2>
                  <span className="font-effect display-5">AI Solutions</span>
                </div>
                <div className="how-i-work-list"> 
      {/* This container will hold all the mapped items, matching the layout in your image */}
      
      {/* The .map() function iterates over the array and returns a Howiworkitem for each object */}
      {processSteps.map((item, index) => (
        <Howiworkitem
          key={index} // Always use a unique key when mapping elements
          step={item.step} 
          title={item.title} 
          dec={item.description}    // Maps 'dec' (description) to the 'dec' prop
          img={item.iconClass}    // Maps 'img' (image path) to the 'img' prop
        />
      ))}
      
    </div>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="how-work-video-content">
                <div className="how-work-video">
                  <video autoPlay muted loop ><source src={video}></source></video>
                </div>
                <div className="section-footer-text">
                  <p>
                    We help businesses design, build, and deploy intelligent solutions that drive real results.
                    <a href="contact.html">Contact Now</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
