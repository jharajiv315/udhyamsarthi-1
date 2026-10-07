import React, { useState } from 'react';
import { DigitalTool, Language, Lesson, ToolCategory } from '../types';
import { DIGITAL_TOOLS_DATA, LESSONS_DATA } from '../data/toolsAndLessonsData';
import { t } from '../data/translations';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  Lightbulb,
  Check,
} from 'lucide-react';

const TOOL_CATEGORIES: { id: ToolCategory | 'All'; label: { en: string; mr: string; hi: string } }[] = [
  { id: 'All', label: { en: 'All Tools', mr: 'सर्व साधने', hi: 'सभी टूल्स' } },
  { id: 'Get Paid', label: { en: 'Get Paid', mr: 'पेमेंट स्वीकारा (Get Paid)', hi: 'भुगतान प्राप्त करें' } },
  { id: 'Talk to Customers', label: { en: 'Talk to Customers', mr: 'ग्राहकांशी संवाद', hi: 'ग्राहकों से संवाद' } },
  { id: 'Show Your Products', label: { en: 'Show Your Products', mr: 'उत्पादने दाखवा', hi: 'उत्पाद दिखाएं' } },
  { id: 'Find Customers', label: { en: 'Find Customers', mr: 'नवीन ग्राहक शोधा', hi: 'नए ग्राहक खोजें' } },
  { id: 'Manage Business', label: { en: 'Manage Business', mr: 'डिजिटल हिशोब', hi: 'व्यावसायिक हिसाब' } },
  { id: 'Sell Online', label: { en: 'Sell Online', mr: 'ऑनलाइन विक्री', hi: 'ऑनलाइन बिक्री' } },
];

interface DigitalToolsViewProps {
  lang: Language;
  selectedToolId: string | null;
  setSelectedToolId: (id: string | null) => void;
  initialCategory?: ToolCategory | 'All';
  savedTools: string[];
  onToggleSaveTool: (toolId: string) => void;
  onStartLesson: (lessonId: string) => void;
}

