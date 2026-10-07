import React, { useState } from 'react';
import { NavTab, Language } from '../types';
import { t } from '../data/translations';
import {
  Sparkles,
  FileText,
  Wrench,
  CheckCircle2,
  FileDown,
  Building2,
  Wifi,
  WifiOff,
  ShieldCheck,
  X,
  Compass,
} from 'lucide-react';

interface ExecutiveTopBarProps {
  activeTab: NavTab;
  onNavigateTab: (tab: NavTab) => void;
  language: Language;
  isOfflineMode: boolean;
  onToggleOfflineMode: () => void;
}

export const ExecutiveTopBar: React.FC<ExecutiveTopBarProps> = ({
  activeTab,
  onNavigateTab,
  language,
  isOfflineMode,
  onToggleOfflineMode,
}) => {
  const [showOfflineBanner, setShowOfflineBanner] = useState(true);

  const walkthroughSteps = [
    {
      tab: 'home' as NavTab,
      stepNum: 1,
      icon: Sparkles,
      label: { en: 'Seva Desk', mr: 'सेवा डेस्क', hi: 'सेवा डेस्क' },
      hint: {
        en: 'Rural Maharashtra companion overview & profile selection',
        mr: 'ग्रामीण उद्योजक सेवा डेस्क आणि प्रोफाइल निवड',
        hi: 'ग्रामीण उद्यमी सेवा डेस्क व प्रोफाइल चयन',
      },
    },
    {
      tab: 'schemes' as NavTab,
      stepNum: 2,
      icon: FileText,
      label: { en: 'Scheme Finder', mr: 'योजना शोधक', hi: 'योजना खोजक' },
      hint: {
        en: 'Subsidies up to 35% with verified Maharashtra GR rules',
        mr: '३५% अनुदानासह अधिकृत शासन निर्णय व पात्रता',
        hi: '35% सब्सिडी वाली अधिकृत योजनाएं',
      },
    },
    {
      tab: 'tools' as NavTab,
      stepNum: 3,
      icon: Wrench,
      label: { en: 'Digital Tools', mr: 'डिजिटल साधने', hi: 'डिजिटल टूल्स' },
      hint: {
        en: 'UPI QR, WhatsApp Catalog, Google Maps & Billing tools',
        mr: 'व्हॉट्सॲप कॅटलॉग, बिलिंग व फोनपे साऊंडबॉक्स साधने',
        hi: 'व्हाट्सएप कैटलॉग, बिलिंग व गूगल मैप्स टूल्स',
      },
    },
    {
      tab: 'readiness' as NavTab,
      stepNum: 4,
      icon: CheckCircle2,
      label: { en: 'Readiness Test', mr: 'सज्जता चाचणी', hi: 'तत्परता जांच' },
      hint: {
        en: '8-question business readiness score & gap analysis',
        mr: '८ सोप्या प्रश्नांची व्यवसाय सज्जता व स्कोअर चाचणी',
        hi: '8 प्रश्नों का व्यवसाय तत्परता स्कोर व विश्लेषण',
      },
    },
    {
      tab: 'dashboard' as NavTab,
      stepNum: 5,
      icon: FileDown,
      label: { en: 'Action Plan & PDF', mr: 'कृती केंद्र व PDF', hi: 'एक्शन सेंटर व PDF' },
      hint: {
        en: 'Official downloadable document checklist & readiness report PDF',
        mr: 'कागदपत्रे व स्कोअरचा अधिकृत छापील PDF अहवाल',
        hi: 'दस्तावेज व स्कोर का आधिकारिक डाउनलोड योग्य PDF रिपोर्ट',
      },
    },
    {
      tab: 'directory' as NavTab,
      stepNum: 6,
      icon: Building2,
      label: { en: 'DIC Directory', mr: 'मदत केंद्रे', hi: 'सहायता केंद्र' },
      hint: {
        en: 'District Industries Centres & MahaSeva kendras across all 36 districts',
        mr: 'महाराष्ट्रातील सर्व ३६ जिल्हा उद्योग केंद्र व मदत केंद्रे',
        hi: 'महाराष्ट्र के सभी 36 जिला उद्योग केंद्र व सहायता डेस्क',
      },
    },
  ];

  return (
    <div className="relative z-30 select-none">
      {/* Refined Saffron-Gold Tricolor Top Hairline Accent */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.25)]" />

      {/* Main Top Tour Ribbon */}
      <aside aria-label="Feature Walkthrough and Utilities" className="bg-[#0B1120] text-slate-200 border-b border-slate-800/80 px-3 sm:px-6 py-2 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Left: Official Initiative Badge & Pulse Indicator */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-wider text-amber-300 uppercase">
                {t(
                  {
                    en: 'MAHA-MSME GUIDE',
                    mr: 'महाराष्ट्र एमएसएमई साथी',
                    hi: 'महाराष्ट्र एमएसएमई सारथी',
                  },
                  language
                )}
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400 font-medium">
              <Compass className="w-3.5 h-3.5 text-slate-500" />
              <span>
                {t(
                  {
                    en: 'Guided Workflow:',
                    mr: 'मार्गदर्शित फेरफटका:',
                    hi: 'मार्गदर्शित यात्रा:',
                  },
                  language
                )}
              </span>
            </div>
          </div>

          {/* Center: Sleek Segmented Interactive Stepper */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full md:w-auto p-1 bg-slate-900/90 rounded-xl sm:rounded-full border border-slate-800/90 shadow-inner">
            {walkthroughSteps.map((step) => {
              const isActive = activeTab === step.tab;
              const Icon = step.icon;

              return (
                <button
                  key={step.tab}
                  type="button"
                  onClick={() => onNavigateTab(step.tab)}
                  className={`group px-3 py-1.5 rounded-lg sm:rounded-full text-xs whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold shadow-md shadow-amber-950/40 ring-1 ring-amber-300/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80 font-medium'
                  }`}
                  title={t(step.hint, language)}
                >
                  <span
                    className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {step.stepNum}
                  </span>
                  <Icon
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      isActive ? 'text-amber-200 scale-105' : 'text-slate-400 group-hover:text-slate-300'
                    }`}
                  />
                  <span className="tracking-tight">{t(step.label, language)}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Low-Bandwidth / Rural Offline Switch */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                onToggleOfflineMode();
                if (!isOfflineMode) setShowOfflineBanner(true);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                isOfflineMode
                  ? 'bg-emerald-950/90 text-emerald-200 border border-emerald-500/50 shadow-sm shadow-emerald-950/60 ring-1 ring-emerald-500/30'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/70 hover:border-slate-600'
              }`}
              title={
                isOfflineMode
                  ? 'Offline data cached locally'
                  : 'Enable low-data mode for rural connectivity'
              }
            >
              {isOfflineMode ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="font-semibold">
                    {t({ en: 'Offline: Active', mr: 'ऑफलाइन: सक्रिय', hi: 'ऑफलाइन: सक्रिय' }, language)}
                  </span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-slate-400" />
                  <span>
                    {t({ en: 'Low-Bandwidth Mode', mr: 'कमी डेटा मोड', hi: 'कम डेटा मोड' }, language)}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Integrated Low-Bandwidth Notification Drawer (When enabled) */}
      {isOfflineMode && showOfflineBanner && (
        <div className="bg-emerald-950/95 border-b border-emerald-800/60 backdrop-blur-sm text-emerald-100 px-4 py-2 text-xs transition-all animate-fadeIn">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-900/80 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              </div>
              <p className="text-slate-200 text-xs font-normal">
                <strong className="font-semibold text-emerald-300">
                  {t(
                    {
                      en: 'Rural Offline Protection Active:',
                      mr: 'ग्रामीण ऑफलाइन संरक्षण सक्रिय:',
                      hi: 'ग्रामीण ऑफलाइन सुरक्षा सक्रिय:',
                    },
                    language
                  )}{' '}
                </strong>
                {t(
                  {
                    en: 'Maharashtra state schemes, document checklists, and 36-district helpdesk contacts are locally cached.',
                    mr: 'महाराष्ट्राच्या सर्व शासकीय योजना, कागदपत्रे आणि ३६ जिल्ह्यांचे संपर्क फोनमध्ये सुरक्षित सेव्ह आहेत.',
                    hi: 'महाराष्ट्र की सभी सरकारी योजनाएं, दस्तावेज और 36 जिलों के संपर्क फोन में सुरक्षित सेव हैं।',
                  },
                  language
                )}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={onToggleOfflineMode}
                className="px-2.5 py-1 text-[11px] font-semibold text-emerald-200 hover:text-white bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/60 rounded cursor-pointer transition-colors"
              >
                {t({ en: 'Disable', mr: 'बंद करा', hi: 'बंद करें' }, language)}
              </button>
              <button
                type="button"
                onClick={() => setShowOfflineBanner(false)}
                className="p-1 text-emerald-400 hover:text-white rounded hover:bg-emerald-900/50 cursor-pointer transition-colors"
                title="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
