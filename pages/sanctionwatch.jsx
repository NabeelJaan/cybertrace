import Layout from '../components/layout';
import SwHero from '../components/PageSanctionWatch/SwHero';
import DataTable from '../components/PageSanctionWatch/DataTable';




export default function SanctionWatch() {
    return(
        <Layout title="Sanction Watch">
            <SwHero />

            <DataTable />
        </Layout>
    )
}

