import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const oneTimeBuilds = [
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

export default function HomePricingSection() {
  const navigate = useNavigate();
  const [pricingType, setPricingType] = useState('onetime');
  const plans = pricingType === 'onetime' ? oneTimeBuilds : monthlyPlans;

  const handleSelectPlan = (plan) => {
    navigate('/contact', {
      state: {
        service: plan.name,
        price: plan.price,
      },
    });
  };

  return (
    <section id="pricing" className="bg-black relative px-8 py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg1.png)',
          backgroundSize: 'cover',
        }}
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

      <div className="max-w-[1200px] mx-auto relative z-10">
        <h1 className="text-center mb-6 text-white drop-shadow-[3px_3px_0_#ff0000] text-[clamp(1rem,4vw,2rem)]">
          CHOOSE YOUR POWER LEVEL
        </h1>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-[3px] border-red-600 bg-black/80 p-1">
            <button
              onClick={() => setPricingType('onetime')}
              className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
                pricingType === 'onetime'
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🎮 ONE-TIME BUILDS
            </button>
            <button
              onClick={() => setPricingType('monthly')}
              className={`px-8 py-3 text-[0.8rem] font-mono transition-all duration-300 ${
                pricingType === 'monthly'
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🕹️ MONTHLY PLANS
            </button>
          </div>
        </div>

        <p className="text-center mb-4 text-gray-300 text-[0.8rem] max-w-[700px] mx-auto leading-[1.8]">
          {pricingType === 'onetime'
            ? '💰 PAY ONCE. OWN IT FOREVER.'
            : '🔧 WE MAINTAIN, UPDATE & AUTOMATE WHILE YOU SLEEP.'}
        </p>

        {/* Info Box */}
        <div className="max-w-[800px] mx-auto mb-12">
          <div className="p-6 border-[2px] border-red-600/30 bg-black/60">
            <p className="text-[0.65rem] text-gray-400 font-mono leading-[1.8]">
              {pricingType === 'onetime' ? (
                <>
                  <span className="text-red-600">▶ BEST FOR:</span> Portfolio sites • Brands that
                  update on their own • Projects that don't need ongoing changes
                </>
              ) : (
                <>
                  <span className="text-red-600">▶ BEST FOR:</span> Businesses that grow fast •
                  Sites that change monthly • Need automation or AI features
                </>
              )}
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 border-[3px] ${
                plan.popular ? 'border-red-600 scale-105' : 'border-white'
              } bg-black/80 shadow-[0_0_20px_rgba(255,0,0,0.3)] relative overflow-hidden transition-all duration-300 hover:scale-110 hover:border-red-600 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)]`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[0.5rem] px-3 py-1 font-mono animate-blink">
                  POPULAR
                </div>
              )}

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
                onClick={() => handleSelectPlan(plan)}
                className="block w-full text-center px-6 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.7rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 relative cursor-pointer hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* View All Pricing Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/pricing')}
            className="inline-block px-8 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.7rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
          >
            VIEW ALL PRICING OPTIONS →
          </button>
        </div>
      </div>
    </section>
  );
}
