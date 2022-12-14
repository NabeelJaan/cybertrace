import React from "react";
import Link from "next/link";


const WhyChoose = () => {
    return(
        <section className="py-85px px-15px xl:px-0">
            
            <div className="text-center">
                <h2 className="text-4xl text-black font-roboto font-semibold uppercase"><span className="text-golden">Why</span> Choose cybertrace</h2>
                <p className="text-22px text-gold font-roboto font-medium mt-2 mb-8 md:mt-5 md:mb-16">OUR EXPERIENCE</p>
            </div>

            <div className="max-w-1140px mx-auto">
                <div className="wcu-inner gap-5 justify-center md:flex">

                    <div className="bg-black text-white rounded-lg md:max-w-430px px-4 py-8 mb-5 md:mb-0 md:py-10 md:px-25px">
                        <ul className="cu-list">
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace is a 100% Australian owned and operated intelligence-focused (OSINT) private investigation company. We are innovative and pioneers in the development of custom technology-based private investigation tools to increase our product capability.</div>
                            </li>
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace is driven by Founder and Director Dan Halpin who is an undisputed leader in the field of Australian private intelligence and private investigation.</div>
                            </li>
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace has been structured with the same level professionalism, integrity and quality that client expect from government and top-tier corporations; whilst maintaining its boutique feel and customer service.</div>
                            </li>
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace work closely with clients to determine the most efficient method of investigation based on current intelligence. This in turn saves you money through correct targeting and investigative planning.</div>
                            </li>
                            <li className="font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace understands your needs and guarantee the highest level of confidentiality.</div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-black text-white rounded-lg md:max-w-430px px-4 py-8 md:py-10 md:px-25px">
                        <ul className="cu-list">
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace is a 100% Australian owned and operated intelligence-focused (OSINT) private investigation company. We are innovative and pioneers in the development of custom technology-based private investigation tools to increase our product capability.</div>
                            </li>
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace is driven by Founder and Director Dan Halpin who is an undisputed leader in the field of Australian private intelligence and private investigation.</div>
                            </li>
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace has been structured with the same level professionalism, integrity and quality that client expect from government and top-tier corporations; whilst maintaining its boutique feel and customer service.</div>
                            </li>
                            <li className="mb-2 font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace work closely with clients to determine the most efficient method of investigation based on current intelligence. This in turn saves you money through correct targeting and investigative planning.</div>
                            </li>
                            <li className="font-nunito flex">
                                <div className="pr-4 text-gold"><i class="fa-solid fa-check"></i></div>
                                <div>Cybertrace understands your needs and guarantee the highest level of confidentiality.</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase bg-golden text-white px-8 py-3 inline-flex items-center justify-center mt-10 border border-golden rounded-full hover:bg-transparent hover:border hover:border-golden hover:text-golden">Learn more</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}


export default WhyChoose