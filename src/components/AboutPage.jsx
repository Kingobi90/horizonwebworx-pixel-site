import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former e-commerce director with 10+ years building automation solutions for fashion brands.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Martinez',
    role: 'Head of AI & Automation',
    bio: 'AI specialist who has deployed chatbots and automation systems for 100+ businesses.',
    avatar: '👩‍💻',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Full-stack engineer specializing in API integrations and custom workflow automation.',
    avatar: '🤖',
  },
];

const values = [
  {
    title: 'Automation First',
    description: 'We believe every repetitive task should be automated, freeing you to focus on growth.',
    icon: '⚡',
  },
  {
    title: 'Customer Success',
    description: 'Your success is our success. We measure our impact by your business results.',
    icon: '🎯',
  },
  {
    title: 'Continuous Innovation',
    description: 'We stay ahead of technology trends to bring you cutting-edge solutions.',
    icon: '🚀',
  },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 px-6 py-3 border-2 border-red-600 bg-black text-white text-[0.7rem] font-arcade hover:bg-red-600 transition-colors"
        >
          ← BACK TO HOME
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] text-white drop-shadow-[3px_3px_0_#ff0000] mb-4">
            ABOUT OUR MISSION
          </h1>
          <p className="text-[0.8rem] text-gray-400 max-w-3xl mx-auto leading-[1.8]">
            WE AUTOMATE BUSINESS SO YOU CAN SCALE
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 p-8 border-4 border-red-600 bg-black/80">
          <div>
            <h2 className="text-[1.5rem] text-white mb-6">OUR STORY</h2>
            <div className="space-y-4 text-[0.7rem] text-gray-300 leading-[1.8]">
              <p>
                Founded in 2023, HorizonWebWorX emerged from a frustration with seeing talented 
                business owners spending countless hours on repetitive tasks instead of growing 
                their companies.
              </p>
              <p>
                Our founders, with backgrounds in e-commerce, AI, and web development, recognized 
                that small to medium businesses needed enterprise-level automation but with the 
                simplicity and affordability that matched their scale.
              </p>
              <p>
                Today, we've helped over 150 businesses automate their operations, saving them 
                thousands of hours and enabling them to focus on what they do best.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-900 p-8 border-2 border-red-600">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-[2rem] font-bold mb-2">150+</div>
                <div className="text-[0.6rem] opacity-90">BUSINESSES AUTOMATED</div>
              </div>
              <div>
                <div className="text-[2rem] font-bold mb-2">85%</div>
                <div className="text-[0.6rem] opacity-90">TIME SAVINGS</div>
              </div>
              <div>
                <div className="text-[2rem] font-bold mb-2">24/7</div>
                <div className="text-[0.6rem] opacity-90">SUPPORT</div>
              </div>
              <div>
                <div className="text-[2rem] font-bold mb-2">98%</div>
                <div className="text-[0.6rem] opacity-90">SATISFACTION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-[1.5rem] text-white text-center mb-12">OUR VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 border-4 border-white bg-black/80 text-center transition-all duration-300 hover:border-red-600 hover:scale-105"
              >
                <div className="text-[3rem] mb-4">{value.icon}</div>
                <h3 className="text-[1rem] text-white mb-4">{value.title}</h3>
                <p className="text-[0.6rem] text-gray-400 leading-[1.6]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-[1.5rem] text-white text-center mb-12">MEET THE TEAM</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-6 border-4 border-white bg-black/80 text-center transition-all duration-300 hover:border-red-600 hover:scale-105"
              >
                <div className="text-[4rem] mb-4">{member.avatar}</div>
                <h3 className="text-[1rem] text-white mb-2">{member.name}</h3>
                <div className="text-[0.7rem] text-red-600 mb-4">{member.role}</div>
                <p className="text-[0.6rem] text-gray-400 leading-[1.6]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 border-4 border-red-600 bg-black/80">
          <h2 className="text-[1.5rem] text-white mb-4">
            READY TO AUTOMATE?
          </h2>
          <p className="text-[0.7rem] text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-b from-red-600 to-red-900 border-2 border-red-600 text-white text-[0.7rem] font-arcade hover:translate-y-[2px] transition-all"
            >
              📅 SCHEDULE CONSULTATION
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 border-2 border-white bg-black text-white text-[0.7rem] font-arcade hover:bg-white hover:text-black transition-all"
            >
              👁️ VIEW OUR WORK
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
