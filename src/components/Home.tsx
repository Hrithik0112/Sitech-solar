import Navbar from './Navbar';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Partners from './Partners';
import Projects from './Projects';
import Services from './Services';
import FAQ from './FAQ';
import Footer from './Footer';
import Solutions from './Solutions';

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <Partners />
      <Solutions />
      <Projects />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
