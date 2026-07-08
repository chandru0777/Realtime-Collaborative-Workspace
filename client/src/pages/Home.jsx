import MainLayout from "../layouts/MainLayout";
import Hero from "./home/Hero";
import Features from "./home/Features";
import HowItWorks from "./home/HowItWorks";
import CTA from "./home/CTA";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </MainLayout>
  );
}

export default Home;