import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
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
    // Load Cal.com booking script
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // Initialize Cal.com with a slight delay to ensure script loads
    const timer = setTimeout(() => {
      if (window.Cal) {
        window.Cal('init', 'horizonwebworx', { origin: 'https://app.cal.com' });

        window.Cal.ns.horizonwebworx('inline', {
          elementOrSelector: '#my-cal-inline-horizonwebworx',
          config: { layout: 'month_view' },
          calLink: 'horizon-webworx-knoryb/horizonwebworx',
        });

        window.Cal.ns.horizonwebworx('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-center px-8 py-32 bg-white text-black relative overflow-hidden animate-section-fade-in"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 animate-bg-zoom"
        style={{
          backgroundImage: 'url(/images/bg1.png)',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/80" />
      
      {/* Animated pattern background */}
      <div
        className="absolute w-full h-full animate-pattern-shift"
        style={{
          background:
            'repeating-linear-gradient(45deg, transparent 0px, transparent 40px, rgba(0, 0, 0, 0.02) 40px, rgba(0, 0, 0, 0.02) 80px), repeating-linear-gradient(-45deg, transparent 0px, transparent 40px, rgba(0, 0, 0, 0.02) 40px, rgba(0, 0, 0, 0.02) 80px)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div
          className={`p-8 my-8 border-4 border-black shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.05)] bg-white/95 transition-all duration-800 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            animation: isVisible ? 'box-pulse 3s ease-in-out infinite' : 'none',
          }}
        >
          <h1 className="text-black drop-shadow-[3px_3px_0_#ff0000] text-[clamp(1rem,4vw,2rem)] mb-8 text-center">
            READY TO PLAY?
          </h1>
          <p className="text-[1.5rem] text-red-600 drop-shadow-[2px_2px_0_#000] animate-blink my-8 text-center">
            INSERT COIN TO CONTINUE
          </p>
          <div className="text-center mb-8">
            <a
              href="#contact"
              className="inline-block px-8 py-6 my-4 bg-gradient-to-b from-red-600 to-red-900 border-[3px] border-red-600 text-white no-underline text-[0.8rem] shadow-[0_5px_0_#550000,0_0_20px_rgba(255,0,0,0.5)] transition-all duration-100 relative cursor-pointer hover:translate-y-[3px] hover:shadow-[0_2px_0_#550000,0_0_30px_rgba(255,0,0,0.8)]"
            >
              🚀 LEVEL UP YOUR BUSINESS
            </a>
          </div>

          {/* Booking Calendar */}
          <div className="mt-8">
            <h2 className="text-[1.2rem] text-black mb-6 drop-shadow-[2px_2px_0_#ff0000] text-center">
              📅 BOOK A MEETING
            </h2>
            <div
              id="my-cal-inline-horizonwebworx"
              style={{
                width: '100%',
                minHeight: '600px',
                height: 'auto',
                overflow: 'visible',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
