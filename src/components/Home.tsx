import Hero from './Hero';
import WhyUs from './WhyUs';
import Partners from './Partners';
import Projects from './Projects';
import Services from './Services';
import FAQ from './FAQ';
import Solutions from './Solutions';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen roboto-regular">
      <Hero />
      <WhyUs />
      <Partners />
      <Solutions />
      <Projects />
      <Services />
      <FAQ />
    </div>
  );
}

export default Home;
