import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Join() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    district: '',
    entityType: 'farmer'
  });

  const districts = [
    "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", 
    "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela Pendra Marwahi", "Janjgir-Champa", 
    "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", 
    "Manendragarh-Chirmiri-Bharatpur", "Mohla-Manpur-Ambagarh Chowki", "Mungeli", "Narayanpur", 
    "Raigarh", "Raipur", "Rajnandgaon", "Sakti", "Sarangarh-Bilaigarh", "Sukma", "Surajpur", "Surguja", "Khairagarh-Chhuikhadan-Gandai"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New MANKHE Registration: ${formData.name}`);
    const body = encodeURIComponent(`
New Registration Details:
-------------------------
Name: ${formData.name}
Mobile: +91 ${formData.mobile}
District: ${formData.district}
Representing as: ${formData.entityType}
    `);
    
    // Open default email client with pre-filled details
    window.location.href = `mailto:admin@mankhe.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Join MANKHE | Platform Registration</title>
        <meta name="description" content="Register to join the MANKHE platform as a farmer, FPO, or company in Chhattisgarh." />
      </Helmet>
      
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center bg-mankhe-canvas relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mankhe-leaf/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mankhe-earth/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-mankhe-forest/10"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-mankhe-leaf/10 text-mankhe-leaf rounded-full mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-serif font-black text-mankhe-forest">Thank You!</h2>
                <p className="text-mankhe-earth/80 text-lg">
                  Your registration details have been received. Our team will contact you shortly on the provided mobile number.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-mankhe-forest text-mankhe-canvas font-bold rounded-full hover:bg-mankhe-leaf transition-colors inline-block"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-serif font-black text-mankhe-forest mb-4">Join MANKHE</h1>
                  <p className="text-mankhe-earth/80">
                    Register your details below to participate in our carbon and soil regeneration initiatives across Chhattisgarh.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-mankhe-forest">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-mankhe-forest/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-mankhe-leaf focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mobile" className="block text-sm font-bold text-mankhe-forest">Mobile Number</label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-mankhe-earth/50 font-bold">+91</span>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 bg-white border border-mankhe-forest/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-mankhe-leaf focus:border-transparent transition-all"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="district" className="block text-sm font-bold text-mankhe-forest">District in Chhattisgarh</label>
                    <select
                      id="district"
                      name="district"
                      required
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-mankhe-forest/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-mankhe-leaf focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your district</option>
                      {districts.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-mankhe-forest mb-3">I am representing as a:</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'farmer', label: 'Farmer' },
                        { id: 'fpo', label: 'FPO' },
                        { id: 'company', label: 'Company' }
                      ].map((type) => (
                        <label
                          key={type.id}
                          className={`
                            cursor-pointer border-2 rounded-xl py-3 px-2 text-center transition-all flex items-center justify-center font-bold text-sm
                            ${formData.entityType === type.id 
                              ? 'border-mankhe-leaf bg-mankhe-leaf/5 text-mankhe-leaf' 
                              : 'border-mankhe-forest/10 text-mankhe-earth/60 hover:border-mankhe-leaf/30'}
                          `}
                        >
                          <input
                            type="radio"
                            name="entityType"
                            value={type.id}
                            checked={formData.entityType === type.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          {type.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-4 bg-mankhe-forest text-mankhe-canvas font-bold rounded-2xl uppercase tracking-widest hover:bg-mankhe-leaf transition-colors flex items-center justify-center gap-2 group"
                  >
                    Submit Registration
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
