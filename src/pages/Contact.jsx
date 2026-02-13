import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollAnimations';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Contact Info */}
        <div className="space-y-12">
          <ScrollReveal>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              Let's <span className="text-tea-primary italic">Talk</span> Tea
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question about our blends? Want to collaborate? Or just want to say hello? We'd love to hear from you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-tea-primary/10 flex items-center justify-center text-tea-primary shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-muted-foreground">hello@teamone.com</p>
                <p className="text-muted-foreground">wholesale@teamone.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-tea-primary/10 flex items-center justify-center text-tea-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Visit Us</h3>
                <p className="text-muted-foreground">123 Tea Garden Lane</p>
                <p className="text-muted-foreground">Darjeeling, West Bengal 734101</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-tea-primary/10 flex items-center justify-center text-tea-primary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm IST</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Form */}
        <ScrollReveal delay={0.4} className="bg-white dark:bg-[#1A1A1A] p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/5 border border-border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-secondary border-transparent focus:border-tea-primary focus:bg-white focus:ring-0 transition-all font-medium" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-secondary border-transparent focus:border-tea-primary focus:bg-white focus:ring-0 transition-all font-medium" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-secondary border-transparent focus:border-tea-primary focus:bg-white focus:ring-0 transition-all font-medium" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-secondary border-transparent focus:border-tea-primary focus:bg-white focus:ring-0 transition-all font-medium resize-none" placeholder="How can we help you?" />
            </div>

            <button type="button" className="w-full py-4 bg-tea-primary text-white font-bold rounded-xl shadow-lg shadow-tea-primary/30 hover:shadow-tea-primary/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
