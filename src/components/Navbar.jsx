import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      </div>
    </>
  );
};

export default Navbar;
