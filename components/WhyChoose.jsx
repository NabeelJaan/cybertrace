import React from "react";
import Link from "next/link";


const WhyChoose = () => {
    return(
        <section className="py-85px">
            
            <div className="text-center">
                <h2 className="text-4xl text-black font-roboto font-semibold uppercase mb-12"><span className="text-golden">Why</span> Choose cybertrace</h2>
                <p>OUR EXPERIENCE</p>
            </div>

            <div className="max-w-1140px mx-auto">
                <div className="wcu-inner">
                    <div>
                        <ul>
                            <li>Cybertrace is a 100% Australian owned and operated intelligence-focused (OSINT) private investigation company. We are innovative and pioneers in the development of custom technology-based private investigation tools to increase our product capability.</li>
                            <li>Cybertrace is driven by Founder and Director Dan Halpin who is an undisputed leader in the field of Australian private intelligence and private investigation.</li>
                            <li>Cybertrace has been structured with the same level professionalism, integrity and quality that client expect from government and top-tier corporations; whilst maintaining its boutique feel and customer service.</li>
                            <li>Cybertrace work closely with clients to determine the most efficient method of investigation based on current intelligence. This in turn saves you money through correct targeting and investigative planning.</li>
                            <li>Cybertrace understands your needs and guarantee the highest level of confidentiality.</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Cybertrace is a 100% Australian owned and operated intelligence-focused (OSINT) private investigation company. We are innovative and pioneers in the development of custom technology-based private investigation tools to increase our product capability.</li>
                            <li>Cybertrace is driven by Founder and Director Dan Halpin who is an undisputed leader in the field of Australian private intelligence and private investigation.</li>
                            <li>Cybertrace has been structured with the same level professionalism, integrity and quality that client expect from government and top-tier corporations; whilst maintaining its boutique feel and customer service.</li>
                            <li>Cybertrace work closely with clients to determine the most efficient method of investigation based on current intelligence. This in turn saves you money through correct targeting and investigative planning.</li>
                            <li>Cybertrace understands your needs and guarantee the highest level of confidentiality.</li>
                        </ul>
                    </div>
                </div>

                <Link href="#">
                    <a className="text-base font-roboto font-medium uppercase bg-gold text-white px-6 py-3 inline-flex items-center justify-center rounded-lg">Learn more</a>
                </Link>
            </div>

        </section>
    )
}


export default WhyChoose