import React from "react";
import "./Expert.css";
function Expert() {
  return (
    <section className="feature-section-two ptb-120 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="feature-content-wrap">
              <div className="section-heading">
                <h2>We are development experts on all technologies Quickly</h2>
                <p>
                  Quickly incubate functional channels with multidisciplinary
                  architectures authoritatively fabricate formulate exceptional
                  innovation.
                </p>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-primary me-4">
                    <ion-icon name="bar-chart-outline"></ion-icon>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5 text-dark">Pixel Perfect Design</h3>
                    <p className="text-muted">
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed expedite
                      virtual networks.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-danger me-4">
                    <ion-icon name="finger-print-outline"></ion-icon>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Unique & Minimal Design</h3>
                    <p className="text-muted">
                      Dramatically administrate progressive metrics without
                      error-free globally simplify standardized plagiarize
                      technically sound.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-dark me-4">
                    <ion-icon name="headset-outline"></ion-icon>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">24/7 Free Online Support</h3>
                    <p className="text-muted">
                      Interactively whiteboard transparent testing procedures
                      before bricks-and-clicks initiatives competencies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="feature-img-wrap">
              <img src="Assets/feature-hero-img.svg" alt=""  className="img-fluid rounded-custom"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expert;
