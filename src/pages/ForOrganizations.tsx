import { motion } from 'motion/react';
import { Building2, LineChart, Users, Globe2 } from 'lucide-react';

export default function ForOrganizations() {
  const orgs = [
    {
      title: "Carbon Developers",
      desc: "Find project-ready farmers with verified land boundaries and baseline data.",
      icon: Building2,
      img: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "ESG Teams",
      desc: "Launch targeted supply-chain sustainability initiatives with transparent origin tracking.",
      icon: LineChart,
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb7780b9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "NGOs",
      desc: "Reach vetted local communities to expand the impact of landscape regeneration programs.",
      icon: Users,
      img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Government",
      desc: "Deploy environmental incentives efficiently using digitized farm infrastructure.",
      icon: Globe2,
      img: "https://images.unsplash.com/photo-1495556650867-99590cea3657?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-mankhe-canvas text-mankhe-text min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 bg-mankhe-forest/10 text-mankhe-forest rounded-full font-bold tracking-widest uppercase text-sm mb-6">Partnerships</div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-mankhe-forest mb-6">For Organizations</h1>
          <p className="text-xl text-mankhe-earth/80 max-w-2xl mx-auto">
            Achieve your climate and sustainability targets by partnering with MANKHE's network of verified farmers.
          </p>
          <div className="mt-10">
            <a href="https://app.mankhe.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-mankhe-forest text-mankhe-canvas font-bold rounded-full uppercase tracking-widest hover:bg-mankhe-leaf shadow-xl transition-all hover:-translate-y-1">
              Partner With Us
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {orgs.map((org, i) => (
            <motion.div 
              key={org.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-square md:aspect-[4/3] shadow-2xl"
            >
              <img src={org.img} alt={org.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-mankhe-forest/90 via-mankhe-forest/30 to-transparent" />
              <div className="absolute inset-0 border-[8px] border-transparent group-hover:border-mankhe-gold/20 transition-colors duration-500 rounded-[2.5rem]" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: (i * 0.1) + 0.2 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner"
                >
                  <org.icon size={32} />
                </motion.div>
                <h2 className="text-4xl font-serif font-black mb-4 group-hover:text-mankhe-accent transition-colors">{org.title}</h2>
                <p className="text-white/90 text-xl font-light">{org.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
