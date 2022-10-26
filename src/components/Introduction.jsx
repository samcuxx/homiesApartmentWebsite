import React from 'react'

const Introduction = () => {
  return (
    <>
       <div className="site-blocks-cover overlay"
        style={{ backgroundImage: 'url("images/hero_bg_2.jpg")' }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-8 text-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <h1 className="mb-4">Excellent Space For Your Next Home</h1>
              <p className="mb-5">
                1105 Madison Plaza Suite 120 Chesapeake, CA, California
              </p>
              <p>
                <a href="#" className="btn btn-primary px-5 py-3">
                  Take a Tour
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="featured-property-half d-flex">
          <div
            className="image"
            style={{ backgroundImage: 'url("images/hero_bg_1.jpg")' }}
          />
          <div className="text">
            <h2>Property Information</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quae obcaecati doloribus distinctio, aliquam vero? Molestias,
              amet, eveniet.
            </p>
            <ul className="property-list-details mb-5">
              <li className="text-black">
                Property Name:{" "}
                <strong className="text-black">Marga Luxury Suite</strong>
              </li>
              <li>
                Room: <strong>2</strong>
              </li>
              <li>
                Total Area: <strong>482 Square Feets</strong>
              </li>
              <li>
                Category: <strong>Modern House</strong>
              </li>
              <li>
                Lunch Date: Jan 20, 2019
                <strong />
              </li>
            </ul>
            <p>
              <a href="#" className="btn btn-primary px-4 py-3">
                Get Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduction
