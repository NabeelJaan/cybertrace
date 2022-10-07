import React from "react";
import Link from "next/link";


const Process4 = () => {
    return(
        <section className="">
            <div className="max-w-1140px mx-auto">

                <div>
                    <h2 className="text-4xl text-black font-roboto font-semibold uppercase">
                        <span className="text-golden">Our</span> Processes
                    </h2>
                </div>

                <div className="processes-box-wrapper">
                    <div className="pro-box">
                        <div><i aria-hidden="true" class="fas fa-star"></i></div>
                        <h4>Our Ethos</h4>
                        <p>We believe that ethics and integrity are the backbone of any quality company.
                            To ensure you receive the highest quality service, we only recruit staff who
                            believe in our core values.</p>
                    </div>

                    <div className="pro-box">
                        <div><i aria-hidden="true" class="fas fa-star"></i></div>
                        <h4>IT Security</h4>
                        <p>We believe that ethics and integrity are the backbone of any quality company.
                            To ensure you receive the highest quality service, we only recruit staff who
                            believe in our core values.</p>
                    </div>

                    <div className="pro-box">
                        <div><i aria-hidden="true" class="fas fa-star"></i></div>
                        <h4>Confidentiality</h4>
                        <p>We believe that ethics and integrity are the backbone of any quality company.
                            To ensure you receive the highest quality service, we only recruit staff who
                            believe in our core values.</p>
                    </div>

                    <div className="pro-box">
                        <div><i aria-hidden="true" class="fas fa-star"></i></div>
                        <h4>Innovation</h4>
                        <p>Our CEO and Founder, Dan Halpin has a reputation as a leading innovator in the
                            Australian and international private intelligence community. Cybertrace frequently
                            uses internal custom built technology (including AI technology) to gain results that
                            no others service provider can.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process4