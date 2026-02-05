import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-deep border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl tracking-widest text-gold-warm"
          >
            LISA NEWTON
          </motion.div>

          {/* Tagline */}
          <p className="text-stone-medium text-sm text-center">
            "A story about remembering who you are in a world that has forgotten its truth."
          </p>

          {/* Copyright */}
          <p className="text-stone-medium text-sm">
            © {currentYear} Lisa Newton. All rights reserved.
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex justify-center">
            <div className="gold-line opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
