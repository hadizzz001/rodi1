import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div >
      {/* slider section */}
      <section className="slider_section ">
        <div className="slider_bg_box  ">
          <Image
            width={1903}
            height={930}
            src="/images/sample-1.jpg"
            alt=""

          />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide  "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="container tw-mx-auto">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box ">
                      <Image
                       
                        width={300}
                        height={384}
                        src="/images/1bg.png"
                        alt="Sale Image"
                        className=""
                        
                      />
                      <div className="btn-box tw-ml-10">
                        <Link href="/products" className="btn1">
                        Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container tw-mx-auto">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box ">
                      <Image
                       
                        width={300}
                        height={384}
                        src="/images/r4.png"
                        alt="Sale Image"
                        className=""
                        
                      />
                      <div className="btn-box tw-ml-10">
                        <Link href="/products" className="btn1">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <Image
                        width={300}
                        height={384}
                        src="/images/3bg.png"
                        alt="Sale Image"
                      />
                      <div className="btn-box tw-ml-10">
                        <Link href="/products" className="btn1">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <Image
                        width={300}
                        height={384}
                        src="/images/4bg.png"
                        alt="Sale Image"
                      />
                      <div className="btn-box tw-ml-12">
                        <Link href="/products" className="btn1">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <Image
                        width={300}
                        height={384}
                        src="/images/2bg.png"
                        alt="Sale Image"
                      />
                      <div className="btn-box tw-ml-10">
                        <Link href="/products" className="btn1">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
              <li data-target="#customCarousel1" data-slide-to={3} />
              <li data-target="#customCarousel1" data-slide-to={4} />
            </ol>
          </div>
        </div>
      </section>
      {/* end slider section */}
    </div>
  );
}

export default Hero;
