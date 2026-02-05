import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Download, BookOpen, User, FileText, Camera, Sparkles } from 'lucide-react';
import authorPhoto from '@/assets/author-photo.jpg';
import bookCover from '@/assets/book-cover.png';

export default function MediaKitSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section 
      id="media-kit" 
      ref={ref}
      className="relative bg-gradient-to-b from-ocean-dark to-ocean-deep section-padding overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold-warm)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold-warm" />
            <p className="text-mythic text-gold-muted text-sm tracking-[0.3em]">
              For Press & Media
            </p>
            <Sparkles className="w-4 h-4 text-gold-warm" />
          </motion.div>
          
          <h2 className="font-decorative text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Author Media Kit
          </h2>
          
          <p className="text-stone-light max-w-xl mx-auto mt-6">
            Everything you need for press coverage, interviews, and features about Lisa Newton and the Kilmarii series.
          </p>
          
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        {/* Single Unified Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-mythic max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column - Visual Assets */}
            <div className="space-y-8">
              {/* Author Photo */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-5 h-5 text-gold-warm" />
                  <h3 className="font-display text-lg text-foreground">Author Photo</h3>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img 
                    src={authorPhoto} 
                    alt="Lisa Newton" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Book Cover */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-gold-warm" />
                  <h3 className="font-display text-lg text-foreground">Book Cover</h3>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary/30 flex items-center justify-center p-6">
                  <img 
                    src={bookCover} 
                    alt="Kilmarii: The Wayfinder" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 shadow-gold-glow"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Text Information */}
            <div className="space-y-8">
              {/* Book Details */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-gold-warm" />
                  <h3 className="font-display text-lg text-foreground">Press Information</h3>
                </div>
                
                <div className="space-y-5 text-sm">
                  <div className="pb-4 border-b border-border">
                    <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Title</p>
                    <p className="text-stone-light text-base font-display">Kilmarii: The Wayfinder</p>
                    <p className="text-gold-warm text-sm">Book One of the Kilmarii Series</p>
                  </div>
                  
                  <div className="pb-4 border-b border-border">
                    <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Author</p>
                    <p className="text-stone-light text-base">Lisa Newton</p>
                  </div>
                  
                  <div className="pb-4 border-b border-border">
                    <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Genre</p>
                    <p className="text-stone-light">Epic Fantasy / Mythological Fantasy</p>
                  </div>
                  
                  <div className="pb-4 border-b border-border">
                    <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Publisher</p>
                    <p className="text-stone-light">Crystal Heart Imprints</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">ISBN</p>
                      <p className="text-stone-light text-sm">978-1-945567-55-1</p>
                    </div>
                    <div>
                      <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Formats</p>
                      <p className="text-stone-light text-sm">eBook, Paperback, Hardcover</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gold-muted uppercase tracking-wider text-xs mb-2">Logline</p>
                    <p className="text-stone-light italic leading-relaxed">
                      "A story about remembering who you are in a world that has forgotten its truth."
                    </p>
                  </div>
                </div>
              </div>

              {/* Author Bio Summary */}
              <div className="p-5 bg-secondary/30 rounded-sm border border-gold-muted/10">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-5 h-5 text-gold-warm" />
                  <h4 className="font-display text-base text-foreground">About Lisa Newton</h4>
                </div>
                <p className="text-stone-light text-sm leading-relaxed">
                  Lisa Newton is an epic fantasy author whose work explores myth, sacred geography, and the inner landscapes of identity and transformation. Her debut novel draws on archetypal symbolism and feminine power to create immersive worlds of ancient wisdom.
                </p>
              </div>

              {/* Download Button */}
              <motion.button 
                className="w-full btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Complete Media Kit
              </motion.button>
              
              <p className="text-center text-stone-medium text-xs">
                Includes high-resolution images, full biography, and press materials
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
