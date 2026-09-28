import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Sprout, 
  Flame, 
  Trees, 
  TreePine, 
  ArrowRight, 
  Printer, 
  Maximize2, 
  Minimize2, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Info, 
  QrCode,
  MapPin,
  Mail,
  Award
} from 'lucide-react';

export default function KisanInfographic() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isKioskMode, setIsKioskMode] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      const isFs = Boolean(
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );
      setIsFullscreen(isFs);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const doc = document as any;
    const docEl = document.documentElement as any;

    const requestFullscreenFn =
      docEl.requestFullscreen ||
      docEl.webkitRequestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.msRequestFullscreen;

    const exitFullscreenFn =
      doc.exitFullscreen ||
      doc.webkitExitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.msExitFullscreen;

    const isCurrentlyFullscreen = Boolean(
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement
    );

    if (isCurrentlyFullscreen && typeof exitFullscreenFn === 'function') {
      try {
        const res = exitFullscreenFn.call(doc);
        if (res && typeof res.catch === 'function') {
          res.catch(() => {});
        }
      } catch {}
      setIsFullscreen(false);
      setIsKioskMode(false);
    } else if (!isCurrentlyFullscreen && typeof requestFullscreenFn === 'function') {
      try {
        const res = requestFullscreenFn.call(docEl);
        if (res && typeof res.catch === 'function') {
          res.catch(() => {
            // Fullscreen request rejected (e.g., inside restricted iframe) -> fallback to CSS Kiosk
            setIsKioskMode((prev) => !prev);
          });
        }
        setIsFullscreen(true);
      } catch {
        // Fallback for browsers throwing synchronous error
        setIsKioskMode((prev) => !prev);
      }
    } else {
      // Browser does not support Fullscreen API (e.g., iOS Safari) -> Toggle CSS Kiosk
      setIsKioskMode((prev) => !prev);
    }
  };

  const isExpanded = isFullscreen || isKioskMode;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen bg-[#FAF9F6] text-[#1C1C1C] font-['Mukta',_'Hind',_sans-serif] selection:bg-[#588157] selection:text-white ${isKioskMode ? 'fixed inset-0 z-50 overflow-y-auto' : ''}`}>
      <Helmet>
        <title>किसान के लिए Carbon Project क्या करता है? | MANKHE Infographic</title>
        <meta 
          name="description" 
          content="MANKHE किसान और कार्बन प्रोजेक्ट्स: बेहतर खेती, स्वस्थ मिट्टी, पर्यावरण सुरक्षा और अतिरिक्त आय का अवसर। जानिए AWD, Soil Carbon, Biochar, Agroforestry और ARR प्रोजेक्ट्स के बारे में।" 
        />
      </Helmet>

      {/* STALL UTILITY TOOLBAR (Hidden in Print) */}
      <header className="no-print sticky top-0 z-50 bg-[#1A3C2E] text-white px-4 py-3 shadow-md border-b border-[#588157]/30">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#588157] animate-pulse" />
            <span className="font-semibold tracking-wide">MANKHE • प्रदर्शनी स्टॉल इन्फोग्राफिक (Exhibition Display)</span>
            <span className="hidden md:inline text-white/60">| DPIIT मान्यता प्राप्त स्टार्टअप</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white rounded-lg transition-colors font-medium border border-white/15"
              title="A4 साइज में प्रिंट या PDF सेव करें"
            >
              <Printer className="w-4 h-4 text-[#D4AF37]" />
              <span>A4 प्रिंट / PDF</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white rounded-lg transition-colors font-medium border border-white/15"
              title="बड़ी स्क्रीन या टैबलेट के लिए फुलस्क्रीन"
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">फुलस्क्रीन बंद</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">स्टॉल फुलस्क्रीन</span>
                </>
              )}
            </button>

            <Link
              to="/"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#588157] hover:bg-[#4a6e49] text-white rounded-lg transition-colors font-medium shadow-sm"
            >
              <Globe className="w-4 h-4" />
              <span>English Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN POSTER CONTAINER (A4 PROPORTIONATED CANVAS) */}
      <main className="a4-print-container max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-[#FFFFFF] border border-[#1A3C2E]/15 rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl shadow-stone-300/40 relative overflow-hidden">
          
          {/* Subtle natural watermark in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#588157]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4B3621]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          {/* ================= HEADER SECTION ================= */}
          <section className="relative pb-6 border-b border-stone-200">
            {/* Top Brand Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/mankhe.png" 
                  alt="MANKHE" 
                  className="h-9 sm:h-11 w-auto object-contain" 
                />
                <div className="border-l border-stone-300 pl-3">
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#588157] font-bold">
                    MANKHE Pvt. Ltd.
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#4B3621]/80">
                    एग्री-क्लाइमेट टेक • छत्तीसगढ़
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#FAF9F6] border border-stone-200 px-3 py-1.5 rounded-xl">
                <img 
                  src="/startup-india.png" 
                  alt="Startup India" 
                  className="h-6 sm:h-7 w-auto object-contain" 
                />
                <div className="text-[10px] sm:text-[11px] text-[#1A3C2E] font-medium leading-tight">
                  <span className="font-bold text-[#1A3C2E]">DPIIT Recognized</span>
                  <br />भारत सरकार स्टार्टअप
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center max-w-3xl mx-auto pt-2">
              <h1 className="text-2xl sm:text-4xl md:text-[2.75rem] font-black text-[#1A3C2E] leading-tight tracking-tight">
                किसान के लिए Carbon Project क्या करता है?
              </h1>

              <div className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-[#588157] flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>बेहतर खेती</span>
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>स्वस्थ मिट्टी</span>
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>पर्यावरण की सुरक्षा</span>
                <span className="text-[#D4AF37] font-bold">•</span>
                <span className="text-[#4B3621]">अतिरिक्त आय का अवसर</span>
              </div>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-[#1C1C1C]/80 leading-relaxed max-w-2xl mx-auto bg-[#FAF9F6] p-3 rounded-xl border border-stone-200/80">
                <strong className="text-[#1A3C2E]">MANKHE</strong> किसानों और Carbon Project Developers को जोड़कर जमीन पर ऐसे projects लागू करने में मदद करता है, जिनसे खेती और पर्यावरण दोनों को सीधा लाभ मिले।
              </p>
            </div>
          </section>

          {/* ================= IMPORTANT VISUAL FLOW ================= */}
          <section className="my-6 sm:my-8 bg-gradient-to-b from-[#F5F8F5] to-[#FAF9F6] border border-[#588157]/25 rounded-2xl p-4 sm:p-5">
            <div className="text-center mb-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#588157]">
                सरल प्रक्रिया (Simple Visual Flow)
              </span>
            </div>

            {/* Step Nodes Flow */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-2 items-center">
              
              {/* Step 1: किसान */}
              <div className="relative bg-white border border-[#588157]/20 rounded-xl p-3 sm:p-3.5 text-center shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#588157]/10 flex items-center justify-center text-[#1A3C2E] mb-2 font-bold text-lg">
                  👨‍🌾
                </div>
                <div className="font-bold text-sm sm:text-base text-[#1A3C2E]">1. किसान</div>
                <p className="text-[11px] sm:text-xs text-[#4B3621]/80 mt-0.5 leading-snug">
                  खेत में नई टिकाऊ विधि अपनाता है
                </p>
              </div>

              {/* Step 2: MANKHE */}
              <div className="relative bg-[#1A3C2E] text-white rounded-xl p-3 sm:p-3.5 text-center shadow-md">
                <div className="w-10 h-10 mx-auto rounded-full bg-white/15 flex items-center justify-center text-white mb-2 font-bold text-lg">
                  🌿
                </div>
                <div className="font-bold text-sm sm:text-base text-white">2. MANKHE</div>
                <p className="text-[11px] sm:text-xs text-white/80 mt-0.5 leading-snug">
                  जमीन पर मैपिंग, ट्रेनिंग व सत्यापन (MRV)
                </p>
              </div>

              {/* Step 3: Carbon Project */}
              <div className="relative bg-white border border-[#588157]/20 rounded-xl p-3 sm:p-3.5 text-center shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#588157]/10 flex items-center justify-center text-[#1A3C2E] mb-2 font-bold text-lg">
                  📜
                </div>
                <div className="font-bold text-sm sm:text-base text-[#1A3C2E]">3. Carbon Project</div>
                <p className="text-[11px] sm:text-xs text-[#4B3621]/80 mt-0.5 leading-snug">
                  प्रमाणित मानक व कार्बन क्रेडिट जारी
                </p>
              </div>

              {/* Step 4: Carbon Market */}
              <div className="relative bg-[#FAF4E8] border border-[#D4AF37]/40 rounded-xl p-3 sm:p-3.5 text-center shadow-sm">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#4B3621] mb-2 font-bold text-lg">
                  💰
                </div>
                <div className="font-bold text-sm sm:text-base text-[#4B3621]">4. Carbon Market</div>
                <p className="text-[11px] sm:text-xs text-[#4B3621]/90 mt-0.5 leading-snug font-medium">
                  क्रेडिट बिक्री ➔ किसान को अतिरिक्त आय
                </p>
              </div>

            </div>

            {/* Explanatory Caption */}
            <div className="mt-3.5 text-center bg-white/80 border border-stone-200/60 rounded-lg py-2 px-3">
              <p className="text-xs sm:text-sm font-medium text-[#1A3C2E]">
                “किसान खेती में बदलाव अपनाता है और project की शर्तों के अनुसार Carbon Credits से <strong>अतिरिक्त आय का अवसर</strong> मिल सकता है।”
              </p>
            </div>
          </section>

          {/* ================= MAIN SECTION: 5 PROJECTS ================= */}
          <section className="my-6">
            <div className="text-center mb-5 sm:mb-6">
              <span className="text-[11px] uppercase tracking-widest text-[#588157] font-bold">
                जमीनी कार्य (Ground Projects)
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1A3C2E] mt-0.5">
                हम किन Projects पर काम करते हैं?
              </h2>
              <p className="text-xs sm:text-sm text-[#4B3621]/80 max-w-xl mx-auto mt-1">
                हर प्रोजेक्ट का उद्देश्य: किसान का काम आसान व लाभकारी बनाना, और पर्यावरण से कार्बन कम करना।
              </p>
            </div>

            {/* 5 Project Cards Grid (Balanced Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

              {/* ---------------- CARD 1: AWD ---------------- */}
              <article className="bg-[#FAF9F6] border border-[#588157]/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#588157]/50 transition-colors shadow-sm relative">
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <Droplets className="w-5 h-5 text-sky-700" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-sky-800 tracking-wider">Water Saving</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1A3C2E] mt-2.5">
                    💧 AWD — धान में पानी की बचत
                  </h3>

                  {/* क्या होता है */}
                  <div className="mt-2 text-xs bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#588157]">क्या होता है?</span>
                    <p className="text-[#1C1C1C]/85 mt-0.5 leading-relaxed">
                      “धान के खेत में हर समय पानी भरकर रखने के बजाय जरूरत के अनुसार (सूखने व भरने की बारी) सिंचाई की जाती है।”
                    </p>
                  </div>

                  {/* Visual Illustration: Rice field water management */}
                  <div className="my-3 py-2 px-3 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-xl border border-sky-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <svg className="w-12 h-8 text-emerald-700 shrink-0" viewBox="0 0 60 40" fill="none">
                        <path d="M5 35 Q15 20 25 35 Q35 15 45 35" stroke="currentColor" strokeWidth="2.5" fill="none" />
                        <line x1="15" y1="20" x2="15" y2="38" stroke="#0284c7" strokeWidth="2" strokeDasharray="2 2" />
                        <circle cx="15" cy="18" r="3" fill="#0284c7" />
                        <rect x="35" y="16" width="6" height="22" rx="2" fill="#0284c7" fillOpacity="0.3" stroke="#0284c7" strokeWidth="1.5" />
                        <line x1="33" y1="24" x2="43" y2="24" stroke="#0284c7" strokeWidth="1.5" />
                      </svg>
                      <div>
                        <div className="font-bold text-[11px] text-[#1A3C2E]">AWD पाइप तकनीक</div>
                        <div className="text-[10px] text-sky-800">पानी स्तर निगरानी • कम डीजल खपत</div>
                      </div>
                    </div>
                  </div>

                  {/* किसान को क्या लाभ? */}
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#1A3C2E] text-xs">किसान को क्या लाभ?</div>
                    <ul className="space-y-1 text-[#1C1C1C]/85">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>पानी की भारी बचत हो सकती है</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>सिंचाई की लागत (डीजल/बिजली) कम हो सकती है</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>खेत में पानी का बेहतर प्रबंधन व मजबूत जड़ें</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>खेती की दक्षता बेहतर हो सकती है</span>
                      </li>
                    </ul>
                  </div>

                  {/* Carbon Benefit */}
                  <div className="mt-3 p-2 bg-emerald-50/80 rounded-lg border border-emerald-200/80 text-[11px]">
                    <span className="font-bold text-emerald-900">🌍 Carbon Benefit:</span>
                    <p className="text-emerald-800 leading-snug mt-0.5">
                      धान के खेत से Methane emissions (मीथेन गैस) कम करने में सीधी मदद।
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px] font-bold text-[#1A3C2E]">
                  <span>Carbon Project</span>
                  <span className="text-[#588157] flex items-center gap-1">
                    अतिरिक्त आय का अवसर <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>

              {/* ---------------- CARD 2: SOIL CARBON ---------------- */}
              <article className="bg-[#FAF9F6] border border-[#588157]/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#588157]/50 transition-colors shadow-sm relative">
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Sprout className="w-5 h-5 text-amber-800" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Soil Regeneration</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1A3C2E] mt-2.5">
                    🌱 Soil Carbon — मिट्टी में फिर से जान
                  </h3>

                  {/* क्या होता है */}
                  <div className="mt-2 text-xs bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#588157]">क्या होता है?</span>
                    <p className="text-[#1C1C1C]/85 mt-0.5 leading-relaxed">
                      “ऐसी खेती की तकनीकों को अपनाना जिनसे मिट्टी में जैविक पदार्थ, सूक्ष्मजीव और Carbon बढ़ाने में मदद मिले।”
                    </p>
                  </div>

                  {/* Visual Illustration: Soil Layers */}
                  <div className="my-3 py-2 px-3 bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl border border-amber-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <svg className="w-12 h-8 text-amber-800 shrink-0" viewBox="0 0 60 40" fill="none">
                        <rect x="5" y="8" width="50" height="7" rx="2" fill="#84cc16" fillOpacity="0.4" />
                        <rect x="5" y="17" width="50" height="9" rx="2" fill="#a16207" fillOpacity="0.5" />
                        <rect x="5" y="28" width="50" height="9" rx="2" fill="#451a03" fillOpacity="0.6" />
                        <path d="M15 8 Q17 18 14 26" stroke="#451a03" strokeWidth="1.5" />
                        <path d="M30 8 Q32 20 28 32" stroke="#451a03" strokeWidth="1.5" />
                        <path d="M45 8 Q43 17 46 25" stroke="#451a03" strokeWidth="1.5" />
                      </svg>
                      <div>
                        <div className="font-bold text-[11px] text-[#4B3621]">मिट्टी की जैविक परत</div>
                        <div className="text-[10px] text-amber-900">गहरी जड़ें • केंचुआ • पोषक कार्बन</div>
                      </div>
                    </div>
                  </div>

                  {/* किसान को क्या लाभ? */}
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#1A3C2E] text-xs">किसान को क्या लाभ?</div>
                    <ul className="space-y-1 text-[#1C1C1C]/85">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>मिट्टी की गुणवत्ता और उर्वरा शक्ति में सुधार</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>मिट्टी की पानी रोकने की क्षमता (नमी) में मदद</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>लंबे समय में soil health बेहतर करने में मदद</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>खेती को अधिक टिकाऊ और लचीला बनाने में मदद</span>
                      </li>
                    </ul>
                  </div>

                  {/* Carbon Benefit */}
                  <div className="mt-3 p-2 bg-amber-50/80 rounded-lg border border-amber-200/80 text-[11px]">
                    <span className="font-bold text-amber-950">🌍 Carbon Benefit:</span>
                    <p className="text-amber-900 leading-snug mt-0.5">
                      मिट्टी में Organic Carbon को बढ़ाने और लंबे समय तक सुरक्षित रखने में मदद।
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px] font-bold text-[#1A3C2E]">
                  <span>Carbon Project</span>
                  <span className="text-[#588157] flex items-center gap-1">
                    अतिरिक्त आय का अवसर <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>

              {/* ---------------- CARD 3: BIOCHAR ---------------- */}
              <article className="bg-[#FAF9F6] border border-[#588157]/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#588157]/50 transition-colors shadow-sm relative">
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-orange-700" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-orange-800 tracking-wider">Carbon Removal</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1A3C2E] mt-2.5">
                    🔥 Biochar — कृषि अवशेष से Carbon Storage
                  </h3>

                  {/* क्या होता है */}
                  <div className="mt-2 text-xs bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#588157]">क्या होता है?</span>
                    <p className="text-[#1C1C1C]/85 mt-0.5 leading-relaxed">
                      “धान की भूसी और अन्य biomass से Biochar बनाया जाता है और उपयुक्त होने पर मिट्टी में उपयोग किया जाता है।”
                    </p>
                  </div>

                  {/* Visual Illustration: Husk -> Biochar -> Soil */}
                  <div className="my-3 py-2 px-3 bg-gradient-to-r from-orange-50 to-stone-50 rounded-xl border border-orange-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#4B3621] w-full justify-between">
                      <span className="bg-white px-1.5 py-0.5 rounded border border-orange-200">धान भूसी</span>
                      <ArrowRight className="w-3 h-3 text-orange-600 shrink-0" />
                      <span className="bg-[#1C1C1C] text-white px-1.5 py-0.5 rounded">Biochar</span>
                      <ArrowRight className="w-3 h-3 text-orange-600 shrink-0" />
                      <span className="bg-[#588157] text-white px-1.5 py-0.5 rounded">खेत मिट्टी</span>
                      <ArrowRight className="w-3 h-3 text-orange-600 shrink-0" />
                      <span className="bg-amber-100 text-[#4B3621] px-1.5 py-0.5 rounded font-bold">Lock 100+ Yr</span>
                    </div>
                  </div>

                  {/* किसान को क्या लाभ? */}
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#1A3C2E] text-xs">किसान को क्या लाभ?</div>
                    <ul className="space-y-1 text-[#1C1C1C]/85">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>कृषि अवशेष (पराली/भूसी) का स्थायी उपयोग</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>मिट्टी में Carbon जोड़ने में दीर्घकालिक मदद</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>मिट्टी की water-holding (जल-धारण) क्षमता में मदद</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>खेत में soil improvement का बड़ा अवसर</span>
                      </li>
                    </ul>
                  </div>

                  {/* Carbon Benefit */}
                  <div className="mt-3 p-2 bg-orange-50/80 rounded-lg border border-orange-200/80 text-[11px]">
                    <span className="font-bold text-orange-950">🌍 Carbon Benefit:</span>
                    <p className="text-orange-900 leading-snug mt-0.5">
                      Biochar में Carbon को सैकड़ों वर्षों तक सुरक्षित रखने में मदद।
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px] font-bold text-[#1A3C2E]">
                  <span>Carbon Removal</span>
                  <span className="text-[#588157] flex items-center gap-1">
                    अतिरिक्त आय का अवसर <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>

              {/* ---------------- CARD 4: AGROFORESTRY ---------------- */}
              <article className="bg-[#FAF9F6] border border-[#588157]/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#588157]/50 transition-colors shadow-sm relative">
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Trees className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">Crops + Trees</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1A3C2E] mt-2.5">
                    🌳 Agroforestry — खेत + पेड़
                  </h3>

                  {/* क्या होता है */}
                  <div className="mt-2 text-xs bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#588157]">क्या होता है?</span>
                    <p className="text-[#1C1C1C]/85 mt-0.5 leading-relaxed">
                      “उपयुक्त पेड़ों और फसलों को एक साथ खेत में विकसित करने की सुनियोजित व्यवस्था।”
                    </p>
                  </div>

                  {/* Visual Illustration: Crops with tree boundaries */}
                  <div className="my-3 py-2 px-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <svg className="w-12 h-8 text-emerald-700 shrink-0" viewBox="0 0 60 40" fill="none">
                        <circle cx="10" cy="14" r="8" fill="#15803d" />
                        <line x1="10" y1="22" x2="10" y2="36" stroke="#451a03" strokeWidth="2.5" />
                        <circle cx="50" cy="14" r="8" fill="#15803d" />
                        <line x1="50" y1="22" x2="50" y2="36" stroke="#451a03" strokeWidth="2.5" />
                        <path d="M22 35 Q26 22 30 35 Q34 22 38 35" stroke="#65a30d" strokeWidth="2" fill="none" />
                      </svg>
                      <div>
                        <div className="font-bold text-[11px] text-[#1A3C2E]">खेत की मेड़ पर पेड़</div>
                        <div className="text-[10px] text-emerald-800">फसल सुरक्षित • अतिरिक्त काष्ठ/फल</div>
                      </div>
                    </div>
                  </div>

                  {/* किसान को क्या लाभ? */}
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#1A3C2E] text-xs">किसान को क्या लाभ?</div>
                    <ul className="space-y-1 text-[#1C1C1C]/85">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>अतिरिक्त कृषि/वृक्ष आधारित आय का अवसर</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>खेत में जैव विविधता व छाया बढ़ाने में मदद</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>मिट्टी और पर्यावरण दोनों के लिए सतत लाभ</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>लंबे समय में अतिरिक्त संसाधन व संपत्ति</span>
                      </li>
                    </ul>
                  </div>

                  {/* Carbon Benefit */}
                  <div className="mt-3 p-2 bg-emerald-50/80 rounded-lg border border-emerald-200/80 text-[11px]">
                    <span className="font-bold text-emerald-950">🌍 Carbon Benefit:</span>
                    <p className="text-emerald-900 leading-snug mt-0.5">
                      पेड़ों द्वारा Carbon को वातावरण से हटाकर Biomass (लकड़ी व जड़ों) में store करना।
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px] font-bold text-[#1A3C2E]">
                  <span>Carbon Project</span>
                  <span className="text-[#588157] flex items-center gap-1">
                    अतिरिक्त आय का अवसर <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>

              {/* ---------------- CARD 5: ARR ---------------- */}
              <article className="bg-[#FAF9F6] border border-[#588157]/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#588157]/50 transition-colors shadow-sm relative md:col-span-2 lg:col-span-1">
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <TreePine className="w-5 h-5 text-teal-700" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-teal-800 tracking-wider">Afforestation</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1A3C2E] mt-2.5">
                    🌲 ARR — फिर से हरियाली
                  </h3>
                  <div className="text-[10px] text-[#4B3621]/80 font-medium">
                    (Afforestation, Reforestation & Revegetation)
                  </div>

                  {/* क्या होता है */}
                  <div className="mt-2 text-xs bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#588157]">क्या होता है?</span>
                    <p className="text-[#1C1C1C]/85 mt-0.5 leading-relaxed">
                      “उपयुक्त या कम उपजाऊ भूमि पर योजनाबद्ध पेड़-पौधों की स्थापना और लंबे समय तक उनकी देखभाल।”
                    </p>
                  </div>

                  {/* Visual Illustration: Bare land to woodland */}
                  <div className="my-3 py-2 px-3 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <svg className="w-12 h-8 text-teal-800 shrink-0" viewBox="0 0 60 40" fill="none">
                        <path d="M5 36 Q15 32 30 36 Q45 32 55 36" stroke="#78716c" strokeWidth="2" />
                        <path d="M12 34 L18 20 L24 34 Z" fill="#0d9488" />
                        <path d="M26 34 L33 14 L40 34 Z" fill="#0f766e" />
                        <path d="M42 34 L48 18 L54 34 Z" fill="#115e59" />
                      </svg>
                      <div>
                        <div className="font-bold text-[11px] text-[#1A3C2E]">बंजर भूमि का रूपांतरण</div>
                        <div className="text-[10px] text-teal-900">भू-जल संवर्धन • प्राकृतिक संतुलन</div>
                      </div>
                    </div>
                  </div>

                  {/* किसान को क्या लाभ? */}
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#1A3C2E] text-xs">किसान को क्या लाभ?</div>
                    <ul className="space-y-1 text-[#1C1C1C]/85">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>कम उपजाऊ या खाली जमीन का सदुपयोग</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>मिट्टी का क्षरण रुकना व पर्यावरण में सुधार</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>लंबे समय में हरियाली और प्राकृतिक संतुलन</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#588157] shrink-0 mt-0.5" />
                        <span>ग्रामीण क्षेत्रों में नए अवसर व संपदा</span>
                      </li>
                    </ul>
                  </div>

                  {/* Carbon Benefit */}
                  <div className="mt-3 p-2 bg-teal-50/80 rounded-lg border border-teal-200/80 text-[11px]">
                    <span className="font-bold text-teal-950">🌍 Carbon Benefit:</span>
                    <p className="text-teal-900 leading-snug mt-0.5">
                      पेड़ों द्वारा भारी मात्रा में Carbon Sequestration (वातावरण से Carbon सोखना)।
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px] font-bold text-[#1A3C2E]">
                  <span>Carbon Project</span>
                  <span className="text-[#588157] flex items-center gap-1">
                    अतिरिक्त आय का अवसर <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>

              {/* ---------------- HOW CARBON CREDIT WORKS EXPLAINER (Bonus 6th slot for 2-row grid balance) ---------------- */}
              <article className="bg-[#FAF4E8] border border-[#D4AF37]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#D4AF37] transition-colors shadow-sm relative md:col-span-2 lg:col-span-1">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#4B3621] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-[#4B3621]" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-[#4B3621] tracking-wider">How It Works</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#4B3621] mt-2.5">
                    💡 कार्बन क्रेडिट से आय कैसे होती है?
                  </h3>

                  <div className="mt-2.5 space-y-2 text-xs text-[#1C1C1C]/90">
                    <div className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-[#D4AF37]/25">
                      <span className="w-5 h-5 rounded-full bg-[#588157] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                      <div>
                        <strong className="text-[#1A3C2E]">खेत में बदलाव:</strong>
                        <p className="text-[11px] text-[#4B3621]/90">किसान AWD, बायोचार या पेड़ लगाने जैसी पद्धति अपनाता है।</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-[#D4AF37]/25">
                      <span className="w-5 h-5 rounded-full bg-[#1A3C2E] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                      <div>
                        <strong className="text-[#1A3C2E]">सत्यापन (MRV):</strong>
                        <p className="text-[11px] text-[#4B3621]/90">MANKHE टीम सेटेलाइट और फील्ड विजिट से बदलाव प्रमाणित करती है।</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-[#D4AF37]/25">
                      <span className="w-5 h-5 rounded-full bg-[#588157] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                      <div>
                        <strong className="text-[#1A3C2E]">क्रेडिट जारी:</strong>
                        <p className="text-[11px] text-[#4B3621]/90">अंतरराष्ट्रीय रजिस्ट्री द्वारा कार्बन क्रेडिट प्रमाणित किए जाते हैं।</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-[#D4AF37]/25">
                      <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#1A3C2E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</span>
                      <div>
                        <strong className="text-[#1A3C2E]">अतिरिक्त लाभ:</strong>
                        <p className="text-[11px] text-[#4B3621]/90">क्रेडिट बिकने पर तय शर्तों के अनुसार किसान को आमदनी मिलती है।</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#D4AF37]/30 text-[11px] font-bold text-[#4B3621] flex items-center justify-between">
                  <span>पारदर्शी प्रक्रिया</span>
                  <span className="text-[#588157]">Zero Scam • True Science</span>
                </div>
              </article>

            </div>
          </section>

          {/* ================= HONEST & TRANSPARENT DISCLAIMER ================= */}
          <section className="my-5 bg-[#FAF9F6] border border-amber-300/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-amber-800" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#4B3621]">
                  किसान भाइयों के लिए एक ईमानदार व जरूरी बात (No Exaggerated Claims):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs text-[#1C1C1C]/85 pt-1">
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#588157] font-bold">✓</span>
                    <span><strong>कोई 'मुफ्त पैसा' नहीं:</strong> यह कोई सरकारी योजना नहीं है, बल्कि खेत में किए गए वास्तविक कार्य पर आधारित है।</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#588157] font-bold">✓</span>
                    <span><strong>शर्तों पर निर्भर:</strong> अतिरिक्त आय प्रोजेक्ट की शर्तों, सत्यापन और कार्बन मार्केट के नियमों के अनुसार मिलती है।</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#588157] font-bold">✓</span>
                    <span><strong>पहला लक्ष्य अच्छी फसल:</strong> खेती का मुख्य उद्देश्य हमेशा बेहतर पैदावार व उपजाऊ जमीन है; कार्बन आय एक अतिरिक्त बोनस है।</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= FOOTER / STALL CTA ================= */}
          <footer className="mt-6 pt-5 border-t border-stone-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              
              {/* Left Column: Organization Details */}
              <div className="space-y-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-base font-black tracking-tight text-[#1A3C2E]">MANKHE Private Limited</span>
                </div>
                <p className="text-xs text-[#4B3621]/80">
                  DPIIT Recognized Startup • छत्तीसगढ़ की मिट्टी और किसानों के साथ
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-[11px] text-stone-600 pt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#588157]" /> रायपुर व धमतरी, छत्तीसगढ़
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#588157]" /> admin@mankhe.com
                  </span>
                </div>
              </div>

              {/* Middle Column: Stall Invitation CTA */}
              <div className="bg-[#1A3C2E] text-white p-3 rounded-xl text-center shadow-sm">
                <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                  प्रदर्शनी स्टॉल पर आपका स्वागत है
                </div>
                <p className="text-xs text-white/90 mt-0.5 leading-snug">
                  "हमारे स्टॉल प्रतिनिधि से सीधे बात करें और अपने खेत/गांव की जानकारी साझा करें।"
                </p>
              </div>

              {/* Right Column: QR Code & Website */}
              <div className="flex items-center justify-center md:justify-end gap-3 text-center md:text-right">
                <div>
                  <div className="text-xs font-bold text-[#1A3C2E]">वेबसाइट देखें व जुड़ें</div>
                  <div className="text-[11px] text-[#588157] font-medium">www.mankhe.com</div>
                  <div className="text-[10px] text-stone-500">कैमरे से स्कैन करें</div>
                </div>

                {/* Clean Vector SVG QR Code */}
                <div className="p-1.5 bg-white border border-stone-300 rounded-lg shadow-sm shrink-0">
                  <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none">
                    {/* Corner anchors */}
                    <rect x="10" y="10" width="28" height="28" rx="4" fill="#1A3C2E" />
                    <rect x="16" y="16" width="16" height="16" rx="2" fill="#FFFFFF" />
                    <rect x="20" y="20" width="8" height="8" rx="1" fill="#1A3C2E" />

                    <rect x="62" y="10" width="28" height="28" rx="4" fill="#1A3C2E" />
                    <rect x="68" y="16" width="16" height="16" rx="2" fill="#FFFFFF" />
                    <rect x="72" y="20" width="8" height="8" rx="1" fill="#1A3C2E" />

                    <rect x="10" y="62" width="28" height="28" rx="4" fill="#1A3C2E" />
                    <rect x="16" y="68" width="16" height="16" rx="2" fill="#FFFFFF" />
                    <rect x="20" y="72" width="8" height="8" rx="1" fill="#1A3C2E" />

                    {/* QR code dots matrix */}
                    <rect x="44" y="14" width="6" height="6" fill="#1A3C2E" />
                    <rect x="52" y="20" width="6" height="6" fill="#588157" />
                    <rect x="44" y="28" width="6" height="6" fill="#1A3C2E" />
                    <rect x="14" y="44" width="6" height="6" fill="#1A3C2E" />
                    <rect x="24" y="50" width="6" height="6" fill="#588157" />
                    <rect x="44" y="44" width="12" height="12" rx="2" fill="#1A3C2E" />
                    <rect x="62" y="44" width="6" height="6" fill="#588157" />
                    <rect x="76" y="50" width="6" height="6" fill="#1A3C2E" />
                    <rect x="44" y="62" width="6" height="6" fill="#588157" />
                    <rect x="52" y="74" width="6" height="6" fill="#1A3C2E" />
                    <rect x="64" y="66" width="8" height="8" fill="#1A3C2E" />
                    <rect x="78" y="78" width="8" height="8" fill="#588157" />
                  </svg>
                </div>
              </div>

            </div>
          </footer>

        </div>
      </main>
    </div>
  );
}
