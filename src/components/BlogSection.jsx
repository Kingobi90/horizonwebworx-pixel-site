import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    icon: '🎨',
    category: 'DESIGN',
    date: 'OCT 2025',
    title: 'WEB DESIGN TRENDS 2025',
    description: 'The latest design patterns that will dominate the web in 2025.',
  },
  {
    icon: '🔍',
    category: 'SEO',
    date: 'SEP 2025',
    title: 'SEO BEST PRACTICES',
    description: 'Master local SEO and dominate your market rankings.',
  },
  {
    icon: '⚡',
    category: 'PERFORMANCE',
    date: 'SEP 2025',
    title: 'BOOST PAGE SPEED',
    description: 'Simple tricks to make your website load lightning fast.',
  },
  {
    icon: '📱',
    category: 'MOBILE',
    date: 'AUG 2025',
    title: 'MOBILE-FIRST DESIGN',
    description: 'Why mobile-first approach is crucial for modern websites.',
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="bg-black relative px-8 py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(/images/bg2.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h1 className="text-center mb-6 text-white drop-shadow-[3px_3px_0_#ff0000] text-[clamp(1rem,4vw,2rem)]">
          LATEST UPDATES
        </h1>
        <p className="text-center mb-16 text-gray-400 text-[0.8rem]">
          LEVEL UP YOUR KNOWLEDGE WITH OUR BLOG
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-6 border-[3px] border-white bg-black/80 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 hover:border-red-600 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] cursor-pointer"
            >
              <div className="text-4xl mb-4 animate-icon-bounce">{post.icon}</div>
              <div className="text-[0.5rem] text-red-600 font-mono mb-2">
                {post.category} • {post.date}
              </div>
              <h3 className="text-[0.9rem] text-white mb-3 drop-shadow-[2px_2px_0_#000]">
                {post.title}
              </h3>
              <p className="text-[0.6rem] text-gray-400 leading-[1.8] mb-4">
                {post.description}
              </p>
              <div className="text-[0.6rem] text-red-600 hover:text-white transition-colors">
                READ MORE →
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/blog')}
            className="inline-block px-8 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.7rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
          >
            READ MORE ARTICLES →
          </button>
        </div>
      </div>
    </section>
  );
}
