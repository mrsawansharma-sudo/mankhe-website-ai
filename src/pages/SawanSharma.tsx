import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Briefcase, 
  Building2, 
  Sprout, 
  Leaf, 
  Flame, 
  Layers, 
  Globe2, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Calendar,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any
};

// Configurable verified external profile links for Sawan Sharma
// Edit these URLs to point to your exact personal profile handles as needed:
export const SAWAN_PROFILE_CONFIG = {
  // Professional photograph placeholder. Replace '/sawan.jpg' with your custom photo path or URL.
  photoUrl: '/sawan.jpg',
  // Official Personal LinkedIn URL for Sawan Sharma:
  linkedInUrl: 'https://www.linkedin.com/in/sawan-sharma-53395b230/',
  // Official Email contact:
  email: 'SawanSharma97@gmail.com',
  // Company Website:
  websiteUrl: 'https://mankhe.com/'
};

export default function SawanSharma() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://mankhe.com/sawan-sharma#profilepage",
        "url": "https://mankhe.com/sawan-sharma",
        "name": "Sawan Sharma — Founder & Director, MANKHE",
        "mainEntity": {
          "@id": "https://mankhe.com/sawan-sharma#person"
        },
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://mankhe.com/#website",
          "url": "https://mankhe.com/",
          "name": "MANKHE"
        },
        "breadcrumb": {
          "@id": "https://mankhe.com/sawan-sharma#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mankhe.com/sawan-sharma#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mankhe.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sawan Sharma",
            "item": "https://mankhe.com/sawan-sharma"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://mankhe.com/sawan-sharma#person",
        "name": "Sawan Sharma",
        "givenName": "Sawan",
        "familyName": "Sharma",
        "jobTitle": "Founder & Director",
        "description": "Sawan Sharma is a climate entrepreneur, civil engineer and Founder & Director of MANKHE Private Limited, a climate-tech company based in Dhamtari, Chhattisgarh, India, working on carbon removal, biochar, soil regeneration, carbon agriculture and farmer-led climate projects.",
        "url": "https://mankhe.com/sawan-sharma",
        "image": "https://mankhe.com/sawan.jpg",
        "sameAs": [
          "https://www.linkedin.com/in/sawan-sharma-53395b230/"
        ],
        "worksFor": {
          "@id": "https://mankhe.com/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhamtari",
          "addressRegion": "Chhattisgarh",
          "addressCountry": "India"
        },
        "knowsAbout": [
          "Carbon Removal",
          "Biochar",
          "Soil Organic Carbon Regeneration",
          "Carbon Agriculture",
          "Sustainable Rice Cultivation",
          "Farmer-Led Carbon Projects",
          "Climate-Tech",
          "Rural Climate Innovation",
          "Civil Engineering"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://mankhe.com/#organization",
        "name": "MANKHE Private Limited",
        "alternateName": "MANKHE",
        "url": "https://mankhe.com/",
        "logo": "https://mankhe.com/logo.png",
        "founder": {
          "@id": "https://mankhe.com/sawan-sharma#person"
        }
      }
    ]
  };

  const focusAreas = [
    { title: "Biochar-based carbon removal", icon: Flame },
    { title: "Soil organic carbon regeneration", icon: Leaf },
    { title: "Carbon agriculture", icon: Sprout },
    { title: "Sustainable rice cultivation", icon: Layers },
    { title: "Farmer-led carbon projects", icon: CheckCircle2 },
    { title: "Climate-tech", icon: Globe2 },
    { title: "Rural climate innovation", icon: Briefcase },
    { title: "Carbon project development", icon: Building2 }
  ];

  const projects = [
    {
      title: "Chhattisgarh Regeneration Project",
      focus: "Soil restoration, sustainable agriculture, farmer participation and carbon outcomes.",
      link: "/chhattisgarh-regeneration",
      badge: "Flagship Initiative",
      description: "A decentralized landscape regeneration initiative uniting smallholder farmers, local self-help groups, and agricultural research institutions across Chhattisgarh."
    },
    {
      title: "Biochar Carbon Removal",
      focus: "Converting agricultural biomass into biochar and using it for durable carbon removal and soil improvement.",
      link: "/the-protocol",
      badge: "Durable CDR",
      description: "Harnessing agricultural crop residues like rice husks to produce high-stability biochar, permanently sequestering carbon while improving water retention and microbial health."
    },
    {
      title: "Carbon Agriculture",
      focus: "Helping farmers participate in carbon projects through field implementation, aggregation and project development.",
      link: "/opportunities",
      badge: "Farmer-Led",
      description: "Democratizing carbon markets for rural communities through transparent digital MRV, verifiable land boundaries, and equitable revenue-sharing structures."
    }
  ];

  return (
    <div className="bg-mankhe-canvas text-mankhe-text min-h-screen pt-28 pb-24 border-t-8 border-mankhe-leaf">
      <SEO 
        title="Sawan Sharma — Founder & Director, MANKHE | Climate Entrepreneur"
        description="Sawan Sharma is a climate entrepreneur, civil engineer and Founder & Director of MANKHE Private Limited, a climate-tech company based in Dhamtari, Chhattisgarh, working on carbon removal, biochar, soil regeneration and carbon agriculture."
        canonical="https://mankhe.com/sawan-sharma"
        ogType="profile"
        ogTitle="Sawan Sharma | Founder & Director, MANKHE"
        ogDescription="Climate entrepreneur and Founder & Director of MANKHE, working on carbon removal, biochar, soil regeneration and carbon agriculture from Chhattisgarh."
        ogImage="https://mankhe.com/sawan.jpg"
        twitterCard="summary_large_image"
        twitterTitle="Sawan Sharma | Founder & Director, MANKHE"
        twitterDescription="Climate entrepreneur and Founder & Director of MANKHE, working on carbon removal, biochar, soil regeneration and carbon agriculture from Chhattisgarh."
        twitterImage="https://mankhe.com/sawan.jpg"
        exactTitle={true}
        schema={schemaData}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* BREADCRUMB / BACK LINK */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-mankhe-earth/70 hover:text-mankhe-leaf transition-colors"
          >
            ← Back to MANKHE
          </Link>
        </div>

        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 md:p-14 border border-mankhe-forest/10 shadow-xl mb-16 overflow-hidden relative"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-14">
            {/* Founder Photograph Placeholder */}
            <div className="relative shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-mankhe-canvas relative group bg-mankhe-forest/5">
                <img 
                  src={SAWAN_PROFILE_CONFIG.photoUrl} 
                  alt="Sawan Sharma - Founder & Director, MANKHE Private Limited"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual if image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-mankhe-leaf/10 text-mankhe-forest rounded-full text-xs font-bold font-mono uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-mankhe-leaf" /> Verified Profile
                </span>
              </div>
            </div>

            {/* Profile Intro */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-block px-3 py-1 bg-mankhe-forest/5 text-mankhe-forest rounded-full font-mono text-xs font-bold tracking-widest uppercase">
                Founder Profile
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-black text-mankhe-forest tracking-tight">
                Sawan Sharma
              </h1>

              <p className="text-xl md:text-2xl font-serif text-mankhe-leaf font-bold">
                Founder & Director, MANKHE Private Limited
              </p>

              <div className="py-2 space-y-1.5">
                <p className="text-base md:text-lg text-mankhe-forest/90 font-medium tracking-wide">
                  Climate Entrepreneur & Civil Engineer
                </p>
                <p className="text-xs md:text-sm text-mankhe-leaf font-mono uppercase tracking-wider font-bold">
                  Carbon Removal • Biochar • Soil Regeneration • Carbon Agriculture • Climate-Tech
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 text-mankhe-earth/80 text-sm font-medium pt-1">
                <MapPin size={18} className="text-mankhe-leaf shrink-0" />
                <span>Dhamtari, Chhattisgarh, India</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-mankhe-forest text-mankhe-canvas rounded-full font-bold text-sm hover:bg-mankhe-leaf transition-all shadow-md hover:-translate-y-0.5"
                >
                  Visit MANKHE <ArrowRight size={16} />
                </Link>
                <a 
                  href={SAWAN_PROFILE_CONFIG.linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-mankhe-forest/20 text-mankhe-forest rounded-full font-bold text-sm hover:bg-white hover:border-mankhe-forest transition-all"
                >
                  <Linkedin size={16} className="text-[#0A66C2]" /> LinkedIn Profile <ExternalLink size={14} className="opacity-60" />
                </a>
                <a 
                  href={`mailto:${SAWAN_PROFILE_CONFIG.email}`} 
                  className="inline-flex items-center gap-2 px-5 py-3 border border-mankhe-forest/20 text-mankhe-forest rounded-full font-bold text-sm hover:bg-white hover:border-mankhe-forest transition-all"
                >
                  <Mail size={16} className="text-mankhe-leaf" /> Contact Email
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ABOUT SAWAN SHARMA & MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.section 
            {...fadeInUp}
            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-mankhe-forest/10 shadow-lg space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-mankhe-forest/10 pb-4">
              <span className="w-3 h-3 rounded-full bg-mankhe-leaf" />
              <h2 className="text-2xl md:text-3xl font-serif font-black text-mankhe-forest">
                About Sawan Sharma
              </h2>
            </div>

            <div className="space-y-5 text-mankhe-text text-base md:text-lg leading-relaxed font-normal">
              <p>
                Sawan Sharma is a climate entrepreneur, civil engineer and Founder & Director of MANKHE Private Limited, a climate-tech company based in Dhamtari, Chhattisgarh.
              </p>
              <p>
                His work focuses on developing practical climate solutions around carbon removal, biochar, soil regeneration, carbon agriculture and farmer participation in carbon markets.
              </p>
              <p>
                Through MANKHE, he is working on building a community-led carbon platform that connects farmers, land, agricultural practices and carbon project development.
              </p>
            </div>
          </motion.section>

          {/* MISSION CARD */}
          <motion.section 
            {...fadeInUp}
            className="bg-mankhe-forest text-mankhe-canvas rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full font-mono text-xs font-bold uppercase tracking-widest text-mankhe-canvas">
                Core Mission
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Mission
              </h2>
              <blockquote className="italic text-base md:text-lg leading-relaxed text-mankhe-canvas/90 border-l-2 border-mankhe-leaf pl-4 pt-1">
                "Build practical climate solutions from rural India that improve soil health, create additional value for farmers and contribute to measurable carbon removal."
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 text-xs font-mono text-mankhe-canvas/70 uppercase tracking-wider">
              Rural Innovation • Scalable CDR • Soil Restoration
            </div>
          </motion.section>
        </div>

        {/* BACKGROUND & VITALS */}
        <motion.section 
          {...fadeInUp}
          className="bg-white rounded-3xl p-8 md:p-12 border border-mankhe-forest/10 shadow-lg mb-16"
        >
          <div className="flex items-center gap-3 border-b border-mankhe-forest/10 pb-4 mb-8">
            <Briefcase className="text-mankhe-leaf" size={24} />
            <h2 className="text-2xl md:text-3xl font-serif font-black text-mankhe-forest">
              Background & Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-mankhe-canvas rounded-2xl border border-mankhe-forest/5">
              <span className="text-xs font-mono uppercase font-bold text-mankhe-leaf tracking-wider block mb-1">Name</span>
              <p className="text-lg font-serif font-bold text-mankhe-forest">Sawan Sharma</p>
            </div>

            <div className="p-5 bg-mankhe-canvas rounded-2xl border border-mankhe-forest/5">
              <span className="text-xs font-mono uppercase font-bold text-mankhe-leaf tracking-wider block mb-1">Role</span>
              <p className="text-lg font-serif font-bold text-mankhe-forest">Founder & Director, MANKHE Private Limited</p>
            </div>

            <div className="p-5 bg-mankhe-canvas rounded-2xl border border-mankhe-forest/5">
              <span className="text-xs font-mono uppercase font-bold text-mankhe-leaf tracking-wider block mb-1">Company</span>
              <p className="text-lg font-serif font-bold text-mankhe-forest">MANKHE Private Limited</p>
            </div>

            <div className="p-5 bg-mankhe-canvas rounded-2xl border border-mankhe-forest/5">
              <span className="text-xs font-mono uppercase font-bold text-mankhe-leaf tracking-wider block mb-1">Profession</span>
              <p className="text-lg font-serif font-bold text-mankhe-forest">Climate Entrepreneur & Civil Engineer</p>
            </div>

            <div className="p-5 bg-mankhe-canvas rounded-2xl border border-mankhe-forest/5">
              <span className="text-xs font-mono uppercase font-bold text-mankhe-leaf tracking-wider block mb-1">Location</span>
              <p className="text-lg font-serif font-bold text-mankhe-forest">Dhamtari, Chhattisgarh, India</p>
            </div>

            <div className="p-5 bg-mankhe-canvas rounded-2xl border border-mankhe-forest/5 sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-mono uppercase font-bold text-mankhe-leaf tracking-wider block mb-1">Focus</span>
              <p className="text-sm font-serif font-bold text-mankhe-forest leading-snug">Carbon Removal, Biochar, Soil Regeneration, Carbon Agriculture and Climate-Tech</p>
            </div>
          </div>
        </motion.section>

        {/* PROFESSIONAL FOCUS */}
        <motion.section 
          {...fadeInUp}
          className="bg-white rounded-3xl p-8 md:p-12 border border-mankhe-forest/10 shadow-lg mb-16"
        >
          <div className="flex items-center gap-3 border-b border-mankhe-forest/10 pb-4 mb-8">
            <span className="w-3 h-3 rounded-full bg-mankhe-leaf" />
            <h2 className="text-2xl md:text-3xl font-serif font-black text-mankhe-forest">
              Professional Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl bg-mankhe-canvas border border-mankhe-forest/5 flex items-start gap-4 hover:border-mankhe-leaf/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-mankhe-leaf shrink-0 mt-0.5">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-mankhe-forest leading-snug">
                      {area.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* MANKHE SPOTLIGHT WITH PROMINENT BUTTON */}
        <motion.section 
          {...fadeInUp}
          className="bg-gradient-to-br from-mankhe-forest to-mankhe-forest/95 text-white rounded-3xl p-8 md:p-14 shadow-2xl mb-16 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full font-mono text-xs font-bold uppercase tracking-widest text-mankhe-canvas">
              Organization
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-black text-white">
              MANKHE
            </h2>

            <div className="space-y-4 text-white/90 text-lg md:text-xl font-light leading-relaxed">
              <p>
                Sawan Sharma is the Founder & Director of MANKHE Private Limited.
              </p>
              <p>
                MANKHE is a climate-tech company based in Dhamtari, Chhattisgarh, working at the intersection of agriculture, soil regeneration and carbon markets.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-mankhe-leaf text-white font-bold rounded-full uppercase tracking-widest hover:bg-white hover:text-mankhe-forest transition-all shadow-xl hover:-translate-y-0.5 text-sm"
              >
                Visit MANKHE <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section 
          {...fadeInUp}
          className="space-y-8 mb-16"
        >
          <div className="flex items-center gap-3 border-b border-mankhe-forest/10 pb-4">
            <span className="w-3 h-3 rounded-full bg-mankhe-leaf" />
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-mankhe-forest">
                Key Initiatives & Projects
              </h2>
              <p className="text-sm text-mankhe-earth/80 mt-1">
                Field-tested climate interventions and platform infrastructure led by Sawan Sharma.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-mankhe-forest/10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-mankhe-leaf/10 text-mankhe-forest text-xs font-mono font-bold uppercase tracking-wider rounded-full">
                    {proj.badge}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-mankhe-forest">
                    {proj.title}
                  </h3>
                  <div className="p-4 bg-mankhe-canvas rounded-xl border border-mankhe-forest/5">
                    <span className="text-xs font-mono uppercase font-bold text-mankhe-leaf block mb-1">Focus</span>
                    <p className="text-sm font-medium text-mankhe-forest leading-relaxed">
                      {proj.focus}
                    </p>
                  </div>
                  <p className="text-sm text-mankhe-text/80 leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-mankhe-forest/5">
                  <Link 
                    to={proj.link} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-mankhe-leaf hover:text-mankhe-forest transition-colors"
                  >
                    Explore Project <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* MEDIA / PUBLIC APPEARANCES */}
        <motion.section 
          {...fadeInUp}
          className="bg-white rounded-3xl p-8 md:p-12 border border-mankhe-forest/10 shadow-lg mb-16"
        >
          <div className="flex items-center gap-3 border-b border-mankhe-forest/10 pb-4 mb-6">
            <Calendar className="text-mankhe-leaf" size={24} />
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-mankhe-forest">
                Media & Public Appearances
              </h2>
              <p className="text-sm text-mankhe-earth/80 mt-1">
                Verified records of interviews, conferences, keynote sessions, and publications.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-mankhe-canvas border border-dashed border-mankhe-forest/20 text-center space-y-3">
            <p className="text-base text-mankhe-forest font-medium">
              Verified public appearances, research publications, and conference proceedings will be indexed here as they are published.
            </p>
            <p className="text-xs text-mankhe-earth/70 font-mono">
              In accordance with editorial standards, this section strictly features authenticated third-party coverage and verified proceedings.
            </p>
          </div>
        </motion.section>

        {/* CONNECT */}
        <motion.section 
          {...fadeInUp}
          className="bg-white rounded-3xl p-8 md:p-12 border border-mankhe-forest/10 shadow-lg"
        >
          <div className="flex items-center gap-3 border-b border-mankhe-forest/10 pb-4 mb-6">
            <Globe2 className="text-mankhe-leaf" size={24} />
            <h2 className="text-2xl md:text-3xl font-serif font-black text-mankhe-forest">
              Connect & Verify
            </h2>
          </div>

          <p className="text-mankhe-text/80 text-base mb-8 max-w-2xl font-light">
            Connect directly through verified professional channels or reach out to MANKHE Private Limited for project inquiries, partnerships, and scientific collaborations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a 
              href={SAWAN_PROFILE_CONFIG.linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-mankhe-canvas border border-mankhe-forest/10 hover:border-mankhe-leaf transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <Linkedin size={28} className="text-[#0A66C2]" />
                <h3 className="font-serif font-bold text-lg text-mankhe-forest group-hover:text-mankhe-leaf transition-colors">
                  Personal LinkedIn
                </h3>
                <p className="text-xs text-mankhe-earth/80">
                  Verified personal profile of Sawan Sharma
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-mankhe-leaf">
                <span>View Profile</span>
                <ExternalLink size={14} />
              </div>
            </a>

            <Link 
              to="/" 
              className="p-6 rounded-2xl bg-mankhe-canvas border border-mankhe-forest/10 hover:border-mankhe-leaf transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <Building2 size={28} className="text-mankhe-leaf" />
                <h3 className="font-serif font-bold text-lg text-mankhe-forest group-hover:text-mankhe-leaf transition-colors">
                  MANKHE Website
                </h3>
                <p className="text-xs text-mankhe-earth/80">
                  Official homepage and platform portal
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-mankhe-leaf">
                <span>mankhe.com</span>
                <ArrowRight size={14} />
              </div>
            </Link>

            <a 
              href={`mailto:${SAWAN_PROFILE_CONFIG.email}`} 
              className="p-6 rounded-2xl bg-mankhe-canvas border border-mankhe-forest/10 hover:border-mankhe-leaf transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <Mail size={28} className="text-mankhe-forest" />
                <h3 className="font-serif font-bold text-lg text-mankhe-forest group-hover:text-mankhe-leaf transition-colors">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-mankhe-earth/80 truncate">
                  {SAWAN_PROFILE_CONFIG.email}
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-mankhe-leaf">
                <span>Send Email</span>
                <ArrowRight size={14} />
              </div>
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
