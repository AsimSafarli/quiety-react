import React from "react";
import "./Whyus.css";
function Whyus() {
  return (
    <section className="whyus pt-60 pb-120 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between justify-content-center">
          <div className="col-lg-5 col-md-7 order-1 order-lg-0">
            <div className="position-relative">
              <img
                src="Assets/feature-hero-img-2.svg"
                alt=""
                className="img-fluid mb"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <div className="why-choose-content">
              <div className="mb-32">
                <h2>We run all kinds of services in form of software</h2>
                <p className="text-muted">
                  Conceptualize multimedia based ROI and wireless intellectual
                  capital. Dramatically seize visionary technologies whereas
                  interactive value. Thought leadership Per
                </p>
              </div>
              <ul className="list-unstyled d-flex flex-wrap list-two-col">
                <li className="py-1"><ion-icon name="checkmark-circle-outline" ></ion-icon>Thought leadership</li>
                <li className="py-1"><ion-icon name="checkmark-circle-outline"></ion-icon>Modernized prospecting</li>
                <li className="py-1"><ion-icon name="checkmark-circle-outline"></ion-icon>Showcasing success</li>
                <li className="py-1"><ion-icon name="checkmark-circle-outline"></ion-icon>Manage smartly</li>
                <li className="py-1"><ion-icon name="checkmark-circle-outline"></ion-icon>Personal branding</li>
                <li className="py-1"><ion-icon name="checkmark-circle-outline"></ion-icon>Better win rates</li>
                <li className="py-1"><ion-icon name="checkmark-circle-outline"></ion-icon>Sales compliance</li>
                <li className="py-1"><ion-icon name="checkmark-circle-outline"></ion-icon>Communicate fast</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyus;
