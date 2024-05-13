import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Brain3() {
  return (
    <>
    <section
  id="scrollspyPortfolio"
  className="py-3 py-md-5 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1"
  
>
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 col-lg-8">
        <h2 className="display-5 fw-bold mb-4">
        Rodi Raydan customers often prefer the following products when searching creams for women.
        </h2>
      </div>
    </div>
  </div>
  <div className="container overflow-hidden">
    <div className="row gy-3 gy-lg-4 gy-lg-0x">
      <div className="col-12 col-lg-6">
        <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
          <Link href="/products">
          <Image
            width={1080}
            height={1080}
              className="img-fluid bsb-scale bsb-hover-scale-up"
              loading="lazy"
              src="/images/tx.png"
              alt=""
            />
          </Link>
          <figcaption>
            <h3 className="text-white bsb-hover-fadeInLeft">RodiRaydan</h3>
            <div className="text-white bsb-hover-fadeInRight">Branding</div>
          </figcaption>
        </figure>
      </div>
      <div className="col-12 col-lg-6">
        <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
        <Link href="/products">
          <Image
            width={1080}
            height={1080}
              className="img-fluid bsb-scale bsb-hover-scale-up"
              loading="lazy"
              src="/images/tx.png"
              alt=""
            />
          </Link>
          <figcaption>
            <h3 className="text-white bsb-hover-fadeInUp">RodiRaydan</h3>
            <div className="text-white bsb-hover-fadeInDown">Branding</div>
          </figcaption>
        </figure>
      </div>
      <div className="col-12 col-lg-6">
        <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
        <Link href="/products">
          <Image
            width={1080}
            height={1080}
              className="img-fluid bsb-scale bsb-hover-scale-up"
              loading="lazy"
              src="/images/tx.png"
              alt=""
            />
          </Link>
          <figcaption>
            <h3 className="text-white bsb-hover-fadeInLeft">RodiRaydan</h3>
            <div className="text-white bsb-hover-fadeInRight">Branding</div>
          </figcaption>
        </figure>
      </div>
      <div className="col-12 col-lg-6 tw-my-12">
        <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
        <Link href="/products">
          <Image
            width={1080}
            height={1080}
              className="img-fluid bsb-scale bsb-hover-scale-up"
              loading="lazy"
              src="/images/tx.png"
              alt=""
            />
          </Link>
          <figcaption>
            <h3 className="text-white bsb-hover-fadeInUp">RodiRaydan</h3>
            <div className="text-white bsb-hover-fadeInDown ">Branding</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Brain3