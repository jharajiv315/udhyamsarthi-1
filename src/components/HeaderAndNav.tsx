import React from 'react';
import { Language, NavTab } from '../types';
import { UI_LABELS, t } from '../data/translations';
import { Mic, Home, FileText, Wrench, BookOpen, UserCheck } from 'lucide-react';

interface HeaderAndNavProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenVoice: () => void;
  savedCount: number;
}

export const HeaderAndNav: React.FC<HeaderAndNavProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenVoice,
  savedCount,
}) => {
  const navItems: { id: NavTab; label: string }[] = [
    { id: 'schemes', label: t(UI_LABELS.navSchemes, lang) },
    { id: 'tools', label: t(UI_LABELS.navTools, lang) },
    { id: 'learn', label: t(UI_LABELS.navLearn, lang) },
    { id: 'readiness', label: t(UI_LABELS.navReadiness, lang) },
    { id: 'dashboard', label: t(UI_LABELS.navDashboard, lang) },
  ];

  return (
    <>
      {/* Top Bar Contract: Exactly 3 Zones (Brand Wordmark — 5 Clean Nav Links — Language & Voice Action) */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with custom geometric Saarthi path/arrow emblem */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('home');
          }}
          className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-semibold tracking-tight text-[#0F172A] font-display whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C25E00]"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect width="32" height="32" rx="6" fill="#0F172A" />
            <path d="M6 9H26" stroke="#FAF8F5" strokeWidth="2.2" strokeLinecap="round" />
            <path
              d="M9 24C9 18.5 14 16.5 19 14L23 12M23 12L17.5 12M23 12L23 17.5"
              stroke="#D97706"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="24" r="2" fill="#FAF8F5" />
          </svg>
          {t(UI_LABELS.brandTitle, lang)}
        </a>

        {/* Zone 2: 5 Clean text navigation links with subtle hover/active underlines */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
                className={`py-1 whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#0F172A] font-semibold border-[#C25E00]'
                    : 'border-transparent hover:text-[#0F172A] hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#saved"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('saved');
            }}
            className={`hidden xl:inline-block py-1 whitespace-nowrap transition-colors border-b-2 ${
              activeTab === 'saved'
                ? 'text-[#0F172A] font-semibold border-[#C25E00]'
                : 'border-transparent hover:text-[#0F172A] hover:border-slate-300'
            }`}
          >
            {lang === 'mr' ? `जतन केलेले (${savedCount})` : lang === 'hi' ? `सहेजे गए (${savedCount})` : `Saved (${savedCount})`}
          </a>
        </nav>

        {/* Zone 3: Language Segmented Control + Ask Saarthi Voice Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            role="group"
            aria-label="Select Language"
            className="flex items-center bg-slate-200/80 p-0.5 rounded-md border border-slate-300/80"
          >
            {(['en', 'mr', 'hi'] as Language[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  lang === l
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#0F172A]'
                }`}
              >
                {l === 'en' ? 'EN' : l === 'mr' ? 'मराठी' : 'हिन्दी'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenVoice}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#C25E00] hover:bg-[#9A3412] active:bg-[#7C2D12] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer border border-[#B45309] shadow-xs"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>{t(UI_LABELS.askSaarthi, lang)}</span>
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation: Home | Schemes | Tools | Learn | Profile (under 15% viewport height cap) */}
      <nav
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 h-14 px-2 flex items-center justify-around"
      >
        {[
          { id: 'home' as NavTab, icon: Home, label: { en: 'Home', mr: 'मुख्यपृष्ठ', hi: 'होम' } },
          { id: 'schemes' as NavTab, icon: FileText, label: { en: 'Schemes', mr: 'योजना', hi: 'योजनाएं' } },
          { id: 'tools' as NavTab, icon: Wrench, label: { en: 'Tools', mr: 'साधने', hi: 'टूल्स' } },
          { id: 'learn' as NavTab, icon: BookOpen, label: { en: 'Learn', mr: 'शिका', hi: 'सीखें' } },
          { id: 'dashboard' as NavTab, icon: UserCheck, label: { en: 'Profile', mr: 'कृती केंद्र', hi: 'प्रोफाइल' } },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 min-w-[56px] text-[11px] font-medium transition-colors whitespace-nowrap ${
                isActive ? 'text-[#C25E00] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span>{t(item.label, lang)}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
