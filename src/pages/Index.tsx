import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Dashboards from "@/components/Dashboards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <About />
      <Dashboards />
      <Footer />
    </div>
  );
};

export default Index;
