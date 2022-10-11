import Layout from "../components/layout";
import Slider from "../components/Slider";
import ReviewSlider from "../components/ReviewSlider";
import Process4 from "../components/Process4";
import WhyChoose from "../components/WhyChoose";
import OurPartners from "../components/OurPartners";
import ServicesWeOffer from './../components/ServicesWeOffer';
import WhoWeAre from './../components/WhoWeAre';
import OurServices from './../components/OurServices';
import Brochure from './../components/Brochure';

export default function Home() {
  return (
    <>
        <Layout title="Home Page">

          <Slider />
          <Brochure />
          <OurServices />
          <ReviewSlider />
          <Process4 />
          <WhoWeAre />
          <ServicesWeOffer />
          <WhyChoose />
          <OurPartners />

        </Layout>
    </>
  )
}