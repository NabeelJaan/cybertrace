import React from "react";
import Link from 'next/link';

const scamSleuthCTA = () => {
    return(
        <section className="py-10 mt-10 px-15px xl:px-0">

            <div className="max-w-[800px] mx-auto">
                <div className="cta-content text-center border border-golden rounded-xl px-25px py-10">
                    <p className="text-lg font-nunito">If you require further research into the background of a Sanctioned 
                        individual or individual identified as a Politically Exposed Person (PEP), please contact our expert team.</p>
                    <div className="mt-6">
                        <Link href="#">
                            <a className="transition-all text-base font-roboto font-medium uppercase bg-gold text-white px-6 py-2 inline-flex items-center justify-center border border-golden rounded-full hover:bg-transparent hover:text-golden hover:border hover:border-golden">contact us</a>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="disclaimer-btn mt-12">
                <Link href="/">
                    <a className="text-xl font-roboto font-medium uppercase text-golden block text-center">disclaimer</a>
                </Link>
            </div>
            
        </section>
    )
}


export default scamSleuthCTA