export const DigitalToolsView: React.FC<DigitalToolsViewProps> = ({
  lang,
  selectedToolId,
  setSelectedToolId,
  initialCategory = 'All',
  savedTools,
  onToggleSaveTool,
  onStartLesson,
}) => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All'>(initialCategory);

  const activeTool: DigitalTool | undefined = selectedToolId
    ? DIGITAL_TOOLS_DATA.find((item) => item.id === selectedToolId)
    : undefined;

  if (activeTool) {
    const isSaved = savedTools.includes(activeTool.id);
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setSelectedToolId(null)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#0F172A] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {lang === 'mr'
                ? 'सर्व डिजिटल साधनांकडे परत जा'
                : lang === 'hi'
                ? 'सभी डिजिटल टूल्स पर वापस जाएं'
                : 'Back to Digital Tool Library'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onToggleSaveTool(activeTool.id)}
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
                  ? 'जतन केले (Saved)'
                  : lang === 'hi'
                  ? 'सहेजा गया (Saved)'
                  : 'Saved in My Resources'
                : lang === 'mr'
                ? 'हे साधन जतन करा'
                : lang === 'hi'
                ? 'यह टूल सहेजें'
                : 'Save Tool'}
            </span>
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono-tabular">
            <span className="font-semibold text-[#1E3A8A]">{activeTool.category}</span>
            <span aria-hidden="true">·</span>
            <span>
              {lang === 'mr' ? 'पातळी: ' : lang === 'hi' ? 'स्तर: ' : 'Difficulty: '}
              {activeTool.difficulty}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {lang === 'mr' ? 'खर्च: ' : lang === 'hi' ? 'लागत: ' : 'Cost: '}
              {activeTool.cost}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {lang === 'mr' ? 'शिकण्याचा वेळ: ' : lang === 'hi' ? 'सीखने का समय: ' : 'Time to Learn: '}
              {activeTool.timeToLearn}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] font-display">
            {t(activeTool.name, lang)}
          </h1>

          <p className="text-base text-slate-700 max-w-3xl leading-relaxed">
            {t(activeTool.shortDesc, lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-2.5">
            <h2 className="text-lg font-semibold text-[#0F172A] font-display">
              {lang === 'mr'
                ? 'हे नेमके काय आहे? (What is it?)'
                : lang === 'hi'
                ? 'यह क्या है? (What is it?)'
                : 'What is it?'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{t(activeTool.whatIsIt, lang)}</p>
          </section>

          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-2.5">
            <h2 className="text-lg font-semibold text-[#0F172A] font-display">
              {lang === 'mr'
                ? 'ग्रामीण व्यवसायाला याचा काय फायदा होतो? (Why care?)'
                : lang === 'hi'
                ? 'ग्रामीण व्यवसाय को इससे क्या लाभ है? (Why care?)'
                : 'Why should a rural business care?'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{t(activeTool.whyCare, lang)}</p>
          </section>
        </div>

        <section className="bg-white border border-slate-200 rounded-md overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-[#FAF8F5]">
            <h2 className="text-lg font-semibold text-[#0F172A] font-display">
              {lang === 'mr'
                ? 'प्रत्यक्ष व्यवसायातील फरक (Practical Business Example: Before vs After)'
                : lang === 'hi'
                ? 'व्यवसाय में वास्तविक अंतर (Practical Example: Before vs After)'
                : 'Practical Business Scenario — Before vs. After'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-6 space-y-2">
              <p className="text-xs font-semibold text-[#9A3412] font-mono-tabular">
                {lang === 'mr'
                  ? 'पूर्वीची पद्धत (BEFORE — जुनी अडचण)'
                  : lang === 'hi'
                  ? 'पहले की स्थिति (BEFORE — पुरानी समस्या)'
                  : 'BEFORE (Without Digital Tool)'}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {t(activeTool.beforeScenario, lang)}
              </p>
            </div>

            <div className="p-6 space-y-2 bg-emerald-50/30">
              <p className="text-xs font-semibold text-emerald-800 font-mono-tabular">
                {lang === 'mr'
                  ? 'डिजिटल साधनानंतर (AFTER — सोपा उपाय)'
                  : lang === 'hi'
                  ? 'डिजिटल टूल के बाद (AFTER — सरल समाधान)'
                  : 'AFTER (With Practical Digital Workflow)'}
              </p>
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                {t(activeTool.afterScenario, lang)}
              </p>
            </div>
          </div>
        </section>

        <div className="bg-[#0F172A] text-white rounded-md p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-amber-400 font-mono-tabular">
              {lang === 'mr'
                ? `शिकण्यासाठी लागणारा वेळ: ${activeTool.timeToLearn}`
                : lang === 'hi'
                ? `सीखने का समय: ${activeTool.timeToLearn}`
                : `Estimated Time to Learn: ${activeTool.timeToLearn}`}
            </p>
            <h3 className="text-lg font-semibold font-display">
              {lang === 'mr'
                ? 'हे साधन तुमच्या मोबाईलवर प्रत्यक्ष वापरायला शिकायचे आहे का?'
                : lang === 'hi'
                ? 'क्या आप इस टूल को अपने फोन पर स्टेप-बाय-स्टेप शुरू करना चाहते हैं?'
                : 'Ready to set this up step-by-step for your business?'}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onStartLesson(activeTool.relatedLessonId)}
            className="inline-flex items-center gap-2 h-11 px-5 text-xs sm:text-sm font-semibold text-white bg-[#C25E00] hover:bg-[#9A3412] active:bg-[#7C2D12] rounded-md border border-[#B45309] shadow-xs transition-colors whitespace-nowrap cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>
              {lang === 'mr'
                ? 'प्रत्यक्ष शिकायला सुरुवात करा (Start Learning)'
                : lang === 'hi'
                ? 'सीखना शुरू करें (Start Learning)'
                : 'Start Learning — Step-by-Step Guide'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const filteredTools =
    activeCategory === 'All'
      ? DIGITAL_TOOLS_DATA
      : DIGITAL_TOOLS_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <div className="space-y-3">
        <p className="text-xs text-slate-500 font-mono-tabular">
          {lang === 'mr'
            ? 'व्यवसायाच्या गरजेनुसार निवडलेली मोफत आणि सोपी साधने'
            : lang === 'hi'
            ? 'व्यवसाय की आवश्यकता के अनुसार चुने गए सरल और निःशुल्क टूल्स'
            : 'Practical Digital Enablement · Organized by Business Goal'}
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] font-display">
          {lang === 'mr'
            ? 'तुमच्या व्यवसायासाठी डिजिटल साधने (Digital Tools for Your Business)'
            : lang === 'hi'
            ? 'आपके व्यवसाय के लिए डिजिटल टूल्स (Digital Tools for Your Business)'
            : 'Digital Tools for Your Business'}
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          {lang === 'mr'
            ? 'कोणत्याही तांत्रिक अडचणीशिवाय तुमचा वेळ वाचवणारी, नवीन ग्राहक जोडणारी आणि बँक व्यवहार सुधारणारी साधने.'
            : lang === 'hi'
            ? 'बिना किसी तकनीकी जटिलता के आपका समय बचाने, नए ग्राहक जोड़ने और बैंक लेनदेन सुधारने वाले व्यावहारिक साधन।'
            : 'Simple, smartphone-first tools that help rural entrepreneurs accept payments, display catalogues, attract nearby buyers, and maintain clean records.'}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-md border border-slate-300/80">
        {TOOL_CATEGORIES.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap cursor-pointer ${
                active
                  ? 'bg-[#0F172A] text-white shadow-2xs'
                  : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/60'
              }`}
            >
              {t(cat.label, lang)}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTools.map((tool) => {
          const isSaved = savedTools.includes(tool.id);
          return (
            <article
              key={tool.id}
              className="bg-white border border-slate-200 rounded-md p-6 flex flex-col justify-between space-y-5 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-mono-tabular">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#1E3A8A]">{tool.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{tool.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span>{tool.cost}</span>
                  </div>
                  <span>{tool.timeToLearn}</span>
                </div>

                <h2 className="text-lg font-semibold text-[#0F172A] font-display">
                  {t(tool.name, lang)}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(tool.shortDesc, lang)}
                </p>

                <div className="bg-[#FAF8F5] border border-slate-200 rounded p-3 text-xs space-y-1.5">
                  <p className="text-slate-600">
                    <strong className="text-[#9A3412]">
                      {lang === 'mr' ? 'पूर्वी: ' : lang === 'hi' ? 'पहले: ' : 'Before: '}
                    </strong>
                    {t(tool.beforeScenario, lang)}
                  </p>
                  <p className="text-slate-800">
                    <strong className="text-emerald-800">
                      {lang === 'mr' ? 'आता: ' : lang === 'hi' ? 'अब: ' : 'After: '}
                    </strong>
                    {t(tool.afterScenario, lang)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedToolId(tool.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded transition-colors cursor-pointer"
                >
                  <span>
                    {lang === 'mr'
                      ? 'उदाहरणासह समजून घ्या'
                      : lang === 'hi'
                      ? 'उदाहरण सहित समझें'
                      : 'See Practical Example'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onStartLesson(tool.relatedLessonId)}
                    className="px-3 py-1.5 text-xs font-semibold text-[#C25E00] hover:underline cursor-pointer"
                  >
                    {lang === 'mr' ? 'प्रत्यक्ष शिका →' : lang === 'hi' ? 'सीखें →' : 'Start Tutorial →'}
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleSaveTool(tool.id)}
                    className={`p-1.5 rounded border transition-colors cursor-pointer ${
                      isSaved
                        ? 'bg-amber-50 border-[#C25E00] text-[#9A3412]'
                        : 'border-slate-200 text-slate-500 hover:text-slate-800'
                    }`}
                    title="Save tool"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

interface LearnSchoolViewProps {
  lang: Language;
  selectedLessonId: string | null;
  setSelectedLessonId: (id: string | null) => void;
  completedLessonSteps: Record<string, number[]>;
  onToggleLessonStep: (lessonId: string, stepNum: number) => void;
}

export const LearnSchoolView: React.FC<LearnSchoolViewProps> = ({
  lang,
  selectedLessonId,
  setSelectedLessonId,
  completedLessonSteps,
  onToggleLessonStep,
}) => {
  const activeLesson: Lesson =
    LESSONS_DATA.find((l) => l.id === selectedLessonId) || LESSONS_DATA[0];

  const completedStepsForActive = completedLessonSteps[activeLesson.id] || [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <div className="space-y-2">
        <p className="text-xs text-slate-500 font-mono-tabular">
          {lang === 'mr'
            ? 'कृतीतून शिका (Learn by Doing · Digital Business School)'
            : lang === 'hi'
            ? 'करके सीखें (Learn by Doing · Digital Business School)'
            : 'Learn by Doing · Digital Business School'}
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] font-display">
          {lang === 'mr'
            ? 'डिजिटल व्यवसाय शाळा — छोट्या टप्प्यांत प्रत्यक्ष शिका'
            : lang === 'hi'
            ? 'डिजिटल बिजनेस स्कूल — छोटे चरणों में व्यावहारिक प्रशिक्षण'
            : 'Digital Business School — Short, Step-by-Step Guides'}
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          {lang === 'mr'
            ? 'मोठे आणि क्लिष्ट लेख वाचण्याऐवजी, खालील ४ ते ५ छोट्या पायऱ्या पूर्ण करून तुमच्या व्यवसायात आजच बदल घडवा.'
            : lang === 'hi'
            ? 'लंबे लेख पढ़ने के बजाय, नीचे दिए गए 4-5 सरल चरण पूरे करके अपने व्यवसाय को डिजिटल बनाएं।'
            : 'Instead of long theoretical paragraphs, follow these short interactive checklists right on your phone.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 space-y-3">
          <p className="text-xs font-semibold text-slate-600">
            {lang === 'mr'
              ? 'प्रशिक्षण धडे निवडा (Select a Lesson):'
              : lang === 'hi'
              ? 'प्रशिक्षण पाठ चुनें (Select a Lesson):'
              : 'Select a Practical Lesson:'}
          </p>

          {LESSONS_DATA.map((lesson) => {
            const doneCount = (completedLessonSteps[lesson.id] || []).length;
            const totalCount = lesson.steps.length;
            const isSelected = activeLesson.id === lesson.id;

            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => setSelectedLessonId(lesson.id)}
                className={`w-full text-left p-4 rounded-md border transition-colors space-y-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-tabular">
                  <span className={isSelected ? 'text-amber-400' : 'text-[#1E3A8A]'}>
                    {lesson.category}
                  </span>
                  <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>
                    {doneCount} / {totalCount}{' '}
                    {lang === 'mr' ? 'पूर्ण' : lang === 'hi' ? 'पूर्ण' : 'steps'}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-snug">{t(lesson.title, lang)}</p>
                <div className="w-full h-1.5 bg-slate-200/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C25E00] transition-all duration-200"
                    style={{ width: `${Math.round((doneCount / totalCount) * 100)}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="space-y-1.5">
              <p className="text-xs text-slate-500 font-mono-tabular">{activeLesson.duration}</p>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0F172A] font-display">
                {t(activeLesson.title, lang)}
              </h2>
              <p className="text-sm text-slate-600">{t(activeLesson.summary, lang)}</p>
            </div>

            <div className="bg-[#FAF8F5] border border-slate-200 rounded px-4 py-2.5 text-right font-mono-tabular shrink-0">
              <p className="text-xs text-slate-500">
                {lang === 'mr' ? 'तुमची प्रगती' : lang === 'hi' ? 'आपकी प्रगति' : 'Lesson Progress'}
              </p>
              <p className="text-base font-semibold text-[#0F172A]">
                {completedStepsForActive.length} / {activeLesson.steps.length}{' '}
                {lang === 'mr' ? 'टप्पे पूर्ण' : lang === 'hi' ? 'चरण पूर्ण' : 'steps completed'}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {activeLesson.steps.map((st) => {
              const isStepDone = completedStepsForActive.includes(st.stepNumber);
              return (
                <div
                  key={st.stepNumber}
                  className={`border rounded-md p-5 transition-colors ${
                    isStepDone
                      ? 'bg-emerald-50/30 border-emerald-300'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <button
                        type="button"
                        onClick={() => onToggleLessonStep(activeLesson.id, st.stepNumber)}
                        className={`mt-0.5 w-6 h-6 rounded flex items-center justify-center text-xs font-mono-tabular font-semibold border transition-colors shrink-0 cursor-pointer ${
                          isStepDone
                            ? 'bg-emerald-700 border-emerald-700 text-white'
                            : 'bg-[#FAF8F5] border-slate-300 text-[#0F172A] hover:border-[#C25E00]'
                        }`}
                        title="Mark step completed"
                      >
                        {isStepDone ? <Check className="w-4 h-4 mx-auto" /> : st.stepNumber}
                      </button>

                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-[#0F172A]">
                          {t(st.title, lang)}
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {t(st.instruction, lang)}
                        </p>

                        <div className="bg-[#FAF8F5] border border-slate-200/80 rounded p-3 flex items-start gap-2 text-xs text-slate-700">
                          <Lightbulb className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                          <span>
                            <strong>
                              {lang === 'mr' ? 'सोपी टीप: ' : lang === 'hi' ? 'व्यावहारिक टिप: ' : 'Practical Tip: '}
                            </strong>
                            {t(st.practicalTip, lang)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleLessonStep(activeLesson.id, st.stepNumber)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 ${
                        isStepDone
                          ? 'bg-emerald-100 text-emerald-900'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isStepDone && <Check className="w-3.5 h-3.5" />}
                      <span>
                        {isStepDone
                          ? lang === 'mr'
                            ? 'पूर्ण झाले'
                            : lang === 'hi'
                            ? 'पूर्ण हुआ'
                            : 'Completed'
                          : lang === 'mr'
                          ? 'पूर्ण करा'
                          : lang === 'hi'
                          ? 'पूर्ण करें'
                          : 'Mark Done'}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
