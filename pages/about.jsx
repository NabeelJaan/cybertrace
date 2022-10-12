import GenHero from "../components/genHero";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image"

export default function About () {
    return(
        <Layout title="About us Page">
            <GenHero/>
            <section className="py-24">
                <div className="max-w-1140px mx-auto">
                    <p className="text-15px font-roboto font-normal text-black max-w-750px text-center mx-auto">With our Head Office in Sydney, Australia, we have permanent operations in Australia and Europe. Both our Sydney,
                        Australia and the Hague, Netherlands operations focus on cyber fraud and due diligence operations</p>

                    <div className="text-center">
                        <Link href="#">
                            <a className="inline-block text-white text-15px font-medium bg-darkGold rounded-full py-3 px-10 uppercase mt-20">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-100px">
                <div className="max-w-1140px mx-auto">
                    <div className="box-wrapper flex gap-x-6">
                        <div className="box p-50px bg-black rounded-2xl text-center w-2/6">
                            <Image src="/images/tick-sign.webp" width="100" height="100" alt="Tick sign" />
                            <h3 className="text-2xl font-medium font-roboto text-gold uppercase mt-16 mb-4">Trust</h3>
                            <p className="text-base font-normal font-roboto text-white">Our Executive have been full-time employees of Australian State and Federal governments.
                                We have been security cleared to the highest level</p>
                        </div>

                        <div className="box p-50px bg-black rounded-2xl text-center w-2/6">
                            <Image src="/images/tick-sign.webp" width="100" height="100" alt="Tick sign" />
                            <h3 className="text-2xl font-medium font-roboto text-gold uppercase mt-16 mb-4">PROFESSIONALISM</h3>
                            <p className="text-base font-normal font-roboto text-white">Professionalism is not something that can be learnt, it comes from a willingness to not only serve,
                            it comes from a determination to be respectful and to maintain the highest standard</p>
                        </div>

                        <div className="box p-50px bg-black rounded-2xl text-center w-2/6">
                            <Image src="/images/tick-sign.webp" width="100" height="100" alt="Tick sign" />
                            <h3 className="text-2xl font-medium font-roboto text-gold uppercase mt-16 mb-4">INTEGRITY</h3>
                            <p className="text-base font-normal font-roboto text-white">Our Executive have proven untainted integrity and insist on the same qualities from our staff and contractors.
                            Integrity is one of our core values and drives our business decisions</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* our Representatives */}
            <section>
                <div className="max-w-1140px mx-auto">

                    <h2 className="text-7xl text-center font-roboto font-bold">Our Representatives</h2>

                    <div class="main-wrapper md:flex">

                        <div class="column1">
                            <div class="image-wrap relative">
                                <Image src="/images/dan.jpg" width="225" height="300" alt="dan" />
                                <div class="overlay-content">
                                    <a href="#">
                                    <div class="icon">
                                        <Image src="" width="" height="" alt="" />
                                    </div>
                                    </a>
                                    <a href="#">
                                    <div class="icon">
                                        <Image src="" width="" height="" alt="" />
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="column2 md:ml-6 xl:ml-86px">
                            <div class="content-wrap max-w-520px mt-6 md:mt-0">
                                <h3 class="text-white font-poppins text-3xl leading-40px lg:text-42px lg:leading-50px font-semibold">Igal Stolpner</h3>
                                <div class="relative founder-text text-orange text-sm leading-22px md:text-lg md:leading-28px font-poppins font-normal pl-58px mt-1.5 mb-31px">Co-Founder</div>
                                <div class="text-offWhite text-base leading-26px lg:text-lg lg:leading-28px font-poppins font-normal">
                                    <p>Igal Stolpner has co-founded Webify after leaving his role as VP Growth at Investing.com, where he started as first employee back in 2007, and left when the company was sold in 2021.</p>
                                    <p>Igal led the company’s growth from zero to over 250M monthly sessions, with over 50% of traffic coming from Organic Search.</p>
                                    <p>From zero to top 200 sites globally.</p>
                                    <p>In 2021, Igal has received the Extraordinary Abilities US Green Card for his experience in SEO.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}