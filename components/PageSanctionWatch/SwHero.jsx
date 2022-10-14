import React from "react";
import Image from "next/image";


const SwHero = () => {
    return(
        <section className="bg-black px-15px lg:pt-[130px] lg:pb-16 xl:px-0">
            <div className="max-w-1140px mx-auto">
                <div className="hero-inner">
                    <div className="hero-content">
                        <h1 className="text-white text-2xl md:text-[45px] md:leading-[54px] font-bold font-roboto max-w-[560px]">Are you complying with <span>Internationally</span> imposed Sanctions?</h1>
                        <p className="text-white text-15px font-nunito max-w-3xl pt-5">Search a name using English characters and we'll let you know if a person is
                        recorded on any international Sanction List. We also identify Politically Exposed
                        Persons (PEP) for use with Anti Money Laundering and Counter Terrorism Financing (AML / CTF) risk assessments.</p>
                    </div>

                    <div className="mt-10">
                        <form>
                            <div class="relative max-w-3xl border-8 border-slate-200/[.2] rounded-full">
                                <input type="search" id="search-bar" class="block px-25px py-[18px] w-full text-sm text-gray-900 font-nunito bg-gray-50 rounded-full outline-0"
                                placeholder="Enter a Full Person Name, or Company Name..." />
                                <button type="submit" class="text-white absolute right-0 bottom-0 bg-golden font-nunito px-[30px] py-[18px] text-sm uppercase rounded-tr-full rounded-br-full">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SwHero

