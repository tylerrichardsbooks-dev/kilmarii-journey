import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    quote: "A breathtaking journey into myth and self-discovery. Newton weaves a world that feels both ancient and achingly relevant.",
    author: "Early Reader",
    source: "ARC Review",
    rating: 5,
  },
  {
    quote: "The kind of fantasy that stays with you long after the last page. Kilmarii's journey mirrors our own search for purpose.",
    author: "Book Blogger",
    source: "Fantasy Reviews",
    rating: 5,
  },
  {
    quote: "Beautifully written with prose that flows like the ocean itself. A feminine hero's journey that feels deeply needed.",
    author: "Reader",
    source: "Goodreads",
    rating: 5,
  },
  {
    quote: "Newton has crafted something rare—a fantasy that is both epic in scope and intimate in its emotional truth.",
    author: "Reviewer",
    source: "Book Club Pick",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section 
      id="reviews" 
      ref={ref}
      className="relative bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep section-padding"
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
            Reader Voices
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Reviews
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="card-mythic relative group hover:border-gold-muted/40 transition-colors duration-500"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-warm fill-gold-warm" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="font-display text-lg md:text-xl text-stone-light italic leading-relaxed mb-6">
                "{review.quote}"
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">{review.author}</p>
                  <p className="text-stone-medium text-sm">{review.source}</p>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-4 right-6 font-display text-6xl text-gold-muted/10">
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://www.goodreads.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Leave a Review
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
