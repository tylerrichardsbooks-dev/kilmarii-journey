import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import bookCover from '@/assets/book-cover.png';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-author', label: 'About the Author' },
  { href: '#about-book', label: 'About the Book' },
  { href: '#media-kit', label: 'Media Kit' },
  { href: '#trailer', label: 'Book Trailer' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#buy', label: 'Buy Now' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Epic parallax and fade animations
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const coverScale = useTransform(scrollY, [0, 300], [1.2, 1]);
  const coverOpacity = useTransform(scrollY, [0, 200], [0.15, 0.08]);
  const shimmerX = useTransform(scrollY, [0, 500], [-100, 100]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
      >
        {/* Epic Background with Book Cover */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: headerOpacity }}
        >
          {/* Layered gradient base */}
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-dark to-ocean-deep" />
          
          {/* Book cover background with parallax */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ scale: coverScale, opacity: coverOpacity }}
          >
            <img 
              src={bookCover} 
              alt="" 
              className="h-[200%] w-auto object-cover blur-sm"
              style={{ 
                maskImage: 'radial-gradient(ellipse 80% 100% at 50% 50%, black 20%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 100% at 50% 50%, black 20%, transparent 70%)'
              }}
            />
          </motion.div>
          
          {/* Animated shimmer overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-warm/5 to-transparent"
            style={{ x: shimmerX }}
          />
          
          {/* Top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-warm/40 to-transparent" />
          
          {/* Bottom edge with animated glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px">
            <motion.div 
              className="h-full w-full bg-gradient-to-r from-transparent via-gold-warm/60 to-transparent"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scaleX: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
          
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 via-transparent to-ocean-deep/50" />
        </motion.div>

        <nav className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo with epic animation */}
            <motion.a 
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Glow effect on hover */}
              <motion.span 
                className="absolute inset-0 bg-gold-warm/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="relative font-decorative text-xl tracking-[0.2em] text-gold-warm group-hover:text-gold-glow transition-colors duration-300"
                style={{
                  textShadow: scrolled ? '0 0 20px hsla(42, 60%, 50%, 0.3)' : 'none'
                }}
              >
                LISA NEWTON
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="relative text-sm tracking-wider text-stone-light hover:text-gold-warm transition-colors duration-300 group py-2"
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span className="absolute -bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gold-warm to-gold-glow transition-all duration-300 group-hover:w-full" />
                    {/* Glow dot on hover */}
                    <motion.span 
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-gold-warm rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative text-stone-light hover:text-gold-warm transition-colors p-2"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </nav>
        
        {/* Decorative bottom border with animation */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-gold-warm to-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% 100%' }}
          />
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop with book cover */}
            <motion.div 
              className="absolute inset-0 bg-ocean-deep/98 backdrop-blur-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* Subtle book cover background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img 
                  src={bookCover} 
                  alt="" 
                  className="h-full w-auto object-cover blur-md"
                />
              </div>
              {/* Radial vignette */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-ocean-deep" />
            </motion.div>
            
            <nav className="relative pt-28 px-8">
              <ul className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="block font-display text-2xl text-stone-light hover:text-gold-warm transition-colors relative group"
                    >
                      <motion.span
                        className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold-warm rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              {/* Decorative element */}
              <motion.div 
                className="mt-12 gold-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
