import React from "react";


const Process4 = () => {
    return(
        <section className="bg-black py-85px px-15px xl:px-0">
            <div className="max-w-1140px mx-auto">

                <div className="text-center">
                    <h2 className="text-4xl text-white font-roboto font-semibold uppercase">
                        <span className="text-golden">Our</span> Processes
                    </h2>
                </div>

                <div className="pb-wrapper grid md:grid-flow-row md:grid-cols-2 md:grid-row-2 gap-5 mt-12">
                    <div className="pro-box bg-golden px-25px py-10 text-center rounded-md">
                        <div className="text-white text-5xl"><i aria-hidden="true" class="fas fa-star"></i></div>
                        <h4 className="text-white text-2xl font-roboto leading-10 font-semibold my-5">Our Ethos</h4>
                        <p className="text-white text-base font-roboto font-normal">We believe that ethics and integrity are the backbone of any quality company.
                            To ensure you receive the highest quality service, we only recruit staff who
                            believe in our core values.</p>
                    </div>

                    <div className="pro-box bg-golden px-25px py-10 text-center rounded-md min">
                        <div className="text-white text-5xl"><i aria-hidden="true" class="fas fa-server"></i></div>
                        <h4 className="text-white text-2xl font-roboto leading-10 font-semibold my-5">IT Security</h4>
                        <p className="text-white text-base font-roboto font-normal">We believe that ethics and integrity are the backbone of any quality company.
                            To ensure you receive the highest quality service, we only recruit staff who
                            believe in our core values.</p>
                    </div>

                    <div className="pro-box bg-golden px-25px py-10 text-center rounded-md min">
                        <div className="text-white text-5xl"><i aria-hidden="true" class="fas fa-handshake"></i></div>
                        <h4 className="text-white text-2xl font-roboto leading-10 font-semibold my-5">Confidentiality</h4>
                        <p className="text-white text-base font-roboto font-normal">We believe that ethics and integrity are the backbone of any quality company.
                            To ensure you receive the highest quality service, we only recruit staff who
                            believe in our core values.</p>
                    </div>

                    <div className="pro-box bg-golden px-25px py-10 text-center rounded-md min">
                        <div className="text-white text-5xl"><i aria-hidden="true" class="fas fa-graduation-cap"></i></div>
                        <h4 className="text-white text-2xl font-roboto leading-10 font-semibold my-5">Innovation</h4>
                        <p className="text-white text-base font-roboto font-normal">Our CEO and Founder, Dan Halpin has a reputation as a leading innovator in the
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