import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <Partners />
      <Projects />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
