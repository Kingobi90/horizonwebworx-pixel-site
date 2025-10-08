import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLang, changeLanguage, t } = useLanguage();

  const languages = {
    EN: 'English',
    FR: 'Français',
    ES: 'Español',
    ZH: '中文',
  };

  const menuItems = [
    { href: '#services', label: t('services') },
    { href: '#about', label: t('about') },
    { href: '#portfolio', label: t('portfolio') },
    { href: '#pricing', label: t('pricing') },
    { href: '#blog', label: t('blog') },
    { href: '#contact', label: t('contact') },
  ];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] px-4 md:px-8 py-4 w-[95%] md:max-w-[90%] flex items-center justify-between gap-4 border-4 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.5),inset_0_0_20px_rgba(255,0,0,0.1)] bg-black/90 backdrop-blur-sm animate-nav-float">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex-shrink-0 animate-pulse-glow" />
          <span className="text-[0.5rem] md:text-xl text-white font-arcade drop-shadow-[3px_3px_0_#ff0000,-1px_-1px_0_#888] hidden sm:block">
            HORIZONWEBWORX
          </span>
          <span className="text-[0.5rem] text-white font-arcade drop-shadow-[3px_3px_0_#ff0000,-1px_-1px_0_#888] sm:hidden">
            HWX
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-[0.6rem]">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-red-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Selector & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-3 py-2 border-2 border-red-600 bg-black text-white text-[0.6rem] hover:bg-red-600 transition-colors"
            >
              {currentLang} ▼
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-black border-2 border-red-600 min-w-[120px] z-50">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => handleLanguageChange(code)}
                    className={`block w-full text-left px-4 py-2 text-[0.6rem] ${
                      currentLang === code
                        ? 'bg-red-600 text-white'
                        : 'text-white hover:bg-red-600/30'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden px-3 py-2 border-2 border-red-600 bg-black text-white text-[0.6rem] hover:bg-red-600 transition-colors"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[999] w-[95%] md:max-w-[90%] lg:hidden border-4 border-red-600 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-white text-[0.7rem] border-b-2 border-red-600/30 hover:bg-red-600/20 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
