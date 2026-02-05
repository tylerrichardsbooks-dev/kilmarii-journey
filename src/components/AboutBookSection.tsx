import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import bookCover from '@/assets/book-cover.png';

const themes = [
  'Identity & Destiny',
  'Ancient Knowledge',
  'Feminine Strength',
  'Sacred Geography',
  'Transformation Through Journey',
];

const seriesBooks = [
  { title: 'Book 1: The Wayfinder', status: 'Available Now' },
  { title: 'Book 2', status: 'Coming Soon' },
  { title: 'Book 3', status: 'Coming Soon' },
];

export default function AboutBookSection() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about-book" 
      ref={ref}
      className="relative bg-ocean-dark section-padding overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="compass-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-warm" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-gold-warm" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-gold-warm" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#compass-pattern)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-mythic text-gold-muted text-sm tracking-[0.3em] mb-4">
            The Journey Begins
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Kilmarii: The Wayfinder
          </h2>
          <p className="text-gold-warm mt-4 tracking-wider">Book One</p>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Book Cover - UPSCALED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              {/* Glow effect - enhanced */}
              <div className="absolute -inset-16 bg-gold-warm/15 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
              
              {/* Book with shadow - UPSCALED */}
              <div className="relative">
                <img 
                  src={bookCover} 
                  alt="Kilmarii: The Wayfinder - Book Cover" 
                  className="w-80 md:w-[420px] lg:w-[480px] h-auto rounded-sm shadow-gold-glow-lg"
                  loading="lazy"
                  style={{
                    boxShadow: '12px 12px 50px rgba(0,0,0,0.5), -4px -4px 20px rgba(182,145,72,0.2)'
                  }}
                />
                {/* Spine highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-gold-muted/40 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Book Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Poetic Description */}
            <blockquote className="font-display text-xl md:text-2xl text-stone-light italic leading-relaxed border-l-2 border-gold-muted pl-6">
              "In a world where land, sea, and spirit are deeply interconnected, 
              one young woman must reclaim the ancient gift of Wayfinding—or watch 
              her world fall into shadow."
            </blockquote>

            <p className="text-stone-light leading-relaxed">
              Kilmarii lives in a world shaped by elemental forces and forgotten truths. 
              When visions begin to surface and instincts she cannot explain set her apart, 
              she is drawn into a legacy that has been waiting for generations.
            </p>

            <p className="text-stone-light leading-relaxed">
              Her journey takes her across shifting landscapes—coastal realms shaped by 
              memory, ancient territories altered by time, and sacred spaces where history 
              whispers through stone and water.
            </p>

            {/* Themes */}
            <div className="pt-4">
              <p className="text-mythic text-gold-muted text-xs tracking-[0.2em] mb-4">
                Themes
              </p>
              <div className="flex flex-wrap gap-3">
                {themes.map((theme, i) => (
                  <motion.span
                    key={theme}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="px-4 py-2 text-sm text-stone-light bg-secondary/50 border border-gold-muted/20 rounded-sm"
                  >
                    {theme}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Series Status */}
            <div className="pt-4">
              <p className="text-mythic text-gold-muted text-xs tracking-[0.2em] mb-4">
                The Kilmarii Series
              </p>
              <div className="space-y-3">
                {seriesBooks.map((book, i) => (
                  <div 
                    key={book.title}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className={`font-display text-lg ${i === 0 ? 'text-gold-warm' : 'text-stone-medium'}`}>
                      {book.title}
                    </span>
                    <span className={`text-sm ${i === 0 ? 'text-gold-warm' : 'text-stone-medium'}`}>
                      {book.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase CTAs */}
            <div className="pt-6 flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('#buy')}
                className="btn-primary"
              >
                Buy eBook
              </button>
              <button 
                onClick={() => scrollToSection('#buy')}
                className="btn-secondary"
              >
                Buy Paperback
              </button>
              <button 
                onClick={() => scrollToSection('#buy')}
                className="btn-secondary"
              >
                Buy Hardcover
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
