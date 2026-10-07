import React, { useState } from 'react';
import {
  BusinessCategory,
  BusinessNeed,
  Language,
  NavTab,
  ToolCategory,
} from '../types';
import {
  BUSINESS_CATEGORIES,
  BUSINESS_NEEDS,
  UI_LABELS,
  t,
} from '../data/translations';
import { SCHEMES_DATA } from '../data/schemesData';
import { DEMO_PROFILES, MAHARASHTRA_DISTRICTS } from '../data/districtsAndResourcesData';
import {
  ArrowRight,
  Sparkles,
  FileText,
  Wrench,
  BookOpen,
  MapPin,
  TrendingUp,
  Building,
  Users,
  Compass,
  Award,
  ChevronRight,
  ExternalLink,
  Mic,
  Printer,
} from 'lucide-react';

interface HomeViewProps {
  language: Language;
  onNavigate: (tab: NavTab) => void;
  onSelectCategory: (cat: BusinessCategory) => void;
  onSelectNeed: (need: BusinessNeed) => void;
  onSelectDistrict: (dist: string) => void;
  onSelectScheme: (schemeId: string) => void;
  onSelectToolCategory: (category: ToolCategory) => void;
  onSelectProfile: (profileId: string) => void;
  onOpenVoice: () => void;
  readinessScore: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  language,
  onNavigate,
  onSelectCategory,
  onSelectNeed,
  onSelectDistrict,
  onSelectScheme,
  onSelectToolCategory,
  onSelectProfile,
  onOpenVoice,
  readinessScore: _readinessScore,
}) => {
  const [selectedCat, setSelectedCat] = useState<BusinessCategory>('Food Processing');
  const [selectedDist, setSelectedDist] = useState<string>('Nashik');
  const [selectedN, setSelectedN] = useState<BusinessNeed>('Funding');

  const matchingSchemes = SCHEMES_DATA.filter(
    (s) =>
      s.categories.includes(selectedCat) &&
      s.needs.includes(selectedN)
  );

  const displaySchemes = matchingSchemes.length > 0
    ? matchingSchemes
    : SCHEMES_DATA.filter((s) => s.categories.includes(selectedCat) || s.needs.includes(selectedN));

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-stone-50 to-stone-100/40 border-b border-stone-200 pt-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Editorial Kicker */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-stone-600 font-sans">
            <span className="text-stone-900 font-semibold tracking-wide uppercase text-[11px]">
              {t({ en: 'Maharashtra Grassroots Enterprise Companion', mr: 'महाराष्ट्र ग्रामीण उद्योजक सहाय्यक', hi: 'महाराष्ट्र ग्रामीण उद्यमी साथी' }, language)}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>
              {t({ en: '100% Free Public Initiative', mr: '१००% मोफत नागरी उपक्रम', hi: '100% निःशुल्क नागरिक पहल' }, language)}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>
              {t({ en: 'Verified Portals & Direct Benefits', mr: 'अधिकृत माहिती व थेट लाभ', hi: 'सत्यापित पोर्टल व प्रत्यक्ष लाभ' }, language)}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Mission */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
                {t(UI_LABELS.heroTitle, language)}
              </h1>

              <p className="text-lg text-stone-700 font-sans leading-relaxed max-w-2xl">
                {t(UI_LABELS.heroSubtitle, language)}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('schemes')}
                  className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-xl text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>{t(UI_LABELS.findSchemes, language)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('tools')}
                  className="px-5 py-3.5 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 font-medium rounded-xl text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-4 h-4 text-amber-700" />
                  <span>{t(UI_LABELS.exploreTools, language)}</span>
                </button>

                <button
                  onClick={onOpenVoice}
                  className="px-4 py-3.5 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 font-medium rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Mic className="w-4 h-4 text-amber-800" />
                  <span className="font-semibold">{t({ en: 'Ask in Marathi / Hindi', mr: 'मराठी / हिंदी मध्ये बोला', hi: 'मराठी / हिंदी में बोलें' }, language)}</span>
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/80 text-xs">
                <div>
                  <div className="font-serif font-bold text-xl text-stone-900">36</div>
                  <div className="text-stone-600 font-medium">{t({ en: 'Districts of Maharashtra', mr: 'महाराष्ट्रातील ३६ जिल्हे', hi: 'महाराष्ट्र के 36 जिले' }, language)}</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl text-stone-900">₹50L</div>
                  <div className="text-stone-600 font-medium">{t({ en: 'Max Subsidy Linked Loans', mr: 'कमाल अनुदान कर्ज मर्यादा', hi: 'अधिकतम सब्सिडी ऋण सीमा' }, language)}</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl text-stone-900">100%</div>
                  <div className="text-stone-600 font-medium">{t({ en: 'Zero Commission / Free', mr: 'विनामूल्य व दलालीमुक्त', hi: 'निःशुल्क व दलाली मुक्त' }, language)}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick Match Finder */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-stone-900 rounded-2xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-amber-700" />
                    <span className="font-serif font-bold text-stone-900 text-base">
                      {t({ en: 'Interactive Guidance Desk', mr: 'उद्योग मार्गदर्शन डेस्क', hi: 'उद्यम मार्गदर्शन डेस्क' }, language)}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 text-xs font-semibold rounded">
                    {displaySchemes.length} {t({ en: 'Schemes Found', mr: 'योजना उपलब्ध', hi: 'योजनाएं उपलब्ध' }, language)}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Category Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      {t({ en: '1. What business are you running or planning?', mr: '१. तुमचा व्यवसाय कोणता आहे?', hi: '1. आपका व्यवसाय कौन सा है?' }, language)}
                    </label>
                    <select
                      value={selectedCat}
                      onChange={(e) => setSelectedCat(e.target.value as BusinessCategory)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {BUSINESS_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {t(c.label, language)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      {t({ en: '2. Your District in Maharashtra', mr: '२. तुमचा जिल्हा निवडा', hi: '2. अपना जिला चुनें' }, language)}
                    </label>
                    <select
                      value={selectedDist}
                      onChange={(e) => setSelectedDist(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {MAHARASHTRA_DISTRICTS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {t(d.name, language)} ({t(d.region, language)})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Need Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      {t({ en: '3. What help do you need most?', mr: '३. तुम्हाला मुख्यत्वे काय मदत हवी आहे?', hi: '3. आपको मुख्य रूप से क्या मदद चाहिए?' }, language)}
                    </label>
                    <select
                      value={selectedN}
                      onChange={(e) => setSelectedN(e.target.value as BusinessNeed)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {BUSINESS_NEEDS.map((n) => (
                        <option key={n.id} value={n.id}>
                          {t(n.label, language)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Top Matching Scheme Preview */}
                  {displaySchemes.length > 0 && (
                    <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl mt-3">
                      <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">
                        {t({ en: 'Top Match for You:', mr: 'तुमच्यासाठी प्रमुख योजना:', hi: 'आपके लिए प्रमुख योजना:' }, language)}
                      </div>
                      <div className="font-serif font-bold text-stone-900 text-sm">
                        {t(displaySchemes[0].title, language)}
                      </div>
                      <div className="text-xs text-stone-600 mt-1 line-clamp-2">
                        {t(displaySchemes[0].benefitSummary, language)}
                      </div>
                    </div>
                  )}

                  {/* Search Button */}
                  <button
                    onClick={() => {
                      onSelectCategory(selectedCat);
                      onSelectDistrict(selectedDist);
                      onSelectNeed(selectedN);
                      onNavigate('schemes');
                    }}
                    className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <span>{t({ en: 'See Full Checklist & Subsidy Details', mr: 'संपूर्ण कागदपत्रे व अनुदानाचे तपशील पहा', hi: 'दस्तावेज व सब्सिडी का पूरा विवरण देखें' }, language)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Entrepreneur Personas in Maharashtra */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-amber-800 tracking-wider mb-1">
              {t({ en: 'Real Maharashtra Case Studies & Personas', mr: 'महाराष्ट्रातील उद्योजकांच्या यशोगाथा व मार्ग', hi: 'महाराष्ट्र के उद्यमियों की वास्तविक केस स्टडी' }, language)}
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
              {t({ en: 'Learn How Fellow Entrepreneurs Succeeded', mr: 'इतर स्थानिक उद्योजकांनी कसे यश मिळवले ते पहा', hi: 'देखें अन्य स्थानीय उद्यमियों ने कैसे सफलता पाई' }, language)}
            </h2>
          </div>
          <div className="text-xs text-stone-500 font-sans">
            {t({ en: 'Click any profile to load personalized dashboard & checklist', mr: 'वैयक्तिक डॅशबोर्ड व कागदपत्रांसाठी प्रोफाइल निवडा', hi: 'व्यक्तिगत डैशबोर्ड देखने के लिए प्रोफाइल चुनें' }, language)}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEMO_PROFILES.map((profile) => (
            <div
              key={profile.id}
              onClick={() => {
                onSelectProfile(profile.id);
                onNavigate('dashboard');
              }}
              className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-900 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded">
                    {profile.district}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {profile.stage}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-stone-900 text-lg group-hover:text-amber-700 transition-colors">
                  {profile.name}
                </h3>
                <div className="text-xs font-medium text-stone-600 mb-2 font-sans">
                  {profile.businessName}
                </div>
                <div className="text-xs text-stone-500 mb-3">
                  {profile.category} • {profile.taluka}
                </div>

                <div className="bg-stone-50 rounded-lg p-2.5 text-xs text-stone-700 border border-stone-100 mb-4">
                  <div className="font-semibold text-stone-900 mb-1">
                    {t({ en: 'Products:', mr: 'उत्पादने:', hi: 'उत्पाद:' }, language)}
                  </div>
                  <div className="line-clamp-2">{profile.products}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-900 group-hover:text-amber-700">
                <span>{t({ en: 'View Action Plan & PDF', mr: 'कृती आराखडा व PDF पहा', hi: 'एक्शन प्लान व PDF देखें' }, language)}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Government Schemes Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs font-semibold uppercase text-amber-800 tracking-wider mb-1">
              {t({ en: 'Verified Financial Support Schemes', mr: 'शासकीय अर्थसहाय्य योजना', hi: 'सत्यापित वित्तीय सहायता योजनाएं' }, language)}
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
              {t({ en: 'Top Subsidies & Loans for Micro Business', mr: 'सूक्ष्म व्यवसायांसाठी प्रमुख अनुदाने व कर्जे', hi: 'सूक्ष्म उद्योगों के लिए मुख्य सब्सिडी व ऋण' }, language)}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('schemes')}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 cursor-pointer"
          >
            <span>{t({ en: 'View All Schemes', mr: 'सर्व योजना पहा', hi: 'सभी योजनाएं देखें' }, language)}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCHEMES_DATA.slice(0, 3).map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white border border-stone-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-stone-100 text-stone-700 text-xs font-semibold rounded">
                    {t(scheme.authority, language)}
                  </span>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {scheme.categories[0]}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  {t(scheme.title, language)}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                  {t(scheme.atAGlance.whatDoesThisMean, language)}
                </p>

                <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3 text-xs mb-4">
                  <div className="font-bold text-amber-900 mb-0.5">
                    {t({ en: 'Financial Benefit:', mr: 'आर्थिक लाभ:', hi: 'वित्तीय लाभ:' }, language)}
                  </div>
                  <div className="text-stone-700">{t(scheme.benefitSummary, language)}</div>
                </div>

                <div className="text-xs text-stone-500 font-sans space-y-1 mb-4">
                  <div>• Max Subsidy: {scheme.maxSubsidy}</div>
                  <div>• Docs required: {scheme.documentsRequired.length} verified documents</div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    onSelectScheme(scheme.id);
                    onNavigate('schemes');
                  }}
                  className="text-xs font-bold text-stone-900 hover:text-amber-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t({ en: 'Check Documents & Apply', mr: 'कागदपत्रे तपासा व अर्ज करा', hi: 'दस्तावेज जांचें व आवेदन करें' }, language)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Digital Business School Banner */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded text-xs font-sans font-medium mb-4">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{t({ en: 'Rural Digital Business School', mr: 'ग्रामीण डिजिटल व्यवसाय शाळा', hi: 'ग्रामीण डिजिटल व्यापार स्कूल' }, language)}</span>
            </span>

            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-3">
              {t({ en: 'Run Your Village Business Like a Modern Brand', mr: 'तुमचा गावचा व्यवसाय आधुनिक ब्रँडप्रमाणे चालवा', hi: 'अपने ग्रामीण व्यवसाय को आधुनिक ब्रांड की तरह चलाएं' }, language)}
            </h2>

            <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6">
              {t({
                en: 'Step-by-step guides with zero English technical jargon: Set up WhatsApp catalog for orders, accept QR code payments, register on Google Maps so travellers stop at your shop.',
                mr: 'तांत्रिक इंग्रजी शब्दांशिवाय सोपे मराठी व हिंदी धडे: ऑर्डरसाठी व्हॉट्सॲप कॅटलॉग, क्यूआर कोड पेमेंट आणि गुगल मॅप्सवर तुमचे दुकान नोंदवणे.',
                hi: 'सरल भाषा में सीखें: व्हाट्सएप कैटलॉग से ऑर्डर लेना, क्यूआर कोड पेमेंट और गूगल मैप्स पर दुकान जोड़ना।',
              }, language)}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('learn')}
                className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{t({ en: 'Start Practical Lessons', mr: 'प्रात्यक्षिक धडे सुरू करा', hi: 'व्यावहारिक सबक शुरू करें' }, language)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('readiness')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium rounded-xl text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>{t({ en: 'Check My Readiness Score', mr: 'माझा डिजिटल स्कोअर तपासा', hi: 'मेरा डिजिटल स्कोर जांचें' }, language)}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Tools Category Quick Access */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <div className="text-xs font-mono font-semibold uppercase text-amber-700 mb-1">
            {t({ en: 'Practical Tool Library', mr: 'डिजिटल साधनांची लायब्ररी', hi: 'डिजिटल टूल्स लाइब्रेरी' }, language)}
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            {t({ en: 'Tools Categorized by What You Want to Solve', mr: 'समस्येनुसार डिजिटल साधने शोधा', hi: 'समस्या के अनुसार डिजिटल टूल्स खोजें' }, language)}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { id: 'Get Paid' as ToolCategory, icon: TrendingUp, label: { en: 'Get Paid', mr: 'पैसे मिळवा', hi: 'पैसे प्राप्त करें' }, desc: 'UPI & QR' },
            { id: 'Talk to Customers' as ToolCategory, icon: Users, label: { en: 'Customer Chat', mr: 'ग्राहकांशी संवाद', hi: 'ग्राहकों से चैट' }, desc: 'WhatsApp Business' },
            { id: 'Show Your Products' as ToolCategory, icon: FileText, label: { en: 'Show Products', mr: 'उत्पादने दाखवा', hi: 'उत्पाद दिखाएं' }, desc: 'Canva & Catalog' },
            { id: 'Find Customers' as ToolCategory, icon: MapPin, label: { en: 'Find Customers', mr: 'नवीन ग्राहक', hi: 'ग्राहक खोजें' }, desc: 'Google Business' },
            { id: 'Manage Business' as ToolCategory, icon: Building, label: { en: 'Manage Books', mr: 'हिशोब ठेवा', hi: 'खाता संभालें' }, desc: 'Khatabook / Udhaar' },
            { id: 'Sell Online' as ToolCategory, icon: ExternalLink, label: { en: 'Sell Online', mr: 'ऑनलाइन विक्री', hi: 'ऑनलाइन बेचें' }, desc: 'ONDC & Postal' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectToolCategory(item.id);
                  onNavigate('tools');
                }}
                className="bg-white border border-stone-200 hover:border-amber-500 rounded-xl p-4 text-left transition-all hover:shadow-xs group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-100 group-hover:bg-amber-100 flex items-center justify-center text-stone-700 group-hover:text-amber-800 mb-2 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-serif font-bold text-stone-900 text-sm mb-0.5">
                  {t(item.label, language)}
                </div>
                <div className="text-xs text-stone-500 font-mono">{item.desc}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Printable Readiness & Action Centre Card */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-200/60 text-amber-900 rounded text-xs font-mono font-bold">
              <Printer className="w-3.5 h-3.5" />
              <span>{t({ en: 'Downloadable Physical Document', mr: 'छापील अहवाल व कागदपत्र यादी', hi: 'प्रिंट करने योग्य रिपोर्ट व दस्तावेज' }, language)}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {t({ en: 'Download Your Official Document Checklist as PDF', mr: 'तुमची कागदपत्रे व तयारीचा अहवाल PDF स्वरूपात डाउनलोड करा', hi: 'अपनी दस्तावेज चेकलिस्ट व तैयारी रिपोर्ट PDF में डाउनलोड करें' }, language)}
            </h3>
            <p className="text-stone-700 text-sm max-w-2xl leading-relaxed">
              {t({
                en: 'Print out your tailored document readiness score, pending bank verifications, and scheme action plans to take directly to your local Maha E-Seva Kendra or District Industries Centre (DIC).',
                mr: 'तुमची आवश्यक कागदपत्रे, बँक अटी आणि योजनांचा वैयक्तिक अहवाल थेट PDF मध्ये डाउनलोड करून प्रिंट करा आणि आपल्या स्थानिक महाईसेवा केंद्र किंवा जिल्हा उद्योग केंद्रात सोबत घेऊन जा.',
                hi: 'अपनी आवश्यक दस्तावेज चेकलिस्ट और तैयारी रिपोर्ट को सीधे PDF में डाउनलोड कर प्रिंट करें और अपने नजदीकी सीएससी या डीआईसी कार्यालय ले जाएं।',
              }, language)}
            </p>
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="shrink-0 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>{t({ en: 'Go to Action Centre & Print PDF', mr: 'ॲक्शन सेंटरमध्ये जा व PDF घ्या', hi: 'एक्शन सेंटर जाएं व PDF प्राप्त करें' }, language)}</span>
          </button>
        </div>
      </section>
    </div>
  );
};
