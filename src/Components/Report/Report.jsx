import React from "react";
import "./Report.css";
function Report() {
  return (
    <section className="cta-section background text-white ptb-120 position-relative overflow-hidden mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-between mt-5">
          <div className="col-lg-5 col-md-12">
            <div className="position-relative z-5">
              <h2>Actionable Reports to Grow your Business</h2>
              <p className="text-muted">Conveniently syndicate client-centric users for transparent scenarios. Uniquely evolve partnerships rather than cross-platform interfaces.</p>
             <button type="submit" className="btn btn-primary mt-4"> Get Start</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row aligin-items-center justify-content-cemter position-relative ">
              <div className="col-md-6">
              <div className="rounded text-center shadow p-5 bg-white my-5">
                  <h3 className='display-5 fw-bold'>9/10</h3>
                  <p className="mb-0 text-muted">Overall our customer satisfaction score</p>
                </div>
                <div className="rounded text-center shadow p-5 bg-white my-5">
                  <h3 className='display-5 fw-bold'>15K+</h3>
                  <p className="mb-0 text-muted">Happy customer in worldwidee</p>
                </div>
              </div>
              <div className="col-md-6">

                <div className="rounded text-center shadow p-5 bg-white">
                  <h3 className='display-5 fw-bold'>95%</h3>
                  <p className="mb-0 text-muted">Our Customer customer satisfaction score</p>
                </div>
              </div>
              <div className="bg-circle rounded-circle position-absolute z--1">
                <img src="Assets/blob.svg"  className="img-fluid rounded img" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-primary left-30"></div>
        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning left-5"></div>
      </div>
    </section>
  );
}

export default Report;
