import React, { useState } from 'react';
import {
  BusinessCategory,
  BusinessNeed,
  EntrepreneurProfile,
  Language,
  NavTab,
} from '../types';
import { SCHEMES_DATA, DOCUMENTS_MASTER } from '../data/schemesData';
import { DIGITAL_TOOLS_DATA, LESSONS_DATA } from '../data/toolsAndLessonsData';
import { DEMO_PROFILES, MAHARASHTRA_DISTRICTS } from '../data/districtsAndResourcesData';
import { BUSINESS_CATEGORIES, BUSINESS_NEEDS, t } from '../data/translations';
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Bookmark,
  Edit3,
  Download,
  Printer,
  FileText,
  X,
} from 'lucide-react';
import { jsPDF } from 'jspdf';

interface ReadinessQuestion {
  id: string;
  question: { en: string; mr: string; hi: string };
  strengthLabel: { en: string; mr: string; hi: string };
  nextStepLabel: { en: string; mr: string; hi: string };
  linkedToolId: string;
  weight: number;
}

export const READINESS_QUESTIONS: ReadinessQuestion[] = [
  {
    id: 'q_upi',
    question: {
      en: '1. Do you accept digital payments (UPI QR code) into a bank account?',
      mr: '१. तुम्ही व्यवसायात डिजिटल पेमेंट (UPI QR कोडद्वारे बँक खात्यात) स्वीकारता का?',
      hi: '1. क्या आप अपने व्यवसाय में डिजिटल भुगतान (UPI QR कोड से बैंक खाते में) स्वीकार करते हैं?',
    },
    strengthLabel: {
      en: 'Accepting UPI Digital Payments',
      mr: 'डिजिटल पेमेंट (UPI QR) स्वीकारणे',
      hi: 'डिजिटल भुगतान (UPI QR) स्वीकार करना',
    },
    nextStepLabel: {
      en: 'Set up a Business UPI QR board to build bank turnover proof',
      mr: 'बँक स्टेटमेंट तयार करण्यासाठी बिझनेस UPI QR कोड लावा',
      hi: 'बैंक स्टेटमेंट बनाने के लिए बिजनेस UPI QR कोड लगाएं',
    },
    linkedToolId: 'upi-qr-payments',
    weight: 15,
  },
  {
    id: 'q_whatsapp',
    question: {
      en: '2. Do you communicate with customers through WhatsApp Business?',
      mr: '२. ग्राहकांशी संवाद आणि ऑर्डरसाठी तुम्ही WhatsApp Business वापरता का?',
      hi: '2. क्या आप ग्राहकों से संवाद के लिए WhatsApp Business का उपयोग करते हैं?',
    },
    strengthLabel: {
      en: 'Customer Messaging via WhatsApp Business',
      mr: 'व्हॉट्सॲपद्वारे ग्राहकांशी संवाद',
      hi: 'व्हाट्सएप द्वारा ग्राहक संवाद',
    },
    nextStepLabel: {
      en: 'Switch to WhatsApp Business with automatic greeting & working hours',
      mr: 'कामाची वेळ आणि स्वागत मेसेजसह WhatsApp Business सुरू करा',
      hi: 'कार्य समय और स्वागत संदेश के साथ WhatsApp Business शुरू करें',
    },
    linkedToolId: 'whatsapp-business',
    weight: 15,
  },
  {
    id: 'q_catalogue',
    question: {
      en: '3. Do you have a digital product catalogue with clear photos and prices?',
      mr: '३. तुमच्याकडे वस्तूंचे फोटो, वजन आणि किमती असलेला डिजिटल कॅटलॉग आहे का?',
      hi: '3. क्या आपके पास उत्पादों के फोटो, वजन और कीमत वाला डिजिटल कैटलॉग है?',
    },
    strengthLabel: {
      en: 'Digital Product Catalogue Ready',
      mr: 'डिजिटल प्रॉडक्ट कॅटलॉग तयार',
      hi: 'डिजिटल प्रोडक्ट कैटलॉग तैयार',
    },
    nextStepLabel: {
      en: 'Create a digital product catalogue with prices & weights',
      mr: 'वस्तूंचे फोटो आणि दर असलेला डिजिटल कॅटलॉग तयार करा',
      hi: 'उत्पादों के फोटो और दाम वाला डिजिटल कैटलॉग बनाएं',
    },
    linkedToolId: 'whatsapp-business',
    weight: 15,
  },
  {
    id: 'q_records',
    question: {
      en: '4. Do you maintain daily digital sales, expense, and credit (Udhaar) records?',
      mr: '४. तुम्ही रोजची विक्री, खर्च आणि उधारीची नियमित डिजिटल नोंद ठेवता का?',
      hi: '4. क्या आप रोज की बिक्री, खर्च और उधारी का डिजिटल रिकॉर्ड रखते हैं?',
    },
    strengthLabel: {
      en: 'Daily Sales & Expense Record Keeping',
      mr: 'दैनंदिन जमा-खर्च आणि उधारीची नोंद',
      hi: 'दैनिक आय-व्यय और उधारी का हिसाब',
    },
    nextStepLabel: {
      en: 'Start digital record keeping (Bahi-Khata) to separate business profit',
      mr: 'व्यवसायाचा नफा मोजण्यासाठी डिजिटल हिशोब वही (Khata) सुरू करा',
      hi: 'व्यावसायिक लाभ गिनने के लिए डिजिटल बही-खाता शुरू करें',
    },
    linkedToolId: 'digital-bookkeeping-khata',
    weight: 15,
  },
  {
    id: 'q_maps',
    question: {
      en: '5. Can new customers find your shop or unit on Google Maps?',
      mr: '५. नवीन ग्राहकांना तुमचे दुकान किंवा युनिट Google Maps वर शोधता येते का?',
      hi: '5. क्या नए ग्राहक आपकी दुकान या इकाई को Google Maps पर ढूंढ सकते हैं?',
    },
    strengthLabel: {
      en: 'Online Visibility on Google Maps',
      mr: 'गूगल मॅप्सवर व्यवसायाची नोंदणी',
      hi: 'गूगल मैप्स पर व्यवसाय की उपस्थिति',
    },
    nextStepLabel: {
      en: 'Improve online visibility by listing your unit on Google Maps',
      mr: 'नवीन ग्राहकांसाठी तुमचा व्यवसाय Google Maps वर मोफत नोंदवा',
      hi: 'नए ग्राहकों के लिए अपनी दुकान Google Maps पर निःशुल्क दर्ज करें',
    },
    linkedToolId: 'google-maps-business',
    weight: 10,
  },
  {
    id: 'q_photos',
    question: {
      en: '6. Do you have clean, well-lit smartphone photos of your packaged products?',
      mr: '६. तुमच्याकडे तुमच्या उत्पादनांचे नैसर्गिक प्रकाशात काढलेले स्पष्ट फोटो आहेत का?',
      hi: '6. क्या आपके पास अपने उत्पादों के साफ रोशनी में खींचे गए फोटो हैं?',
    },
    strengthLabel: {
      en: 'Clear Product Photography',
      mr: 'उत्पादनांचे स्पष्ट व आकर्षक फोटो',
      hi: 'उत्पादों के साफ व आकर्षक फोटो',
    },
    nextStepLabel: {
      en: 'Take daylight product photos using our 4-step phone photography guide',
      mr: 'मोबाईलने दिवसाच्या उजेडात तुमच्या उत्पादनांचे स्पष्ट फोटो काढा',
      hi: 'मोबाइल से दिन की रोशनी में अपने उत्पादों के साफ फोटो खींचें',
    },
    linkedToolId: 'digital-catalogue-photos',
    weight: 10,
  },
  {
    id: 'q_udyam',
    question: {
      en: '7. Does your business have a free Udyam MSME Registration Certificate?',
      mr: '७. तुमच्या व्यवसायाचे मोफत "उद्यम नोंदणी प्रमाणपत्र" (Udyam Registration) काढलेले आहे का?',
      hi: '7. क्या आपके व्यवसाय का निःशुल्क "उद्यम पंजीकरण प्रमाणपत्र" (Udyam Registration) बना है?',
    },
    strengthLabel: {
      en: 'Udyam MSME Registration Completed',
      mr: 'अधिकृत उद्यम नोंदणी (Udyam) पूर्ण',
      hi: 'आधिकारिक उद्यम पंजीकरण (Udyam) पूर्ण',
    },
    nextStepLabel: {
      en: 'Complete free Udyam MSME Registration for scheme & loan eligibility',
      mr: 'शासकीय योजना आणि बँक कर्जासाठी मोफत उद्यम नोंदणी पूर्ण करा',
      hi: 'सरकारी योजनाओं और बैंक ऋण के लिए निःशुल्क उद्यम पंजीकरण कराएं',
    },
    linkedToolId: 'upi-qr-payments',
    weight: 10,
  },
  {
    id: 'q_delivery',
    question: {
      en: '8. Can you accept advance UPI payment and ship orders to nearby towns via Post/Parcel?',
      mr: '८. तुम्ही आगाऊ पेमेंट घेऊन पोस्ट किंवा पार्सलने गावाबाहेर माल पाठवता का?',
      hi: '8. क्या आप अग्रिम भुगतान लेकर डाक या पार्सल से गांव के बाहर ऑर्डर भेजते हैं?',
    },
    strengthLabel: {
      en: 'Out-of-Village Order Fulfilment',
      mr: 'गावाबाहेरील ग्राहकांना पार्सलने विक्री',
      hi: 'गांव से बाहर के ग्राहकों को पार्सल डिलीवरी',
    },
    nextStepLabel: {
      en: 'Learn India Post parcel & WhatsApp advance-order shipping basics',
      mr: 'पोस्ट पार्सल आणि ऑनलाइन ऑर्डरद्वारे शहरातील ग्राहकांना विक्री करायला शिका',
      hi: 'डाक पार्सल और ऑनलाइन ऑर्डर से शहर के ग्राहकों को बेचना सीखें',
    },
    linkedToolId: 'ondc-ecommerce-selling',
    weight: 10,
  },
];

