import React, { useState } from 'react';
import { NavTab, Language } from '../types';
import { t } from '../data/translations';
import {
  Wifi,
  WifiOff,
  ShieldCheck,
  X,
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

  const workflowSteps = [
    {
      tab: 'home' as NavTab,
      stepNum: 1,
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
      label: { en: 'DIC Directory', mr: 'मदत केंद्रे', hi: 'सहायता केंद्र' },
      hint: {
        en: 'District Industries Centres & MahaSeva kendras across all 36 districts',
        mr: 'महाराष्ट्रातील सर्व ३६ जिल्हा उद्योग केंद्र व मदत केंद्रे',
        hi: 'महाराष्ट्र के सभी 36 जिला उद्योग केंद्र व सहायता डेस्क',
      },
    },
  ];

  return (
    <div className="relative z-30 select-none bg-[#F5F2EB] border-b border-[#E2DDD5]">
      {/* Refined Saffron Hairline Accent Line matching Maharashtra state emblem */}
      <div className="h-[2px] w-full bg-[#C25E00]" />

      {/* Main Top Workflow Ribbon - Designed to match the warm linen canvas */}
      <aside
        aria-label="Maharashtra MSME Citizen Workflow"
        className="px-3 sm:px-6 py-2"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs">
          
          {/* Left: Official Initiative Identification */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-semibold tracking-wider text-stone-900 text-[11px] uppercase">
              {t(
                {
                  en: 'Maharashtra MSME Portal',
                  mr: 'महाराष्ट्र एमएसएमई साथी',
                  hi: 'महाराष्ट्र एमएसएमई सारथी',
                },
                language
              )}
            </span>
            <span className="text-stone-300 font-light" aria-hidden="true">|</span>
            <span className="text-[11px] text-stone-600 hidden sm:inline">
              {t(
                {
                  en: 'Citizen Enterprise Guidance',
                  mr: 'नागरी व्यवसाय मार्गदर्शिका',
                  hi: 'नागरिक व्यवसाय मार्गदर्शिका',
                },
                language
              )}
            </span>
          </div>

          {/* Center: Clean Segmented Stepper matching light palette */}
          <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar w-full md:w-auto p-1 bg-[#E8E2D6] rounded-lg border border-[#DDD5C7]">
            {workflowSteps.map((step) => {
              const isActive = activeTab === step.tab;

              return (
                <button
                  key={step.tab}
                  type="button"
                  onClick={() => onNavigateTab(step.tab)}
                  className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 cursor-pointer shrink-0 font-medium ${
                    isActive
                      ? 'bg-white text-stone-900 font-semibold shadow-xs border border-stone-200/90'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
                  }`}
                  title={t(step.hint, language)}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full text-[10px] font-semibold flex items-center justify-center ${
                      isActive
                        ? 'bg-stone-900 text-white'
                        : 'bg-stone-300/80 text-stone-700'
                    }`}
                  >
                    {step.stepNum}
                  </span>
                  <span>{t(step.label, language)}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Low-Bandwidth Mode Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                onToggleOfflineMode();
                if (!isOfflineMode) setShowOfflineBanner(true);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer shadow-xs ${
                isOfflineMode
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
              title={
                isOfflineMode
                  ? 'Offline data cached locally'
                  : 'Enable low-data mode for rural connectivity'
              }
            >
              {isOfflineMode ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="font-semibold text-emerald-800">
                    {t({ en: 'Offline Mode: Active', mr: 'ऑफलाइन: सक्रिय', hi: 'ऑफलाइन: सक्रिय' }, language)}
                  </span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-stone-500" />
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
        <div className="bg-emerald-50 border-t border-b border-emerald-200 text-emerald-950 px-4 py-2 text-xs transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <p className="text-emerald-900 text-xs">
                <span className="font-semibold">
                  {t(
                    {
                      en: 'Low-Bandwidth Offline Protection Active:',
                      mr: 'कमी डेटा व ऑफलाइन संरक्षण सक्रिय:',
                      hi: 'कम डेटा व ऑफलाइन सुरक्षा सक्रिय:',
                    },
                    language
                  )}{' '}
                </span>
                {t(
                  {
                    en: 'Schemes, document checklists, and 36-district helpdesk contacts are cached for offline access.',
                    mr: 'शासकीय योजना, कागदपत्रे आणि ३६ जिल्ह्यांचे संपर्क फोनमध्ये सेव्ह आहेत.',
                    hi: 'सरकारी योजनाएं, दस्तावेज और 36 जिलों के संपर्क फोन में सुरक्षित हैं।',
                  },
                  language
                )}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={onToggleOfflineMode}
                className="px-2.5 py-0.5 text-[11px] font-medium text-emerald-900 hover:text-emerald-950 bg-white border border-emerald-300 rounded shadow-xs cursor-pointer transition-colors"
              >
                {t({ en: 'Disable', mr: 'बंद करा', hi: 'बंद करें' }, language)}
              </button>
              <button
                type="button"
                onClick={() => setShowOfflineBanner(false)}
                className="p-1 text-emerald-700 hover:text-emerald-950 rounded hover:bg-emerald-100/60 cursor-pointer transition-colors"
                title="Dismiss"
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
