import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';

const ContactForms = () => {
    return(
        
        <section className="py-85px px-15px xl:px-0">
            <div className="max-w-1140px mx-auto">

                <h1 className="text-2xl md:text-3xl lg:text-[56px] font-roboto font-bold text-center uppercase">Which contact form are you?</h1>

                <div className="forms-wrapper mt-20 md:flex md:justify-between md:gap-5">
                    
                    <div className="col-1 bg-black px-25px py-14 lg:p-14 rounded-lg text-center mb-5 md:mb-0">
                        <h3 className="text-white text-2xl leading-6 font-roboto font-semibold">FRAUD CONTACT FORM</h3>
                        <p className="text-golden text-base leading-6 font-nunito mt-8 mb-6 lg:mb-10 lg:mt-12">For enquiries relating to cyber fraud investigation services, such as <span className='font-semibold'>online investment fraud (scams), cryptocurrency fraud,</span> please select this form.</p>
                        
                        <div className="">
                            <Image className="w-full md:w-[336px]" src="/images/form1.webp" width="300" height="203" alt="cyber fraud" />
                        </div>

                        <div className="text-center">
                            <Link href="/">
                                <a className="text-base font-nunito font-medium uppercase bg-golden text-white px-8 py-3 inline-flex items-center justify-center transition-all mt-10 border border-golden rounded-full hover:bg-transparent hover:border hover:border-golden hover:text-golden">Submit form</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-2 bg-black px-25px py-14 lg:p-14 rounded-lg text-center">
                        <h3 className="text-white text-2xl leading-6 font-roboto font-semibold">GENERAL CONTACT FORM</h3>
                        <p className="text-golden text-base leading-6 font-nunito mt-8 mb-6 lg:mb-10 lg:mt-12">For enquiries relating to cyber investigation services, such as <span className='font-semibold'>cyberbullying, cyber extortion, background checks</span>please select this form.</p>
                        
                        <div className="">
                            <Image className="w-full md:w-[336px]" src="/images/form2.webp" width="300" height="203" alt="cyber fraud" />
                        </div>

                        <div className="text-center">
                            <Link href="/">
                                <a className="text-base font-nunito font-medium uppercase bg-golden text-white px-8 py-3 inline-flex items-center justify-center transition-all mt-10 border border-golden rounded-full hover:bg-transparent hover:border hover:border-golden hover:text-golden">Submit form</a>
                            </Link>
                        </div>
                    </div>

                </div>  
            </div>
        </section>

    )
}


export default ContactForms