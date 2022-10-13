import Layout from "../components/layout";
import GenHero from "../components/genHero";
import AboutLicense from './../components/Accreditation/AboutLicense';



export default function Accreditation(){
    return(
        <Layout title="Accreditation">

            <GenHero title="Accreditation"/>

            <AboutLicense />

        </Layout>
    )
}