import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState('');
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

  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    const plan = params.get('plan');
    const price = params.get('price');

    // Build prefilled message
    let message = '';
    if (service) {
      message = `I'm interested in ${service}.`;
    } else if (plan && price) {
      message = `I'm interested in the ${plan} (${price}). Please send me more details.`;
    }

    setPrefilledMessage(message);
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-black relative px-8 py-32 overflow-hidden animate-section-fade-in"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url(/images/bg2.png)',
          backgroundSize: 'cover',
        }}
        loading="lazy"
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
          READY TO LEVEL UP?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
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
                SEND MESSAGE
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-[0.6rem] text-gray-400 font-mono mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/80 border-[2px] border-white text-white text-[0.7rem] font-mono focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="PLAYER NAME"
                  />
                </div>

                <div>
                  <label className="block text-[0.6rem] text-gray-400 font-mono mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/80 border-[2px] border-white text-white text-[0.7rem] font-mono focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>

                <div>
                  <label className="block text-[0.6rem] text-gray-400 font-mono mb-2">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-black/80 border-[2px] border-white text-white text-[0.7rem] font-mono focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-[0.6rem] text-gray-400 font-mono mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-black/80 border-[2px] border-white text-white text-[0.7rem] font-mono focus:border-red-600 focus:outline-none transition-colors resize-none"
                    placeholder="YOUR QUEST..."
                    value={prefilledMessage}
                    onChange={(e) => setPrefilledMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white text-[0.8rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
                >
                  ▶ SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-6">
              {/* Email */}
              <div className="p-6 border-[3px] border-white bg-black/60 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:scale-105">
                <div className="flex items-start gap-4">
                  <span className="text-3xl animate-icon-bounce">📧</span>
                  <div>
                    <h3 className="text-[0.9rem] text-white mb-2">EMAIL</h3>
                    <a
                      href="mailto:admin@horizonwebworx.com"
                      className="text-[0.7rem] text-red-600 font-mono hover:text-white transition-colors"
                    >
                      admin@horizonwebworx.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 border-[3px] border-white bg-black/60 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:scale-105">
                <div className="flex items-start gap-4">
                  <span className="text-3xl animate-icon-bounce">📞</span>
                  <div>
                    <h3 className="text-[0.9rem] text-white mb-2">PHONE</h3>
                    <a
                      href="tel:+14385316242"
                      className="text-[0.7rem] text-red-600 font-mono hover:text-white transition-colors"
                    >
                      +1 (438) 531-6242
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 border-[3px] border-white bg-black/60 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:scale-105">
                <div className="flex items-start gap-4">
                  <span className="text-3xl animate-icon-bounce">⏰</span>
                  <div>
                    <h3 className="text-[0.9rem] text-white mb-2">
                      BUSINESS HOURS
                    </h3>
                    <p className="text-[0.7rem] text-gray-400 font-mono">
                      MON-FRI: 9AM - 6PM EST
                      <br />
                      SAT-SUN: CLOSED
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 border-[3px] border-red-600 bg-black/60 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                <div className="flex items-start gap-4">
                  <span className="text-3xl animate-icon-bounce">⚡</span>
                  <div>
                    <h3 className="text-[0.9rem] text-red-600 mb-2">
                      FAST RESPONSE
                    </h3>
                    <p className="text-[0.7rem] text-gray-400 font-mono">
                      We typically respond within 24 hours on business days.
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
