import AOS from 'aos';
import { useEffect } from 'react';
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
