import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="mb-5">
          <h3 className="footer-heading mb-4">About Homies</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
        </div>
        <div className="mb-5">
          <h3 className="footer-heading mb-4">Subscribe</h3>
          <form action="#" method="post" className="site-block-subscribe">
            <div className="input-group mb-3">
              <input type="text" className="form-control border-secondary bg-transparent" placeholder="Enter your email" aria-label="Enter Email" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary rounded-top-right-0" type="button" id="button-addon2">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="row mb-5">
          <div className="col-md-12">
            <h3 className="footer-heading mb-4">Navigations</h3>
          </div>
          <div className="col-md-6 col-lg-6">
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Apartments</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Featured Apartment</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-6">
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Membership</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3 className="footer-heading mb-4">Follow Us</h3>
            <div>
              <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-5 mb-lg-0">
        <div className="mb-5">
          <h3 className="footer-heading mb-4">Watch Live Streaming</h3>
          <div className="block-16">
            <figure>
              <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
              <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-5 mt-5 text-center">
      <div className="col-md-12">
        <p>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made by <i className="icon-heart text-danger" aria-hidden="true" />  <a href="https://colorlib.com" target="_blank">Samuel Amoah</a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer