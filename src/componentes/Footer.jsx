import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-md-4">
         {/* Estos links son decorativos, no cumplen funcion alguna */}
          <h3 className="mb-4">Quick Links</h3>
          <p><Link to={"/"} className='text-decoration-underline text-muted text-reset'>Home page</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Sizing Guides</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>About Us</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Newsletter</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Social Media</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Contact Us</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Cookie Policy</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Privacy Policy</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Returns Policy</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Terms & Conditions</Link></p>
          <p><Link to={"/"} className='text-decoration-none text-muted'>Warranty Info</Link></p>
        </div>
        <div className="col-md-4 text-center">
          <img src={"/images/sparkyLogo.webp"} alt="sparky logo" width={200}/>
        </div>
        <div className="col-md-4 text-start">
          <h3>What is Sparky's Brands?</h3>
          <p>The finest one-stop shop for all things Shadow Conspiracy, Subrosa Brand, Shadow Riding Gear, and Rant BMX</p>
          <p>We’ve combined the webstores from your favorite brands to present the best deals, latest parts, complete bikes, hard to find products, exclusives, and more into one easy to use site.</p>
          <p>Click <Link to={"/"} className='text-decoration-underline text-muted text-reset'>HERE</Link> to read more about us!</p>
        </div>
      </div>
      <div className="row text-center">
        <small className="text-muted">© 2022, <Link to={"/"} className="text-decoration-none text-muted">Sparkys Brands</Link> <Link to={"/"} className="text-decoration-none text-muted">Powered by Shopify</Link> </small>
      </div>
    </div>
  );
}

export default Footer;