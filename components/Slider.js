import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


export default function Slider() {
  return (
    <div className="bg-black px-15px -mt-118px py-36 md:pt-52 md:pb-28 md:px-5">
      <div className="max-w-1140px mx-auto">
        <OwlCarousel
          loop={true}
          items={1}
          responsiveRefreshRate={0}
          autoplay={true}
          autoplayTimeout={7000}
          autoplayHoverPause={true}
          nav={true}
          navText={[
            "<i className='icon-arrow-prev'></i>",
            "<i className='icon-arrow-next'></i>"
          ]}
          dots={false}
          margin={20}
        >
          <div className="item text-center">
            <h1 className="text-4xl leading-50px font-bold font-roboto text-golden lg:text-52px">CYBER INVESTIGATION SERVICES</h1>
            <p className="text-xl text-white font-normal font-nunito my-10 lg:text-23px lg:leading-10 lg:tracking-wide">We are a private investigations company providing cyber-investigation services to a global clientele.
              We specialise in cyber-fraud (scam) investigation and cryptocurrency tracing.
              With our head office in Australia, we provide our services to clients from all countries</p>
              <Link href="#">
                <a className="transition-all text-base font-nunito font-medium uppercase bg-gold text-white px-6 py-3 inline-flex items-center justify-center border border-golden rounded-full hover:bg-transparent hover:border hover:border-golden">schudule a free call</a>
              </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}