import react from "react";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
    return(
        <section className="bg-gold py-28">
            <div className="max-w-1140px mx-auto">
                <div className="cta-inner flex justify-between items-center">
                    <div className="">
                        <h2 className="text-3xl text-white font-roboto font-semibold">Contact Us</h2>
                        <p className="text-base text-white font-roboto mt-7 mb-10 max-w-2xl	">Contact our friendly staff at Cybertrace Australia for a confidential assessment of your case.
                            Speak with the experts.</p>

                        <div>
                        <a href="mailto:contact@cybertrace.com.au">
                            <span className="mr-2 text-white"><i class="fa-solid fa-envelope"></i></span>
                            <span className="text-base font-normal font-roboto text-white">Email: contact@cybertrace.com.au</span>
                        </a>
                        </div>

                        <div>
                            <a href="tel:1300 669 711">
                                <span className="mr-2 text-white"><i class="fa-solid fa-phone"></i></span>
                                <span className="text-base font-normal font-roboto text-white">Australia: 1300 669 711</span>
                            </a>
                        </div>
                        <div>
                            <a href="tel:61 2 9188 7896">
                                <span className="mr-2 text-white"><i class="fa-solid fa-phone"></i></span>
                                <span className="text-base font-normal font-roboto text-white">International +61 2 9188 7896</span>
                            </a>
                        </div>
                    </div>

                    <div className="">
                        <Link href="#">
                            <a className="text-golden text-15px font-medium bg-white rounded-full py-3 px-6 capitalize">Contact Form</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA