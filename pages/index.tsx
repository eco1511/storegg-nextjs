import AOS from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import FeatureGame from '../component/organisms/FeatureGame';
import MainBanner from '../component/organisms/MainBanner';
import Navbar from '../component/organisms/Navbar';
import Reached from '../component/organisms/Reached';
import TransactionStep from '../component/organisms/TransactionStep';
import Story from '../component/organisms/Story';
import Footer from '../component/organisms/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          Store GG - Get a New
          Experience in Gaming
        </title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
          players menjadi pemenang sejati"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu
          players menjadi pemenang sejati"
        />
        <meta
          property="og:image"
          content="http://image.jpg"
        />
        <meta
          property="og:url"
          content="http://bwa-storegg-eco.com"
        />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
