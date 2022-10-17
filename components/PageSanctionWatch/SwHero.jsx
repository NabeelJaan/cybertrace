import React from "react";


const SwHero = () => {
    return(
        <section className="swHero bg-black px-15px py-85px lg:pt-[130px] lg:pb-16 xl:px-0">
            <div className="max-w-1140px mx-auto">
                <div className="hero-inner relative z-40">
                    <div className="hero-content">
                        <h1 className="text-white text-2xl md:text-[45px] md:leading-[60px] font-bold font-roboto max-w-[560px] capitalize">Are you complying with <span className="text-golden rounded-sm px-1 bg-golden/[0.2]">internationally</span> imposed Sanctions.</h1>
                        <p className="text-white text-base font-nunito max-w-3xl pt-5">Search a name using English characters and we&apos;ll let you know if a person is
                        recorded on any International Sanction List. We also identify Politically Exposed
                        Persons PEP for use with Anti Money Laundering and Counter Terrorism Financing risk assessments.</p>
                    </div>

                    <div className="mt-10">
                        <form>
                            <div class="relative md:max-w-3xl border-8 border-slate-200/[.2] rounded-full">
                                <input type="search" id="search-bar" class="block px-25px py-[18px] w-full text-xs md:text-sm text-gray-900 font-nunito bg-gray-50 rounded-full outline-0"
                                placeholder="Enter a Full Person Name, or Company Name..." />
                                <button type="submit" class="text-white absolute right-0 bottom-0 bg-golden font-nunito px-[30px] py-[18px] text-xs md:text-sm uppercase rounded-tr-full rounded-br-full transition-all hover:bg-blue-500">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SwHero

