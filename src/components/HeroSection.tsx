import { motion } from 'framer-motion';
import heroOcean from '@/assets/hero-ocean.jpg';
import bookCover from '@/assets/book-cover.png';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroOcean} 
          alt="" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/40 to-ocean-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/50 via-transparent to-ocean-deep/50" />
      </div>

      {/* Animated Mist Layer */}
      <div className="absolute inset-0 opacity-30 animate-mist">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-light/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Author Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-mythic text-gold-warm text-sm md:text-base tracking-[0.3em] mb-6"
          >
            Epic Fantasy by
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide mb-8"
          >
            <span className="text-gold-gradient">Lisa Newton</span>
          </motion.h1>

          {/* Gold Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="gold-line mb-10 origin-center"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-body text-lg md:text-xl text-stone-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Myth-rich epic fantasy of awakening, ancient wisdom,<br className="hidden md:block" />
            and the path you were born to walk.
          </motion.p>

          {/* Book Mockup - UPSCALED */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="relative animate-float">
              {/* Book Shadow - larger */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-12 bg-ocean-deep/80 blur-3xl rounded-full" />
              
              {/* Book Cover with 3D Effect - UPSCALED */}
              <div className="relative group">
                <div className="absolute -inset-8 bg-gold-warm/15 blur-3xl rounded-lg transform group-hover:scale-110 transition-transform duration-700" />
                <img 
                  src={bookCover} 
                  alt="Kilmarii: The Wayfinder - Book Cover" 
                  className="relative w-64 md:w-80 lg:w-96 h-auto rounded-sm shadow-gold-glow-lg transform perspective-1000 hover:scale-105 transition-transform duration-500"
                  style={{
                    boxShadow: '12px 12px 40px rgba(0,0,0,0.6), -3px -3px 15px rgba(182,145,72,0.25)'
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <button 
              onClick={() => scrollToSection('#buy')}
              className="btn-primary"
            >
              Buy Now
            </button>
            <button 
              onClick={() => scrollToSection('#about-book')}
              className="btn-secondary"
            >
              Discover the Story
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-stone-medium">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-warm to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
