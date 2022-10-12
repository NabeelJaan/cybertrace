import React from "react";
import Link from "next/link";
import Image from "next/image";

const Brochure = () => {
    return(
        <section className="brochure py-85px px-5 xl:px-0">
        <div className="max-w-1140px mx-auto">
          <div className="brochure-inner items-center justify-between md:flex">

            <div className="content-wrapper text-center max-w-[700px]">
              <h2 className="text-3xl font-roboto font-semibold capitalize lg:text-6xl">Cyber Fraud Investigation <span className="text-3xl text-golden lg:text-5xl">Cryptocurrency Tracing</span></h2>
              <p className="text-xl font-roboto font-semibold capitalize my-7 lg:text-3xl">Financial Crime Investigation & Intelligence</p>
              
              <Link href="#">
                <a className="transition-all text-base font-roboto font-medium uppercase bg-gold text-white px-6 py-3 inline-flex items-center justify-center border border-golden rounded-full hover:bg-transparent hover:border hover:border-golden hover:text-golden">Download Brochure</a>
              </Link>
            </div>

            <div className="image-wrapper mt-8 text-center md:text-left xl:mt-0">
              <Image src="/images/brochure.webp" width="234" height="300" alt="Tick sign" />
            </div>

          </div>
        </div>
      </section>
    )
}


export default Brochure