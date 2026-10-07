import React, { useState, useEffect } from 'react';
import {
  BusinessCategory,
  BusinessNeed,
  Language,
  Scheme,
} from '../types';
import { SCHEMES_DATA, DOCUMENTS_MASTER } from '../data/schemesData';
import { MAHARASHTRA_DISTRICTS } from '../data/districtsAndResourcesData';
import { BUSINESS_CATEGORIES, BUSINESS_NEEDS, UI_LABELS, t } from '../data/translations';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  CheckCircle2,
  Volume2,
  VolumeX,
  AlertTriangle,
  Building2,
  SlidersHorizontal,
} from 'lucide-react';

interface SchemeFinderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  selectedCategory: BusinessCategory;
  setSelectedCategory: (cat: BusinessCategory) => void;
  selectedDistrict: string;
  setSelectedDistrict: (dist: string) => void;
  selectedNeed: BusinessNeed;
  setSelectedNeed: (need: BusinessNeed) => void;
  selectedSchemeId: string | null;
  setSelectedSchemeId: (id: string | null) => void;
  checkedDocs: string[];
  onToggleDoc: (docId: string) => void;
  savedSchemes: string[];
  onToggleSaveScheme: (schemeId: string) => void;
}

export const SchemeViews: React.FC<SchemeFinderProps> = ({
  lang,
  setLang,
  selectedCategory,
  setSelectedCategory,
  selectedDistrict,
  setSelectedDistrict,
  selectedNeed,
  setSelectedNeed,
  selectedSchemeId,
  setSelectedSchemeId,
  checkedDocs,
  onToggleDoc,
  savedSchemes,
  onToggleSaveScheme,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(4);
  const [selectedTaluka, setSelectedTaluka] = useState<string>('Niphad');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentDistrictObj =
    MAHARASHTRA_DISTRICTS.find((d) => d.id === selectedDistrict) || MAHARASHTRA_DISTRICTS[0];

  useEffect(() => {
    if (currentDistrictObj && currentDistrictObj.talukas.length > 0) {
      setSelectedTaluka(currentDistrictObj.talukas[0]);
    }
  }, [selectedDistrict]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedSchemeId]);

  const activeScheme: Scheme | undefined = selectedSchemeId
    ? SCHEMES_DATA.find((s) => s.id === selectedSchemeId)
    : undefined;

  const scoredSchemes = SCHEMES_DATA.map((scheme) => {
    const categoryMatch = scheme.categories.includes(selectedCategory);
    const needMatch = scheme.needs.includes(selectedNeed);
    const districtMatch =
      scheme.districts.includes('All') || scheme.districts.includes(selectedDistrict);

    let score = 0;
    if (categoryMatch) score += 50;
    if (needMatch) score += 35;
    if (districtMatch) score += 15;

    return {
      scheme,
      score,
      categoryMatch,
      needMatch,
      districtMatch,
    };
  }).sort((a, b) => b.score - a.score);

  const handlePlayAudio = (scheme: Scheme) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSpeaking(!isSpeaking);
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(t(scheme.audioScript, lang));
      utterance.lang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (activeScheme) {
    const isSaved = savedSchemes.includes(activeScheme.id);
    const requiredDocIds = activeScheme.documentsRequired;
    const completedCount = requiredDocIds.filter((id) => checkedDocs.includes(id)).length;

    const timelineSteps = [
      {
        num: '01',
        title: { en: 'Check Eligibility', mr: 'पात्रता तपासा', hi: 'पात्रता जांचें' },
        desc: {
          en: 'Confirm age, rural location & business type',
          mr: 'वय, ग्रामीण पत्ता आणि व्यवसाय प्रकार तपासा',
          hi: 'आयु, ग्रामीण पता और व्यवसाय प्रकार जांचें',
        },
      },
      {
        num: '02',
        title: { en: 'Prepare Documents', mr: 'कागदपत्रे तयार करा', hi: 'दस्तावेज तैयार करें' },
        desc: {
          en: `${completedCount}/${requiredDocIds.length} documents ready in your checklist`,
          mr: `तुमच्या यादीतील ${completedCount}/${requiredDocIds.length} कागदपत्रे तयार`,
          hi: `आपकी सूची के ${completedCount}/${requiredDocIds.length} दस्तावेज तैयार`,
        },
      },
      {
        num: '03',
        title: { en: 'Apply Online / CSC', mr: 'ऑनलाइन / सेवा केंद्रात अर्ज', hi: 'ऑनलाइन / CSC से आवेदन' },
        desc: {
          en: 'Submit via official portal or village CSC / DRP',
          mr: 'अधिकृत पोर्टल किंवा गावातील सेवा केंद्रामार्फत अर्ज',
          hi: 'आधिकारिक पोर्टल या CSC केंद्र से आवेदन',
        },
      },
      {
        num: '04',
        title: { en: 'DIC & Bank Review', mr: 'जिल्हा केंद्र व बँक पडताळणी', hi: 'जिला केंद्र व बैंक सत्यापन' },
        desc: {
          en: 'Verification by District Committee & lending bank',
          mr: 'जिल्हा उद्योग समिती आणि बँकेकडून प्रस्तावाची तपासणी',
          hi: 'जिला समिति और बैंक द्वारा प्रस्ताव की जांच',
        },
      },
      {
        num: '05',
        title: { en: 'Receive Support', mr: 'अनुदान व प्रशिक्षण लाभ', hi: 'सब्सिडी एवं प्रशिक्षण लाभ' },
        desc: {
          en: 'EDP training completion & credit-linked subsidy release',
          mr: 'प्रशिक्षण पूर्ण झाल्यावर बँक खात्यात कर्ज व अनुदान जमा',
          hi: 'प्रशिक्षण पूर्ण होने पर बैंक खाते में ऋण व सब्सिडी',
        },
      },
    ];

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Top Back & Language / Audio Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setSelectedSchemeId(null)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#0F172A] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {lang === 'mr'
                ? 'सर्व शिफारस केलेल्या योजनांकडे परत जा'
                : lang === 'hi'
                ? 'सभी अनुशंसित योजनाओं पर वापस जाएं'
                : 'Back to Scheme Finder Results'}
            </span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-slate-600">
              <span>{lang === 'mr' ? 'भाषा:' : lang === 'hi' ? 'भाषा:' : 'Language:'}</span>
              {(['en', 'mr', 'hi'] as Language[]).map((l, i) => (
                <React.Fragment key={l}>
                  {i > 0 && <span className="text-slate-300">|</span>}
                  <button
                    type="button"
                    onClick={() => setLang(l)}
                    className={`px-1.5 py-0.5 rounded font-medium cursor-pointer ${
                      lang === l ? 'text-[#C25E00] font-semibold underline' : 'hover:text-slate-900'
                    }`}
                  >
                    {l === 'en' ? 'English' : l === 'mr' ? 'मराठी' : 'हिन्दी'}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onToggleSaveScheme(activeScheme.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-amber-50 border-[#C25E00] text-[#9A3412]'
                  : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>
                {isSaved
                  ? lang === 'mr'
                    ? 'जतन केलेली योजना (Saved)'
                    : lang === 'hi'
                    ? 'सहेजी गई योजना (Saved)'
                    : 'Saved in My Resources'
                  : lang === 'mr'
                  ? 'ही योजना जतन करा (Save)'
                  : lang === 'hi'
                  ? 'यह योजना सहेजें (Save)'
                  : 'Save Scheme'}
              </span>
            </button>
          </div>
        </div>

        {/* Document Header Panel */}
        <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono-tabular">
            <span>{activeScheme.code}</span>
            <span aria-hidden="true">·</span>
            <span>{t(UI_LABELS.prototypeNotice, lang)}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#1E3A8A] font-semibold">{activeScheme.maxSubsidy}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] font-display">
              {t(activeScheme.title, lang)}
            </h1>
            <p className="text-sm text-slate-600">{t(activeScheme.authority, lang)}</p>
          </div>

          <div className="bg-[#FAF8F5] border border-slate-200 rounded-md p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <p className="text-xs font-semibold text-[#0F172A]">
                {lang === 'mr'
                  ? 'ही माहिती आवाजात ऐका (Listen to this explanation)'
                  : lang === 'hi'
                  ? 'यह जानकारी आवाज में सुनें (Listen to this explanation)'
                  : 'Listen to this explanation in simple language'}
              </p>
              <p className="text-xs text-slate-600 max-w-2xl">{t(activeScheme.audioScript, lang)}</p>
            </div>

            <button
              type="button"
              onClick={() => handlePlayAudio(activeScheme)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isSpeaking
                  ? 'bg-[#9A3412] text-white'
                  : 'bg-[#0F172A] text-white hover:bg-slate-800'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>
                {isSpeaking
                  ? lang === 'mr'
                    ? 'आवाज थांबवा'
                    : lang === 'hi'
                    ? 'आवाज रोकें'
                    : 'Stop Audio'
                  : lang === 'mr'
                  ? 'मराठीत स्पष्टीकरण ऐका'
                  : lang === 'hi'
                  ? 'हिन्दी में विवरण सुनें'
                  : 'Listen to this explanation'}
              </span>
            </button>
          </div>
        </div>

        {/* AT A GLANCE: Explain -> Simplify -> Show Example -> Give Action */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#0F172A] font-display">
            {lang === 'mr'
              ? '१. एका नजरेत समजून घ्या (At a Glance)'
              : lang === 'hi'
              ? '1. एक नजर में समझें (At a Glance)'
              : '01. At a Glance — Explained Simply'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-md p-5 space-y-2">
              <p className="text-xs font-semibold text-[#1E3A8A]">
                {lang === 'mr'
                  ? 'याचा सोपा अर्थ काय? (What does this mean?)'
                  : lang === 'hi'
                  ? 'इसका सरल अर्थ क्या है? (What does this mean?)'
                  : 'What does this mean?'}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {t(activeScheme.atAGlance.whatDoesThisMean, lang)}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-md p-5 space-y-2">
              <p className="text-xs font-semibold text-[#C25E00]">
                {lang === 'mr'
                  ? 'प्रत्यक्ष उदाहरण (Practical Example)'
                  : lang === 'hi'
                  ? 'व्यावहारिक उदाहरण (Practical Example)'
                  : 'Practical Rural Business Example'}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {t(activeScheme.atAGlance.example, lang)}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-md p-5 space-y-2">
              <p className="text-xs font-semibold text-emerald-800">
                {lang === 'mr'
                  ? 'पुढची कृती काय करावी? (What should you do next?)'
                  : lang === 'hi'
                  ? 'आगे क्या कदम उठाएं? (What should you do next?)'
                  : 'What should you do next?'}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {t(activeScheme.atAGlance.nextAction, lang)}
              </p>
            </div>
          </div>
        </section>

        {/* WHO CAN BENEFIT & WHAT SUPPORT IS AVAILABLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
            <h2 className="text-lg font-semibold text-[#0F172A] font-display">
              {lang === 'mr'
                ? '२. याचा लाभ कोणाला मिळू शकतो? (Who Can Benefit?)'
                : lang === 'hi'
                ? '2. इसका लाभ किसे मिल सकता है? (Who Can Benefit?)'
                : '02. Who Can Benefit? (Eligibility)'}
            </h2>
            <ul className="space-y-3">
              {activeScheme.whoCanBenefit.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <span>{t(item, lang)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
            <h2 className="text-lg font-semibold text-[#0F172A] font-display">
              {lang === 'mr'
                ? '३. कोणती मदत मिळते? (What Support Is Available?)'
                : lang === 'hi'
                ? '3. क्या सहायता उपलब्ध है? (What Support Is Available?)'
                : '03. What Support Is Available?'}
            </h2>
            <ul className="space-y-3">
              {activeScheme.supportAvailable.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="font-mono-tabular text-xs font-semibold text-[#C25E00] mt-1">
                    0{idx + 1}.
                  </span>
                  <span>{t(item, lang)}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* HOW IT WORKS TIMELINE */}
        <section className="bg-white border border-slate-200 rounded-md p-6 space-y-5">
          <h2 className="text-lg font-semibold text-[#0F172A] font-display">
            {lang === 'mr'
              ? '४. अर्ज करण्याची प्रक्रिया कशी काम करते? (How It Works)'
              : lang === 'hi'
              ? '4. आवेदन प्रक्रिया कैसे काम करती है? (How It Works)'
              : '04. How It Works — Step-by-Step Process'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {timelineSteps.map((st, idx) => (
              <div
                key={st.num}
                className="relative border-l-2 sm:border-l-0 sm:border-t-2 border-[#0F172A] pl-4 sm:pl-0 sm:pt-3 space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-mono-tabular text-slate-500">
                  <span className="font-semibold text-[#C25E00]">STEP {st.num}</span>
                  {idx < timelineSteps.length - 1 && (
                    <span className="hidden sm:inline text-slate-300">→</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-[#0F172A]">{t(st.title, lang)}</p>
                <p className="text-xs text-slate-600">{t(st.desc, lang)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REUSABLE INTERACTIVE DOCUMENT CHECKLIST */}
        <section className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-lg font-semibold text-[#0F172A] font-display">
                {lang === 'mr'
                  ? '५. तुमची कागदपत्रे तपासणी यादी (Your Application Checklist)'
                  : lang === 'hi'
                  ? '5. आपकी दस्तावेज जांच सूची (Your Application Checklist)'
                  : '05. Your Application Document Checklist'}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {lang === 'mr'
                  ? 'तुमच्याकडे तयार असलेल्या कागदपत्रांवर टिक करा. ही माहिती तुमच्या कृती केंद्रात (Dashboard) जतन राहील.'
                  : lang === 'hi'
                  ? 'जो दस्तावेज आपके पास तैयार हैं उन पर टिक करें। यह प्रगति आपके डैशबोर्ड में सुरक्षित रहेगी।'
                  : 'Tick the documents you already have ready. Your progress is automatically synced with your Business Action Centre.'}
              </p>
            </div>
            <div className="text-right font-mono-tabular">
              <span className="text-sm font-semibold text-[#0F172A]">
                {completedCount} of {requiredDocIds.length}{' '}
                {lang === 'mr' ? 'पूर्ण' : lang === 'hi' ? 'पूर्ण' : 'completed'}
              </span>
              <div className="w-36 h-2 bg-slate-100 rounded-full overflow-hidden mt-1 border border-slate-200">
                <div
                  className="h-full bg-[#C25E00] transition-all duration-200"
                  style={{
                    width: `${Math.round((completedCount / requiredDocIds.length) * 100)}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {requiredDocIds.map((docId) => {
              const docObj = DOCUMENTS_MASTER[docId];
              if (!docObj) return null;
              const isChecked = checkedDocs.includes(docId);
              return (
                <label
                  key={docId}
                  className="py-3.5 flex items-start gap-3.5 cursor-pointer hover:bg-slate-50/80 px-2 rounded transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleDoc(docId)}
                    className="mt-1 w-4 h-4 accent-[#0F172A] rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        isChecked ? 'line-through text-slate-400' : 'text-[#0F172A]'
                      }`}
                    >
                      {t(docObj.title, lang)}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {lang === 'mr' ? 'कुठे मिळेल: ' : lang === 'hi' ? 'कहां मिलेगा: ' : 'Where to get: '}
                      {t(docObj.whereToGet, lang)}
                    </p>
                  </div>
                  <span className="text-xs font-mono-tabular text-slate-500">
                    {isChecked
                      ? lang === 'mr'
                        ? 'तयार'
                        : lang === 'hi'
                        ? 'तैयार'
                        : 'Ready'
                      : lang === 'mr'
                      ? 'बाकी'
                      : lang === 'hi'
                      ? 'बाकी'
                      : 'Pending'}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* IMPORTANT THINGS TO KNOW & WHERE TO GET HELP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-amber-50/60 border border-amber-200 rounded-md p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#9A3412]">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <h2 className="text-base font-semibold">
                {lang === 'mr'
                  ? 'महत्त्वाच्या सूचना (Important Things To Know)'
                  : lang === 'hi'
                  ? 'महत्वपूर्ण बातें (Important Things To Know)'
                  : 'Important Things To Know'}
              </h2>
            </div>
            <ul className="space-y-2.5">
              {activeScheme.importantNotes.map((note, idx) => (
                <li key={idx} className="text-sm text-slate-800 leading-relaxed">
                  • {t(note, lang)}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#0F172A]">
              <Building2 className="w-4 h-4 shrink-0 text-[#1E3A8A]" />
              <h2 className="text-base font-semibold">
                {lang === 'mr'
                  ? 'मदत आणि अर्जासाठी संपर्क (Where To Get Help)'
                  : lang === 'hi'
                  ? 'सहायता और आवेदन संपर्क (Where To Get Help)'
                  : 'Where To Get Help in Your District'}
              </h2>
            </div>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-xs text-slate-500">
                  {lang === 'mr' ? 'स्थानिक कार्यालय:' : lang === 'hi' ? 'स्थानीय कार्यालय:' : 'Designated Office:'}
                </dt>
                <dd className="font-medium text-[#0F172A]">{t(activeScheme.helpOffice.name, lang)}</dd>
              </div>
              <div className="flex flex-wrap gap-6 pt-1">
                <div>
                  <dt className="text-xs text-slate-500">
                    {lang === 'mr' ? 'संपर्क क्रमांक:' : lang === 'hi' ? 'संपर्क नंबर:' : 'Helpline:'}
                  </dt>
                  <dd className="font-mono-tabular text-xs font-medium text-slate-800">
                    {activeScheme.helpOffice.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">
                    {lang === 'mr' ? 'अधिकृत संदर्भ:' : lang === 'hi' ? 'आधिकारिक संदर्भ:' : 'Official Verification:'}
                  </dt>
                  <dd className="text-xs font-medium text-[#1E3A8A]">{activeScheme.helpOffice.portalName}</dd>
                </div>
              </div>
            </dl>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      {/* Header & Step Progress Rail */}
      <div className="bg-white border border-slate-200 rounded-md p-6 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-slate-500 font-mono-tabular">
              {t(UI_LABELS.prototypeNotice, lang)}
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] font-display">
              {lang === 'mr'
                ? 'शासकीय योजना मार्गदर्शक (Scheme Finder)'
                : lang === 'hi'
                ? 'सरकारी योजना खोजक (Scheme Finder)'
                : 'Scheme Finder — Guided Discovery'}
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              {lang === 'mr'
                ? 'तुमचा व्यवसाय, जिल्हा आणि गरज निवडा. आम्ही तुमच्यासाठी लागू असलेल्या योजना आणि आवश्यक कागदपत्रांची यादी दाखवू.'
                : lang === 'hi'
                ? 'अपना व्यवसाय, जिला और आवश्यकता चुनें। हम आपके लिए उपयुक्त योजनाओं और आवश्यक दस्तावेजों की सूची दिखाएंगे।'
                : 'Select your business category, Maharashtra district, and primary requirement to inspect relevant schemes and document checklists.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(s as 1 | 2 | 3 | 4)}
                className={`px-3 py-1.5 rounded text-xs font-semibold font-mono-tabular transition-colors cursor-pointer ${
                  step === s
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lang === 'mr' ? `टप्पा ${s}` : lang === 'hi' ? `चरण ${s}` : `Step ${s}`}
              </button>
            ))}
          </div>
        </div>

        {step < 4 ? (
          <div className="bg-[#FAF8F5] border border-slate-200 rounded-md p-5 space-y-5">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#0F172A]">
                  {lang === 'mr'
                    ? 'टप्पा १: तुमच्या व्यवसायाचा प्रकार कोणता आहे?'
                    : lang === 'hi'
                    ? 'चरण 1: आपके व्यवसाय का प्रकार क्या है?'
                    : 'Step 1: Tell us about your business'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {BUSINESS_CATEGORIES.map((cat) => {
                    const active = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id as BusinessCategory);
                          setStep(2);
                        }}
                        className={`p-4 text-left rounded-md border transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#0F172A] text-white border-[#0F172A]'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-[#C25E00]'
                        }`}
                      >
                        <p className="text-sm font-semibold">{t(cat.label, lang)}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#0F172A]">
                  {lang === 'mr'
                    ? 'टप्पा २: तुमचा व्यवसाय महाराष्ट्रात कुठे आहे?'
                    : lang === 'hi'
                    ? 'चरण 2: आपका व्यवसाय महाराष्ट्र में कहां स्थित है?'
                    : 'Step 2: Where is your business in Maharashtra?'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      {lang === 'mr' ? 'राज्य (State)' : lang === 'hi' ? 'राज्य (State)' : 'State'}
                    </label>
                    <input
                      type="text"
                      value={lang === 'mr' ? 'महाराष्ट्र (Maharashtra)' : 'Maharashtra'}
                      disabled
                      className="w-full px-3 py-2 text-sm bg-slate-100 border border-slate-300 rounded text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      {lang === 'mr' ? 'जिल्हा निवडा (District)' : lang === 'hi' ? 'जिला चुनें (District)' : 'Select District'}
                    </label>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded text-[#0F172A] font-medium"
                    >
                      {MAHARASHTRA_DISTRICTS.map((d) => (
                        <option key={d.id} value={d.id}>
                          {t(d.name, lang)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      {lang === 'mr' ? 'तालुका निवडा (Taluka)' : lang === 'hi' ? 'तालुका चुनें (Taluka)' : 'Select Taluka'}
                    </label>
                    <select
                      value={selectedTaluka}
                      onChange={(e) => setSelectedTaluka(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded text-[#0F172A] font-medium"
                    >
                      {currentDistrictObj.talukas.map((tal) => (
                        <option key={tal} value={tal}>
                          {tal}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded cursor-pointer"
                  >
                    ← {lang === 'mr' ? 'मागे' : lang === 'hi' ? 'पीछे' : 'Previous'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#C25E00] rounded cursor-pointer"
                  >
                    {lang === 'mr' ? 'पुढचा टप्पा (गरज निवडा) →' : lang === 'hi' ? 'अगला चरण →' : 'Next Step (Select Need) →'}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#0F172A]">
                  {lang === 'mr'
                    ? 'टप्पा ३: तुम्हाला सध्या कशाची सर्वात जास्त गरज आहे?'
                    : lang === 'hi'
                    ? 'चरण 3: अभी आपको किस सहायता की सबसे अधिक आवश्यकता है?'
                    : 'Step 3: What do you need most right now?'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {BUSINESS_NEEDS.map((nd) => {
                    const active = selectedNeed === nd.id;
                    return (
                      <button
                        key={nd.id}
                        type="button"
                        onClick={() => {
                          setSelectedNeed(nd.id as BusinessNeed);
                          setStep(4);
                        }}
                        className={`p-4 text-left rounded-md border transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#0F172A] text-white border-[#0F172A]'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-[#C25E00]'
                        }`}
                      >
                        <p className="text-sm font-semibold">{t(nd.label, lang)}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-[#FAF8F5] border border-slate-200 rounded-md p-4 grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                {lang === 'mr' ? '१. तुमचा व्यवसाय:' : lang === 'hi' ? '1. आपका व्यवसाय:' : '1. Your Business:'}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as BusinessCategory)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-medium text-[#0F172A]"
              >
                {BUSINESS_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {t(c.label, lang)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                {lang === 'mr' ? '२. जिल्हा (महाराष्ट्र):' : lang === 'hi' ? '2. जिला (महाराष्ट्र):' : '2. District (Maharashtra):'}
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-medium text-[#0F172A]"
              >
                {MAHARASHTRA_DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {t(d.name, lang)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                {lang === 'mr' ? '३. मुख्य गरज:' : lang === 'hi' ? '3. मुख्य आवश्यकता:' : '3. Primary Requirement:'}
              </label>
              <select
                value={selectedNeed}
                onChange={(e) => setSelectedNeed(e.target.value as BusinessNeed)}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded font-medium text-[#0F172A]"
              >
                {BUSINESS_NEEDS.map((n) => (
                  <option key={n.id} value={n.id}>
                    {t(n.label, lang)}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-400 rounded h-[38px] cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>
                {lang === 'mr' ? 'स्टेप-बाय-स्टेप बदला' : lang === 'hi' ? 'चरण-दर-चरण बदलें' : 'Launch Guided Steps'}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Ranked Scheme Recommendations */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-[#0F172A] font-display">
            {lang === 'mr'
              ? `तुमच्यासाठी शिफारस केलेल्या योजना (${scoredSchemes.filter((s) => s.score >= 50).length} प्रमुख जुळणाऱ्या योजना)`
              : lang === 'hi'
              ? `आपके लिए अनुशंसित योजनाएं (${scoredSchemes.filter((s) => s.score >= 50).length} प्रमुख विकल्प)`
              : `Recommended Support for ${selectedCategory} in ${selectedDistrict} (${scoredSchemes.filter((s) => s.score >= 50).length} strong matches)`}
          </h2>
          <span className="text-xs text-slate-500">
            {lang === 'mr'
              ? 'पात्रतेच्या क्रमाने मांडलेले'
              : lang === 'hi'
              ? 'प्रासंगिकता के अनुसार क्रमबद्ध'
              : 'Ranked by category, district & requirement match'}
          </span>
        </div>

        <div className="space-y-4">
          {scoredSchemes.map(({ scheme, categoryMatch, needMatch }) => {
            const isSaved = savedSchemes.includes(scheme.id);
            const isHighMatch = categoryMatch && needMatch;

            return (
              <article
                key={scheme.id}
                className="bg-white border border-slate-200 rounded-md p-6 hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono-tabular">
                      <span className="font-semibold text-emerald-800">
                        {isHighMatch
                          ? lang === 'mr'
                            ? 'अत्यंत सुसंगत (Likely Eligible — Strong Match)'
                            : lang === 'hi'
                            ? 'अत्यधिक उपयुक्त (Likely Eligible — Strong Match)'
                            : 'Likely Eligible — Strong Match'
                          : lang === 'mr'
                          ? 'संबंधित पर्याय (Relevant Option)'
                          : lang === 'hi'
                          ? 'संबंधित विकल्प (Relevant Option)'
                          : 'Relevant Support Program'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{scheme.code}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#1E3A8A] font-semibold">{scheme.maxSubsidy}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#0F172A] font-display">
                      {t(scheme.title, lang)}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {t(scheme.benefitSummary, lang)}
                    </p>

                    <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-600">
                      <span className="font-semibold text-slate-800">
                        {lang === 'mr'
                          ? 'तुमच्यासाठी का लागू:'
                          : lang === 'hi'
                          ? 'आपके लिए क्यों उपयुक्त:'
                          : 'Why it may be relevant:'}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        {categoryMatch
                          ? lang === 'mr'
                            ? `${selectedCategory} व्यवसायाशी सुसंगत`
                            : `${selectedCategory} category matches`
                          : lang === 'mr'
                          ? 'लघु उद्योगांसाठी लागू'
                          : 'Open to micro enterprises'}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        {lang === 'mr'
                          ? `${selectedDistrict} जिल्ह्यात उपलब्ध`
                          : `${selectedDistrict} district covered`}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        {needMatch
                          ? lang === 'mr'
                            ? `${selectedNeed} गरजेशी जुळते`
                            : `${selectedNeed} requirement matches`
                          : lang === 'mr'
                          ? 'व्यवसाय विस्तारासाठी उपयुक्त'
                          : 'Supports business growth'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 pt-1">
                      <span className="font-medium text-slate-700">
                        {lang === 'mr'
                          ? 'मुख्य कागदपत्रे: '
                          : lang === 'hi'
                          ? 'मुख्य दस्तावेज: '
                          : 'Documents required: '}
                      </span>
                      {scheme.documentsRequired
                        .map((dId) => {
                          const doc = DOCUMENTS_MASTER[dId];
                          return doc ? t(doc.title, lang).split(' (')[0] : dId;
                        })
                        .filter(Boolean)
                        .join(' · ')}
                    </div>
                  </div>

                  <div className="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-3 shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedSchemeId(scheme.id)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>
                        {lang === 'mr'
                          ? 'ही योजना समजून घ्या'
                          : lang === 'hi'
                          ? 'यह योजना समझें'
                          : 'Understand This Scheme'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleSaveScheme(scheme.id)}
                      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded border transition-colors whitespace-nowrap cursor-pointer ${
                        isSaved
                          ? 'bg-amber-50 border-[#C25E00] text-[#9A3412]'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>
                        {isSaved
                          ? lang === 'mr'
                            ? 'जतन केले'
                            : lang === 'hi'
                            ? 'सहेजा गया'
                            : 'Saved'
                          : lang === 'mr'
                          ? 'जतन करा'
                          : lang === 'hi'
                          ? 'सहेजें'
                          : 'Save Scheme'}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
