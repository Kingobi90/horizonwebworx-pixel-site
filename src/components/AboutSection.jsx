import { useNavigate } from 'react-router-dom';

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-black relative px-8 py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(/about-bg.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h1 className="text-center mb-16 text-white drop-shadow-[3px_3px_0_#ff0000] text-[clamp(1rem,4vw,2rem)]">
          ABOUT HORIZONWEBWORX
        </h1>

        {/* Story Section */}
        <div className="mb-16 p-8 border-[3px] border-white bg-black/80">
          <h2 className="text-[1.2rem] text-red-600 mb-6 drop-shadow-[2px_2px_0_#000]">
            OUR STORY
          </h2>
          <p className="text-[0.7rem] text-gray-300 leading-[1.8] mb-4">
            We're a team of digital warriors building legendary web experiences. Born from a passion for pixel-perfect design and cutting-edge technology, we transform businesses into online powerhouses.
          </p>
          <p className="text-[0.7rem] text-gray-300 leading-[1.8]">
            Every project is a new level to conquer. We don't just build websites – we craft digital experiences that dominate the competition and drive real results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-[3px] border-red-600 bg-black/80 shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-[1rem] text-white mb-3 drop-shadow-[2px_2px_0_#000]">
              MISSION-DRIVEN
            </h3>
            <p className="text-[0.6rem] text-gray-400 leading-[1.8]">
              Your success is our high score. We're obsessed with delivering results that exceed expectations.
            </p>
          </div>

          <div className="p-8 border-[3px] border-red-600 bg-black/80 shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-[1rem] text-white mb-3 drop-shadow-[2px_2px_0_#000]">
              INNOVATION FIRST
            </h3>
            <p className="text-[0.6rem] text-gray-400 leading-[1.8]">
              We stay ahead of the curve with the latest tech and design trends to keep you competitive.
            </p>
          </div>

          <div className="p-8 border-[3px] border-red-600 bg-black/80 shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-[1rem] text-white mb-3 drop-shadow-[2px_2px_0_#000]">
              QUALITY GUARANTEED
            </h3>
            <p className="text-[0.6rem] text-gray-400 leading-[1.8]">
              Every pixel matters. We craft premium solutions that stand the test of time.
            </p>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/about')}
            className="inline-block px-8 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.7rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
          >
            LEARN MORE ABOUT US →
          </button>
        </div>
      </div>
    </section>
  );
}
