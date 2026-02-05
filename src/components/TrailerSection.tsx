import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Play } from 'lucide-react';

export default function TrailerSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section 
      id="trailer" 
      ref={ref}
      className="relative bg-ocean-deep section-padding overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ocean-medium/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-mythic text-gold-muted text-sm tracking-[0.3em] mb-4">
            Watch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Book Trailer
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Glowing border frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-muted/30 via-gold-warm/50 to-gold-muted/30 rounded-sm blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Video placeholder */}
            <div className="relative aspect-video bg-ocean-dark rounded-sm overflow-hidden border border-gold-muted/20">
              {/* Placeholder content - replace with actual video embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-ocean-dark to-ocean-deep">
                {/* Play button */}
                <button className="relative group/play mb-6">
                  <div className="absolute inset-0 bg-gold-warm rounded-full blur-xl opacity-30 group-hover/play:opacity-50 transition-opacity" />
                  <div className="relative w-20 h-20 bg-gold-warm/20 border-2 border-gold-warm rounded-full flex items-center justify-center group-hover/play:bg-gold-warm/30 transition-colors">
                    <Play className="w-8 h-8 text-gold-warm ml-1" fill="currentColor" />
                  </div>
                </button>
                
                <p className="text-stone-medium text-sm tracking-wider">
                  Book Trailer Coming Soon
                </p>
              </div>

              {/* When video is available, replace the above with:
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Kilmarii: The Wayfinder - Book Trailer"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-stone-medium text-sm mt-6 italic"
          >
            Experience the world of Kilmarii
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
