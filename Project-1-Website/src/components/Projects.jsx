import React from 'react'
import Headingbtn from './Headingbtn'
import img1 from '../assets/images/project-1.jpg'
import img2 from '../assets/images/project-2.jpg'
import img3 from '../assets/images/project-3.jpg'
import img4 from '../assets/images/project-4.jpg'
import Project_Card from './Project_Card'

const Projects = () => {

    const projectCardsData = [
  {
    // Use the actual import variable here (e.g., import img1 from './assets/project1.jpg')
    img: img1, 
    title: "Success Stories AI in Action",
    dec: "Data Analytics", // Appears to be the subtitle or category below the main title
  },
  {
    img: img2,
    title: "Success Stories AI in Action",
    dec: "Data Analytics",
  },
  {
    img: img3,
    title: "Success Stories AI in Action",
    dec: "Data Analytics",
  },
  {
    img: img4,
    title: "Success Stories AI in Action",
    dec: "Data Analytics",
  },
];
  return (
    <div>
         <div className="text-center section-title section-title-center">
                <Headingbtn text={"Our Projects"} />
                <h2 className="display-5">
                    Real Project Real Impact Real <br /> 
                    <span className="font-effect display-5"> Intelligence</span>
                </h2>
            </div>
            <div className='container'>
            <div className="row">
                
                {/* Mapping the project data to the cards */}
                {projectCardsData.map((item, index) => (
                    <div className='col-lg-3 col-md-6' key={index}>
                        <Project_Card
                            img={item.img}
                            title={item.title}
                            dec={item.dec}
                        />
                    </div>
                ))}
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Projects
