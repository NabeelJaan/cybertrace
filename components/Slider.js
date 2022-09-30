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
    <div className="bg-black">
    <div className="max-w-1140px mx-auto pt-52 pb-28 -mt-118px">
      <OwlCarousel
        loop={true}
        items={1}
        responsiveRefreshRate={0}
        autoplay={true}
        autoplayTimeout={7000}
        autoplayHoverPause={true}
        nav={true}
        navText={[
          "<i class='icon-arrow-prev'></i>",
          "<i class='icon-arrow-next'></i>"
        ]}
        dots={false}
        margin={20}
      >
        <div className="item text-center">
          <h1 className="text-52px leading-50px font-bold font-roboto text-gold">CYBER INVESTIGATION SERVICES</h1>
          <p className="text-23px text-white font-normal font-roboto my-10">We are a private investigations company providing cyber-investigation services to a global clientele.
            We specialise in cyber-fraud (scam) investigation and cryptocurrency tracing.
            With our head office in Australia, we provide our services to clients from all countries</p>
            <Link href="#">
              <a className="text-base font-roboto font-medium uppercase bg-gold text-white px-6 py-3 inline-flex items-center justify-center rounded-lg">schudule a free call</a>
            </Link>
        </div>
      </OwlCarousel>
    </div>
    </div>
  );
}