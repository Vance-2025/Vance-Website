import type { Metadata } from 'next';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import ProcessFlow from './components/sections/ProcessFlow';
import BrandIdentity from './components/sections/BrandIdentity';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Transform your professional network with Vance. We connect ambitious professionals with industry leaders, creating meaningful relationships that drive career success.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProcessFlow />
      <BrandIdentity />
    </main>
  );
}

