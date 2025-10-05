import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '🌐',
    title: 'WEBSITE DESIGN',
    description: 'Custom sites that\nconvert visitors\ninto customers.\n100% responsive.\nLightning fast.',
    pattern: 'repeating-linear-gradient(45deg, #fff 0px, #fff 10px, transparent 10px, transparent 20px)',
    value: 'Website Design',
  },
  {
    icon: '🔍',
    title: 'SEO OPTIMIZATION',
    description: 'Dominate search\nrankings. Drive\norganic traffic.\nCrush the\ncompetition.',
    pattern: 'radial-gradient(circle at 25% 25%, #fff 2px, transparent 2px)',
    patternSize: '20px 20px',
    value: 'SEO Optimization',
  },
  {
    icon: '📍',
    title: 'GOOGLE PROFILE',
    description: 'Optimize your\nlocal presence.\nGet found by\ncustomers in\nyour area.',
    pattern: 'repeating-linear-gradient(0deg, #fff 0px, #fff 5px, transparent 5px, transparent 15px)',
    value: 'Google My Business',
  },
  {
    icon: '⚡',
    title: 'AUTOMATIONS',
    description: 'Save time with\nsmart workflows.\nAutomate tasks.\nFocus on growth.',
    pattern: 'linear-gradient(45deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%)',
    patternSize: '30px 30px',
    value: 'Business Automation',
  },
];

function ServiceCard({ service, index }) {
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
    <a
      href={`#contact?service=${encodeURIComponent(service.value)}`}
      ref={cardRef}
      className={`block p-8 border-[3px] border-white bg-black/90 transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] relative hover:scale-[1.08] hover:-rotate-1 hover:border-red-600 hover:shadow-[0_10px_40px_rgba(255,0,0,0.4)] hover:bg-red-600/5 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-0 transition-opacity duration-300 group-hover:opacity-15"
        style={{
          background: service.pattern,
          backgroundSize: service.patternSize || 'auto',
        }}
      />

      <span className="text-5xl mb-4 block relative z-10 animate-icon-bounce">
        {service.icon}
      </span>
      <h3 className="text-[0.9rem] mb-4 text-white leading-[1.6] relative z-10 transition-colors duration-300 hover:text-red-600">
        {service.title}
      </h3>
      <p className="text-[0.6rem] leading-[1.8] text-gray-400 font-mono relative z-10 whitespace-pre-line">
        {service.description}
      </p>
    </a>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black relative px-8 py-32 overflow-hidden animate-section-fade-in">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg1.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated grid background */}
      <div
        className="absolute inset-0 animate-grid-move"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)',
        }}
      />

      <h1 className="text-center mb-16 text-white drop-shadow-[3px_3px_0_#333] relative z-10 text-[clamp(1rem,4vw,2rem)]">
        SELECT YOUR POWER-UP
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
