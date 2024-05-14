"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set the initial window width
    setWindowWidth(window.innerWidth);

    // Update the window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine the image source based on window width
  const getImageSrc = () => {
    if (windowWidth <= 768) {
      return '/images/mob.webp'; // Path to mobile image
    }
    return '/images/sample-1.jpg'; // Path to desktop image
  };






  return (
    <div >
      {/* slider section */}
      <section className="slider_section ">
        <div className="slider_bg_box  ">
          <Image
            width={1903}
            height={930} 
            src={getImageSrc()}
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
