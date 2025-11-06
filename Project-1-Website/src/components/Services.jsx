import React from "react";
import Headingbtn from "./Headingbtn";
import ServicesHeading from "./ServicesHeading";
import Serviceitem from "./Serviceitem";
import serimg from "../assets/images/service-item-1.png";
import serimg2 from "../assets/images/service-item-2.png";
import serimg3 from "../assets/images/service-item-3.png";

const Services = () => {
  // 🔹 Step 1: Store your service data in an array
  const servicesData = [
    {
      heading: "AI Strategy & Consulting",
      desc: "We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation.",
      imgsrc: serimg,
    },
    {
      heading: "AI Integration & Deployment",
      desc: "We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation.",
      imgsrc: serimg2,
    },
    {
      heading: "Custom AI Solutions",
      desc: "We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation.",
      imgsrc: serimg3,
    },
    
  ];

  const buttonheading=[{
      text:"AI UI /UX Design"
    },{
      text:"Chatboat Design"
    },{
      text:"Design Automation"
    },{
      text:"Predictive UX"
    },{
      text:"Personailsied Experience"
    },{
      text:"Generative Branding"
    },{
      text:"Predictive UX"
    },
  
  ]

  return (
    <div className="mb-5">
      <div className="text-center section-title section-title-center">
        <Headingbtn text={"Our Services"} />
        <ServicesHeading
          text={
            <>
              AI-driven design services for <br /> future innovations
            </>
          }
        />
      </div>

      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <Serviceitem
                heading={service.heading}
                desc={service.desc}
                imgsrc={service.imgsrc}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center section-title section-title-center mt-5">
   
    <div className="d-flex flex-wrap justify-content-center gap-3 container">
        {
            buttonheading.map((curEle, index)=>{
            
                return(
                    <Headingbtn key={index} text={curEle.text}></Headingbtn>
                )
            })
        }
    </div>
</div>
    
    </div>
  );
};

export default Services;
