import React, { useState, useEffect, useCallback, Component, ErrorInfo, ReactNode } from 'react';
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
import { ExecutiveTopBar } from './components/ExecutiveTopBar';
import { AskSaarthiModal } from './components/AskSaarthiModal';
import { HomeView } from './components/HomeView';
import { SchemeViews } from './components/SchemeViews';
import { DigitalToolsView, LearnSchoolView } from './components/ToolsAndLearnViews';
import { ReadinessCheckView, DashboardView } from './components/ReadinessAndDashboardViews';
import { DirectoryView, SavedResourcesView, AboutView, Footer } from './components/SupportViews';
import {
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Home,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
} from 'lucide-react';
import { t } from './data/translations';

const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetItem = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {}
};

export interface AppErrorState {
  message: string;
  source: string;
  timestamp: string;
  stack?: string;
}

/**
 * Custom error tracking hook that monitors unhandled window errors,
 * unhandled promise rejections, and component-level catch blocks.
 * Reports structured logs to console and maintains state for fallback UI.
 */
export function useErrorTracker() {
  const [error, setError] = useState<AppErrorState | null>(null);

  const captureError = useCallback((err: unknown, source: string = 'general') => {
    let message = 'An unexpected error occurred';
    let stack: string | undefined;

    if (err instanceof Error) {
      message = err.message || 'Unknown error';
      stack = err.stack;
    } else if (typeof err === 'string') {
      message = err;
    } else if (err && typeof err === 'object') {
      try {
        message = JSON.stringify(err);
      } catch {
        message = String(err);
      }
    }

    const timestamp = new Date().toLocaleTimeString();
    const errorRecord: AppErrorState = {
      message,
      source,
      timestamp,
      stack,
    };

    // Structured reporting to the browser console
    console.error(
      `%c[Udyam Saarthi ErrorTracker] %c[${source}] %c${message}`,
      'background: #78350F; color: #FDE68A; font-weight: bold; padding: 2px 4px; border-radius: 2px;',
      'background: #0F172A; color: #94A3B8; padding: 2px 4px; border-radius: 2px;',
      'color: #DC2626; font-weight: bold;',
      {
        errorObj: err,
        stack,
        timestamp,
      }
    );

    setError(errorRecord);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const resetAppState = useCallback(() => {
    try {
      localStorage.removeItem('udyam_active_profile');
      localStorage.removeItem('udyam_checked_docs');
      localStorage.removeItem('udyam_diagnostic_answers');
      localStorage.removeItem('udyam_saved_schemes');
      localStorage.removeItem('udyam_saved_tools');
      localStorage.removeItem('udyam_completed_lesson_steps');
    } catch {}
    setError(null);
    window.location.reload();
  }, []);

  useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => {
      // Ignore empty messages (e.g. third-party browser extensions)
      if (!event.message) return;
      captureError(
        event.error || event.message,
        `window.onerror (${event.filename ? event.filename.split('/').pop() : 'script'}:${event.lineno || 0})`
      );
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      captureError(
        event.reason || 'Unhandled Promise Rejection',
        'unhandledrejection'
      );
    };

    window.addEventListener('error', handleWindowError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleWindowError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [captureError]);

  return {
    error,
    hasError: error !== null,
    captureError,
    clearError,
    resetAppState,
  };
}

/**
 * Component-level error boundary to catch render crashes
 * and delegate to useErrorTracker without taking down whole page.
 */
interface ViewBoundaryProps {
  children: ReactNode;
  fallback: (error: Error, reset: () => void) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ViewBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ViewBoundary extends Component<ViewBoundaryProps, ViewBoundaryState> {
  constructor(props: ViewBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ViewBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback(this.state.error, this.reset);
    }
    return this.props.children;
  }
}

/**
 * User-friendly fallback UI displayed when a component or view fails to load.
 */
interface FriendlyErrorFallbackProps {
  error: AppErrorState | Error;
  onRetry: () => void;
  onGoHome: () => void;
  onResetData: () => void;
  language: Language;
}

function FriendlyErrorFallback({
  error,
  onRetry,
  onGoHome,
  onResetData,
  language,
}: FriendlyErrorFallbackProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const errorMessage =
    'message' in error ? error.message : (error as Error).message || 'Unknown issue';
  const errorSource = 'source' in error ? (error as AppErrorState).source : 'render';
  const errorStack = 'stack' in error ? error.stack : undefined;

  const handleCopy = () => {
    const text = `Udyam Saarthi Diagnostic Report\nError: ${errorMessage}\nSource: ${errorSource}\nTime: ${new Date().toISOString()}\nStack: ${errorStack || 'N/A'}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-6 sm:p-8 bg-white border border-amber-200 rounded-xl shadow-xs text-stone-900 font-sans space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0 text-amber-800">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="space-y-1.5">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            {language === 'mr'
              ? 'हा विभाग उघडताना तांत्रिक अडचण आली'
              : language === 'hi'
              ? 'इस अनुभाग को लोड करने में समस्या आई'
              : 'Unable to load this section'}
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {language === 'mr'
              ? 'या विभागाची माहिती दाखवताना अडचण आली आहे. तुमची जतन केलेली माहिती आणि कागदपत्रे पूर्णपणे सुरक्षित आहेत.'
              : language === 'hi'
              ? 'इस पृष्ठ की जानकारी लोड करते समय तकनीकी समस्या आई है। आपकी सहेजी गई जानकारी सुरक्षित है।'
              : 'An unexpected issue occurred while displaying this section. Your saved preferences and checklist remain safe.'}
          </p>
        </div>
      </div>

      <div className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-lg text-xs text-amber-950 font-mono flex items-center justify-between gap-2 overflow-x-auto">
        <span className="truncate">
          <strong>Notice:</strong> {errorMessage}
        </span>
        <span className="text-amber-800 shrink-0 font-sans text-[11px] bg-amber-200/60 px-2 py-0.5 rounded">
          {errorSource}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>
            {language === 'mr' ? 'पुन्हा प्रयत्न करा' : language === 'hi' ? 'पुनः प्रयास करें' : 'Try Again'}
          </span>
        </button>

        <button
          type="button"
          onClick={onGoHome}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C25E00] hover:bg-[#9A3412] text-white rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>
            {language === 'mr' ? 'सेवा डेस्कवर जा' : language === 'hi' ? 'सेवा डेस्क पर जाएं' : 'Go to Seva Desk'}
          </span>
        </button>

        <button
          type="button"
          onClick={onResetData}
          className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300 rounded-md text-xs font-medium transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
          <span>
            {language === 'mr' ? 'डेटा रीसेट करा' : language === 'hi' ? 'डेटा रीसेट करें' : 'Reset Stored Data'}
          </span>
        </button>
      </div>

      {/* Expandable Technical Diagnostics */}
      <div className="pt-2 border-t border-stone-100">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 font-medium cursor-pointer"
        >
          {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          <span>
            {language === 'mr' ? 'तांत्रिक तपशील (Technical Details)' : 'Technical Details & Logs'}
          </span>
        </button>

        {showDetails && (
          <div className="mt-3 p-3 bg-stone-900 text-slate-300 rounded-md font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="text-amber-400 font-bold">Diagnostic Log</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[10px] bg-stone-800 hover:bg-stone-700 text-slate-200 px-2 py-1 rounded cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy Log'}</span>
              </button>
            </div>
            <div>
              <p className="text-slate-400">Message:</p>
              <p className="text-red-400">{errorMessage}</p>
            </div>
            <div>
              <p className="text-slate-400">Source:</p>
              <p className="text-amber-200">{errorSource}</p>
            </div>
            {errorStack && (
              <div>
                <p className="text-slate-400">Stack Trace:</p>
                <pre className="text-[10px] text-slate-400 whitespace-pre-wrap max-h-36 overflow-y-auto mt-1 p-2 bg-black/40 rounded">
                  {errorStack}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  // Error Tracking Hook
  const { error, hasError, captureError, clearError, resetAppState } = useErrorTracker();

  // 1. Language state ('en' | 'mr' | 'hi')
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = safeGetItem('udyam_lang') as Language;
      if (saved === 'en' || saved === 'mr' || saved === 'hi') return saved;
    } catch {}
    return 'mr';
  });

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    safeSetItem('udyam_lang', lang);
  };

  // 2. Navigation tab
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  const handleNavigateTab = (tab: NavTab) => {
    clearError();
    setActiveTab(tab);
    if (tab !== 'schemes') setSelectedSchemeId(null);
  };

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
      const saved = safeGetItem('udyam_saved_schemes');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return ['pmfme-maharashtra', 'cmegp-maharashtra', 'pm-vishwakarma'];
    } catch {
      return ['pmfme-maharashtra', 'cmegp-maharashtra', 'pm-vishwakarma'];
    }
  });

  const [savedToolIds, setSavedToolIds] = useState<string[]>(() => {
    try {
      const saved = safeGetItem('udyam_saved_tools');
      return saved ? JSON.parse(saved) : ['whatsapp-business', 'upi-qr-payments', 'google-maps-business'];
    } catch {
      return ['whatsapp-business', 'upi-qr-payments', 'google-maps-business'];
    }
  });

  useEffect(() => {
    safeSetItem('udyam_saved_schemes', JSON.stringify(savedSchemeIds));
  }, [savedSchemeIds]);

  useEffect(() => {
    safeSetItem('udyam_saved_tools', JSON.stringify(savedToolIds));
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
      const saved = safeGetItem('udyam_active_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object' && parsed.id && parsed.name && parsed.district) {
          return parsed;
        }
      }
    } catch {}
    return DEMO_PROFILES[0];
  });

  const handleSelectDemoProfile = (p: EntrepreneurProfile) => {
    if (!p) return;
    setActiveProfile(p);
    safeSetItem('udyam_active_profile', JSON.stringify(p));
    if (p.category) setSelectedCategory(p.category);
    if (p.district) setSelectedDistrict(p.district);
  };

  const handleUpdateCustomProfile = (updated: EntrepreneurProfile) => {
    if (!updated) return;
    setActiveProfile(updated);
    safeSetItem('udyam_active_profile', JSON.stringify(updated));
  };

  // 6. Readiness Diagnostic Answers
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, 'yes' | 'partial' | 'no'>>(() => {
    try {
      const saved = safeGetItem('udyam_diagnostic_answers');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      }
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
    safeSetItem('udyam_diagnostic_answers', JSON.stringify(diagnosticAnswers));
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
      const saved = safeGetItem('udyam_checked_docs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((id: string) => (id === 'bank-passbook' ? 'bank_passbook' : id));
        }
      }
      return ['aadhaar', 'pan', 'bank_passbook', 'address_proof'];
    } catch {
      return ['aadhaar', 'pan', 'bank_passbook', 'address_proof'];
    }
  });

  useEffect(() => {
    safeSetItem('udyam_checked_docs', JSON.stringify(checkedDocs));
  }, [checkedDocs]);

  const handleToggleDoc = (docId: string) => {
    setCheckedDocs((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  // 8. Completed Lesson Steps
  const [completedLessonSteps, setCompletedLessonSteps] = useState<Record<string, number[]>>(() => {
    try {
      const saved = safeGetItem('udyam_completed_lesson_steps');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          if (parsed['lesson-whatsapp-catalog']) {
            parsed['lesson-whatsapp-catalogue'] = parsed['lesson-whatsapp-catalog'];
            delete parsed['lesson-whatsapp-catalog'];
          }
          return parsed;
        }
      }
      return { 'lesson-whatsapp-catalogue': [1, 2] };
    } catch {
      return { 'lesson-whatsapp-catalogue': [1, 2] };
    }
  });

  useEffect(() => {
    safeSetItem('udyam_completed_lesson_steps', JSON.stringify(completedLessonSteps));
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

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Executive Maharashtra MSME Tour & Network Bar (Replaces vibe-coded banner) */}
      <ExecutiveTopBar
        activeTab={activeTab}
        onNavigateTab={handleNavigateTab}
        language={language}
        isOfflineMode={isOfflineMode}
        onToggleOfflineMode={() => setIsOfflineMode(!isOfflineMode)}
      />

      {/* Header and Navigation */}
      <HeaderAndNav
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
        lang={language}
        setLang={handleLanguageChange}
        onOpenVoice={() => setIsVoiceOpen(true)}
        savedCount={savedSchemeIds.length + savedToolIds.length}
      />

      {/* Main Views */}
      <main className="flex-1">
        {hasError && error ? (
          <FriendlyErrorFallback
            error={error}
            onRetry={clearError}
            onGoHome={() => handleNavigateTab('home')}
            onResetData={resetAppState}
            language={language}
          />
        ) : (
          <ViewBoundary
            key={activeTab}
            onError={(err, info) => {
              captureError(err, `view:${activeTab}`);
              console.error(`Render crash in tab [${activeTab}]:`, info.componentStack);
            }}
            fallback={(err, reset) => (
              <FriendlyErrorFallback
                error={err}
                onRetry={() => {
                  clearError();
                  reset();
                }}
                onGoHome={() => handleNavigateTab('home')}
                onResetData={resetAppState}
                language={language}
              />
            )}
          >
            {activeTab === 'home' && (
              <HomeView
                language={language}
                onNavigate={handleNavigateTab}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat);
                  setSelectedSchemeId(null);
                  handleNavigateTab('schemes');
                }}
                onSelectNeed={(need) => {
                  setSelectedNeed(need);
                  setSelectedSchemeId(null);
                  handleNavigateTab('schemes');
                }}
                onSelectDistrict={(dist) => {
                  setSelectedDistrict(dist);
                  setSelectedSchemeId(null);
                  handleNavigateTab('schemes');
                }}
                onSelectScheme={(id) => {
                  setSelectedSchemeId(id);
                  handleNavigateTab('schemes');
                }}
                onSelectToolCategory={(cat) => {
                  setInitialToolCategory(cat);
                  handleNavigateTab('tools');
                }}
                onSelectProfile={(profileId) => {
                  const p = DEMO_PROFILES.find((prof) => prof.id === profileId);
                  if (p) handleSelectDemoProfile(p);
                  handleNavigateTab('dashboard');
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
                  handleNavigateTab('learn');
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
                  handleNavigateTab('tools');
                }}
                onGoToDashboard={() => handleNavigateTab('dashboard')}
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
                  handleNavigateTab('schemes');
                }}
                onOpenTool={(toolId) => {
                  setSelectedToolId(toolId);
                  handleNavigateTab('tools');
                }}
                onOpenLesson={(lessonId) => {
                  setSelectedLessonId(lessonId);
                  handleNavigateTab('learn');
                }}
                onNavigateTab={handleNavigateTab}
              />
            )}

            {activeTab === 'directory' && (
              <DirectoryView
                language={language}
                onNavigate={handleNavigateTab}
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
                  handleNavigateTab('schemes');
                }}
                onNavigate={handleNavigateTab}
              />
            )}

            {activeTab === 'about' && (
              <AboutView language={language} />
            )}
          </ViewBoundary>
        )}
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigateTab}
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
          handleNavigateTab('schemes');
          setIsVoiceOpen(false);
        }}
        onNavigateTool={(id: string) => {
          setSelectedToolId(id);
          handleNavigateTab('tools');
          setIsVoiceOpen(false);
        }}
        onNavigateTab={(tab: NavTab) => {
          handleNavigateTab(tab);
          setIsVoiceOpen(false);
        }}
      />
    </div>
  );
}
