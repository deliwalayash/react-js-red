import React from 'react'
import Button1 from './Button1';

const Footer = () => {
    const footerData = {
    contact: {
        phone: '(0)-152.885.253',
        email: 'info@domainname.com',
    },
    location: {
        street: '123 Lorem Street Suite 5b, b6',
        cityCountry: 'Park London, UK SWIA MA',
    },
    brandName: 'Nextmind.',
    // You would import your logo here if it's an image
    // logo: importedLogo
};
  return (
    <div className='main-footer'>
        <div className="cta-section">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="cta-text">
                            <h2>Let's start work <span className="highlight">together!</span></h2>
                            <p>Partner with us to create intelligent, impactful, and future-ready AI solutions together.</p>
                        </div>
                       <Button1 text={"Let1s Work To geather"}></Button1>
                    </div>
                </div>
            </div>

            {/* --- 2. Main Footer Content --- */}
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        
                        {/* Logo/Brand Section */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer-logo">
                                {/* Use an imported logo image here if available */}
                                <span className="brand-logo">
                                    {/* You would replace the span content with <img src={footerData.logo} alt="Nextmind Logo" /> */}
                                </span>
                                <span className="brand-text">{footerData.brandName}</span>
                            </div>
                        </div>

                        {/* Get in Touch */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer-col">
                                <h4>Get in Touch</h4>
                                <ul className="contact-list">
                                    <li><a href={`tel:${footerData.contact.phone}`}>{footerData.contact.phone}</a></li>
                                    <li><a href={`mailto:${footerData.contact.email}`}>{footerData.contact.email}</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Our Location */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer-col">
                                <h4>Our Location</h4>
                             
                            </div>
                        </div>

                        {/* Subscribe Newsletter */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer-col">
                                <h4>Subscribe Newsletter</h4>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="Enter your email" />
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- 3. Copyright Bar --- */}
            <div className="copyright-bar">
                <div className="container">
                    <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
            </div>
      
    </div>
  )
}

export default Footer
