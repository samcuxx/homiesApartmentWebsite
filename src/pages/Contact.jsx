import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="site-wrap">
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0">
                  <Link to="/" className="text-white h2 mb-0">
                    <strong>
                      Homies<span className="text-primary">.</span>
                    </strong>
                  </Link>
                </h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav
                  className="site-navigation text-right text-md-right"
                  role="navigation"
                >
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <Link
                      to="#"
                      className="site-menu-toggle js-menu-toggle text-white"
                    >
                      <span className="icon-menu h3" />
                    </Link>
                  </div>
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="has-children">
                      <Link to="/apartments">Apartments</Link>
                   
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>{" "}
      {/* .site-mobile-menu */}
      <div
        className="site-blocks-cover inner-page-cover overlay"
        style={{ backgroundImage: 'url("images/hero_bg_1.jpg")' }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-7 text-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <h1 className="text-white">Contact Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7 mb-5">
              <form action="#" className="contact-form">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Say hello to us"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Contact Info</h3>
                <p className="mb-0 font-weight-bold text-black">Address</p>
                <p className="mb-4 text-black">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <p className="mb-0 font-weight-bold text-black">Phone</p>
                <p className="mb-4">
                  <Link to="#">+1 232 3235 324</Link>
                </p>
                <p className="mb-0 font-weight-bold text-black">
                  Email Address
                </p>
                <p className="mb-0">
                  <Link to="#">youremail@domain.com</Link>
                </p>
              </div>
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3 text-black">More Info</h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  ad iure porro mollitia architecto hic consequuntur. Distinctio
                  nisi perferendis dolore, ipsa consectetur
                </p>
                <p>
                  <Link to="#" className="btn btn-primary  py-2 px-4">
                    Learn More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5">Our Office</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet, fugit nam obcaecati fuga itaque deserunt officia,
                  error reiciendis ab quod?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section block-13 bg-light">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
              <h2 className="mb-5">Love By Our Customers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error
                reiciendis ab quod?
              </p>
            </div>
          </div>
          <div className="nonloop-block-13 owl-carousel">
            <div className="text-center p-3 p-md-5 bg-white">
              <div className="mb-4">
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="w-50 mx-auto img-fluid rounded-circle"
                />
              </div>
              <div className="text-black">
                <h3 className="font-weight-light h5">Megan Smith</h3>
                <p className="font-italic">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                </p>
              </div>
            </div>
            <div className="text-center p-3 p-md-5 bg-white">
              <div className="mb-4">
                <img
                  src="images/person_2.jpg"
                  alt="Image"
                  className="w-50 mx-auto img-fluid rounded-circle"
                />
              </div>
              <div className="text-black">
                <h3 className="font-weight-light h5">Brooke Cagle</h3>
                <p className="font-italic">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                </p>
              </div>
            </div>
            <div className="text-center p-3 p-md-5 bg-white">
              <div className="mb-4">
                <img
                  src="images/person_3.jpg"
                  alt="Image"
                  className="w-50 mx-auto img-fluid rounded-circle"
                />
              </div>
              <div className="text-black">
                <h3 className="font-weight-light h5">Philip Martin</h3>
                <p className="font-italic">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                </p>
              </div>
            </div>
            <div className="text-center p-3 p-md-5 bg-white">
              <div className="mb-4">
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="w-50 mx-auto img-fluid rounded-circle"
                />
              </div>
              <div className="text-black">
                <h3 className="font-weight-light h5">Steven Ericson</h3>
                <p className="font-italic">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                </p>
              </div>
            </div>
            <div className="text-center p-3 p-md-5 bg-white">
              <div className="mb-4">
                <img
                  src="images/person_2.jpg"
                  alt="Image"
                  className="w-50 mx-auto img-fluid rounded-circle"
                />
              </div>
              <div className="text-black">
                <h3 className="font-weight-light h5">Nathan Dumlao</h3>
                <p className="font-italic">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                </p>
              </div>
            </div>
            <div className="text-center p-3 p-md-5 bg-white">
              <div className="mb-4">
                <img
                  src="images/person_4.jpg"
                  alt="Image"
                  className="w-50 mx-auto img-fluid rounded-circle"
                />
              </div>
              <div className="text-black">
                <h3 className="font-weight-light h5">Brook Smith</h3>
                <p className="font-italic">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary" data-aos="fade">
        <div className="container">
          <div className="row">
            <Link to="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-facebook text-white" />
            </Link>
            <Link to="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-twitter text-white" />
            </Link>
            <Link to="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-instagram text-white" />
            </Link>
            <Link to="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-linkedin text-white" />
            </Link>
            <Link to="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-pinterest text-white" />
            </Link>
            <Link to="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-youtube text-white" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
