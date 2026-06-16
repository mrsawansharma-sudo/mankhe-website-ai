import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Initiatives() {
  return (
    <div className="bg-mankhe-canvas text-mankhe-text min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1 bg-mankhe-forest/10 text-mankhe-forest rounded-full font-bold tracking-widest uppercase text-sm mb-6">Our Work</div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-mankhe-forest mb-6">Ecosystem Initiatives</h1>
          <p className="text-xl text-mankhe-earth/80 max-w-2xl mx-auto">
            From digital platforms to massive landscape restoration, spanning technology and physical interventions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Platform Initiative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[3rem] bg-mankhe-forest text-mankhe-canvas shadow-2xl"
          >
            <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-50">
              <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1200&auto=format&fit=crop" alt="Digital Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-mankhe-forest via-mankhe-forest/50 to-transparent" />
            </div>
            
            <div className="relative z-10 p-10 md:p-20 md:w-2/3">
              <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold tracking-widest uppercase text-xs mb-8">Digital Infrastructure</div>
              <h2 className="text-5xl md:text-6xl font-serif font-black mb-8 text-white">MANKHE Platform</h2>
              <p className="text-xl text-mankhe-canvas/80 mb-12 max-w-xl leading-relaxed">
                The farmer-first carbon participation platform designed to aggregate, verify, and connect smallholder farms with global environmental markets.
              </p>
              <a href="https://app.mankhe.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-mankhe-leaf text-white font-bold rounded-full uppercase tracking-widest hover:bg-white hover:text-mankhe-forest transition-colors shadow-lg">
                Launch Platform <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Regeneration Initiative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[3rem] bg-mankhe-earth text-mankhe-canvas shadow-2xl"
          >
            <div className="absolute left-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-60">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7780b9?q=80&w=1200&auto=format&fit=crop" alt="Regeneration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-mankhe-earth via-mankhe-earth/50 to-transparent" />
            </div>
            
            <div className="relative z-10 p-10 md:p-20 md:ml-auto md:w-[60%] text-left md:text-right flex flex-col md:items-end">
              <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold tracking-widest uppercase text-xs mb-8">Flagship Project</div>
              <h2 className="text-5xl md:text-6xl font-serif font-black mb-8 text-white">Chhattisgarh Regeneration</h2>
              <p className="text-xl text-mankhe-canvas/80 mb-12 max-w-xl leading-relaxed">
                A massive landscape restoration initiative in Central India, utilizing biochar networks to revive soil organic carbon and build climate resilience.
              </p>
              <Link to="/chhattisgarh-regeneration" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-mankhe-earth font-bold rounded-full uppercase tracking-widest hover:bg-mankhe-canvas/90 transition-colors shadow-lg">
                Explore The Story <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
