import react from "react";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
    return(
        <section className="relative bg-gradient-to-r from-gold to-black py-28 px-5 xl:px-0">
            <div className="max-w-1140px mx-auto">

                <div className="cta-inner md:flex md:justify-between md:items-center">
                    <div className="relative z-10 max-w-sm lg:w-full">
                        <h2 className="text-4xl text-white font-roboto font-semibold">Contact Us</h2>
                        <p className="text-base text-white font-nunito mt-7 mb-10">Contact our friendly staff at Cybertrace Australia for a confidential assessment of your case.
                            Speak with the experts.</p>

                        <div>
                            <a href="mailto:contact@cybertrace.com.au">
                                <span className="mr-2 text-white"><i class="fa-solid fa-envelope"></i></span>
                                <span className="text-base font-normal font-nunito text-white">Email: contact@cybertrace.com.au</span>
                            </a>
                        </div>

                        <div>
                            <a href="tel:1300 669 711">
                                <span className="mr-2 text-white"><i class="fa-solid fa-phone"></i></span>
                                <span className="text-base font-normal font-nunito text-white">Australia: 1300 669 711</span>
                            </a>
                        </div>
                        <div>
                            <a href="tel:61 2 9188 7896">
                                <span className="mr-2 text-white"><i class="fa-solid fa-phone"></i></span>
                                <span className="text-base font-normal font-nunito text-white">International +61 2 9188 7896</span>
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 mt-16 md:mt-0">
                        <Link href="#">
                            <a className="text-golden text-15px leading-0 font-nunito font-medium bg-white rounded-full py-3 px-6 capitalize hover:bg-golden hover:text-white">Contact Form</a>
                        </Link>
                    </div>

                    <div className="absolute right-0 hidden md:block">
                        <Image src="/images/handpointingout.webp" width="700" height="300" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA