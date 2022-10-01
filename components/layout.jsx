import React, { Children } from "react";
import Footer from "./Footer";
import Head from "next/head";
import CTA from "./cta";
import ContactInfo from "./stickey-contact";
import CopyRight from "./copyRight";
import Header from "./Header";

const Layout = ({ children, title }) => {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                {/* Font awesome */}
                <script src="https://kit.fontawesome.com/458a9ea0d5.js" async />
            </Head>

            <Header />

            <main>
                {children}
            </main>

            <CTA />
            <Footer />
            <CopyRight />
            <ContactInfo />
        </>
    )
}

export default Layout;