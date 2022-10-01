import Head from "next/head";
import Layout from "../components/layout";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
        <Layout title="Home Page">
          <Slider />

        </Layout>
    </>
  )
}