import { useNavigate } from 'react-router-dom';

const projects = [
  {
    icon: '🛒',
    title: 'E-COMMERCE SITE',
    description: 'Modern online\nstore with\npayment\nintegration',
    tech: 'React • Stripe',
  },
  {
    icon: '🍔',
    title: 'RESTAURANT APP',
    description: 'Online ordering\nand reservation\nsystem',
    tech: 'Next.js • API',
  },
  {
    icon: '💪',
    title: 'FITNESS TRACKER',
    description: 'Mobile-first\nworkout and\nnutrition app',
    tech: 'React Native',
  },
  {
    icon: '🏠',
    title: 'REAL ESTATE',
    description: 'Property listing\nplatform with\nsearch filters',
    tech: 'Vue.js • Maps',
  },
  {
    icon: '📅',
    title: 'BOOKING SYSTEM',
    description: 'Appointment\nscheduling for\nservice business',
    tech: 'Calendar API',
  },
  {
    icon: '🎨',
    title: 'PORTFOLIO SITE',
    description: 'Creative agency\nshowcase with\nanimations',
    tech: 'Three.js',
  },
];

export default function PortfolioSection() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="bg-[radial-gradient(ellipse_at_center,#1a0000_0%,#000_100%)] relative px-8 py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg3.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h1 className="text-center mb-6 text-white drop-shadow-[3px_3px_0_#ff0000] text-[clamp(1rem,4vw,2rem)]">
          OUR PORTFOLIO
        </h1>
        <p className="text-center mb-16 text-gray-400 text-[0.8rem]">
          CHECK OUT OUR LEGENDARY BUILDS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 border-[3px] border-white bg-black/80 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:border-red-600 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]"
            >
              <div className="text-5xl mb-4 animate-icon-bounce">{project.icon}</div>
              <h3 className="text-[0.9rem] text-white mb-3 drop-shadow-[2px_2px_0_#000]">
                {project.title}
              </h3>
              <p className="text-[0.6rem] text-gray-400 leading-[1.8] mb-4 whitespace-pre-line">
                {project.description}
              </p>
              <div className="text-[0.5rem] text-red-600 font-mono">
                {project.tech}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-block px-8 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.7rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
          >
            VIEW ALL PROJECTS →
          </button>
        </div>
      </div>
    </section>
  );
}
