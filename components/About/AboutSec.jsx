import React from 'react';
import Link from 'next/Link';


const AboutSec = () => {
    return(
        <section className="pt-85px">
            <div className="max-w-1140px mx-auto">
                <p className="text-15px font-nunito font-normal text-black max-w-750px text-center mx-auto">With our Head Office in Sydney, Australia, we have permanent operations in Australia and Europe. Both our Sydney,
                    Australia and the Hague, Netherlands operations focus on cyber fraud and due diligence operations</p>

                <div className="text-center">
                    <Link href="/">
                        <a className="inline-block text-white text-15px font-medium bg-darkGold rounded-full py-3 px-10 uppercase mt-20">Contact Us</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutSec