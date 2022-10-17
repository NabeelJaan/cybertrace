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
    <div className="px-5 py-85px xl:px-0">
        <h2 className="text-4xl text-black font-roboto font-semibold uppercase text-center mb-12">what<span className="text-golden"> our clients say</span></h2>
    <div className="max-w-1140px mx-auto">
      <OwlCarousel
        loop={true}
        items={3}
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
          <h1 className="text-52px leading-50px font-bold font-roboto text-golden">Review Slider</h1>
        </div>
      </OwlCarousel>
    </div>
    </div>
  );
}