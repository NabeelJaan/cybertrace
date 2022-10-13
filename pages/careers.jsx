import Layout from "../components/layout";
import GenHero from "../components/genHero";
import AboutCareers from "../components/careers/AboutCareers";




export default function Careers() {
    return(

        <Layout title="Careers">

            <GenHero title="Careers"/>
            <AboutCareers />

        </Layout>
    )
}