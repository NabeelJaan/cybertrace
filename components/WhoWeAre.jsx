import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhoWeAre = () => {
    return(
        <section className="py-85px">
            <div className="max-w-1140px mx-auto">
                {/* content main */}
                <div className="flex gap-5 justify-between">
                    <div className="w-2/5 mx-auto bg-black px-25px py-10 text-center rounded-lg">
                        <h2 className="text-4xl text-white font-roboto font-semibold uppercase"><span className="text-golden">free</span> SCAM DETECTOR</h2>
                        <p className="text-22px text-white font-roboto font-medium mt-5 mb-10">Search A Website to Identify Risk</p>
                        <div>
                            <Image src="/images/scamDectector.jpg" width="357" height="220" alt="Free Scam Dectector" />
                        </div>
                        <p className="text-22px text-white font-roboto font-medium mt-5">Search A Website to Identify Risk</p>
                        <div className="text-center">
                            <Link href="#">
                                <a className="text-base font-roboto font-medium capitalize tracking-wider bg-golden text-white px-8 py-3 inline-flex items-center justify-center rounded-full mt-10">check Website</a>
                            </Link>
                        </div>
                    </div>
                    <div className="w-3/5 mx-auto bg-black px-25px py-10 rounded-lg">
                        <h2 className="text-4xl text-white font-roboto text-center font-semibold uppercase"><span className="text-golden">free</span> SCAM DETECTOR</h2>
                        <h3 className="text-22px text-white font-roboto font-medium text-center mt-5 mb-10">Search A Website to Identify Risk</h3>
                        <p className="text-15px font-roboto leading-[21px] text-white mb-5">Our story began in 2015, however, the seeds for Cybertrace were planted back in 2000. We are highly focused on client privacy with special consideration given to issues surrounding cyber-fraud; including hacking, scamming and identity theft. As such, our primary focus is strict confidentiality, stringent IT security, flawless integrity.</p>
                        <p className="text-15px font-roboto leading-[21px] text-white mb-5">Our story began in 2015, however, the seeds for Cybertrace were planted back in 2000. We are highly focused on client privacy with special consideration given to issues surrounding cyber-fraud; including hacking, scamming and identity theft. As such, our primary focus is strict confidentiality, stringent IT security, flawless integrity.</p>
                        <p className="text-15px font-roboto leading-[21px] text-white mb-5">Our story began in 2015, however, the seeds for Cybertrace were planted back in 2000. We are highly focused on client privacy with special consideration given to issues surrounding cyber-fraud; including hacking, scamming and identity theft. As such, our primary focus is strict confidentiality, stringent IT security, flawless integrity.</p>
                        <p className="text-15px font-roboto leading-[21px] text-white mb-5">For more information on our online investigation services; including cyber-fraud, due diligence and background checks, please contact us for a confidential review of your requirements.</p>
                        
                        <div className="text-center">
                            <Link href="#">
                                <a className="text-base font-roboto font-medium tracking-wider capitalize bg-golden text-white px-8 py-3 inline-flex items-center justify-center rounded-full mt-10">
                                    Learn more</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre