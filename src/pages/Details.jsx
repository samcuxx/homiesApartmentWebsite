import React from 'react'

const Details = () => {
  return (
   <div>
  <div className="site-blocks-cover inner-page-cover overlay" style={{backgroundImage: 'url("images/hero_bg_1.jpg")'}} data-aos="fade" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay={400}>
          <h1 className="text-white">Marga Luxury Suite</h1>
          <p>$6,200/night</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="featured-property-half d-flex">
      <div className="image" style={{backgroundImage: 'url("images/hero_bg_1.jpg")'}} />
      <div className="text">
        <h2>Property Information</h2>
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quae obcaecati doloribus distinctio, aliquam vero? Molestias, amet, eveniet.</p>
        <ul className="property-list-details mb-5">
          <li className="text-black">Property Name: <strong className="text-black">Marga Luxury Suite</strong></li>
          <li>Room: <strong>2</strong></li>
          <li>Total Area: <strong>482 Square Feets</strong></li>
          <li>Category: <strong>Modern House</strong></li>
          <li>Lunch Date: Jan 20, 2019<strong /></li>
        </ul>
        <p><a href="contact.html" className="btn btn-primary px-4 py-3">Contact Us</a></p>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
          <h2 className="mb-5">Browse Apartments</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt
            officia, error reiciendis ab quod?</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={100}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_1.jpg")'}} />
            <div className="unit-9-content">
              <h2>Nashville</h2>
              <span>$130/night</span>
              {/* <span>with Wendy Matos</span> */}
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={200}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_2.jpg")'}} />
            <div className="unit-9-content">
              <h2>Baltimore</h2>
              <span>$230/night</span>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={300}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_3.jpg")'}} />
            <div className="unit-9-content">
              <h2>Austin</h2>
              <span>$130/night</span>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={400}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_4.jpg")'}} />
            <div className="unit-9-content">
              <h2>Atlanta</h2>
              <span>$150/night</span>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={100}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_1.jpg")'}} />
            <div className="unit-9-content">
              <h2>Nashville</h2>
              <span>$130/night</span>
              {/* <span>with Wendy Matos</span> */}
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={200}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_2.jpg")'}} />
            <div className="unit-9-content">
              <h2>Baltimore</h2>
              <span>$230/night</span>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={300}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_3.jpg")'}} />
            <div className="unit-9-content">
              <h2>Austin</h2>
              <span>$130/night</span>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-3 mb-5" data-aos="fade-up" data-aos-delay={400}>
          <a href="/apartmentdetail" className="unit-9">
            <div className="image" style={{backgroundImage: 'url("images/img_4.jpg")'}} />
            <div className="unit-9-content">
              <h2>Atlanta</h2>
              <span>$150/night</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
          <h2 className="mb-5">Featured Apartments</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>
        </div>
      </div>
      <div className="site-block-retro d-block d-md-flex">
        <a href="#" className="col1 unit-9 no-height" data-aos="fade-up" data-aos-delay={100}>
          <div className="image" style={{backgroundImage: 'url("images/img_2.jpg")'}} />
          <div className="unit-9-content">
            <h2>Baltimore Apartment</h2>
            <span>$600/night</span>
          </div>
        </a>
        <div className="col2 ml-auto">
          <a href="#" className="col2-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay={200}>
            <div className="image" style={{backgroundImage: 'url("images/img_3.jpg")'}} />
            <div className="unit-9-content">
              <h2>Austin Apartment</h2>
              <span>$290/night</span>
            </div>
          </a>
          <a href="#" className="col2-row2 unit-9 no-height" data-aos="fade-up" data-aos-delay={300}>
            <div className="image" style={{backgroundImage: 'url("images/img_1.jpg")'}} />
            <div className="unit-9-content">
              <h2>Atlanta Apartment</h2>
              <span>$1,290/night</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section block-13">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
          <h2 className="mb-5">Love By Our Customers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>
        </div>
      </div>
      <div className="nonloop-block-13 owl-carousel">
        <div className="text-center p-3 p-md-5 bg-white">
          <div className="mb-4">            
            <img src="images/person_1.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
          </div>
          <div className="text-black">
            <h3 className="font-weight-light h5">Megan Smith</h3>
            <p className="font-italic">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”</p>
          </div>
        </div>
        <div className="text-center p-3 p-md-5 bg-white">
          <div className="mb-4">            
            <img src="images/person_2.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
          </div>
          <div className="text-black">
            <h3 className="font-weight-light h5">Brooke Cagle</h3>
            <p className="font-italic">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”</p>
          </div>
        </div>
        <div className="text-center p-3 p-md-5 bg-white">
          <div className="mb-4">            
            <img src="images/person_3.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
          </div>
          <div className="text-black">
            <h3 className="font-weight-light h5">Philip Martin</h3>
            <p className="font-italic">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”</p>
          </div>
        </div>
        <div className="text-center p-3 p-md-5 bg-white">
          <div className="mb-4">            
            <img src="images/person_1.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
          </div>
          <div className="text-black">
            <h3 className="font-weight-light h5">Steven Ericson</h3>
            <p className="font-italic">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”</p>
          </div>
        </div>
        <div className="text-center p-3 p-md-5 bg-white">
          <div className="mb-4">            
            <img src="images/person_2.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
          </div>
          <div className="text-black">
            <h3 className="font-weight-light h5">Nathan Dumlao</h3>
            <p className="font-italic">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”</p>
          </div>
        </div>
        <div className="text-center p-3 p-md-5 bg-white">
          <div className="mb-4">            
            <img src="images/person_4.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
          </div>
          <div className="text-black">
            <h3 className="font-weight-light h5">Brook Smith</h3>
            <p className="font-italic">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”</p>
          </div>
        </div>
      </div>
    </div>
  </div>  
  <div className="bg-primary" data-aos="fade">
    <div className="container">
      <div className="row">
        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-facebook text-white" /></a>
        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-twitter text-white" /></a>
        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-instagram text-white" /></a>
        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-linkedin text-white" /></a>
        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-pinterest text-white" /></a>
        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-youtube text-white" /></a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Details