interface ReadinessCheckViewProps {
  lang: Language;
  answers: Record<string, 'yes' | 'partial' | 'no'>;
  onUpdateAnswer: (qId: string, val: 'yes' | 'partial' | 'no') => void;
  readinessScore: number;
  onOpenTool: (toolId: string) => void;
  onGoToDashboard: () => void;
}

export const ReadinessCheckView: React.FC<ReadinessCheckViewProps> = ({
  lang,
  answers,
  onUpdateAnswer,
  readinessScore,
  onOpenTool,
  onGoToDashboard,
}) => {
  const doingWell = READINESS_QUESTIONS.filter((q) => answers[q.id] === 'yes');
  const recommendedNext = READINESS_QUESTIONS.filter((q) => answers[q.id] !== 'yes');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <div className="space-y-2">
        <p className="text-xs text-slate-500 font-mono-tabular">
          {lang === 'mr'
            ? 'व्यवसाय डिजिटल सज्जता चाचणी (8-Question Business Diagnostic)'
            : lang === 'hi'
            ? 'व्यावसायिक डिजिटल तत्परता जांच (8-Question Business Diagnostic)'
            : 'Interactive Diagnostic · 8 Simple Questions'}
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] font-display">
          {lang === 'mr'
            ? 'तुमचा व्यवसाय किती डिजिटल आहे? (How Digital Is Your Business?)'
            : lang === 'hi'
            ? 'आपका व्यवसाय कितना डिजिटल है? (How Digital Is Your Business?)'
            : 'How Digital Is Your Business?'}
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          {lang === 'mr'
            ? 'खालील ८ सोप्या प्रश्नांची उत्तरे द्या. तुमच्या उत्तरांवरून तुमचा डिजिटल गुणांक आणि पुढील ३ सर्वात महत्त्वाच्या कृती समजतील.'
            : lang === 'hi'
            ? 'नीचे दिए गए 8 सरल प्रश्नों के उत्तर दें। आपके उत्तरों के आधार पर आपका डिजिटल स्कोर और अगले कदम तय होंगे।'
            : 'Answer 8 quick questions about how you currently run your business to receive a tailored action plan.'}
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-5 lg:pb-0 lg:pr-6 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {lang === 'mr'
              ? 'तुमचा डिजिटल सज्जता गुणांक'
              : lang === 'hi'
              ? 'आपका डिजिटल तत्परता स्कोर'
              : 'Digital Readiness Score'}
          </p>
          <div className="flex items-baseline gap-2 font-mono-tabular">
            <span className="text-4xl sm:text-5xl font-semibold text-[#0F172A]">
              {readinessScore}
            </span>
            <span className="text-xl text-slate-400">/ 100</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-[#C25E00] transition-all duration-200"
              style={{ width: `${readinessScore}%` }}
            />
          </div>
          <p className="text-xs text-slate-600 pt-1">
            {readinessScore >= 75
              ? lang === 'mr'
                ? 'उत्तम! तुमचा व्यवसाय ऑनलाइन ऑर्डर आणि बँक कर्जासाठी सज्ज आहे.'
                : 'Strong! Your business has solid digital habits.'
              : readinessScore >= 45
              ? lang === 'mr'
                ? 'चांगली सुरुवात! आणखी २-३ साधने वापरल्यास तुमची विक्री आणि बँक पत वाढेल.'
                : 'Good foundation! Adding 2–3 key habits will unlock faster growth.'
              : lang === 'mr'
              ? 'सुरुवातीचा टप्पा: खालील सोप्या कृतींपासून आजच सुरुवात करा.'
              : 'Starting stage: Follow the recommended next steps below.'}
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2.5">
            <h2 className="text-sm font-semibold text-emerald-800">
              {lang === 'mr'
                ? 'तुम्ही आधीच चांगले करत आहात (Already Doing Well):'
                : lang === 'hi'
                ? 'आप पहले से अच्छा कर रहे हैं (Already Doing Well):'
                : 'Already Doing Well:'}
            </h2>
            {doingWell.length === 0 ? (
              <p className="text-xs text-slate-500">
                {lang === 'mr'
                  ? 'खालील प्रश्नांमध्ये "होय" निवडा.'
                  : 'Select "Yes" on the habits you already practice below.'}
              </p>
            ) : (
              <ul className="space-y-1.5">
                {doingWell.map((item) => (
                  <li key={item.id} className="text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>{t(item.strengthLabel, lang)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="space-y-2.5">
            <h2 className="text-sm font-semibold text-[#C25E00]">
              {lang === 'mr'
                ? 'पुढील शिफारस केलेल्या कृती (Recommended Next Steps):'
                : lang === 'hi'
                ? 'अनुशंसित अगले कदम (Recommended Next Steps):'
                : 'Recommended Next Steps:'}
            </h2>
            <ul className="space-y-2">
              {recommendedNext.slice(0, 3).map((item) => (
                <li key={item.id} className="text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                  <span className="text-[#C25E00] font-bold">→</span>
                  <button
                    type="button"
                    onClick={() => onOpenTool(item.linkedToolId)}
                    className="text-left hover:text-[#C25E00] hover:underline font-medium cursor-pointer"
                  >
                    {t(item.nextStepLabel, lang)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-md divide-y divide-slate-200">
        {READINESS_QUESTIONS.map((q) => {
          const currentVal = answers[q.id] || 'no';
          return (
            <div
              key={q.id}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-2xl">
                <p className="text-sm sm:text-base font-medium text-[#0F172A]">
                  {t(q.question, lang)}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {[
                  {
                    val: 'yes' as const,
                    label: { en: 'Yes, Regularly', mr: 'होय, नियमित', hi: 'हां, नियमित' },
                  },
                  {
                    val: 'partial' as const,
                    label: { en: 'Sometimes', mr: 'कधीकधी', hi: 'कभी-कभी' },
                  },
                  {
                    val: 'no' as const,
                    label: { en: 'Not Yet', mr: 'अजून नाही', hi: 'अभी नहीं' },
                  },
                ].map((opt) => {
                  const active = currentVal === opt.val;
                  return (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => onUpdateAnswer(q.id, opt.val)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors whitespace-nowrap cursor-pointer ${
                        active
                          ? opt.val === 'yes'
                            ? 'bg-emerald-800 text-white border-emerald-800'
                            : opt.val === 'partial'
                            ? 'bg-[#C25E00] text-white border-[#C25E00]'
                            : 'bg-[#0F172A] text-white border-[#0F172A]'
                          : 'bg-[#FAF8F5] text-slate-700 border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {t(opt.label, lang)}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onGoToDashboard}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
        >
          <span>
            {lang === 'mr'
              ? 'माझे वैयक्तिक कृती केंद्र पहा (Open Personalized Dashboard)'
              : lang === 'hi'
              ? 'अपना व्यक्तिगत कार्य केंद्र देखें (Open Personalized Dashboard)'
              : 'Open Personalized Business Action Centre'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// ==================== PERSONALIZED DASHBOARD (BUSINESS ACTION CENTRE) ====================
interface DashboardViewProps {
  lang: Language;
  profile: EntrepreneurProfile;
  onSelectDemoProfile: (profile: EntrepreneurProfile) => void;
  onUpdateCustomProfile: (updated: EntrepreneurProfile) => void;
  readinessScore: number;
  checkedDocs: string[];
  onToggleDoc: (docId: string) => void;
  completedLessonSteps: Record<string, number[]>;
  savedSchemes: string[];
  savedTools: string[];
  onOpenScheme: (schemeId: string) => void;
  onOpenTool: (toolId: string) => void;
  onOpenLesson: (lessonId: string) => void;
  onNavigateTab: (tab: NavTab) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  lang,
  profile,
  onSelectDemoProfile,
  onUpdateCustomProfile,
  readinessScore,
  checkedDocs,
  onToggleDoc,
  completedLessonSteps,
  savedSchemes,
  savedTools,
  onOpenScheme,
  onOpenTool,
  onOpenLesson,
  onNavigateTab,
}) => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [draftProfile, setDraftProfile] = useState<EntrepreneurProfile>(profile);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const allDocKeys = Object.keys(DOCUMENTS_MASTER);
  const completedDocsCount = checkedDocs.length;

  const recommendedSchemes = SCHEMES_DATA.filter(
    (s) =>
      s.categories.includes(profile.category) || s.needs.includes(profile.primaryNeed)
  ).slice(0, 3);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCustomProfile(draftProfile);
    setIsEditingProfile(false);
  };

  // Generate downloadable PDF using jsPDF
  const handleDownloadPDF = () => {
    setIsGeneratingPdf(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const today = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });

      // Header Bar
      doc.setFillColor(15, 23, 42); // #0F172A
      doc.rect(0, 0, 210, 28, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('UDYAM SAARTHI', 15, 12);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(217, 119, 6); // saffron
      doc.text('Samjho. Seekho. Aage Badho. · Rural Business Guidance Report', 15, 18);

      doc.setTextColor(203, 213, 225);
      doc.setFontSize(8);
      doc.text(`Date: ${today} · Ref: US-MH-${profile.district.toUpperCase()}-2026`, 15, 24);

      // Section 1: Entrepreneur Profile Overview
      let y = 38;
      doc.setTextColor(15, 23, 42);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text('1. Business Profile Overview', 15, y);

      y += 5;
      doc.setDrawColor(226, 232, 240);
      doc.setFillColor(250, 248, 245);
      doc.rect(15, y, 180, 24, 'FD');

      doc.setFontSize(9);
      doc.setTextColor(71, 85, 105);
      doc.setFont('helvetica', 'bold');
      doc.text('Entrepreneur:', 20, y + 6);
      doc.text('Business Name:', 20, y + 12);
      doc.text('Location:', 20, y + 18);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);
      doc.text(profile.name, 50, y + 6);
      doc.text(`${profile.businessName} (${profile.products || 'Rural Enterprise'})`, 50, y + 12);
      doc.text(`${profile.district} District, Maharashtra (Stage: ${profile.stage})`, 50, y + 18);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(71, 85, 105);
      doc.text('Category:', 120, y + 6);
      doc.text('Primary Need:', 120, y + 12);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);
      doc.text(profile.category, 145, y + 6);
      doc.text(profile.primaryNeed, 145, y + 12);

      // Section 2: Digital Readiness Score
      y += 34;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      doc.text('2. Digital Readiness Assessment', 15, y);

      y += 5;
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(226, 232, 240);
      doc.rect(15, y, 180, 20, 'FD');

      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(194, 94, 0); // #C25E00
      doc.text(`${readinessScore} / 100`, 22, y + 13);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      const scoreInterpretation =
        readinessScore >= 70
          ? 'Advanced Digital Stage: Ready for instant digital order scaling & bank credit linkage.'
          : readinessScore >= 45
          ? 'Intermediate Digital Stage: Essential payment habits active; catalogue & bookkeeping needed.'
          : 'Foundation Stage: Follow the recommended priority checklist below.';
      doc.text(scoreInterpretation, 62, y + 9);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text('Evaluated across 8 rural digital pillars: UPI, WhatsApp Catalogue, Khata, Maps & Udyam.', 62, y + 15);

      // Section 3: Document Checklist Table
      y += 30;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      doc.text(`3. Scheme Application Document Checklist (${completedDocsCount} of ${allDocKeys.length} Completed)`, 15, y);

      y += 6;
      // Table Header
      doc.setFillColor(241, 245, 249);
      doc.rect(15, y, 180, 7, 'F');
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text('STATUS', 18, y + 5);
      doc.text('DOCUMENT NAME & DETAILS', 42, y + 5);
      doc.text('WHERE TO OBTAIN IN MAHARASHTRA', 125, y + 5);

      y += 7;
      allDocKeys.forEach((docId) => {
        const item = DOCUMENTS_MASTER[docId];
        const isDone = checkedDocs.includes(docId);

        doc.setDrawColor(241, 245, 249);
        doc.line(15, y + 10, 195, y + 10);

        if (isDone) {
          doc.setTextColor(22, 101, 52); // green
          doc.setFont('helvetica', 'bold');
          doc.text('[X] READY', 18, y + 6);
        } else {
          doc.setTextColor(180, 83, 9); // amber
          doc.setFont('helvetica', 'bold');
          doc.text('[  ] PENDING', 18, y + 6);
        }

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(15, 23, 42);
        doc.setFontSize(8);
        doc.text(item.title.en.substring(0, 48), 42, y + 4);
        doc.setTextColor(100, 116, 139);
        doc.setFontSize(7);
        doc.text(item.title.mr.substring(0, 48), 42, y + 8);

        doc.setTextColor(71, 85, 105);
        doc.setFontSize(7.5);
        doc.text(item.whereToGet.en.substring(0, 42), 125, y + 6);

        y += 11;
      });

      // Section 4: Recommended Next Actions & Support Office
      y += 4;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('4. Recommended Priority Action & Designated Local Help', 15, y);

      y += 5;
      doc.setFillColor(254, 243, 199); // amber 100
      doc.setDrawColor(251, 191, 36);
      doc.rect(15, y, 180, 18, 'FD');

      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(154, 52, 18);
      doc.text('Immediate Action: Create WhatsApp Business Product Catalogue & Complete Udyam Registration', 20, y + 6);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);
      doc.text(`District Support Centre: District Industries Centre (DIC) / Maha e-Seva Kendra, ${profile.district}`, 20, y + 12);

      // Footer
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text('Report issued as prototype documentation by Udyam Saarthi (Maharashtra Rural Business Companion). Verify guidelines with official DIC.', 15, 287);

      // Save PDF file
      doc.save(`Udyam_Saarthi_${profile.name.replace(/\s+/g, '_')}_Assessment.pdf`);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      {/* Demo Persona Switcher Bar */}
      <div className="bg-white border border-slate-200 rounded-md p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-600">
          <span className="font-semibold text-[#0F172A]">
            {lang === 'mr'
              ? 'प्रोटोटाइप प्रात्यक्षिक प्रोफाईल निवडा (Switch Demo Entrepreneur): '
              : lang === 'hi'
              ? 'प्रोटोटाइप डेमो प्रोफाइल चुनें (Switch Demo Entrepreneur): '
              : 'Presentation Demo Personas (Fictional Maharashtra Examples): '}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {DEMO_PROFILES.map((p) => {
            const active = profile.id === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  onSelectDemoProfile(p);
                  setDraftProfile(p);
                }}
                className={`px-3 py-1 text-xs font-medium rounded border transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                    : 'bg-[#FAF8F5] text-slate-700 border-slate-300 hover:border-slate-400'
                }`}
              >
                {p.name.split(' ')[0]} · {p.district} ({p.category})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Action Centre Greeting & Business Profile Header */}
      <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1.5">
            <p className="text-xs font-mono-tabular text-slate-500">
              {lang === 'mr'
                ? `व्यवसाय कृती केंद्र · ${profile.district}, महाराष्ट्र`
                : lang === 'hi'
                ? `व्यावसायिक कार्य केंद्र · ${profile.district}, महाराष्ट्र`
                : `Business Action Centre · ${profile.district}, Maharashtra`}
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] font-display">
              {lang === 'mr'
                ? `शुभ सकाळ, ${profile.name}`
                : lang === 'hi'
                ? `सुप्रभात, ${profile.name}`
                : `Good morning, ${profile.name}`}
            </h1>
            <p className="text-sm text-slate-600">
              {lang === 'mr'
                ? 'तुमचा व्यवसाय पुढे नेण्यासाठी खालील पुढील टप्पे (Next Steps) तयार आहेत.'
                : lang === 'hi'
                ? 'आपके व्यवसाय को आगे बढ़ाने के लिए अगले व्यावहारिक कदम नीचे दिए गए हैं।'
                : 'Here are the next steps that can help your business grow.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* DOWNLOAD AS PDF BUTTON (Feature Request) */}
            <button
              type="button"
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>
                {isGeneratingPdf
                  ? 'Generating PDF...'
                  : lang === 'mr'
                  ? 'PDF डाउनलोड करा'
                  : lang === 'hi'
                  ? 'PDF डाउनलोड करें'
                  : 'Download as PDF'}
              </span>
            </button>

            {/* Print Preview Button */}
            <button
              type="button"
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 bg-[#FAF8F5] hover:bg-slate-200/70 border border-slate-300 rounded-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'mr' ? 'प्रिंट आवृत्ती' : 'Printable View'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setDraftProfile(profile);
                setIsEditingProfile(!isEditingProfile);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-800 bg-[#FAF8F5] hover:bg-slate-200/70 border border-slate-300 rounded-md transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>
                {lang === 'mr'
                  ? 'व्यवसाय माहिती बदला'
                  : lang === 'hi'
                  ? 'व्यवसाय विवरण बदलें'
                  : 'Update Business Details'}
              </span>
            </button>
          </div>
        </div>

        {/* Editable Onboarding / Profile Form */}
        {isEditingProfile && (
          <form
            onSubmit={handleSaveProfile}
            className="bg-[#FAF8F5] border border-slate-300 rounded-md p-5 space-y-4"
          >
            <h2 className="text-base font-semibold text-[#0F172A]">
              {lang === 'mr'
                ? 'उद्यम सारथीमध्ये आपले स्वागत आहे — तुमच्या व्यवसायाची माहिती भरा'
                : lang === 'hi'
                ? 'उद्यम सारथी में आपका स्वागत है — अपने व्यवसाय का विवरण भरें'
                : 'Welcome to Udyam Saarthi — Personalize Your Business Profile'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  1. Entrepreneur Name
                </label>
                <input
                  type="text"
                  required
                  value={draftProfile.name}
                  onChange={(e) => setDraftProfile({ ...draftProfile, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  2. Business Name
                </label>
                <input
                  type="text"
                  required
                  value={draftProfile.businessName}
                  onChange={(e) =>
                    setDraftProfile({ ...draftProfile, businessName: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  3. Maharashtra District
                </label>
                <select
                  value={draftProfile.district}
                  onChange={(e) => setDraftProfile({ ...draftProfile, district: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded"
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
                  4. Business Category
                </label>
                <select
                  value={draftProfile.category}
                  onChange={(e) =>
                    setDraftProfile({
                      ...draftProfile,
                      category: e.target.value as BusinessCategory,
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded"
                >
                  {BUSINESS_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {t(c.label, lang)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  5. Primary Requirement
                </label>
                <select
                  value={draftProfile.primaryNeed}
                  onChange={(e) =>
                    setDraftProfile({
                      ...draftProfile,
                      primaryNeed: e.target.value as BusinessNeed,
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded"
                >
                  {BUSINESS_NEEDS.map((n) => (
                    <option key={n.id} value={n.id}>
                      {t(n.label, lang)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  6. Products / Services
                </label>
                <input
                  type="text"
                  value={draftProfile.products}
                  onChange={(e) => setDraftProfile({ ...draftProfile, products: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditingProfile(false)}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-300 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#C25E00] rounded cursor-pointer"
              >
                Save & Personalize Experience
              </button>
            </div>
          </form>
        )}

        {/* Informational Business Profile Summary Grid */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="p-3.5 bg-[#FAF8F5] border border-slate-200 rounded">
            <dt className="text-xs text-slate-500">
              {lang === 'mr' ? 'व्यवसायाचे नाव' : lang === 'hi' ? 'व्यवसाय का नाम' : 'Business Name'}
            </dt>
            <dd className="font-semibold text-[#0F172A] mt-0.5">{profile.businessName}</dd>
            <dd className="text-xs text-slate-600 mt-0.5">{profile.products}</dd>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] border border-slate-200 rounded">
            <dt className="text-xs text-slate-500">
              {lang === 'mr' ? 'श्रेणी आणि टप्पा' : lang === 'hi' ? 'श्रेणी और चरण' : 'Category & Stage'}
            </dt>
            <dd className="font-semibold text-[#0F172A] mt-0.5">{profile.category}</dd>
            <dd className="text-xs text-slate-600 mt-0.5">
              {profile.stage} · {profile.district}
            </dd>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] border border-slate-200 rounded">
            <dt className="text-xs text-slate-500">
              {lang === 'mr'
                ? 'डिजिटल सज्जता (Digital Readiness)'
                : lang === 'hi'
                ? 'डिजिटल तत्परता (Digital Readiness)'
                : 'Your Digital Readiness'}
            </dt>
            <dd className="text-xl font-semibold text-[#0F172A] font-mono-tabular mt-0.5">
              {readinessScore} / 100
            </dd>
            <dd className="mt-1">
              <button
                type="button"
                onClick={() => onNavigateTab('readiness')}
                className="text-xs font-semibold text-[#C25E00] hover:underline cursor-pointer"
              >
                {lang === 'mr' ? 'चाचणी अद्ययावत करा →' : 'Update Diagnostic →'}
              </button>
            </dd>
          </div>

          <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded">
            <dt className="text-xs font-semibold text-[#9A3412]">
              {lang === 'mr'
                ? 'पुढची महत्त्वाची कृती (Recommended Next Action)'
                : lang === 'hi'
                ? 'अगला अनुशंसित कदम (Recommended Next Action)'
                : 'Recommended Next Action'}
            </dt>
            <dd className="font-semibold text-[#0F172A] mt-0.5">
              {lang === 'mr'
                ? 'डिजिटल प्रॉडक्ट कॅटलॉग तयार करा'
                : lang === 'hi'
                ? 'डिजिटल प्रोडक्ट कैटलॉग बनाएं'
                : 'Create a digital catalogue'}
            </dd>
            <dd className="mt-1">
              <button
                type="button"
                onClick={() => onOpenLesson('lesson-whatsapp-catalogue')}
                className="text-xs font-semibold text-[#0F172A] underline hover:text-[#C25E00] cursor-pointer"
              >
                {lang === 'mr' ? '१५ मिनिटांचा धडा उघडा →' : 'Start 15-min Guide →'}
              </button>
            </dd>
          </div>
        </dl>
      </div>

      {/* Main 2-Column Action Centre Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Cols: Schemes You May Be Interested In + Continue Learning */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#0F172A] font-display">
                {lang === 'mr'
                  ? `तुमच्यासाठी उपयुक्त योजना (${recommendedSchemes.length} शिफारसी)`
                  : lang === 'hi'
                  ? `आपके लिए उपयुक्त योजनाएं (${recommendedSchemes.length} सिफारिशें)`
                  : `Schemes You May Be Interested In (${recommendedSchemes.length} recommendations)`}
              </h2>
              <button
                type="button"
                onClick={() => onNavigateTab('schemes')}
                className="text-xs font-semibold text-[#C25E00] hover:underline cursor-pointer"
              >
                {lang === 'mr' ? 'सर्व पहा →' : 'View All →'}
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {recommendedSchemes.map((sc) => (
                <div
                  key={sc.id}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-mono-tabular text-[#1E3A8A] font-semibold">
                      {sc.code} · {sc.maxSubsidy}
                    </p>
                    <h3 className="text-sm font-semibold text-[#0F172A]">{t(sc.title, lang)}</h3>
                    <p className="text-xs text-slate-600">{t(sc.benefitSummary, lang)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenScheme(sc.id)}
                    className="px-3 py-1.5 text-xs font-semibold text-[#0F172A] bg-[#FAF8F5] hover:bg-slate-200 border border-slate-300 rounded whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {lang === 'mr' ? 'तपशील पहा' : lang === 'hi' ? 'विवरण देखें' : 'Inspect'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Continue Learning */}
          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#0F172A] font-display">
                {lang === 'mr'
                  ? 'प्रशिक्षण पुढे सुरू ठेवा (Continue Learning)'
                  : lang === 'hi'
                  ? 'सीखना जारी रखें (Continue Learning)'
                  : 'Continue Learning'}
              </h2>
              <button
                type="button"
                onClick={() => onNavigateTab('learn')}
                className="text-xs font-semibold text-[#C25E00] hover:underline cursor-pointer"
              >
                {lang === 'mr' ? 'सर्व धडे →' : 'All Lessons →'}
              </button>
            </div>

            <div className="space-y-3">
              {LESSONS_DATA.slice(0, 3).map((lesson) => {
                const done = (completedLessonSteps[lesson.id] || []).length;
                const total = lesson.steps.length;
                return (
                  <div
                    key={lesson.id}
                    className="p-4 bg-[#FAF8F5] border border-slate-200 rounded flex flex-wrap items-center justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 text-xs font-mono-tabular text-slate-500">
                        <span>{lesson.category}</span>
                        <span>·</span>
                        <span className="font-semibold text-[#0F172A]">
                          {done}/{total} {lang === 'mr' ? 'पूर्ण' : 'steps completed'}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#0F172A]">
                        {t(lesson.title, lang)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenLesson(lesson.id)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded cursor-pointer"
                    >
                      {lang === 'mr' ? 'पुढे शिका →' : 'Resume →'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right 5 Cols: Documents Checklist + Download PDF card */}
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#C25E00]" />
                <h2 className="text-base font-semibold text-[#0F172A] font-display">
                  {lang === 'mr'
                    ? 'कागदपत्रे तपासणी (Documents Checklist)'
                    : lang === 'hi'
                    ? 'दस्तावेज जांच सूची (Documents Checklist)'
                    : 'Documents Checklist'}
                </h2>
              </div>
              <span className="text-xs font-mono-tabular font-semibold text-[#0F172A]">
                {completedDocsCount} / {allDocKeys.length}{' '}
                {lang === 'mr' ? 'पूर्ण' : 'completed'}
              </span>
            </div>

            <div className="space-y-2">
              {allDocKeys.map((docId) => {
                const doc = DOCUMENTS_MASTER[docId];
                const isDone = checkedDocs.includes(docId);
                return (
                  <label
                    key={docId}
                    className="flex items-start gap-2.5 py-1.5 text-xs sm:text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => onToggleDoc(docId)}
                      className="mt-1 w-4 h-4 accent-[#0F172A] rounded cursor-pointer"
                    />
                    <span className={isDone ? 'line-through text-slate-400' : 'text-slate-800'}>
                      {t(doc.title, lang)}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* In-Card PDF Download Callout */}
            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={handleDownloadPDF}
                disabled={isGeneratingPdf}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-[#0F172A] bg-[#FAF8F5] hover:bg-slate-200 border border-slate-300 rounded cursor-pointer transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#C25E00]" />
                <span>
                  {isGeneratingPdf
                    ? 'Generating PDF...'
                    : lang === 'mr'
                    ? 'कागदपत्र यादी आणि गुणपत्रिका PDF डाउनलोड करा'
                    : 'Download Official PDF Report'}
                </span>
              </button>
            </div>
          </section>

          {/* Saved Resources Summary */}
          <section className="bg-white border border-slate-200 rounded-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#1E3A8A]" />
                <h2 className="text-base font-semibold text-[#0F172A] font-display">
                  {lang === 'mr'
                    ? 'जतन केलेली माहिती (Saved Resources)'
                    : lang === 'hi'
                    ? 'सहेजे गए संसाधन (Saved Resources)'
                    : 'Saved Resources'}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigateTab('saved')}
                className="text-xs font-semibold text-[#C25E00] hover:underline cursor-pointer"
              >
                {lang === 'mr' ? 'सर्व पहा →' : 'Manage →'}
              </button>
            </div>

            {savedSchemes.length === 0 && savedTools.length === 0 ? (
              <div className="p-4 bg-[#FAF8F5] border border-slate-200 rounded text-xs text-slate-600 space-y-2">
                <p>
                  {lang === 'mr'
                    ? 'अजून कोणतीही योजना किंवा साधन जतन केलेले नाही.'
                    : 'Save schemes and guides to quickly find them later, even on slow connections.'}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {savedSchemes.map((sId) => {
                  const sc = SCHEMES_DATA.find((x) => x.id === sId);
                  if (!sc) return null;
                  return (
                    <button
                      key={sId}
                      type="button"
                      onClick={() => onOpenScheme(sc.id)}
                      className="w-full text-left p-3 bg-[#FAF8F5] hover:bg-slate-100 border border-slate-200 rounded text-xs font-medium text-[#0F172A] flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate pr-2">{t(sc.title, lang)}</span>
                      <span className="text-[#C25E00] shrink-0">→</span>
                    </button>
                  );
                })}
                {savedTools.map((tId) => {
                  const tl = DIGITAL_TOOLS_DATA.find((x) => x.id === tId);
                  if (!tl) return null;
                  return (
                    <button
                      key={tId}
                      type="button"
                      onClick={() => onOpenTool(tl.id)}
                      className="w-full text-left p-3 bg-[#FAF8F5] hover:bg-slate-100 border border-slate-200 rounded text-xs font-medium text-[#0F172A] flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate pr-2">{t(tl.name, lang)}</span>
                      <span className="text-[#1E3A8A] shrink-0">→</span>
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* PRINTABLE REPORT MODAL (High-Fidelity Printable View) */}
      {showPrintModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border border-slate-300 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Control Header (Hidden when printed) */}
            <div className="bg-[#0F172A] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 print:hidden">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-sm sm:text-base">
                  Printable Assessment & Document Checklist Report
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#C25E00] hover:bg-[#9A3412] text-white rounded transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .PDF File</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print via Browser</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowPrintModal(false)}
                  className="p-1.5 text-slate-300 hover:text-white rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Report Body */}
            <div id="printable-report" className="p-8 space-y-6 text-[#0F172A] font-sans">
              {/* Report Header */}
              <div className="border-b-2 border-[#0F172A] pb-4 flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold font-display tracking-tight text-[#0F172A]">
                    UDYAM SAARTHI
                  </h1>
                  <p className="text-xs text-[#C25E00] font-medium tracking-wide">
                    Samjho. Seekho. Aage Badho. · Rural Business Guidance Report
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    District Industries Support Companion · Government Scheme & Digital Enablement
                  </p>
                </div>
                <div className="text-right text-xs font-mono-tabular text-slate-600">
                  <p><strong>Date:</strong> {new Date().toLocaleDateString('en-GB')}</p>
                  <p><strong>District:</strong> {profile.district}, MH</p>
                  <p><strong>Report Ref:</strong> US-MH-{profile.district.toUpperCase()}-2026</p>
                </div>
              </div>

              {/* Profile Card */}
              <div className="bg-[#FAF8F5] border border-slate-300 rounded p-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-500 uppercase tracking-wider text-[10px]">Entrepreneur & Business</p>
                  <p className="text-sm font-bold text-[#0F172A] mt-0.5">{profile.name}</p>
                  <p className="text-slate-700">{profile.businessName} ({profile.products || 'Rural Enterprise'})</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase tracking-wider text-[10px]">Classification & Need</p>
                  <p className="font-semibold text-[#0F172A] mt-0.5">{profile.category} · {profile.stage}</p>
                  <p className="text-slate-700">Primary Need: <strong>{profile.primaryNeed}</strong></p>
                </div>
              </div>

              {/* Digital Readiness Summary */}
              <div className="border border-slate-300 rounded p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Digital Readiness Diagnostic
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Evaluated on UPI payments, WhatsApp catalogue, digital Khata, and Google Maps visibility.
                  </p>
                </div>
                <div className="text-right font-mono-tabular">
                  <span className="text-3xl font-bold text-[#C25E00]">{readinessScore}</span>
                  <span className="text-sm text-slate-500"> / 100</span>
                </div>
              </div>

              {/* Document Checklist */}
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <h3 className="font-bold text-sm text-[#0F172A]">
                    Official Application Document Checklist ({completedDocsCount} of {allDocKeys.length} Ready)
                  </h3>
                  <span className="text-xs font-mono-tabular text-slate-500">
                    Verified for CMEGP / PMFME / MUDRA Schemes
                  </span>
                </div>

                <table className="w-full text-xs text-left border border-slate-200">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-2 border-r border-slate-200 w-24">Status</th>
                      <th className="p-2 border-r border-slate-200">Required Document</th>
                      <th className="p-2">Where to Obtain in Maharashtra</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {allDocKeys.map((docId) => {
                      const doc = DOCUMENTS_MASTER[docId];
                      const isDone = checkedDocs.includes(docId);
                      return (
                        <tr key={docId} className={isDone ? 'bg-emerald-50/20' : 'bg-white'}>
                          <td className="p-2 border-r border-slate-200 font-mono-tabular font-bold">
                            {isDone ? (
                              <span className="text-emerald-700">[X] READY</span>
                            ) : (
                              <span className="text-amber-700">[  ] PENDING</span>
                            )}
                          </td>
                          <td className="p-2 border-r border-slate-200">
                            <p className="font-semibold text-slate-900">{doc.title.en}</p>
                            <p className="text-slate-500 text-[11px]">{doc.title.mr}</p>
                          </td>
                          <td className="p-2 text-slate-600">
                            {doc.whereToGet.en}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Recommended Next Action */}
              <div className="p-4 bg-amber-50 border border-amber-300 rounded text-xs space-y-1">
                <p className="font-bold text-[#9A3412]">
                  Recommended Next Step: Create WhatsApp Business Product Catalogue
                </p>
                <p className="text-slate-700">
                  Contact the District Industries Centre (DIC) or Taluka Agriculture Office in {profile.district} for scheme DPR and submission guidance.
                </p>
              </div>

              {/* Legal Notice */}
              <div className="pt-4 border-t border-slate-200 text-[10px] text-slate-500">
                Notice: Generated by Udyam Saarthi as an informational civic-tech assessment prototype. Always verify official government scheme guidelines and document requirements with your local DIC or bank branch.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
