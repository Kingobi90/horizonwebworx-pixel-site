import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-black relative px-8 py-32 overflow-hidden animate-section-fade-in"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(/about-bg.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 animate-grid-move pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h1
          className={`text-center mb-12 text-white drop-shadow-[3px_3px_0_#ff0000] text-[clamp(1rem,4vw,2rem)] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          ABOUT HORIZONWEBWORX
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="p-8 border-[3px] border-red-600 bg-black/60 shadow-[0_0_30px_rgba(255,0,0,0.3)] relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 animate-pulse-glow" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 animate-pulse-glow" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 animate-pulse-glow" />

              <h2 className="text-[1.2rem] text-red-600 mb-6 drop-shadow-[2px_2px_0_#000]">
                OUR STORY
              </h2>
              <p className="text-[0.7rem] leading-[2] text-gray-300 font-mono mb-4">
                We're a team of digital warriors building legendary web
                experiences. Born from a passion for pixel-perfect design and
                cutting-edge technology, we transform businesses into online
                powerhouses.
              </p>
              <p className="text-[0.7rem] leading-[2] text-gray-300 font-mono">
                Every project is a new level to conquer. We don't just build
                websites – we craft digital experiences that dominate the
                competition and drive real results.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-6">
              {/* Value 1 */}
              <div className="p-6 border-[3px] border-white bg-black/60 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:scale-105">
                <div className="flex items-start gap-4">
                  <span className="text-3xl animate-icon-bounce">🎯</span>
                  <div>
                    <h3 className="text-[0.9rem] text-white mb-2">
                      MISSION-DRIVEN
                    </h3>
                    <p className="text-[0.6rem] leading-[1.8] text-gray-400 font-mono">
                      Your success is our high score. We're obsessed with
                      delivering results that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 2 */}
              <div className="p-6 border-[3px] border-white bg-black/60 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:scale-105">
                <div className="flex items-start gap-4">
                  <span className="text-3xl animate-icon-bounce">⚡</span>
                  <div>
                    <h3 className="text-[0.9rem] text-white mb-2">
                      INNOVATION FIRST
                    </h3>
                    <p className="text-[0.6rem] leading-[1.8] text-gray-400 font-mono">
                      We stay ahead of the curve with the latest tech and
                      design trends to keep you competitive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 3 */}
              <div className="p-6 border-[3px] border-white bg-black/60 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:scale-105">
                <div className="flex items-start gap-4">
                  <span className="text-3xl animate-icon-bounce">🏆</span>
                  <div>
                    <h3 className="text-[0.9rem] text-white mb-2">
                      QUALITY GUARANTEED
                    </h3>
                    <p className="text-[0.6rem] leading-[1.8] text-gray-400 font-mono">
                      Every pixel matters. We craft premium solutions that stand
                      the test of time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
