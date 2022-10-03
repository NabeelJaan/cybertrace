import Link from "next/link";
import Layout from "../components/layout";
import Slider from "../components/Slider";
import ReviewSlider from "../components/ReviewSlider";
import OurPartners from "../components/OurPartners";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Layout title="Home Page">
          <Slider />

          <section className="brochure py-40">
            <div className="max-w-1140px mx-auto">
              <div className="brochure-inner flex items-center justify-between">
                <div className="content-wrapper text-center">
                  <h2 className="text-6xl font-roboto font-semibold capitalize">Cyber Fraud Investigation <span className="text-5xl text-gold">Cryptocurrency Tracing</span></h2>
                  <p className="text-3xl font-roboto font-semibold capitalize my-7">Financial Crime Investigation & Intelligence</p>
                  
                  <Link href="#">
                    <a className="text-base font-roboto font-medium uppercase bg-gold text-white px-6 py-3 inline-flex items-center justify-center rounded-lg">Download Brochure</a>
                  </Link>
                </div>

                <div className="image-wrapper">
                  <Image src="/images/brochure.webp" width="234" height="300" alt="Tick sign" />
                </div>
              </div>
            </div>
          </section>
          
          {/* Services */}

          <section className="services-wrapper relative bg-black py-85px">

            <h2 className="text-4xl text-white font-roboto font-semibold uppercase text-center mb-12">our <span className="text-golden">services</span></h2>

            <div className="max-w-1140px mx-auto">

                <div className="services-inner relative gap-5 md:flex md:flex-row md:flex-wrap">

                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>

                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>

                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>

                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                    <div className="bg-black px-25px py-10 border rounded-lg max-w-353px">
                      <h3 className="text-white text-xl font-semibold font-roboto">CYBERFRAUD INVESTIGATIONS</h3>
                      <h4 className="text-gold text-sm font-semibold font-roboto py-5">We Can Identify Who Scammed you</h4>
                      <p className="text-white text-base font-normal font-roboto mb-11">Are you the victim of an online scam or cyber fraud operation? Romance scams,
                        investment fraud or phishing attacks: We understand the methods used by global
                        scam syndicates and can identify the individuals involved. We work closely with
                        international law enforcement to bring those responsible to justice.</p>

                      <Link href="#">
                        <a className="text-base font-roboto font-medium uppercase text-white">read more</a>
                      </Link>
                    </div>
                </div>
            </div>
          </section>


          <ReviewSlider />

          <OurPartners />

        </Layout>
    </>
  )
}