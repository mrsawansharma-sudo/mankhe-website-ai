import { motion } from 'motion/react';
import { Leaf, Droplets, TreeDeciduous, Sprout, Zap, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function Opportunities() {
  const opportunities = [
    {
      name: "Soil Organic Carbon",
      desc: "Build soil health and generate carbon credits through regenerative practices.",
      icon: Leaf,
      img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Water Stewardship",
      desc: "Optimize water usage and access conservation incentives.",
      icon: Droplets,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Agroforestry",
      desc: "Integrate trees into farming systems for long-term climate resilience.",
      icon: TreeDeciduous,
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Biochar",
      desc: "Convert agricultural waste into durable carbon storage and soil amendment.",
      icon: Sprout,
      img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Biodiversity",
      desc: "Enhance ecosystem health and unlock new environmental markets.",
      icon: Zap,
      img: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-mankhe-canvas text-mankhe-text min-h-screen pt-32 pb-24 border-t-8 border-mankhe-leaf">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-black text-mankhe-forest mb-6">Explore Opportunities</h1>
          <p className="text-xl text-mankhe-earth/80 max-w-2xl mx-auto">
            Discover how MANKHE connects your land with the most impactful environmental projects and incentives.
          </p>
        </motion.div>

        <div className="space-y-24">
          {opportunities.map((opt, i) => (
            <motion.div 
              key={opt.name}
              {...fadeInUp}
              className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={opt.img} alt={opt.name} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 border-4 border-white/20 rounded-[2.5rem] pointer-events-none" />
              </div>
              <div className="flex-1 space-y-6 lg:px-8">
                <div className="w-20 h-20 bg-white shadow-xl text-mankhe-leaf rounded-3xl flex items-center justify-center -mb-2">
                  <opt.icon size={40} />
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif font-black text-mankhe-forest">{opt.name}</h2>
                <p className="text-xl text-mankhe-earth/80 leading-relaxed">{opt.desc}</p>
                <div className="pt-6">
                  <a href="https://app.mankhe.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mankhe-forest text-white font-bold rounded-full uppercase tracking-widest hover:bg-mankhe-leaf transition-colors shadow-lg">
                    Access via Platform <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
