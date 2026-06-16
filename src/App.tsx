import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import ForOrganizations from './pages/ForOrganizations';
import Initiatives from './pages/Initiatives';
import Footer from './components/Footer';
import Regeneration from './pages/Regeneration';
import About from './pages/About';
import Protocol from './pages/Protocol';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'For Org.', path: '/for-organizations' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'About', path: '/about' },
  ];

  return (
    <HelmetProvider>
      <main className="relative bg-mankhe-canvas selection:bg-mankhe-leaf selection:text-white min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-mankhe-leaf z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Overlay */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <Link 
            to="/"
            className="cursor-pointer flex items-center gap-3"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="text-xl md:text-2xl font-serif font-black tracking-tight text-mankhe-forest">MANKHE</span>
          </Link>
        </motion.div>
        
        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-3 lg:gap-6 items-center pointer-events-auto"
        >
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={() => window.scrollTo(0, 0)} className="font-display text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-mankhe-forest/60 hover:text-mankhe-forest transition-colors whitespace-nowrap">
              {link.name}
            </Link>
          ))}
          <a href="https://app.mankhe.com" target="_blank" rel="noopener noreferrer" className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 bg-mankhe-forest text-mankhe-canvas font-bold text-[9px] lg:text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-mankhe-leaf transition-colors whitespace-nowrap">
            Register Farm
          </a>
        </motion.div>

        {/* Mobile Nav Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-mankhe-forest pointer-events-auto"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-mankhe-canvas z-40 flex flex-col items-center justify-center gap-8 p-8"
          >
            {[...navLinks, { name: 'Register Farm', path: 'https://app.mankhe.com' }].map((item) => (
              <a 
                key={item.name}
                href={item.path}
                target={item.path.startsWith('http') ? '_blank' : undefined}
                rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => {
                  if (!item.path.startsWith('http')) {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }
                }}
                className="text-3xl font-serif font-bold text-mankhe-forest hover:text-mankhe-leaf transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/for-organizations" element={<ForOrganizations />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/chhattisgarh-regeneration" element={<Regeneration />} />
        <Route path="/about" element={<About />} />
        <Route path="/the-protocol" element={<Protocol />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </main>
    </HelmetProvider>
  );
}

