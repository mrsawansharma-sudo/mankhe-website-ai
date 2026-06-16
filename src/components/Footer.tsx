import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-mankhe-forest text-mankhe-canvas py-24 px-8 border-t border-mankhe-leaf/20 snap-start">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-serif font-black tracking-tight text-mankhe-canvas">MANKHE</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs font-light text-mankhe-canvas/80">
            Rewiring the carbon cycle from the soil up. A Chhattisgarh Regeneration Project.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-display text-[10px] uppercase tracking-[0.3em] text-mankhe-leaf">Navigation</h4>
          <ul className="space-y-4 text-sm text-mankhe-canvas/80">
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-mankhe-leaf transition-colors">Home</Link></li>
            <li><Link to="/chhattisgarh-regeneration" onClick={() => window.scrollTo(0, 0)} className="hover:text-mankhe-leaf transition-colors">Impact</Link></li>
            <li><Link to="/the-protocol" onClick={() => window.scrollTo(0, 0)} className="hover:text-mankhe-leaf transition-colors">Methodology</Link></li>
            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-mankhe-leaf transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-display text-[10px] uppercase tracking-[0.3em] text-white">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-mankhe-gold transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-mankhe-gold transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-mankhe-gold transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-display text-[10px] uppercase tracking-[0.3em] text-white">Connect</h4>
          <div className="flex gap-6">
            <a href="#" className="hover:text-mankhe-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-mankhe-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/company/113115068/" target="_blank" rel="noopener noreferrer" className="hover:text-mankhe-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-mankhe-gold transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          <div className="pt-4 space-y-2">
            <p className="text-xs">© 2026 Mankhe. All rights reserved.</p>
            <Link to="/internal/login?key=secure_access_2026" className="text-[10px] uppercase tracking-widest text-stone-500 hover:text-mankhe-gold transition-colors flex items-center gap-2">
              <span className="w-1 h-1 bg-mankhe-gold rounded-full"></span>
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
