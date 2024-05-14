import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div className="container-fluid banner my-5 bbg">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="tw-text-white tw-text-5xl sm:tw-text-7xl">Hair Conditioner</h1>
              <p className="fw-normal display-3 text-dark mb-4 ">in our store</p>
              <p className="mb-4 text-dark">
              Used to improve the feel, appearance, and manageability of hair by reducing friction between strands and adding moisture. 
              </p>
              <Link
                href="/products"
                className="banner-btn btn border-2 border-white rounded-pill text-dark-bold bg-white py-3 px-5"
              >
                BUY
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="position-relative">
              <Image
                width={900}
                height={600}
                src="/images/r4.png"
                alt=""
              />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute "
                style={{ width: 100, height: 100, top: 0, left: 0 }}
              >
                <div className="d-flex flex-column ">
                <Image
                width={900}
                height={600}
                src="/images/new.gif"
                className="img-fluid w-100 rounded"
                alt=""
                style={{width: "67px !important"}}
              />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
