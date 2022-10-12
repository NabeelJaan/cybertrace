import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
    return(
        <section className="py-100px">
            <div className="max-w-1140px mx-auto">
                <div className="box-wrapper flex gap-x-6">
                    <div className="box p-50px bg-black rounded-2xl text-center w-2/6">
                        <Image src="/./images/tick-sign.webp" width="100" height="100" alt="Tick sign" />
                        <h3 className="text-2xl font-medium font-roboto text-golden uppercase mt-16 mb-4">Trust</h3>
                        <p className="text-base font-normal font-roboto text-white">Our Executive have been full-time employees of Australian State and Federal governments.
                            We have been security cleared to the highest level</p>
                    </div>

                    <div className="box p-50px bg-black rounded-2xl text-center w-2/6">
                        <Image src="/./images/tick-sign.webp" width="100" height="100" alt="Tick sign" />
                        <h3 className="text-2xl font-medium font-roboto text-golden uppercase mt-16 mb-4">PROFESSIONALISM</h3>
                        <p className="text-base font-normal font-roboto text-white">Professionalism is not something that can be learnt, it comes from a willingness to not only serve,
                        it comes from a determination to be respectful and to maintain the highest standard</p>
                    </div>

                    <div className="box p-50px bg-black rounded-2xl text-center w-2/6">
                        <Image src="/./images/tick-sign.webp" width="100" height="100" alt="Tick sign" />
                        <h3 className="text-2xl font-medium font-roboto text-golden uppercase mt-16 mb-4">INTEGRITY</h3>
                        <p className="text-base font-normal font-roboto text-white">Our Executive have proven untainted integrity and insist on the same qualities from our staff and contractors.
                        Integrity is one of our core values and drives our business decisions</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default WhyChooseUs