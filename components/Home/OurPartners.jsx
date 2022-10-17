import React from "react";
import Image from "next/image";
var $ = require("jquery");
if (typeof window !== "undefined") {
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
    <div className="partnerSlider bg-white py-85px px-5 xl:px-0">
        <h2 className="text-4xl text-gold font-roboto font-semibold uppercase text-center mb-16">our <span className="text-black">partners</span></h2>

        <div className="max-w-1140px mx-auto">
            <OwlCarousel
                loop={true}
                items={6}
                responsiveRefreshRate={0}
                autoplay={true}
                autoplayTimeout={7000}
                autoplayHoverPause={true}
                nav={true}
                navText={[
                "<i className='icon-arrow-prev'></i>",
                "<i className='icon-arrow-next'></i>"
                ]}
                dots={true}
                margin={30}
            >
            <div className="item">
                <Image src="/images/hsd.webp" width="300" height="160" alt="Security Dalta logo" />
            </div>
            <div className="item">
                <Image src="/images/wad.webp" width="300" height="300" alt="World association of detectives logo" />
            </div>
            <div className="item">
                <Image src="/images/sureFact.webp" width="300" height="116" alt="Sure fact logo" />
            </div>
            <div className="item">
                <Image src="/images/digitalTrust.webp" width="300" height="121" alt="Digital Trust logo" />
            </div>
            <div className="item">
                <Image src="/images/govtech.webp" width="300" height="86" alt="Tick sign" />
            </div>
            <div className="item">
                <Image src="/images/hackathon.webp" width="300" height="41" alt="Hackathon For Good logo" />
            </div>
            <div className="item">
                <Image src="/images/scamAdvisor.jpg" width="300" height="58" alt="Scam Advisor logo" />
            </div>

        </OwlCarousel>
        </div>
    </div>
  );
}