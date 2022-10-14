import Layout from '../components/layout';
import SwHero from '../components/PageSanctionWatch/SwHero';
import DataTable from '../components/PageSanctionWatch/DataTable';
import SanctionWatchCTA from '../components/PageSanctionWatch/SanctionWatchCTA';




export default function SanctionWatch() {
    return(
        <Layout title="Sanction Watch">
            <SwHero />

            <DataTable />

            <SanctionWatchCTA />
        </Layout>
    )
}

