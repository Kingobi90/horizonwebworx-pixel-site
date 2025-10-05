import { useEffect, useRef, useState } from 'react';

const oneTimePlans = [
  {
    name: 'STARTER BUILD',
    price: '$599',
    period: 'PAY ONCE',
    features: [
      '3-5 Pages',
      'Mobile Responsive',
      'Contact Form',
      'Basic SEO',
      '30-Day Support',
    ],
    icon: '🎮',
    cta: 'START BUILD',
    popular: false,
  },
  {
    name: 'PRO BUILD',
    price: '$1,499',
    period: 'PAY ONCE',
    features: [
      'Up to 8 Pages',
      'Custom Animations',
      'SEO Optimized',
      'Google Analytics',
      '60-Day Support',
    ],
    icon: '🚀',
    cta: 'LEVEL UP',
    popular: true,
  },
  {
    name: 'CUSTOM BUILD',
    price: '$2,999+',
    period: 'CUSTOM',
    features: [
      'Unlimited Pages',
      'E-Commerce/Portal',
      'Advanced Automation',
      'Full Integration',
      '90-Day Support',
    ],
    icon: '👑',
    cta: 'BOOK CALL',
    popular: false,
  },
];

const monthlyPlans = [
  {
    name: 'STARTER SITE',
    price: '$249',
    period: 'PER MONTH',
    features: [
      'Hosting Included',
      'Monthly Updates',
      'Up to 5 Pages',
      'Email Support',
      'Security Patches',
    ],
    icon: '🕹️',
    cta: 'SUBSCRIBE',
    popular: false,
  },
  {
    name: 'GROWTH MODE',
    price: '$549',
    period: 'PER MONTH',
    features: [
      'SEO Optimization',
      'Marketing Automation',
      'CMS Access',
      'Priority Support',
      'Monthly Reports',
    ],
    icon: '⚡',
    cta: 'SUBSCRIBE',
    popular: true,
  },
  {
    name: 'HORIZON+',
    price: '$1,199',
    period: 'PER MONTH',
    features: [
      'AI Chat/Receptionist',
      'n8n Workflows',
      'Full-Stack Dev',
      'Custom Features',
      '24/7 Support',
    ],
    icon: '🔧',
    cta: "LET'S GO",
    popular: false,
  },
];

function PricingCard({ plan, index }) {
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
      className={`p-8 border-[3px] ${
        plan.popular ? 'border-red-600 scale-105' : 'border-white'
      } bg-black/80 shadow-[0_0_20px_rgba(255,0,0,0.3)] relative overflow-hidden transition-all duration-600 hover:scale-110 hover:border-red-600 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {plan.popular && (
        <div className="absolute top-4 right-4 bg-red-600 text-white text-[0.5rem] px-3 py-1 font-mono animate-blink">
          POPULAR
        </div>
      )}

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 animate-pulse-glow" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 animate-pulse-glow" />

      <span className="text-5xl mb-4 block relative z-10 animate-icon-bounce">
        {plan.icon}
      </span>

      <h3 className="text-[1rem] mb-2 text-white leading-[1.6] relative z-10 drop-shadow-[2px_2px_0_#000]">
        {plan.name}
      </h3>

      <div className="mb-6 relative z-10">
        <span className="text-[2rem] text-red-600 font-bold drop-shadow-[2px_2px_0_#000]">
          {plan.price}
        </span>
        <span className="text-[0.6rem] text-gray-400 font-mono ml-2 block mt-1">
          {plan.period}
        </span>
      </div>

      <ul className="space-y-3 mb-8 relative z-10">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className="text-[0.6rem] text-gray-300 font-mono flex items-start"
          >
            <span className="text-red-600 mr-2">▶</span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`#contact?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}`}
        className="block text-center px-6 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white no-underline text-[0.7rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 relative cursor-pointer hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
      >
        {plan.cta}
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [mode, setMode] = useState('onetime'); // 'onetime' or 'monthly'
  const currentPlans = mode === 'onetime' ? oneTimePlans : monthlyPlans;

  return (
    <section
      id="pricing"
      className="bg-black relative px-8 py-32 overflow-hidden animate-section-fade-in"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg1.png)',
          backgroundSize: 'cover',
        }}
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 animate-grid-move"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px)',
        }}
      />

      <h1 className="text-center mb-6 text-white drop-shadow-[3px_3px_0_#ff0000] relative z-10 text-[clamp(1rem,4vw,2rem)]">
        CHOOSE YOUR POWER LEVEL
      </h1>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-12 relative z-10">
        <div className="inline-flex border-[3px] border-red-600 bg-black/80 p-1">
          <button
            onClick={() => setMode('onetime')}
            className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
              mode === 'onetime'
                ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🎮 ONE-TIME BUILDS
          </button>
          <button
            onClick={() => setMode('monthly')}
            className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
              mode === 'monthly'
                ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🕹️ MONTHLY PLANS
          </button>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-center mb-4 text-gray-300 text-[0.8rem] relative z-10 max-w-[700px] mx-auto leading-[1.8]">
        {mode === 'onetime'
          ? '💰 PAY ONCE. OWN IT FOREVER.'
          : '🔧 WE MAINTAIN, UPDATE & AUTOMATE WHILE YOU SLEEP.'}
      </p>

      {/* Best For Section */}
      <div className="max-w-[800px] mx-auto mb-12 relative z-10">
        <div className="p-6 border-[2px] border-red-600/30 bg-black/60">
          <p className="text-[0.65rem] text-gray-400 font-mono leading-[1.8]">
            {mode === 'onetime' ? (
              <>
                <span className="text-red-600">▶ BEST FOR:</span> Portfolio
                sites • Brands that update on their own • Projects that don't
                need ongoing changes
              </>
            ) : (
              <>
                <span className="text-red-600">▶ BEST FOR:</span> Businesses
                that grow fast • Sites that change monthly • Need automation or
                AI features
              </>
            )}
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto relative z-10">
        {currentPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} index={index} />
        ))}
      </div>
    </section>
  );
}
