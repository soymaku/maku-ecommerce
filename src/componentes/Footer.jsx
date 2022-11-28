import React from 'react';

const Footer = () => {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-md-4">
          <h3 className="mb-4">Quick Links</h3>
          <p><a href="#" className='text-decoration-underline text-muted text-reset'>Home page</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Sizing Guides</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>About Us</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Newsletter</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Social Media</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Contact Us</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Cookie Policy</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Privacy Policy</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Returns Policy</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Terms & Conditions</a></p>
          <p><a href="#" className='text-decoration-none text-muted'>Warranty Info</a></p>
        </div>
        <div className="col-md-4 text-center">
          <img src={"images/sparkyLogo.webp"} alt="sparky logo" width={200}/>
        </div>
        <div className="col-md-4 text-start">
          <h3>What is Sparky's Brands?</h3>
          <p>The finest one-stop shop for all things Shadow Conspiracy, Subrosa Brand, Shadow Riding Gear, and Rant BMX</p>
          <p>We’ve combined the webstores from your favorite brands to present the best deals, latest parts, complete bikes, hard to find products, exclusives, and more into one easy to use site.</p>
          <p>Click <a href="#" className='text-decoration-underline text-muted text-reset'>HERE</a> to read more about us!</p>
        </div>
      </div>
      <div className="row text-center">
        <small className="text-muted">© 2022, <a href="#" className="text-decoration-none text-muted">Sparkys Brands</a> <a href="#" className="text-decoration-none text-muted">Powered by Shopify</a> </small>
      </div>
    </div>
  );
}

export default Footer;