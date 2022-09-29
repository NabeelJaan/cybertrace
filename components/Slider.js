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
    <div>
      <OwlCarousel>
        <div className="item">
          <h1 className="text-52px leading-50px font-bold font-roboto text-gold">CYBER INVESTIGATION SERVICES</h1>
          <p className="text-23px font-normal font-roboto">We are a private investigations company providing cyber-investigation services to a global clientele.
            We specialise in cyber-fraud (scam) investigation and cryptocurrency tracing.
            With our head office in Australia, we provide our services to clients from all countries</p>
            <Link href="#">
              <a className="text-base font-roboto font-medium uppercase bg-gold text-white px-3 py-6 inline-flex ">schudule a free call</a>
            </Link>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
      </OwlCarousel>
    </div>
  );
}