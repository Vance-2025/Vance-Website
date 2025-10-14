import type { Metadata } from 'next';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import ProcessFlow from './components/sections/ProcessFlow';
import VanceIntro from './components/sections/VanceIntro';
import PressMedia from './components/sections/PressMedia';
import BrandIdentity from './components/sections/BrandIdentity';
import FAQ from './components/sections/FAQ';
import SocialMedia from './components/sections/SocialMedia';
import Footer from './components/sections/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Vance' },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProcessFlow />
      <VanceIntro />
      <BrandIdentity />
      <PressMedia />
      <FAQ />
      <SocialMedia />
      <Footer />
    </main>
  );
}

