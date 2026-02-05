import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Send, Instagram, Facebook, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. Lisa will respond soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Path",
      description: "You've joined Lisa Newton's journey. Check your inbox soon.",
    });
    setNewsletterEmail('');
  };

  return (
    <section 
      id="contact" 
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
            Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Contact
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl text-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-stone-light mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-gold-muted/20 rounded-sm text-foreground placeholder:text-stone-medium focus:outline-none focus:border-gold-warm transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-stone-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-gold-muted/20 rounded-sm text-foreground placeholder:text-stone-medium focus:outline-none focus:border-gold-warm transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-stone-light mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-gold-muted/20 rounded-sm text-foreground placeholder:text-stone-medium focus:outline-none focus:border-gold-warm transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            {/* Newsletter */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">
                Enter the Path
              </h3>
              <p className="text-stone-light mb-6">
                Join Lisa's journey. Receive updates on new releases, exclusive content, 
                and insights into the world of Kilmarii.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-secondary/50 border border-gold-muted/20 rounded-sm text-foreground placeholder:text-stone-medium focus:outline-none focus:border-gold-warm transition-colors"
                  placeholder="your@email.com"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6">
                Follow
              </h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center bg-secondary/50 border border-gold-muted/20 rounded-sm text-stone-light hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center bg-secondary/50 border border-gold-muted/20 rounded-sm text-stone-light hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center bg-secondary/50 border border-gold-muted/20 rounded-sm text-stone-light hover:text-gold-warm hover:border-gold-warm/50 transition-all duration-300"
                  aria-label="Goodreads"
                >
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
