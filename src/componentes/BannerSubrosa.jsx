import React from 'react';

const BannerSubrosa = () => {
  return (
    <div className="row">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={"/images/bannerSubrosa.jpg"} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={"/images/shadowBanner.webp"} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={"/images/bannerRant.webp"} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSubrosa;