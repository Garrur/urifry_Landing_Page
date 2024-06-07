import React from 'react';

const Header = () => (
  <div className="main-head-section">
    <div className="left-text-heading-section">
      <img className="blur-head-first" src="dir/images/blur1.png" alt="" />
      <h1 data-aos="fade-up">make the best financial decisions</h1>
      <p data-aos="fade-up">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
      <span className="button-head-section" data-aos="fade-up">
        <button className="Started-btn">
          get started <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button className="Video-btn">
          <i className="fa-solid fa-circle-play"></i> watch video
        </button>
      </span>
      <span className="img-left-strap">
        <img src="dir/images/vnag-strap.png" alt="" />
      </span>
    </div>
    <div className="right-img-heading-section" data-aos="fade-up" data-aos-duration="3000">
      <img src="dir/images/mobile-op.png" alt="" />
    </div>
  </div>
);

export default Header;
