import React from 'react';
import Link from 'next/link';
import Image from "next/image";


const OurRepresentatives = () => {
    return(
        <section className="py-85px px-15px lg:px-5 xl:px-0">
            <div className="max-w-1140px mx-auto">

                <h2 className="text-2xl md:text-6xl text-center font-roboto font-bold">Our Representatives</h2>

                <div class="main-wrapper md:flex md:justify-center md:gap-7 mt-12">

                    <div className="our-rep relative bg-black rounded-2xl p-45px w-3/6 md:flex md:items-center">

                        <div class="image-wrap relative max-w-[122px]">
                            <Image className="rounded-full" src="/images/dan.jpg" width="150" height="150" alt="dan" />
                        </div>
                        
                        <div class="ml-8">
                            <h3 className="text-3xl font-semibold text-golden font-roboto mb-2">Dan Halpin</h3>
                            <h4 class="text-xl font-medium text-white font-roboto">Chief Executive Officer</h4>
                        </div>

                        <div className="dan-description absolute left-0 -top-[498px] bg-golden p-45px rounded-2xl z-10">
                            <p class="text-white text-base font-roboto">Dan was employed in the investigation & intelligence industries for the past 20 years and holds formal
                                qualifications in policing, investigations, intelligence, security operations and security risk management.
                                Dan is globally known as a pioneer in the investigation of cryptocurrency fraud.</p>

                            <p class="text-white text-base font-roboto">He was formerly employed by the Australian Security Intelligence Organisation (ASIO),
                                New South Wales (NSW) Police Force, Queensland Police Service and the Australian Capital Territory
                                (ACT) Department of Justice & Community Service. Dan was seconded to the Australian Federal Police
                                (AFP) and NSW Crime Commission during his employment as a NSW Police, Counter Terrorism Intelligence Officer.
                                During this time Dan, provided intelligence and prosecution support to the Operation Pendennis Terrorism trial
                                in Sydney during 2007-2009. Further, Dan was a Consultant Advisor to the Department of Prime Minister & Cabinet
                                during 2016-2017; focused on breaches of the Australian Public Service (APS), Code of Conduct.</p>
                        </div>

                    </div>

                    <div className="bg-black rounded-2xl p-45px w-3/6 md:flex md:items-center">
                        <div class="image-wrap relative  max-w-[122px]">
                            <Image className="rounded-full" src="/images/professor.webp" width="150" height="150" alt="dan" />
                        </div>
                        
                        <div class="ml-8">
                            <h3 className="text-3xl font-semibold text-golden font-roboto mb-2">Prof. Alana Maurushat</h3>
                            <h4 class="text-xl font-medium text-white font-roboto">Special Advisor</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default OurRepresentatives