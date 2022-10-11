import React from "react";
import Link from "next/link";
import Image from "next/image";



const ServicesWeOffer = () => {
    return(
        <section>
            <div className="max-w-1140px mx-auto">
                <div className="flex items-center bg-black">
                    <div className="max-w-[360px]">
                        <Image src="/images/cyberFraud.webp" width="336" height="410" alt="cyber fraud" />
                    </div>

                    <div className="max-w-[480px] mx-auto text-center">
                        <h3 className="text-[22px] text-golden font-roboto font-medium mb-4">CYBER FRAUD</h3>
                        <p className="text-15px font-roboto leading-[21px] text-white">Cybertrace Australia are pioneers in cyber fraud investigation; including
                            cryptocurrency tracing and assets recovery. We have designed and built custom
                            intelligence tools (OSINT) to assist with identifying offenders.</p>
                        <p className="text-15px font-roboto leading-[21px] text-white my-2">Internet fraud is a type of fraud or deception which makes use of the Internet by
                            tricking victims into sending money or giving property and inheritance.</p>
                        <p className="text-15px font-roboto leading-[21px] text-white">Cryptocurrency trading, binary options and payment platform scams are a type
                            of fraud that are rapidly growing in sophistication and reach daily. Contact our Cyber
                            Fraud Investigators to review your case.</p>
                    </div>

                    <div>
                        <Link href="#">
                            <a className="text-base font-roboto font-medium uppercase bg-golden text-white px-8 py-3 inline-flex items-center justify-center rounded-full mt-10">Contact us</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServicesWeOffer