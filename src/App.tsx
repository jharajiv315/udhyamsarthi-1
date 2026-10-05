import React, { useState, useEffect } from 'react';
import {
  BusinessCategory,
  BusinessNeed,
  EntrepreneurProfile,
  Language,
  NavTab,
  ToolCategory,
} from './types';
import { DEMO_PROFILES } from './data/districtsAndResourcesData';
import { HeaderAndNav } from './components/HeaderAndNav';
import { AskSaarthiModal } from './components/AskSaarthiModal';
import { HomeView } from './components/HomeView';
import { SchemeViews } from './components/SchemeViews';
import { DigitalToolsView, LearnSchoolView } from './components/ToolsAndLearnViews';
import { ReadinessCheckView, DashboardView } from './components/ReadinessAndDashboardViews';
import { DirectoryView, SavedResourcesView, AboutView, Footer } from './components/SupportViews';
import { ShieldCheck } from 'lucide-react';
import { t } from './data/translations';

export default function App() {
  // 1. Language state ('en' | 'mr' | 'hi')
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('udyam_lang') as Language) || 'mr';
  });

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('udyam_lang', lang);
  };

  // 2. Navigation tab
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  // 3. Category, Need & District Selection
  const [selectedCategory, setSelectedCategory] = useState<BusinessCategory>('Food Processing');
  const [selectedNeed, setSelectedNeed] = useState<BusinessNeed>('Funding');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Nashik');
  const [selectedSchemeId, setSelectedSchemeId] = useState<string | null>(null);
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [initialToolCategory, setInitialToolCategory] = useState<ToolCategory | 'All'>('All');

  // 4. Saved items (Bookmarks)
  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('udyam_saved_schemes');
      return saved ? JSON.parse(saved) : ['pmegp-subsidy', 'cmegp-maharashtra', 'udyam-registration-free'];
    } catch {
      return ['pmegp-subsidy', 'cmegp-maharashtra', 'udyam-registration-free'];
    }
  });

  const [savedToolIds, setSavedToolIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('udyam_saved_tools');
      return saved ? JSON.parse(saved) : ['whatsapp-business', 'upi-qr-payments', 'google-maps-business'];
    } catch {
      return ['whatsapp-business', 'upi-qr-payments', 'google-maps-business'];
    }
  });

  useEffect(() => {
    localStorage.setItem('udyam_saved_schemes', JSON.stringify(savedSchemeIds));
  }, [savedSchemeIds]);

  useEffect(() => {
    localStorage.setItem('udyam_saved_tools', JSON.stringify(savedToolIds));
  }, [savedToolIds]);

  const toggleSaveScheme = (schemeId: string) => {
    setSavedSchemeIds((prev) =>
      prev.includes(schemeId) ? prev.filter((id) => id !== schemeId) : [...prev, schemeId]
    );
  };

  const toggleSaveTool = (toolId: string) => {
    setSavedToolIds((prev) =>
      prev.includes(toolId) ? prev.filter((id) => id !== toolId) : [...prev, toolId]
    );
  };

  // 5. Active Entrepreneur Persona
  const [activeProfile, setActiveProfile] = useState<EntrepreneurProfile>(() => {
    try {
      const saved = localStorage.getItem('udyam_active_profile');
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEMO_PROFILES[0];
  });

  const handleSelectDemoProfile = (p: EntrepreneurProfile) => {
    setActiveProfile(p);
    localStorage.setItem('udyam_active_profile', JSON.stringify(p));
    setSelectedCategory(p.category);
    setSelectedDistrict(p.district);
  };

  const handleUpdateCustomProfile = (updated: EntrepreneurProfile) => {
    setActiveProfile(updated);
    localStorage.setItem('udyam_active_profile', JSON.stringify(updated));
  };

  // 6. Readiness Diagnostic Answers
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, 'yes' | 'partial' | 'no'>>(() => {
    try {
      const saved = localStorage.getItem('udyam_diagnostic_answers');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      q_upi: 'yes',
      q_whatsapp: 'partial',
      q_khata: 'partial',
      q_bank: 'yes',
      q_maps: 'no',
      q_photos: 'partial',
      q_udyam: 'yes',
      q_online_delivery: 'no',
    };
  });

  useEffect(() => {
    localStorage.setItem('udyam_diagnostic_answers', JSON.stringify(diagnosticAnswers));
  }, [diagnosticAnswers]);

  const handleUpdateAnswer = (qId: string, val: 'yes' | 'partial' | 'no') => {
    setDiagnosticAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  // Calculate Readiness Score
  const calculateScore = (ans: Record<string, 'yes' | 'partial' | 'no'>) => {
    let score = 0;
    if (ans.q_upi === 'yes') score += 15;
    else if (ans.q_upi === 'partial') score += 8;

    if (ans.q_whatsapp === 'yes') score += 15;
    else if (ans.q_whatsapp === 'partial') score += 8;

    if (ans.q_khata === 'yes') score += 15;
    else if (ans.q_khata === 'partial') score += 8;

    if (ans.q_bank === 'yes') score += 15;
    else if (ans.q_bank === 'partial') score += 8;

    if (ans.q_maps === 'yes') score += 10;
    else if (ans.q_maps === 'partial') score += 5;

    if (ans.q_photos === 'yes') score += 10;
    else if (ans.q_photos === 'partial') score += 5;

    if (ans.q_udyam === 'yes') score += 10;
    else if (ans.q_udyam === 'partial') score += 5;

    if (ans.q_online_delivery === 'yes') score += 10;
    else if (ans.q_online_delivery === 'partial') score += 5;

    return Math.min(100, Math.max(15, score));
  };

  const readinessScore = calculateScore(diagnosticAnswers);

  // 7. Checked Documents (User Document Checklist)
  const [checkedDocs, setCheckedDocs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('udyam_checked_docs');
      return saved ? JSON.parse(saved) : ['aadhaar', 'pan', 'bank-passbook', 'electricity-bill'];
    } catch {
      return ['aadhaar', 'pan', 'bank-passbook', 'electricity-bill'];
    }
  });

  useEffect(() => {
    localStorage.setItem('udyam_checked_docs', JSON.stringify(checkedDocs));
  }, [checkedDocs]);

  const handleToggleDoc = (docId: string) => {
    setCheckedDocs((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  // 8. Completed Lesson Steps
  const [completedLessonSteps, setCompletedLessonSteps] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem('udyam_completed_lesson_steps');
      return saved ? JSON.parse(saved) : { 'lesson-whatsapp-catalog': [1, 2] };
    } catch {
      return { 'lesson-whatsapp-catalog': [1, 2] };
    }
  });

  useEffect(() => {
    localStorage.setItem('udyam_completed_lesson_steps', JSON.stringify(completedLessonSteps));
  }, [completedLessonSteps]);

  const handleToggleLessonStep = (lessonId: string, stepNum: number) => {
    setCompletedLessonSteps((prev) => {
      const current = prev[lessonId] || [];
      const updated = current.includes(stepNum)
        ? current.filter((s) => s !== stepNum)
        : [...current, stepNum];
      return { ...prev, [lessonId]: updated };
    });
  };

  // 9. Voice Assistant Modal & Low Bandwidth Mode
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  // 10. Walkthrough Guide steps for Presentation & Judges
  const walkthroughSteps = [
    {
      tab: 'home' as NavTab,
      label: { en: '1. Seva Desk', mr: '१. सेवा डेस्क', hi: '1. सेवा डेस्क' },
      hint: { en: 'Rural Maharashtra companion overview', mr: 'ग्रामीण उद्योजक सेवा डेस्क', hi: 'ग्रामीण सेवा डेस्क' },
    },
    {
      tab: 'schemes' as NavTab,
      label: { en: '2. Scheme Finder', mr: '२. योजना शोधक', hi: '2. योजना खोजक' },
      hint: { en: 'Subsidies up to 35% with clear plain-language GR rules', mr: '३५% अनुदानासह योजना माहिती', hi: '35% सब्सिडी वाली योजनाएं' },
    },
    {
      tab: 'tools' as NavTab,
      label: { en: '3. Digital Tools', mr: '३. डिजिटल साधने', hi: '3. डिजिटल टूल्स' },
      hint: { en: 'UPI QR, WhatsApp Catalog, Google Maps', mr: 'व्हॉट्सॲप कॅटलॉग व फोनपे साऊंडबॉक्स', hi: 'व्हाट्सएप व गूगल मैप्स' },
    },
    {
      tab: 'readiness' as NavTab,
      label: { en: '4. Readiness Test', mr: '४. सज्जता चाचणी', hi: '4. तत्परता जांच' },
      hint: { en: '8-question diagnostic calculation', mr: '८ सोप्या प्रश्नांची चाचणी', hi: '8 सवालों की जांच' },
    },
    {
      tab: 'dashboard' as NavTab,
      label: { en: '5. Action Plan & PDF', mr: '५. कृती केंद्र व PDF', hi: '5. एक्शन सेंटर व PDF' },
      hint: { en: 'Downloadable official document checklist & readiness report PDF', mr: 'कागदपत्रे व स्कोअरचा छापील PDF अहवाल', hi: 'दस्तावेज व स्कोर रिपोर्ट PDF' },
    },
    {
      tab: 'directory' as NavTab,
      label: { en: '6. DIC Directory', mr: '६. मदत केंद्रे', hi: '6. सहायता केंद्र' },
      hint: { en: 'District Industries Centres & MahaSeva kendras', mr: 'जिल्हा उद्योग केंद्र व संपर्क', hi: 'जिला उद्योग केंद्र व संपर्क' },
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Offline Mode Banner */}
      {isOfflineMode && (
        <div className="bg-emerald-800 text-white text-xs py-1.5 px-4 text-center font-mono flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          <span>
            {t({
              en: 'Low-Bandwidth Offline Mode Active — Maharashtra schemes, document checklists, and local helpdesks are cached locally.',
              mr: 'कमी डेटा / ऑफलाइन मोड सक्रिय — सर्व शासकीय माहिती, कागदपत्रे आणि संपर्क फोनमध्ये सुरक्षित आहेत.',
              hi: 'ऑफलाइन मोड सक्रिय — सभी योजनाएं, दस्तावेज और संपर्क फोन में सुरक्षित हैं।',
            }, language)}
          </span>
          <button
            onClick={() => setIsOfflineMode(false)}
            className="underline ml-2 text-emerald-200 hover:text-white cursor-pointer"
          >
            {t({ en: 'Disable', mr: 'बंद करा', hi: 'बंद करें' }, language)}
          </button>
        </div>
      )}

      {/* Idea Lab Walkthrough Bar */}
      <div className="bg-[#0F172A] text-slate-300 border-b border-slate-800 px-4 py-2">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#C25E00] text-white font-bold rounded font-mono text-[10px]">
              INTERACTIVE TOUR
            </span>
            <span className="font-semibold text-slate-200">
              {t({ en: 'Feature Walkthrough:', mr: 'मार्गदर्शित फेरफटका:', hi: 'मार्गदर्शित दौरा:' }, language)}
            </span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto py-1 sm:py-0">
            {walkthroughSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(step.tab);
                  if (step.tab !== 'schemes') setSelectedSchemeId(null);
                }}
                className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${
                  activeTab === step.tab
                    ? 'bg-[#C25E00] text-white font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
                title={t(step.hint, language)}
              >
                <span>{t(step.label, language)}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOfflineMode(!isOfflineMode)}
            className={`px-2 py-0.5 rounded text-[11px] font-mono border transition-colors cursor-pointer ${
              isOfflineMode
                ? 'bg-emerald-900 border-emerald-500 text-emerald-200'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            {isOfflineMode ? '⚡ Offline: ON' : '⚡ Low-Bandwidth Mode'}
          </button>
        </div>
      </div>

      {/* Header and Navigation */}
      <HeaderAndNav
        activeTab={activeTab}
        setActiveTab={(tab: NavTab) => {
          setActiveTab(tab);
          if (tab !== 'schemes') setSelectedSchemeId(null);
        }}
        lang={language}
        setLang={handleLanguageChange}
        onOpenVoice={() => setIsVoiceOpen(true)}
        savedCount={savedSchemeIds.length + savedToolIds.length}
      />

      {/* Main Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            language={language}
            onNavigate={(tab) => {
              setActiveTab(tab);
              if (tab !== 'schemes') setSelectedSchemeId(null);
            }}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActiveTab('schemes');
            }}
            onSelectNeed={(need) => {
              setSelectedNeed(need);
              setActiveTab('schemes');
            }}
            onSelectDistrict={(dist) => {
              setSelectedDistrict(dist);
              setActiveTab('schemes');
            }}
            onSelectScheme={(id) => {
              setSelectedSchemeId(id);
              setActiveTab('schemes');
            }}
            onSelectToolCategory={(cat) => {
              setInitialToolCategory(cat);
              setActiveTab('tools');
            }}
            onSelectProfile={(profileId) => {
              const p = DEMO_PROFILES.find((prof) => prof.id === profileId);
              if (p) handleSelectDemoProfile(p);
              setActiveTab('dashboard');
            }}
            onOpenVoice={() => setIsVoiceOpen(true)}
            readinessScore={readinessScore}
          />
        )}

        {activeTab === 'schemes' && (
          <SchemeViews
            lang={language}
            setLang={handleLanguageChange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            selectedNeed={selectedNeed}
            setSelectedNeed={setSelectedNeed}
            selectedSchemeId={selectedSchemeId}
            setSelectedSchemeId={setSelectedSchemeId}
            checkedDocs={checkedDocs}
            onToggleDoc={handleToggleDoc}
            savedSchemes={savedSchemeIds}
            onToggleSaveScheme={toggleSaveScheme}
          />
        )}

        {activeTab === 'tools' && (
          <DigitalToolsView
            lang={language}
            selectedToolId={selectedToolId}
            setSelectedToolId={setSelectedToolId}
            initialCategory={initialToolCategory}
            savedTools={savedToolIds}
            onToggleSaveTool={toggleSaveTool}
            onStartLesson={(lessonId) => {
              setSelectedLessonId(lessonId);
              setActiveTab('learn');
            }}
          />
        )}

        {activeTab === 'learn' && (
          <LearnSchoolView
            lang={language}
            selectedLessonId={selectedLessonId}
            setSelectedLessonId={setSelectedLessonId}
            completedLessonSteps={completedLessonSteps}
            onToggleLessonStep={handleToggleLessonStep}
          />
        )}

        {activeTab === 'readiness' && (
          <ReadinessCheckView
            lang={language}
            answers={diagnosticAnswers}
            onUpdateAnswer={handleUpdateAnswer}
            readinessScore={readinessScore}
            onOpenTool={(toolId) => {
              setSelectedToolId(toolId);
              setActiveTab('tools');
            }}
            onGoToDashboard={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardView
            lang={language}
            profile={activeProfile}
            onSelectDemoProfile={handleSelectDemoProfile}
            onUpdateCustomProfile={handleUpdateCustomProfile}
            readinessScore={readinessScore}
            checkedDocs={checkedDocs}
            onToggleDoc={handleToggleDoc}
            completedLessonSteps={completedLessonSteps}
            savedSchemes={savedSchemeIds}
            savedTools={savedToolIds}
            onOpenScheme={(schemeId) => {
              setSelectedSchemeId(schemeId);
              setActiveTab('schemes');
            }}
            onOpenTool={(toolId) => {
              setSelectedToolId(toolId);
              setActiveTab('tools');
            }}
            onOpenLesson={(lessonId) => {
              setSelectedLessonId(lessonId);
              setActiveTab('learn');
            }}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'directory' && (
          <DirectoryView
            language={language}
            onNavigate={setActiveTab}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
          />
        )}

        {activeTab === 'saved' && (
          <SavedResourcesView
            language={language}
            savedSchemeIds={savedSchemeIds}
            savedToolIds={savedToolIds}
            onToggleSaveScheme={toggleSaveScheme}
            onToggleSaveTool={toggleSaveTool}
            onSelectScheme={(id) => {
              setSelectedSchemeId(id);
              setActiveTab('schemes');
            }}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'about' && (
          <AboutView language={language} />
        )}
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={setActiveTab}
        onOpenVoice={() => setIsVoiceOpen(true)}
      />

      {/* Voice Assistant Modal */}
      <AskSaarthiModal
        isOpen={isVoiceOpen}
        onClose={() => setIsVoiceOpen(false)}
        lang={language}
        setLang={handleLanguageChange}
        onNavigateScheme={(id: string) => {
          setSelectedSchemeId(id);
          setActiveTab('schemes');
          setIsVoiceOpen(false);
        }}
        onNavigateTool={(id: string) => {
          setSelectedToolId(id);
          setActiveTab('tools');
          setIsVoiceOpen(false);
        }}
        onNavigateTab={(tab: NavTab) => {
          setActiveTab(tab);
          setIsVoiceOpen(false);
        }}
      />
    </div>
  );
}
