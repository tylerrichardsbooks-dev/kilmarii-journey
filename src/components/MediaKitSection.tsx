import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Download, BookOpen, User } from 'lucide-react';
import authorPhoto from '@/assets/author-photo.jpg';
import bookCover from '@/assets/book-cover.png';

export default function MediaKitSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section 
      id="media-kit" 
      ref={ref}
      className="relative bg-gradient-to-b from-ocean-dark to-ocean-deep section-padding"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-mythic text-gold-muted text-sm tracking-[0.3em] mb-4">
            For Press & Media
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Media Kit
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Author Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-mythic group"
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-gold-warm" />
              <h3 className="font-display text-xl text-foreground">Author Photo</h3>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
              <img 
                src={authorPhoto} 
                alt="Lisa Newton" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <button className="w-full btn-secondary text-sm">
              <Download className="w-4 h-4 mr-2" />
              Download High-Res
            </button>
          </motion.div>

          {/* Book Cover Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-mythic group"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-gold-warm" />
              <h3 className="font-display text-xl text-foreground">Book Cover</h3>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-secondary/30 flex items-center justify-center">
              <img 
                src={bookCover} 
                alt="Kilmarii: The Wayfinder" 
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <button className="w-full btn-secondary text-sm">
              <Download className="w-4 h-4 mr-2" />
              Download High-Res
            </button>
          </motion.div>

          {/* Book Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-mythic md:col-span-2 lg:col-span-1"
          >
            <h3 className="font-display text-xl text-foreground mb-6">Book Details</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Title</p>
                <p className="text-stone-light">Kilmarii: The Wayfinder (Book 1)</p>
              </div>
              
              <div>
                <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Author</p>
                <p className="text-stone-light">Lisa Newton</p>
              </div>
              
              <div>
                <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Genre</p>
                <p className="text-stone-light">Epic Fantasy / Mythological Fantasy</p>
              </div>
              
              <div>
                <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Publisher</p>
                <p className="text-stone-light">Crystal Heart Imprints</p>
              </div>
              
              <div>
                <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">ISBN</p>
                <p className="text-stone-light">978-1-945567-55-1</p>
              </div>
              
              <div>
                <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Formats</p>
                <p className="text-stone-light">eBook, Paperback, Hardcover</p>
              </div>
              
              <div>
                <p className="text-gold-muted uppercase tracking-wider text-xs mb-1">Logline</p>
                <p className="text-stone-light italic">
                  "A story about remembering who you are in a world that has forgotten its truth."
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full btn-primary">
                <Download className="w-4 h-4 mr-2" />
                Download Full Media Kit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
