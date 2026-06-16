import { motion } from 'motion/react';
import { ArrowRight, Leaf, Shield, Target, Users, Map as MapIcon, Sprout, Droplets, TreeDeciduous, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const }
};

export default function Home() {
  return (
    <div className="bg-mankhe-canvas text-mankhe-text min-h-screen">
      
      {/* SECTION 1 - HERO (Redesigned split-screen) */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-mankhe-forest tracking-tight leading-tight">
              Join Chhattisgarh's Carbon Project Network
            </h1>
            <p className="text-xl md:text-2xl text-mankhe-earth/80 font-light">
              Connecting Farmers, Land and Climate Opportunities.
            </p>
            <p className="text-lg text-mankhe-text/70">
              MANKHE helps farmers create digital farm profiles, map land, and access carbon, agroforestry, biodiversity and sustainability opportunities.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://app.mankhe.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-mankhe-forest text-mankhe-canvas font-bold rounded-full uppercase tracking-widest hover:bg-mankhe-leaf transition-colors">
                Register Farm
              </a>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/50">
            <img src="https://lh3.googleusercontent.com/d/1MTd9DcuK-8Z4BHnNYeIsgL6aGIKaE-q8" alt="Illustration" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-tr from-mankhe-forest/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border-4 border-mankhe-forest/5 rounded-[2.5rem] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - HOW MANKHE WORKS (Icon grid) */}
      <section className="py-24 px-6 bg-white/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-mankhe-leaf/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-serif font-black text-mankhe-forest text-center mb-16">How MANKHE Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {title: "Farm Profile", desc: "Create digital identity", icon: Users}, 
              {title: "Land Mapping", desc: "Add farm boundaries", icon: MapIcon}, 
              {title: "Verification", desc: "Verify information", icon: Shield}, 
              {title: "Opportunities", desc: "Join projects", icon: Target}
            ].map((step, i) => (
              <motion.div {...fadeInUp} key={step.title} transition={{ delay: i * 0.1 }} 
                className="bg-mankhe-canvas p-8 rounded-2xl text-center space-y-4 border border-mankhe-forest/10 hover:border-mankhe-leaf transition-colors">
                <div className="w-16 h-16 bg-mankhe-leaf/10 text-mankhe-leaf rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-serif text-mankhe-forest">{step.title}</h3>
                <p className="text-mankhe-earth/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - OPPORTUNITIES (Image cards) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-black text-mankhe-forest text-center mb-16">Opportunities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {name: "Soil Carbon", icon: Leaf, img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=600&auto=format&fit=crop"}, 
              {name: "Water", icon: Droplets, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop"}, 
              {name: "Agroforestry", icon: TreeDeciduous, img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop"}, 
              {name: "Biochar", icon: Sprout, img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop"}, 
              {name: "Biodiversity", icon: Zap, img: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=600&auto=format&fit=crop"}
            ].map((opt) => (
              <div key={opt.name} className="relative aspect-video rounded-2xl overflow-hidden group">
                <img src={opt.img} alt={opt.name} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-mankhe-forest/80 group-hover:bg-mankhe-forest/60 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <opt.icon size={48} className="mb-4" />
                  <h3 className="text-xl font-serif font-bold">{opt.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHY JOIN */}
      <section className="py-24 px-6 bg-mankhe-forest text-mankhe-canvas">
         <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-black text-center mb-16 text-white">Why Join MANKHE?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Digital Identity", "Verified Land", "Project Access", "Farm Insights", "Future Ready"].map((reason) => (
              <div key={reason} className="p-6 border border-white/20 rounded-xl text-center font-bold text-white">
                {reason}
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* SECTION 5 - FOR ORGANIZATIONS */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-serif font-black text-mankhe-forest text-center mb-16">For Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {title: "Carbon Developers", desc: "Find project-ready farmers.", icon: Users},                
              {title: "ESG Teams", desc: "Launch sustainability initiatives.", icon: Target},                
              {title: "NGOs", desc: "Reach verified communities.", icon: Globe},                
              {title: "Government", desc: "Deploy environmental programs.", icon: Shield}
            ].map((org) => (
              <div key={org.title} className="p-8 bg-white/80 backdrop-blur-sm border border-mankhe-forest/10 rounded-[2rem] space-y-4 hover:bg-white hover:border-mankhe-leaf/50 transition-all shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-mankhe-forest/5 text-mankhe-forest rounded-xl flex items-center justify-center mb-6">
                  <org.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-serif text-mankhe-forest">{org.title}</h3>
                <p className="text-mankhe-earth/80">{org.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
             <Link to="/for-organizations" className="inline-flex py-4 px-8 items-center gap-2 font-bold text-mankhe-leaf border-2 border-mankhe-leaf rounded-full hover:bg-mankhe-leaf hover:text-white transition-colors">
               Explore Partnerships <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 - OUR INITIATIVES */}
      <section className="py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-black text-mankhe-forest text-center mb-16">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-mankhe-forest text-white p-10 rounded-3xl space-y-6">
              <h3 className="text-3xl font-serif font-bold">MANKHE Platform</h3>
              <p className="text-white/80">Farmer-first carbon participation platform.</p>
              <a href="https://app.mankhe.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-mankhe-leaf text-white font-bold rounded-full">Explore →</a>
            </div>
            <div className="relative bg-mankhe-earth text-white p-10 rounded-3xl space-y-6 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7780b9?q=80&w=800&auto=format&fit=crop" alt="Regeneration" className="absolute inset-0 w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-serif font-bold">Chhattisgarh Regeneration Project</h3>
                <p className="text-white/80">Landscape restoration initiative focused on biochar, soil regeneration and climate resilience.</p>
                <Link to="/chhattisgarh-regeneration" className="inline-block px-8 py-3 bg-white text-mankhe-earth font-bold rounded-full">Explore Initiative →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - TIMELINE ABOUT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-black text-mankhe-forest text-center mb-16">The Journey</h2>
          <div className="space-y-6 text-mankhe-earth">
            {[{y: "2025", t: "Vision"}, {y: "2026", t: "Platform"}, {y: "2027", t: "Carbon Projects"}, {y: "2030", t: "Climate Network"}].map(e => (
              <div key={e.y} className="flex gap-8 items-center">
                <div className="text-2xl font-black font-serif text-mankhe-leaf">{e.y}</div>
                <div className="flex-grow p-6 bg-white border border-mankhe-forest/10 rounded-2xl font-bold">{e.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-24 px-6 bg-mankhe-forest text-mankhe-canvas text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-black">Ready to Join the Next Generation of Climate Opportunities?</h2>
          <a href="https://app.mankhe.com" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-6 bg-mankhe-leaf text-white font-bold rounded-full uppercase tracking-widest hover:bg-white hover:text-mankhe-forest transition-colors">
            Register Farm
          </a>
        </div>
      </section>
    </div>
  );
}
