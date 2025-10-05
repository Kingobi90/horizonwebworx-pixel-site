import { useEffect, useRef, useState } from 'react';

const portfolioItems = [
  {
    title: 'E-COMMERCE SITE',
    description: 'Modern online\nstore with\npayment\nintegration',
    tech: 'React • Stripe',
    icon: '🛒',
  },
  {
    title: 'RESTAURANT APP',
    description: 'Online ordering\nand reservation\nsystem',
    tech: 'Next.js • API',
    icon: '🍔',
  },
  {
    title: 'FITNESS TRACKER',
    description: 'Mobile-first\nworkout and\nnutrition app',
    tech: 'React Native',
    icon: '💪',
  },
  {
    title: 'REAL ESTATE',
    description: 'Property listing\nplatform with\nsearch filters',
    tech: 'Vue.js • Maps',
    icon: '🏠',
  },
  {
    title: 'BOOKING SYSTEM',
    description: 'Appointment\nscheduling for\nservice business',
    tech: 'Calendar API',
    icon: '📅',
  },
  {
    title: 'PORTFOLIO SITE',
    description: 'Creative agency\nshowcase with\nanimations',
    tech: 'Three.js',
    icon: '🎨',
  },
];

function PortfolioCard({ item, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`p-8 border-[3px] border-red-600 bg-black/80 shadow-[0_0_20px_rgba(255,0,0,0.3)] relative overflow-hidden transition-all duration-600 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] hover:bg-red-600/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 animate-pulse-glow" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 animate-pulse-glow" />

      <span className="text-5xl mb-4 block relative z-10 animate-icon-bounce">
        {item.icon}
      </span>
      <h3 className="text-[0.9rem] mb-3 text-white leading-[1.6] relative z-10 drop-shadow-[2px_2px_0_#000]">
        {item.title}
      </h3>
      <p className="text-[0.6rem] leading-[1.8] text-gray-400 font-mono relative z-10 whitespace-pre-line mb-4">
        {item.description}
      </p>
      <div className="text-[0.5rem] text-red-600 font-mono relative z-10 border-t border-red-600/30 pt-3">
        {item.tech}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-black relative px-8 py-32 overflow-hidden animate-section-fade-in">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg2.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated scanlines */}
      <div
        className="absolute inset-0 animate-grid-move pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px)',
        }}
      />

      <h1 className="text-center mb-6 text-white drop-shadow-[3px_3px_0_#ff0000] relative z-10 text-[clamp(1rem,4vw,2rem)]">
        OUR PORTFOLIO
      </h1>
      
      <p className="text-center mb-16 text-gray-400 text-[0.7rem] relative z-10 max-w-[600px] mx-auto leading-[1.8]">
        CHECK OUT OUR LEGENDARY BUILDS
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto relative z-10">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
