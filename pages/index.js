import Head from "next/head";
import Layout from "../components/layout";
import Slider from "../components/Slider";
import MyDropdown from "../components/Header";

export default function Home() {
  return (
    <>
        <Layout title="Home Page">
          <Slider />

        </Layout>
    </>
  )
}