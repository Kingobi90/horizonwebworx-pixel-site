import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '150+', label: 'PROJECTS\nCOMPLETED' },
  { number: '98%', label: 'HAPPY\nCLIENTS' },
  { number: '5+', label: 'YEARS\nEXPERIENCE' },
  { number: '24/7', label: 'SUPPORT' },
];

function StatBox({ stat, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`p-8 border-[3px] border-red-600 bg-black/80 shadow-[0_0_20px_rgba(255,0,0,0.3)] relative overflow-hidden transition-all duration-600 hover:scale-110 hover:rotate-2 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }}
    >
      {/* Animated pattern */}
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-slide-pattern"
        style={{
          background:
            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 0, 0, 0.1) 10px, rgba(255, 0, 0, 0.1) 20px)',
        }}
      />

      <div className="text-[2.5rem] text-red-600 drop-shadow-[2px_2px_0_#000,0_0_20px_#ff0000] mb-2 relative z-10 animate-number-glow">
        {stat.number}
      </div>
      <div className="text-[0.6rem] text-gray-400 relative z-10 whitespace-pre-line">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="text-center px-8 py-32 bg-[radial-gradient(ellipse_at_center,#1a0000_0%,#000_100%)] relative overflow-hidden animate-section-fade-in">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg2.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Pulsing glow effect */}
      <div
        className="absolute w-full h-full animate-glow-pulse"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)',
        }}
      />

      <h1 className="relative z-10 mb-16 text-[clamp(1rem,4vw,2rem)] text-white drop-shadow-[3px_3px_0_#ff0000]">
        HIGH SCORES
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto relative z-10">
        {stats.map((stat, index) => (
          <StatBox key={index} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
}
