import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import Slider from "./Slider";

const Layout = ({ children, title }) => {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                {/* Font awesome */}
                <script src="https://kit.fontawesome.com/458a9ea0d5.js" crossorigin="anonymous"></script>
            </Head>

            {/* Header */}
            <Header />


            {/* Owl carousel */}
            <Slider />

            <main>
                {children}
            </main>
            
            <Footer />
        </div>
    )
}

export default Layout;