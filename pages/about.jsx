import GenHero from "../components/genHero";
import Layout from "../components/layout";
import WhyChooseUs from "../components/About/WhyChooseUs";
import OurRepresentatives from "../components/About/OurRepresentatives";
import AboutSec from './../components/About/AboutSec';

export default function About () {
    return(
        <Layout title="About us Page">

            <GenHero title="About"/>
            <AboutSec />
            <WhyChooseUs />
            <OurRepresentatives />

        </Layout>
    )
}