import React from "react";
import Link from "next/link";
import Image from "next/image";



const Footer = () => {
    return(
        <div className="footer-wrapper relative bg-black py-14 px-5">
            <div className="max-w-1140px mx-auto"> {/* Container */}

                <div className="footer-inner text-white md:flex md:gap-6 lg:gap-45px">
                    <div className="text-center md:text-left md:w-2/6">
                        <Link href="#">
                            <Image src="/images/footer-logo-cybertrace.webp" width="299" height="110" />
                        </Link>
                        <p className="font-nunito text-golden mb-11 mt-7">Cybertrace offers intelligence-based investigation products to 
                        commercial private clientele. All products are tailor-made,
                        highly confidential and comprehensive. We guarantee the highest
                        level product and service.</p>
                        <Link href="https://www.dmca.com/Protection/Status.aspx?ID=987272a5-3bec-405b-bb3d-5e7aa254d254&refurl=https://staging.cybertrace.com.au/">
                            <Image src="/images/dcma.webp" width="150" height="75" />
                        </Link>
                    </div>

                    <div className="text-center md:text-left mt-10 md:mt-0 md:w-2/6">
                        <h4 className="divider relative text-xl leading-5 uppercase font-semibold font-roboto mb-38px">contact info</h4>
                        <span className="text-base font-semibold font-roboto text-golden">Global Head Office:</span>
                        <p className="divider-left text-base relative font-nunito text-golden pl-4 mb-2">Pitt Street, Sydney NSW 2000, Australia</p>
                        <span className="text-base font-semibold font-roboto text-golden">Postal Address:</span>
                        <p className="divider-left text-base relative font-nunito text-golden pl-4 mb-2 ">PO BOX 1350, Cronulla NSW 2230 Australia</p>
                        <span className="text-base font-semibold font-roboto text-golden">UK Address:</span>
                        <p className="divider-left text-base relative font-nunito text-golden pl-4 mb-2 ">Hatton Garden, Holborn, London EC1N 8LE, UK</p>
                        <span className="text-base font-semibold font-roboto text-golden">Europe Address:</span>
                        <p className="divider-left text-base relative font-nunito text-golden pl-4 mb-2 ">Wilhelmina van Pruisenweg 104, 2595 AN Den Haag</p>
                        {/* <div>
                            <a href="mailto:contact@cybertrace.com.au">
                                <span className="mr-2 text-golden"><i class="fa-solid fa-envelope"></i></span>
                                <span className="text-golden text-base font-normal font-roenen">contact@cybertrace.com.au</span>
                            </a>
                        </div>

                        <div>
                            <a href="tel:1300 669 711">
                                <span className="mr-2 text-golden"><i class="fa-solid fa-phone"></i></span>
                                <span className="text-base font-normal font-roboto text-golden">Australia: 1300 669 711</span>
                            </a>
                        </div>
                        <div>
                            <a href="tel:61 2 9188 7896">
                                <span className="mr-2 text-golden"><i class="fa-solid fa-phone"></i></span>
                                <span className="text-base font-normal font-roboto text-golden">International +61 2 9188 7896</span>
                            </a>
                        </div> */}
                    </div>

                    <div className="relative text-center mt-10 md:text-left md:mt-0 md:w-2/6">
                        <h4 className="divider relative text-xl leading-5 uppercase font-semibold font-roboto mb-38px">mission</h4>
                        <p className="text-base text-golden font-nunito">To provide our clients with professional cyber investigative services across Australia and 
                            the Asia Pacific whilst maintaining client trust, compassion and discretion</p>
                        <h4 className="divider relative text-xl leading-5 uppercase font-semibold font-roboto mb-38px mt-11">Social Link</h4>
                        <div className="icon-wrapper flex gap-4 mt-14 justify-center md:justify-start">
                            <a href="#" className="bg-gold rounded-full px-2 w-9 h-9 inline-flex items-center justify-center">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="bg-gold rounded-full px-2 w-9 h-9 inline-flex items-center justify-center">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="bg-gold rounded-full px-2 w-9 h-9 inline-flex items-center justify-center">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="bg-gold rounded-full px-2 w-9 h-9 inline-flex items-center justify-center">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>    {/* Container End*/}

        </div>
    )
}

export default Footer