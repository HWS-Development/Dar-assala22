import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, User, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageOpen && !event.target.closest('.language-selector')) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  const navLinks = [
    { key: 'accommodation', href: '/accommodation', isRoute: true },
    { key: 'dining', href: '/dining', isRoute: true },
    { key: 'exploringMedina', href: '#experiences', isRoute: false },
    { key: 'meetingsEvents', href: '/meetings-events', isRoute: true },
    { key: 'offers', href: '#', isRoute: false },
    { key: 'experiences', href: '/experiences', isRoute: true },
    { key: 'gallery', href: '/gallery', isRoute: true },
    { key: 'contact', href: '/contact', isRoute: true },
  ];

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        'relative z-50 transition-all duration-300',
        isHovered
          ? 'bg-white'
          : 'bg-gradient-to-r from-gray-900 via-gray-800 to-black'
      )}
    >
      <div className="max-w-[1920px] mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-20 relative">
          {/* Left: Hamburger Menu */}
          <div className="flex items-center">
            <button
              className={clsx(
                'lg:hidden transition-colors',
                isHovered ? 'text-black' : 'text-white'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-3 z-10">
            {/* Logo Image */}
            <Link to="/" className="relative flex items-center">
              <img 
                src="/image/logo.png"
                alt="Logo"
                className="h-12 md:h-16 w-auto object-contain max-w-[200px]"
                style={{ display: 'block' }}
              />
            </Link>
            {/* Logo Text */}
            <div className="hidden md:block">
              <div 
                className={clsx(
                  'text-[10px] uppercase tracking-wider leading-tight transition-colors',
                  isHovered ? 'text-black' : 'text-white'
                )}
                style={{ fontFamily: "Jost, sans-serif" }}
              >
BEYOND AND ABOVE              </div>
              <div 
                className={clsx(
                  'text-base font-normal leading-tight transition-colors',
                  isHovered ? 'text-black' : 'text-white'
                )}
                style={{ fontFamily: "Jost, sans-serif" }}
              >
               
              </div>
              <div 
                className={clsx(
                  'text-[10px] uppercase tracking-wider transition-colors',
                  isHovered ? 'text-black' : 'text-white'
                )}
                style={{ fontFamily: "Jost, sans-serif" }}
              >
              </div>
            </div>
          </div>

          {/* Right: Reservation Button, User Icon, Language Selector */}
          <div className="flex items-center space-x-4">
            {/* Reservation Button */}
            <button 
              className={clsx(
                'border px-4 py-2 text-sm transition-colors',
                isHovered
                  ? 'border-black text-black hover:bg-black/10'
                  : 'border-white text-white hover:bg-white/10'
              )}
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t('navbar.reserver')}
            </button>

            {/* User Icon */}
            <button className={clsx(
              'transition-colors',
              isHovered ? 'text-black' : 'text-white'
            )}>
              <User size={20} />
            </button>

            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={clsx(
                  'flex items-center gap-1 text-sm transition-colors',
                  isHovered ? 'text-black' : 'text-white'
                )}
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {i18n.language.toUpperCase()}
                <ChevronDown size={16} />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-black/20 rounded shadow-lg min-w-[80px] z-50">
                  <button
                    onClick={() => changeLanguage('fr')}
                    className="block w-full text-left px-4 py-2 text-black text-sm hover:bg-gray-100 transition-colors"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-black text-sm hover:bg-gray-100 transition-colors"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className={clsx(
          'hidden lg:flex items-center justify-center space-x-8 py-4 border-t transition-colors',
          isHovered ? 'border-black/20' : 'border-white/10'
        )}>
          {navLinks.map((link) => {
            const linkClassName = clsx(
              'text-sm font-medium transition-colors relative group',
              isHovered ? 'text-black' : 'text-white'
            );
            const underlineClassName = clsx(
              'absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full',
              isHovered ? 'bg-black' : 'bg-[#cda73c]'
            );

            if (link.isRoute) {
              return (
                <Link
                  key={link.key}
                  to={link.href}
                  className={linkClassName}
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {t(`navbar.${link.key}`)}
                  <span className={underlineClassName}></span>
                </Link>
              );
            }

            return (
              <a
                key={link.key}
                href={link.href}
                className={linkClassName}
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {t(`navbar.${link.key}`)}
                <span className={underlineClassName}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={clsx(
            'lg:hidden pb-4 border-t transition-colors',
            isHovered ? 'border-black/20' : 'border-white/20'
          )}>
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => {
                const linkClassName = clsx(
                  'text-sm font-medium transition-colors',
                  isHovered ? 'text-black' : 'text-white'
                );

                if (link.isRoute) {
                  return (
                    <Link
                      key={link.key}
                      to={link.href}
                      className={linkClassName}
                      style={{ fontFamily: "Jost, sans-serif" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`navbar.${link.key}`)}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className={linkClassName}
                    style={{ fontFamily: "Jost, sans-serif" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`navbar.${link.key}`)}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
