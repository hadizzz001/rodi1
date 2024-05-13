import Image from "next/image";
import React from "react";

function Client() {
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Customer Reviews</h2>
        </div>
        <div
          id="carouselExample3Controls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <Image width={200} height={150} src="/images/client.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Olga Smirnova</h5>
                  <h6>We searched for a long time and found it here!</h6>
                  <p>
                  We have been looking for a suitable specialist for a long time and they only helped us here! This team contains only professionals, we eternally grateful to the guys. Thank you.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <Image width={200} height={200} src="/images/client1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Natalya Kuznetsova</h5>
                  <h6>Quality services</h6>
                  <p>
                  We tried several options before contacting here. Never regretted it! Now we advise everyone friends and acquaintances.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box col-lg-10 mx-auto">
                <div className="img_container">
                  <div className="img-box">
                    <div className="img_box-inner">
                      <Image width={200} height={200} src="/images/client4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="detail-box">
                  <h5>Dmitry Petrov</h5>
                  <h6>Best service we've seen</h6>
                  <p>
                  Managers are very responsive and help solve problems practically Any question, always in touch and answered quickly. Liked human attitude towards me and towards solving my problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn_box">
            <a
              className="carousel-control-prev"
              href="#carouselExample3Controls"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExample3Controls"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
