import Layout from "../components/layout";
import Slider from "../components/Slider";
import ReviewSlider from "../components/Home/ReviewSlider";
import Process4 from "../components/Home/Process4";
import WhyChoose from "../components/Home/WhyChoose";
import OurPartners from "../components/Home/OurPartners";
import ServicesWeOffer from '../components/Home/ServicesWeOffer';
import WhoWeAre from '../components/Home/WhoWeAre';
import OurServices from './../components/Home/OurServices';
import Brochure from './../components/Home/Brochure';

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