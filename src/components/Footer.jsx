export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black border-t-4 border-red-600 relative overflow-hidden">
      {/* Subtle scan pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none animate-pattern-shift"
        style={{
          background:
            'repeating-linear-gradient(45deg, #fff 0px, #fff 6px, transparent 6px, transparent 16px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3.5 h-3.5 bg-red-600 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.6)]" />
            <h4 className="text-[0.9rem] drop-shadow-[2px_2px_0_#330000]">HORIZONWEBWORX</h4>
          </div>
          <p className="text-[0.65rem] text-gray-400 leading-[1.8]">
            Level up your digital presence. Design • SEO • Local • Automations.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.9rem] mb-4 drop-shadow-[2px_2px_0_#330000]">Contact</h4>
          <p className="text-[0.65rem] text-gray-400 leading-[1.8]">
            Email:{' '}
            <a
              href="mailto:admin@horizonwebworx.com"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              admin@horizonwebworx.com
            </a>
            <br />
            Phone:{' '}
            <a
              href="tel:+14385316242"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              +1 (438) 531-6242
            </a>
            <br />
            Hours: Mon-Fri 9AM-6PM EST
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[0.9rem] mb-4 drop-shadow-[2px_2px_0_#330000]">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="text-[0.65rem] text-gray-400 hover:text-red-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.65rem] text-gray-400 hover:text-red-600 transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.65rem] text-gray-400 hover:text-red-600 transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.65rem] text-gray-400 hover:text-red-600 transition-colors"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="text-[0.9rem] mb-4 drop-shadow-[2px_2px_0_#330000]">Follow</h4>
          <p className="text-[0.65rem] text-gray-400 leading-[1.8]">
            <a
              href="https://www.instagram.com/horizonwebworx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              Instagram
            </a>{' '}
            ·{' '}
            <a
              href="https://www.facebook.com/profile.php?id=61564575311106"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              Facebook
            </a>{' '}
            ·{' '}
            <a
              href="https://www.linkedin.com/company/horizon-webworx/about/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-dashed border-white/15 px-8 py-6 text-center text-[0.6rem] text-gray-500">
        <div>© {currentYear} HorizonWebWorX — All rights reserved.</div>
        <div className="flex gap-4 flex-wrap justify-center mt-2">
          <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
            Terms
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
