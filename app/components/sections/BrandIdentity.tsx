import Image from 'next/image';
import { MessageCircle } from "lucide-react"

export default function BrandIdentity() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-black to-blue-950">
      {/* Decorative curved lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
        {/* Line from 50,000+ Talents to center */}
        <path d="M 200 80 Q 400 150, 500 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
        {/* Line from 90,000+ Entrepreneur to center */}
        <path d="M 600 80 Q 600 150, 500 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
        {/* Line from 50,000+ Tech Leaders to center */}
        <path d="M 1000 120 Q 800 200, 500 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
        {/* Line from 1.5+ Million to center */}
        <path d="M 200 240 Q 350 280, 500 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
        {/* Line from 30,000+ Startups to center */}
        <path d="M 1000 320 Q 800 300, 500 300" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Statistics positioned around the main number */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Top left - 50,000+ Talents */}
          <div className="absolute top-0 left-8 md:left-20">
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold">50,000+</div>
              <div className="text-lg md:text-xl">Talents</div>
            </div>
          </div>

          {/* Top center - 90,000+ Entrepreneur */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="text-white text-center">
              <div className="text-2xl md:text-3xl font-bold">90,000+</div>
              <div className="text-lg md:text-xl">Entrepreneur</div>
            </div>
          </div>

          {/* Top right - 50,000+ Tech Leaders */}
<div className="absolute top-20 right-10 md:right-40">
  <div className="text-white text-right">
    <div className="text-2xl md:text-3xl font-bold">50,000+</div>
    <div className="text-lg md:text-xl whitespace-nowrap">Tech Leaders</div>
  </div>
</div>


          {/* Left - 1.5+ Million Management Professionals */}
          <div className="absolute top-40 left-0 md:left-8">
            <div className="text-white max-w-[200px]">
              <div className="text-2xl md:text-3xl font-bold">1.5+ Million</div>
              <div className="text-lg md:text-xl leading-tight">
                Management
                <br />
                Professionals
              </div>
            </div>
          </div>

          {/* Right - 30,000+ Startups */}
<div className="absolute top-80 right-8 md:right-10">
  <div className="text-white text-right"> 
    <div className="text-2xl md:text-3xl font-bold">30,000+</div>
    <div className="text-lg md:text-xl whitespace-nowrap">Startups</div>
  </div>    
</div>  
          {/* Center - Main number */}
          <div className="flex flex-col items-center justify-center pt-32 md:pt-40">
            <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-bold text-white leading-none tracking-tight">
              1.7M+
            </h1>

            {/* Tagline */}
            <p className="mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl text-white text-center max-w-5xl px-4 leading-relaxed">
              Think of me as your billionaire friend who actually returns calls
              <br className="hidden md:block" />
              and remembers everyone's business ne.
            </p>

            {/* CTA Button */}
            <button className="mt-12 md:mt-16 flex items-center gap-3 px-8 py-4 bg-[#3a4a3e] hover:bg-[#4a5a4e] text-white text-lg md:text-xl rounded-full transition-colors">
              <MessageCircle className="w-6 h-6 text-green-400" />
              Lets Connect
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
