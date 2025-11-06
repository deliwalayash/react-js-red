import React from 'react'
import Headingbtn from './Headingbtn'
import Factscards from './Factscards'

const Facts = () => {

    const factCardsData = [
        // Data array (omitted for brevity, but it's correct)
        {
            title: "Proven Technical Expertise",
            statistic: "15+",
            unit: "Years of AI-Driven Design",
            description: "Our team brings deep experience in machine learning, data engineering, and full-stack development."
        },
        {
            title: "Highly Customizable Solutions",
            statistic: "200+",
            unit: "Projects Successfully Delivered",
            description: "We don't believe in one size fits all. Every solution is tailored to your business needs and workflows."
        },
        {
            title: "Focus On Real Results For Growth",
            statistic: "95%",
            unit: "Client Satisfaction Rate",
            description: "We build AI that’s safe, transparent, and responsible, designed with security & compliance from day one."
        },
    ];

    return (
        <div>
            <div className="text-center section-title section-title-center">
                <Headingbtn text={"Our facts"} />
                <h2 className="display-5">
                    Why leading brands trust us to <br /> deliver smart
                    <span className="font-effect display-5"> AI Solutions</span>
                </h2>
            </div>
            <div className='container'>
                <div className="row justify-content-center"> {/* Added justify-content-center for better layout */}
                    
                    {factCardsData.map((item, index) => (
                        // 1. Column Div is the outermost element in the map
                        // 2. The key goes on the outermost element
                        <div className='col-lg-4 col-md-6 h-100' key={index}>
                            {/* 3. Pass props directly to the Factscards component tag */}
                            <Factscards 
                                title={item.title} 
                                counter={item.statistic} // NOTE: Mapped to statistic key in data
                                dec={item.unit}           // Mapped to unit key in data
                                dec2={item.description}
                            />
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default Facts