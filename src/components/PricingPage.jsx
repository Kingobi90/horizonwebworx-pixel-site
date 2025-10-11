import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

// Website One-Time Builds
const websiteOneTime = [
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
    cta: 'GET STARTED',
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
    cta: 'START PROJECT',
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
    cta: 'SCHEDULE CALL',
    popular: false,
  },
];

// Website Monthly Plans
const websiteMonthly = [
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
    cta: 'GET STARTED',
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
    cta: 'START GROWING',
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
    cta: 'GO PREMIUM',
    popular: false,
  },
];

// Automation One-Time
const automationOneTime = [
  {
    name: 'AUTOMATION STARTER',
    price: '$1,499',
    period: 'PAY ONCE',
    features: [
      '1-2 Automation Tools',
      'Basic Integrations',
      'Setup & Training',
      '60-Day Support',
      'Documentation',
    ],
    icon: '🤖',
    cta: 'AUTOMATE NOW',
    popular: false,
  },
  {
    name: 'AUTOMATION PRO',
    price: '$3,499',
    period: 'PAY ONCE',
    features: [
      'Up to 5 Automation Tools',
      'Advanced Integrations',
      'Custom Workflows',
      '90-Day Support',
      'Priority Setup',
    ],
    icon: '⚙️',
    cta: 'SCALE UP',
    popular: true,
  },
  {
    name: 'AUTOMATION ENTERPRISE',
    price: '$7,999+',
    period: 'CUSTOM',
    features: [
      'Unlimited Automation',
      'Full Integration Suite',
      'Dedicated Manager',
      '180-Day Support',
      'White-Label Options',
    ],
    icon: '🚀',
    cta: 'GO ENTERPRISE',
    popular: false,
  },
];

// Automation Monthly
const automationMonthly = [
  {
    name: 'AUTOMATION STARTER',
    price: '$399',
    period: 'PER MONTH',
    features: [
      '1-2 Automation Tools',
      'Email Support',
      'Basic Integrations',
      'Monthly Reports',
      'Self-Serve Setup',
    ],
    icon: '🤖',
    cta: 'AUTOMATE NOW',
    popular: false,
  },
  {
    name: 'AUTOMATION PRO',
    price: '$799',
    period: 'PER MONTH',
    features: [
      'Up to 5 Automation Tools',
      'Priority Support',
      'Advanced Integrations',
      'Weekly Reports',
      'Guided Onboarding',
    ],
    icon: '⚙️',
    cta: 'SCALE UP',
    popular: true,
  },
  {
    name: 'AUTOMATION ENTERPRISE',
    price: '$1,499',
    period: 'PER MONTH',
    features: [
      'Unlimited Automation',
      'Dedicated Manager',
      'Custom Workflows',
      'Real-Time Analytics',
      '24/7 Support',
    ],
    icon: '🚀',
    cta: 'GO ENTERPRISE',
    popular: false,
  },
];

// Add-On Services
const addOns = [
  {
    name: 'SEO BOOST',
    price: '+$497',
    description: 'Keyword research, on-page SEO, technical audit, 3-month backlinks',
    icon: '📈',
  },
  {
    name: 'CONTENT PACK',
    price: '+$297',
    description: '10 SEO-optimized blog posts with images and social snippets',
    icon: '✍️',
  },
  {
    name: 'BRANDING KIT',
    price: '+$797',
    description: 'Logo design, color palette, typography guide, brand guidelines',
    icon: '🎨',
  },
  {
    name: 'ANALYTICS SETUP',
    price: '+$197',
    description: 'Google Analytics, Tag Manager, conversion tracking, dashboard setup',
    icon: '📊',
  },
  {
    name: 'EMAIL MARKETING',
    price: '+$397',
    description: 'Email automation, newsletter templates, campaign setup, list management',
    icon: '📧',
  },
];

function AddOnsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % addOns.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleAddOns = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(addOns[(currentIndex + i) % addOns.length]);
    }
    return visible;
  };

  return (
    <div className="max-w-[1200px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getVisibleAddOns().map((addon, index) => (
          <div
            key={`${addon.name}-${currentIndex}-${index}`}
            className="p-6 border-[3px] border-green-600 bg-black/80 shadow-[0_0_20px_rgba(0,255,0,0.3)] relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,0,0.6)] animate-fade-in"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-600 animate-pulse-glow" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-600 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-600 animate-pulse-glow" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-600 animate-pulse-glow" />
            
            <div className="text-center">
              <span className="text-4xl mb-3 block animate-icon-bounce">{addon.icon}</span>
              <h3 className="text-[0.9rem] text-white mb-2 drop-shadow-[2px_2px_0_#000]">
                {addon.name}
              </h3>
              <div className="text-[1.3rem] text-green-400 font-bold drop-shadow-[2px_2px_0_#000] mb-3">
                {addon.price}
              </div>
              <p className="text-[0.55rem] text-gray-400 leading-[1.6]">
                {addon.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {addOns.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 border-2 transition-all ${
              index === currentIndex
                ? 'bg-green-600 border-green-400 scale-125'
                : 'bg-black border-green-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function PricingCard({ plan, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate('/contact', {
      state: {
        service: plan.name,
        price: plan.price,
      },
    });
  };

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

      {/* Corner decorations */}
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
        {plan.features.map((feature, idx) => (
          <li key={idx} className="text-[0.6rem] text-gray-300 font-mono flex items-start">
            <span className="text-red-600 mr-2">▶</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className="block w-full text-center px-6 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.7rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 relative cursor-pointer hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
      >
        {plan.cta}
      </button>
    </div>
  );
}


export default function PricingPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('website');
  const [paymentType, setPaymentType] = useState('onetime');

  const getPlans = () => {
    if (category === 'website') {
      return paymentType === 'onetime' ? websiteOneTime : websiteMonthly;
    } else {
      return paymentType === 'onetime' ? automationOneTime : automationMonthly;
    }
  };

  const plans = getPlans();

  return (
    <div className="min-h-screen bg-black text-white">
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

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 px-6 py-3 border-2 border-red-600 bg-black text-white text-[0.7rem] font-arcade hover:bg-red-600 transition-colors relative z-10"
        >
          ← BACK TO HOME
        </button>

        <h1 className="text-center mb-12 text-white drop-shadow-[3px_3px_0_#ff0000] relative z-10 text-[clamp(1rem,4vw,2rem)]">
          CHOOSE YOUR POWER LEVEL
        </h1>

        {/* Category Toggle */}
        <div className="flex justify-center mb-6 relative z-10">
          <div className="inline-flex border-[3px] border-red-600 bg-black/80 p-1">
            <button
              onClick={() => setCategory('website')}
              className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
                category === 'website'
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🌐 WEBSITES
            </button>
            <button
              onClick={() => setCategory('automation')}
              className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
                category === 'automation'
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🤖 AUTOMATION
            </button>
          </div>
        </div>

        {/* Payment Type Toggle */}
        <div className="flex justify-center mb-12 relative z-10">
          <div className="inline-flex border-[3px] border-red-600 bg-black/80 p-1">
            <button
              onClick={() => setPaymentType('onetime')}
              className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
                paymentType === 'onetime'
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🎮 ONE-TIME
            </button>
            <button
              onClick={() => setPaymentType('monthly')}
              className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
                paymentType === 'monthly'
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🕹️ MONTHLY
            </button>
          </div>
        </div>

        <p className="text-center mb-4 text-gray-300 text-[0.8rem] relative z-10 max-w-[700px] mx-auto leading-[1.8]">
          {paymentType === 'onetime'
            ? '💰 PAY ONCE. OWN IT FOREVER.'
            : '🔧 WE MAINTAIN, UPDATE & AUTOMATE WHILE YOU SLEEP.'}
        </p>

        {/* Info Box */}
        <div className="max-w-[800px] mx-auto mb-12 relative z-10">
          <div className="p-6 border-[2px] border-red-600/30 bg-black/60">
            <p className="text-[0.65rem] text-gray-400 font-mono leading-[1.8]">
              {category === 'website' ? (
                paymentType === 'onetime' ? (
                  <>
                    <span className="text-red-600">▶ BEST FOR:</span> Portfolio sites • Brands that
                    update on their own • Projects that don't need ongoing changes
                  </>
                ) : (
                  <>
                    <span className="text-red-600">▶ BEST FOR:</span> Businesses that grow fast •
                    Sites that change monthly • Need ongoing maintenance
                  </>
                )
              ) : paymentType === 'onetime' ? (
                <>
                  <span className="text-red-600">▶ BEST FOR:</span> One-time automation setup •
                  Businesses with stable processes • Want to own the system
                </>
              ) : (
                <>
                  <span className="text-red-600">▶ BEST FOR:</span> Evolving workflows • Need
                  ongoing optimization • Want continuous support
                </>
              )}
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto relative z-10 mb-32">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <div className="max-w-[800px] mx-auto relative z-10 mb-8">
          <div className="p-8 border-[3px] border-green-600 bg-green-600/10 shadow-[0_0_30px_rgba(0,255,0,0.3)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-600 animate-pulse-glow" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-600 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-600 animate-pulse-glow" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-600 animate-pulse-glow" />
            
            <div className="text-center relative z-10">
              <div className="text-[3rem] mb-4">🛡️</div>
              <h3 className="text-[1.2rem] text-green-400 mb-4 drop-shadow-[2px_2px_0_#000]">
                30-DAY MONEY-BACK GUARANTEE
              </h3>
              <p className="text-[0.7rem] text-gray-300 leading-[1.8]">
                Not satisfied with your build? Get a full refund within 30 days, no questions asked.
                We're confident you'll love what we create.
              </p>
            </div>
          </div>
        </div>

        {/* Add-Ons Section */}
        <div className="mt-32 relative z-10">
          <h2 className="text-center mb-6 text-white drop-shadow-[3px_3px_0_#00ff00] text-[clamp(0.9rem,3.5vw,1.8rem)]">
            ⚡ POWER-UP YOUR BUILD
          </h2>
          <p className="text-center mb-12 text-gray-300 text-[0.7rem] max-w-[700px] mx-auto leading-[1.8]">
            BOOST ANY PACKAGE WITH THESE ADD-ONS
          </p>
          <AddOnsCarousel />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
