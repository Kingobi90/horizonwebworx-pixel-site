import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const projects = [
  {
    title: 'AI Customer Service Bot',
    client: 'FashionHub Boutique',
    category: 'AI Automation',
    description: 'Automated customer service with intelligent chatbot handling 80% of inquiries 24/7.',
    challenge: 'Small team overwhelmed with repetitive customer questions about sizing, shipping, and returns.',
    solution: 'Deployed AI chatbot trained on their product catalog and FAQ, integrated with their e-commerce platform.',
    results: [
      '80% of inquiries handled automatically',
      '24/7 customer support coverage',
      '60% reduction in support costs',
      '95% customer satisfaction rating'
    ],
    technologies: ['AI/ML', 'Natural Language Processing', 'REST APIs', 'WhatsApp Integration'],
  },
  {
    title: 'Multi-Channel Inventory Sync',
    client: 'RetailMax',
    category: 'Inventory Management',
    description: 'Real-time inventory synchronization across 5 sales channels preventing overselling.',
    challenge: 'Managing inventory across Shopify, Amazon, eBay, Etsy, and physical store led to constant overselling.',
    solution: 'Created centralized inventory management system with real-time sync to all platforms and automated reorder alerts.',
    results: [
      'Unified 5 sales channels seamlessly',
      '99.9% inventory sync accuracy',
      '50% reduction in operational overhead',
      'Zero overselling incidents since launch'
    ],
    technologies: ['Python', 'Redis', 'REST APIs', 'Webhook Management', 'Database Sync'],
  },
  {
    title: 'Automated Invoice Processing',
    client: 'StyleCo Wholesale',
    category: 'Financial Automation',
    description: 'Automated invoice generation, sending, and payment tracking for wholesale operations.',
    challenge: 'Manual invoice creation for 200+ wholesale clients taking 20+ hours per week.',
    solution: 'Built automated system that generates invoices from orders, sends them automatically, and tracks payments.',
    results: [
      '95% reduction in invoice processing time',
      'Zero invoice errors since implementation',
      'Automated payment reminders',
      'Real-time financial reporting'
    ],
    technologies: ['QuickBooks API', 'Email Automation', 'PDF Generation', 'Payment Gateway Integration'],
  },
];

export default function PortfolioPage() {
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
            OUR VICTORIES
          </h1>
          <p className="text-[0.8rem] text-gray-400 max-w-3xl mx-auto">
            REAL RESULTS FOR REAL BUSINESSES
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 border-4 border-white bg-black/80 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 border-2 border-red-600 bg-red-600/20 text-red-600 text-[0.6rem]">
                      {project.category}
                    </span>
                    <span className="text-[0.6rem] text-gray-500">{project.client}</span>
                  </div>
                  
                  <h2 className="text-[1.5rem] text-white mb-4">{project.title}</h2>
                  
                  <p className="text-[0.7rem] text-gray-300 mb-6 leading-[1.8]">
                    {project.description}
                  </p>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h3 className="text-[0.9rem] text-red-600 mb-2">THE CHALLENGE</h3>
                    <p className="text-[0.6rem] text-gray-400 leading-[1.6]">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="text-[0.9rem] text-red-600 mb-2">OUR SOLUTION</h3>
                    <p className="text-[0.6rem] text-gray-400 leading-[1.6]">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-[0.9rem] text-white mb-3">TECH STACK:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border border-white text-white text-[0.5rem]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h3 className="text-[0.9rem] text-green-400 mb-3">KEY RESULTS</h3>
                    <div className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start text-[0.6rem]">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Visual Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[3rem] mb-2">📊</div>
                      <div className="text-[0.6rem] text-gray-500">
                        {project.client} Project
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 border-4 border-red-600 bg-black/80">
          <h2 className="text-[1.5rem] text-white mb-4">
            READY TO TRANSFORM YOUR BUSINESS?
          </h2>
          <p className="text-[0.7rem] text-gray-400 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific challenges and create 
            a custom automation solution that delivers real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-b from-red-600 to-red-900 border-2 border-red-600 text-white text-[0.7rem] font-arcade hover:translate-y-[2px] transition-all"
            >
              🚀 START YOUR PROJECT
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-4 border-2 border-white bg-black text-white text-[0.7rem] font-arcade hover:bg-white hover:text-black transition-all"
            >
              💰 VIEW PRICING
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
