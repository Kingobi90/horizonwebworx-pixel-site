import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'LEVEL UP YOUR WEBSITE GAME',
    date: '2025-10-01',
    category: 'WEB DESIGN',
    excerpt: 'Discover the secrets to creating websites that convert visitors into loyal customers. Learn the power-ups every business needs.',
    image: '🌐',
  },
  {
    id: 2,
    title: 'SEO: THE ULTIMATE BOSS BATTLE',
    date: '2025-09-28',
    category: 'SEO',
    excerpt: 'Master the art of search engine optimization and dominate Google rankings. Your guide to crushing the competition.',
    image: '🔍',
  },
  {
    id: 3,
    title: 'GOOGLE MY BUSINESS CHEAT CODES',
    date: '2025-09-25',
    category: 'LOCAL SEO',
    excerpt: 'Unlock the hidden potential of Google My Business. Get found by customers in your area with these pro strategies.',
    image: '📍',
  },
  {
    id: 4,
    title: 'AUTOMATION: YOUR SECRET WEAPON',
    date: '2025-09-20',
    category: 'AUTOMATION',
    excerpt: 'Save time and boost productivity with smart business automation. Learn how to work smarter, not harder.',
    image: '⚡',
  },
  {
    id: 5,
    title: 'MOBILE-FIRST DESIGN WINS',
    date: '2025-09-15',
    category: 'WEB DESIGN',
    excerpt: 'Why mobile-first design is no longer optional. Optimize your site for the devices your customers actually use.',
    image: '📱',
  },
  {
    id: 6,
    title: 'SPEED OPTIMIZATION HACKS',
    date: '2025-09-10',
    category: 'PERFORMANCE',
    excerpt: 'Lightning-fast websites win the race. Discover techniques to make your site load in milliseconds.',
    image: '⚡',
  },
];

export default function BlogPage() {
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
            KNOWLEDGE BASE
          </h1>
          <p className="text-[0.7rem] text-gray-400">
            POWER-UPS FOR YOUR DIGITAL JOURNEY
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border-4 border-white bg-black/80 p-6 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:scale-105 cursor-pointer group"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 animate-icon-bounce">
                {post.image}
              </div>

              {/* Category */}
              <div className="text-[0.5rem] text-red-600 mb-2">
                {post.category}
              </div>

              {/* Title */}
              <h2 className="text-[0.8rem] text-white mb-3 leading-[1.6] group-hover:text-red-600 transition-colors">
                {post.title}
              </h2>

              {/* Date */}
              <div className="text-[0.5rem] text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>

              {/* Excerpt */}
              <p className="text-[0.6rem] text-gray-400 leading-[1.8] mb-4">
                {post.excerpt}
              </p>

              {/* Read More */}
              <button className="text-[0.6rem] text-red-600 hover:text-white transition-colors border-b border-red-600 hover:border-white">
                READ MORE →
              </button>
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center p-8 border-4 border-red-600 bg-black/60">
          <p className="text-[0.8rem] text-red-600 animate-blink">
            🎮 MORE LEVELS COMING SOON! 🎮
          </p>
          <p className="text-[0.6rem] text-gray-400 mt-4">
            Subscribe to our newsletter to get notified when new content drops
          </p>
        </div>
      </div>
    </div>
  );
}
