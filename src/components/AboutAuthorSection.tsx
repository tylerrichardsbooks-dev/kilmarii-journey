import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ChevronDown, ChevronUp } from 'lucide-react';
import authorPhoto from '@/assets/author-photo.jpg';

export default function AboutAuthorSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [expanded, setExpanded] = useState(false);

  return (
    <section 
      id="about-author" 
      ref={ref}
      className="relative bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep section-padding overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(42,60%,50%)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Author Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Gold border frame */}
              <div className="absolute -inset-4 border border-gold-muted/30 rounded-sm" />
              <div className="absolute -inset-8 border border-gold-muted/10 rounded-sm" />
              
              {/* Photo */}
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src={authorPhoto} 
                  alt="Lisa Newton, Author" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/40 to-transparent" />
              </div>
              
              {/* Decorative gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold-warm" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold-warm" />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-mythic text-gold-muted text-sm tracking-[0.3em] mb-4">
              About the Author
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Lisa Newton
            </h2>
            
            <div className="gold-line mb-8" />
            
            <div className="space-y-6 text-stone-light leading-relaxed">
              <p>
                Lisa Newton writes myth-rich epic fantasy that explores the sacred geography of the soul. 
                Her stories delve into themes of identity, inner calling, and the ancient wisdom that 
                whispers through land and sea.
              </p>
              
              <p>
                Drawing from deep wells of mythology and spiritual symbolism, Lisa crafts worlds where 
                feminine power emerges not through force, but through perception, intuition, and 
                the courage to walk paths others cannot see.
              </p>
              
              <p>
                <em className="text-gold-muted">Kilmarii: The Wayfinder</em> is the first book in her 
                epic fantasy series—a story of awakening, ancestral memory, and transformation through 
                journey.
              </p>
            </div>

            {/* Expandable "Why I Wrote Kilmarii" */}
            <div className="mt-10">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-3 text-gold-warm hover:text-gold-glow transition-colors group"
              >
                <span className="font-display text-lg italic">Why I Wrote Kilmarii</span>
                {expanded ? (
                  <ChevronUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-[2px] transition-transform" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: expanded ? 'auto' : 0,
                  opacity: expanded ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-4 text-stone-light leading-relaxed">
                  <p>
                    Kilmarii was born from a question that haunted me: <em>What if the path we were 
                    meant to walk has been waiting for us all along, hidden in plain sight?</em>
                  </p>
                  <p>
                    I wanted to write a hero's journey that felt different—one where power comes from 
                    listening, not conquering. Where the feminine isn't an afterthought, but the 
                    foundation. Where the land itself remembers what we have forgotten.
                  </p>
                  <p>
                    This story is for everyone who has ever felt called to something greater, yet 
                    doubted their ability to answer.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
