import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Quotes from '@/components/Quotes';
import Gallery from '@/components/Gallery';
import Family from '@/components/Family';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Quotes />
      <Gallery />
      <Family />
      <Footer />
    </>
  );
}
