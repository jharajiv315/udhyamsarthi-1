import React, { useState } from 'react';
import { NavTab, Language } from '../types';
import { t } from '../data/translations';
import {
  Wifi,
  WifiOff,
  ShieldCheck,
  X,
  PhoneCall,
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

  const navigationSections = [
    {
      tab: 'home' as NavTab,
      label: { en: 'Seva Desk', mr: 'सेवा डेस्क', hi: 'सेवा डेस्क' },
      hint: {
        en: 'Rural Maharashtra companion overview & profile selection',
        mr: 'ग्रामीण उद्योजक सेवा डेस्क आणि प्रोफाइल निवड',
        hi: 'ग्रामीण उद्यमी सेवा डेस्क व प्रोफाइल चयन',
      },
    },
    {
      tab: 'schemes' as NavTab,
      label: { en: 'Schemes & Subsidies', mr: 'शासकीय योजना', hi: 'सरकारी योजनाएं' },
      hint: {
        en: 'Subsidies up to 35% with verified Maharashtra GR rules',
        mr: '३५% अनुदानासह अधिकृत शासन निर्णय व पात्रता',
        hi: '35% सब्सिडी वाली अधिकृत योजनाएं',
      },
    },
    {
      tab: 'tools' as NavTab,
      label: { en: 'Digital Tools', mr: 'डिजिटल साधने', hi: 'डिजिटल टूल्स' },
      hint: {
        en: 'UPI QR, WhatsApp Catalog, Google Maps & Billing tools',
        mr: 'व्हॉट्सॲप कॅटलॉग, बिलिंग व फोनपे साऊंडबॉक्स साधने',
        hi: 'व्हाट्सएप कैटलॉग, बिलिंग व गूगल मैप्स टूल्स',
      },
    },
    {
      tab: 'readiness' as NavTab,
      label: { en: 'Readiness Audit', mr: 'सज्जता चाचणी', hi: 'तत्परता जांच' },
      hint: {
        en: '8-question business readiness score & gap analysis',
        mr: '८ सोप्या प्रश्नांची व्यवसाय सज्जता व स्कोअर चाचणी',
        hi: '8 प्रश्नों का व्यवसाय तत्परता स्कोर व विश्लेषण',
      },
    },
    {
      tab: 'dashboard' as NavTab,
      label: { en: 'Action Plan & PDF', mr: 'कृती आराखडा', hi: 'एक्शन प्लान' },
      hint: {
        en: 'Official downloadable document checklist & readiness report PDF',
        mr: 'कागदपत्रे व स्कोअरचा अधिकृत छापील PDF अहवाल',
        hi: 'दस्तावेज व स्कोर का आधिकारिक डाउनलोड योग्य PDF रिपोर्ट',
      },
    },
    {
      tab: 'directory' as NavTab,
      label: { en: 'District Centres', mr: 'जिल्हा कार्यालये', hi: 'जिला कार्यालय' },
      hint: {
        en: 'District Industries Centres & MahaSeva kendras across all 36 districts',
        mr: 'महाराष्ट्रातील सर्व ३६ जिल्हा उद्योग केंद्र व मदत केंद्रे',
        hi: 'महाराष्ट्र के सभी 36 जिला उद्योग केंद्र व सहायता डेस्क',
      },
    },
  ];

  return (
    <div className="relative z-30 select-none bg-[#F7F5F0] border-b border-[#E2DDD5]">
      {/* Saffron Hairline Accent Line matching Maharashtra state emblem */}
      <div className="h-[2px] w-full bg-[#C25E00]" />

      {/* Main Top Institutional Utility Ribbon */}
      <aside
        aria-label="Government of Maharashtra MSME Utility Header"
        className="px-4 sm:px-8 py-2"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs">
          
          {/* Left: Official Maharashtra State Administration Identification */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Maharashtra State Seal Accent Badge */}
            <div className="flex items-center gap-1.5 font-medium text-stone-900">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25E00]" aria-hidden="true" />
              <span className="font-semibold text-stone-900 tracking-tight text-[11px] sm:text-xs">
                {t(
                  {
                    en: 'Government of Maharashtra',
                    mr: 'महाराष्ट्र शासन',
                    hi: 'महाराष्ट्र शासन',
                  },
                  language
                )}
              </span>
              <span className="text-stone-300 font-light" aria-hidden="true">·</span>
              <span className="text-[11px] sm:text-xs text-stone-600 hidden sm:inline">
                {t(
                  {
                    en: 'Directorate of Industries',
                    mr: 'उद्योग संचालनालय',
                    hi: 'उद्योग निदेशालय',
                  },
                  language
                )}
              </span>
            </div>
          </div>

          {/* Center: Clean Executive Section Breadcrumb (No emojis, no number circles, premium flat style) */}
          <nav
            aria-label="Portal Sections"
            className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full md:w-auto py-0.5"
          >
            {navigationSections.map((sec) => {
              const isActive = activeTab === sec.tab;

              return (
                <button
                  key={sec.tab}
                  type="button"
                  onClick={() => onNavigateTab(sec.tab)}
                  className={`px-2.5 py-1 text-[11px] sm:text-xs rounded font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                  title={t(sec.hint, language)}
                >
                  {t(sec.label, language)}
                </button>
              );
            })}
          </nav>

          {/* Right: Citizen Helpline & Micro Low-Bandwidth Switch */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Toll Free Helpline */}
            <a
              href="tel:18001208040"
              className="hidden lg:inline-flex items-center gap-1.5 text-[11px] text-stone-600 hover:text-stone-900 transition-colors"
              title="Toll-free Citizen MSME Helpline"
            >
              <PhoneCall className="w-3 h-3 text-[#C25E00]" />
              <span className="font-medium">1800-120-8040</span>
            </a>

            <span className="text-stone-300 font-light hidden lg:inline" aria-hidden="true">|</span>

            {/* Low-Bandwidth Mode Micro-Switch Control (Premium Executive Style) */}
            <button
              type="button"
              role="switch"
              aria-checked={isOfflineMode}
              onClick={() => {
                onToggleOfflineMode();
                if (!isOfflineMode) setShowOfflineBanner(true);
              }}
              className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer shadow-xs ${
                isOfflineMode
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
              title={
                isOfflineMode
                  ? 'Offline data cached locally for low-connectivity rural zones'
                  : 'Toggle low-bandwidth mode for rural connectivity'
              }
            >
              {isOfflineMode ? (
                <>
                  <WifiOff className="w-3 h-3 text-emerald-700" />
                  <span className="font-semibold text-emerald-900">
                    {t({ en: 'Offline: Active', mr: 'ऑफलाइन: सुरू', hi: 'ऑफलाइन: सक्रिय' }, language)}
                  </span>
                  {/* Micro toggle pill indicator */}
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                </>
              ) : (
                <>
                  <Wifi className="w-3 h-3 text-stone-500" />
                  <span>
                    {t({ en: 'Low-Bandwidth Mode', mr: 'कमी डेटा मोड', hi: 'कम डेटा मोड' }, language)}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-stone-300 inline-block" />
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Integrated Low-Bandwidth Notification Drawer (When enabled) */}
      {isOfflineMode && showOfflineBanner && (
        <div className="bg-emerald-50/90 border-t border-b border-emerald-200 text-emerald-950 px-4 sm:px-8 py-2 text-xs transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <p className="text-emerald-900 text-xs">
                <span className="font-semibold">
                  {t(
                    {
                      en: 'Low-Bandwidth Mode Active:',
                      mr: 'कमी डेटा व ऑफलाइन मोड सक्रिय:',
                      hi: 'कम डेटा व ऑफलाइन मोड सक्रिय:',
                    },
                    language
                  )}{' '}
                </span>
                {t(
                  {
                    en: 'All government schemes, checklists, and 36-district helpdesk contacts are cached on your device for uninterrupted offline access.',
                    mr: 'शासकीय योजना, कागदपत्रे आणि ३६ जिल्ह्यांचे संपर्क ऑफलाइन उपलब्धतेसाठी फोनमध्ये सेव्ह आहेत.',
                    hi: 'सरकारी योजनाएं, दस्तावेज और 36 जिलों के संपर्क ऑफलाइन उपयोग के लिए फोन में सुरक्षित हैं।',
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
