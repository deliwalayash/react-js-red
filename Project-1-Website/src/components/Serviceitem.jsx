import React from 'react';

// Using Bootstrap classes for d-flex and flex-column to ensure the card takes up full height 
// and the content is stacked correctly.
const Serviceitem = ({ heading, desc, imgsrc }) => {
  return (
    // The main container that will stretch to the height of the tallest item in the row
    // Assuming this is placed directly inside a <div className="col-lg-4 mb-4"> or similar
    // The d-flex h-100 ensures the inner card fills the column height.
    <div className="d-flex h-100"> 
      <div className="service-item d-flex flex-column h-100">
        <div className="service-item-content">
          <h3>
            <a href="#" className='text-decoration-none text-white'>{heading}</a>
          </h3>
          {/* Added description-text class for CSS targeting to enable flex-grow */}
          <p className="description-text">{desc}</p>
        </div>
        <div className="service-item-image mt-auto"> {/* Added mt-auto to push image to the bottom */}
          <figure>
            {/* Added img-fluid for responsive image scaling */}
            <img src={imgsrc} alt={heading} className="img-fluid" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Serviceitem;