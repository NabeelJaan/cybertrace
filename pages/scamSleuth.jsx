import Layout from '../components/layout';
import SwHero from '../components/PageSanctionWatch/SwHero';
import scamSleuthVideo from '../components/scamSleuth/scamSleuthVideo';
import scamSleuthCTA from '../components/scamSleuth/scamSleuthCTA';


export default function scamSleuth() {
    return(
        <Layout title="Scam Sleuth">

            <SwHero />

            <scamSleuthVideo />
            
            <scamSleuthCTA />
            
        </Layout>
    )
}