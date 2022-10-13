import React from 'react';
import Image from 'next/image';


const AboutLicense = () => {
    return(
        <section className="py-85px px-15px xl:px-0">
            <div className="max-w-1140px mx-auto text-center">
                <div className="License-content bg-black rounded-lg px-25px py-10 max-w-[1000px] mx-auto">
                    <p className="text-white text-base leading-5 font-roboto mb-3">Cybertrace Australia and Cybertrace Global operate internationally 
                        under Private Investigation <span>Master License: 411710138</span></p>

                    <p className="text-golden text-xl font-bold leading-5 font-roboto mb-3">Expiry: 3 January 2027</p>
                    <p className="text-white text-base leading-5 font-roboto mb-3">Issued by: State of New South Wales (NSW), Australia</p>
                    <p className="text-white text-base leading-5 font-roboto">Please feel free to verify our Investigations Licence number on the NSW 
                        Government website by <a href="#">clicking here.</a></p>
                </div>
                <div className="license-img mt-12 border-4 border-black max-w-[772px] mx-auto xl:h-[1091px]">
                    <Image src="/./images/license1.webp" width="773" height="1096" />
                </div>

                <div className="md:flex">
                    <div className="license-img mt-12 border-4 border-black max-w-[435px] mx-auto md:mr-4 xl:mr-0 xl:h-[600px]">
                        <Image src="/./images/license1.webp" width="435" height="603" />
                    </div>

                    <div className="license-img mt-12 border-4 border-black max-w-[435px] mx-auto xl:h-[600px]">
                        <Image src="/./images/license1.webp" width="435" height="603" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutLicense