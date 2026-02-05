import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ShoppingCart, Shield, BookOpen, Layers } from 'lucide-react';
import bookCover from '@/assets/book-cover.png';

const retailers = [
  { name: 'Amazon', url: '#', icon: '📦' },
  { name: 'Barnes & Noble', url: '#', icon: '📚' },
  { name: 'Apple Books', url: '#', icon: '🍎' },
  { name: 'Kobo', url: '#', icon: '📖' },
];

const trustIndicators = [
  { icon: BookOpen, text: 'Multiple Formats Available' },
  { icon: Shield, text: 'Secure Purchase' },
  { icon: Layers, text: 'Start with Book One' },
];

export default function BuySection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section 
      id="buy" 
      ref={ref}
      className="relative bg-ocean-dark section-padding overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-warm/5 rounded-full blur-3xl" />
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
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Buy Now
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Book Display - UPSCALED */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-12 bg-gold-warm/15 rounded-full blur-3xl animate-glow-pulse" />
              <img 
                src={bookCover} 
                alt="Kilmarii: The Wayfinder" 
                className="relative w-72 md:w-80 lg:w-96 h-auto rounded-sm shadow-gold-glow-lg"
                style={{
                  boxShadow: '10px 10px 40px rgba(0,0,0,0.5), -3px -3px 15px rgba(182,145,72,0.2)'
                }}
              />
            </div>
          </motion.div>

          {/* Purchase Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl text-foreground mb-2">
              Kilmarii: The Wayfinder
            </h3>
            <p className="text-gold-warm mb-8">Book One of the Kilmarii Series</p>

            {/* Retailer Buttons */}
            <div className="space-y-4 mb-10">
              {retailers.map((retailer, i) => (
                <motion.a
                  key={retailer.name}
                  href={retailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-between w-full p-4 bg-secondary/50 border border-gold-muted/20 rounded-sm hover:border-gold-warm/50 hover:bg-secondary transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{retailer.icon}</span>
                    <span className="text-foreground font-medium">{retailer.name}</span>
                  </div>
                  <ShoppingCart className="w-5 h-5 text-gold-muted group-hover:text-gold-warm transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              {trustIndicators.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-stone-medium text-sm">
                  <Icon className="w-4 h-4 text-gold-muted" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
