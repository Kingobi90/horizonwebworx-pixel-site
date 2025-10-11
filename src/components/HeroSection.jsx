export default function HeroSection() {
  const handleStartGame = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 relative overflow-hidden bg-gradient-to-b from-[#1a0000] via-[#330000] to-black animate-section-fade-in">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
        }}
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Animated background pattern */}
      <div
        className="absolute w-[200%] h-[200%] animate-slide-bg"
        style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255, 0, 0, 0.03) 50px, rgba(255, 0, 0, 0.03) 100px)',
          animationDuration: '20s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      />

      <div className="relative z-10 p-8 my-8 max-w-[800px] border-4 border-red-600 shadow-[0_0_30px_rgba(255,0,0,0.5),inset_0_0_20px_rgba(255,0,0,0.1)] bg-black/60 animate-box-glow">
        <h1 className="font-arcade text-[clamp(1rem,4vw,2rem)] text-white drop-shadow-[3px_3px_0_#ff0000] mb-8 leading-[1.8] animate-text-pulse">
          PLAYER ONE<br />READY?
        </h1>
        <p className="font-arcade text-[clamp(0.5rem,2vw,0.8rem)] text-gray-300 mb-12 leading-[1.8]">
          LEVEL UP YOUR BUSINESS<br />
          WITH LEGENDARY WEB SOLUTIONS
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleStartGame}
            className="inline-block px-8 py-6 my-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white no-underline text-[0.8rem] font-arcade shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 relative cursor-pointer animate-button-float hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
          >
            ▶ LEVEL UP
          </button>
          <a
            href="#contact"
            className="inline-block px-8 py-6 my-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white no-underline text-[0.8rem] font-arcade shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 relative cursor-pointer animate-button-float hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
          >
            ★ CONTACT
          </a>
        </div>
      </div>
    </section>
  );
}
