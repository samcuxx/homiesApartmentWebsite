import React from "react";
import { Link } from "react-router-dom";

const News = () => {
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
              <h1 className="text-white">News &amp; Events</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Link to="single.html">
                <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <Link to="single.html">This Is The Day, Party, Party!</Link>
                </h2>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Link to="single.html">
                <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <Link to="single.html">This Is The Day, Party, Party!</Link>
                </h2>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <Link to="single.html">
                <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <Link to="single.html">This Is The Day, Party, Party!</Link>
                </h2>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Link to="single.html">
                <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <Link to="single.html">This Is The Day, Party, Party!</Link>
                </h2>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Link to="single.html">
                <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <Link to="single.html">This Is The Day, Party, Party!</Link>
                </h2>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <Link to="single.html">
                <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <Link to="single.html">This Is The Day, Party, Party!</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5" data-aos="fade-up">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="site-block-27">
                <ul>
                  <li>
                    <Link to="#">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">5</Link>
                  </li>
                  <li>
                    <Link to="#">&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
