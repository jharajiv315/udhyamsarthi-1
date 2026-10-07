import React, { useState, useEffect } from 'react';
import { Language, NavTab } from '../types';
import { Mic, Volume2, VolumeX, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AskSaarthiModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigateScheme: (schemeId: string) => void;
  onNavigateTool: (toolId: string) => void;
  onNavigateTab: (tab: NavTab) => void;
}

interface VoiceScenario {
  id: string;
  query: { en: string; mr: string; hi: string };
  response: { en: string; mr: string; hi: string };
  structuredSteps: { en: string[]; mr: string[]; hi: string[] };
  actionLabel: { en: string; mr: string; hi: string };
  actionType: 'scheme' | 'tool' | 'tab';
  targetId: string;
}

const VOICE_SCENARIOS: VoiceScenario[] = [
  {
    id: 'food-scheme',
    query: {
      mr: '“माझा घरगुती खाद्यपदार्थांचा व्यवसाय आहे. माझ्या व्यवसायासाठी कोणती योजना आहे?”',
      hi: '“मेरा घरेलू खाद्य उत्पादों का व्यवसाय है। मेरे व्यवसाय के लिए कौन सी योजना है?”',
      en: '“I have a homemade food products business. Which scheme can help me?”',
    },
    response: {
      mr: 'तुमच्या व्यवसायासाठी अन्नप्रक्रिया आणि लघुउद्योगाशी संबंधित काही पर्याय उपलब्ध असू शकतात. प्रधानमंत्री सूक्ष्म अन्नप्रक्रिया उद्योग योजना (PMFME) अंतर्गत मसाले, लोणची, पापड किंवा प्रक्रिया उद्योगासाठी ३५% भांडवली अनुदान (कमाल १० लाख रुपये) आणि उमेद (UMED) महिला गट मदत उपलब्ध आहे. चला तुमचा जिल्हा आणि गरज समजून घेऊया.',
      hi: 'आपके व्यवसाय के लिए खाद्य प्रसंस्करण से जुड़े उत्कृष्ट विकल्प उपलब्ध हैं। पीएम सूक्ष्म खाद्य प्रसंस्करण योजना (PMFME) के तहत मसाला, अचार, पापड़ या खाद्य इकाई के लिए 35% पूंजीगत सब्सिडी (अधिकतम ₹10 लाख) मिल सकती है। आइए इसकी पात्रता और कागजात देखें।',
      en: 'For a homemade food business, the PMFME (Micro Food Processing) scheme offers up to 35% capital subsidy (up to ₹10 Lakh) on machinery, alongside UMED support for women groups. Let us inspect your eligibility and required documents.',
    },
    structuredSteps: {
      mr: [
        'योजना १: PMFME अन्नप्रक्रिया योजना — ३५% मशिनरी अनुदान',
        'योजना २: मुख्यमंत्री रोजगार निर्मिती कार्यक्रम (CMEGP) — २५% ते ३५% अनुदान',
        'आवश्यक कागदपत्रे: आधार, पॅन, बँक पासबुक, जागेचा पुरावा आणि मशिनरी कोटेशन',
      ],
      hi: [
        'योजना 1: PMFME खाद्य प्रसंस्करण योजना — 35% मशीनरी सब्सिडी',
        'योजना 2: मुख्यमंत्री रोजगार सृजन कार्यक्रम (CMEGP) — 25% से 35% सब्सिडी',
        'आवश्यक दस्तावेज: आधार, पैन, बैंक पासबुक, स्थान प्रमाण और मशीन कोटेशन',
      ],
      en: [
        'Option 1: PMFME Food Processing Scheme — 35% machinery subsidy',
        'Option 2: CMEGP Maharashtra — 25% to 35% margin money subsidy',
        'Core Documents: Aadhaar, PAN, Bank Passbook, Place proof & Machine quotation',
      ],
    },
    actionLabel: {
      mr: 'PMFME अन्नप्रक्रिया योजना उघडा',
      hi: 'PMFME खाद्य योजना विवरण देखें',
      en: 'View PMFME Scheme Details',
    },
    actionType: 'scheme',
    targetId: 'pmfme-maharashtra',
  },
  {
    id: 'upi-shop',
    query: {
      mr: '“UPI माझ्या दुकानासाठी कसा वापरू आणि त्याचा कर्जासाठी काय फायदा होतो?”',
      hi: '“मैं अपनी दुकान के लिए UPI कैसे उपयोग करूं और ऋण में इसका क्या लाभ है?”',
      en: '“How do I use UPI for my shop and how does it help with bank loans?”',
    },
    response: {
      mr: 'तुमच्या बँकेचा मोफत "मर्चंट UPI QR कोड" दुकानात लावा. यामुळे ग्राहक कोणत्याही ॲपने पैसे देऊ शकतात आणि ते थेट बँक खात्यात जमा होतात. सलग ६ महिने UPI पेमेंट स्वीकारल्यामुळे तुमचे बँक पासबुक मजबूत होते आणि मुद्रा (MUDRA) किंवा शासकीय कर्ज लवकर मंजूर होते.',
      hi: 'अपने बैंक का निःशुल्क "मर्चेंट UPI QR कोड" दुकान में लगाएं। इससे ग्राहक किसी भी ऐप से भुगतान कर सकते हैं जो सीधे बैंक खाते में जमा होता है। 6 महीने के नियमित UPI लेनदेन से आपका बैंक स्टेटमेंट मजबूत होता है और मुद्रा ऋण आसानी से मिलता है।',
      en: 'Place a free Merchant UPI QR standee linked to your business bank account. Every digital payment builds an official turnover trail in your passbook—making MUDRA and subsidy loan approvals much easier after 3–6 months.',
    },
    structuredSteps: {
      mr: [
        'पायरी १: बँक किंवा अधिकृत बिझनेस ॲपवरून मर्चंट QR कोड घ्या',
        'पायरी २: मराठीत व्हॉइस अलर्ट (आवाज सूचना) सुरू करा',
        'सुरक्षा नियम: पैसे स्वीकारताना कधीही UPI पिन (PIN) टाकू नका',
      ],
      hi: [
        'चरण 1: बैंक या बिजनेस ऐप से मर्चेंट QR स्टैंड लें',
        'चरण 2: मराठी/हिंदी वॉइस अलर्ट चालू करें',
        'सुरक्षा नियम: पैसे प्राप्त करने के लिए कभी भी UPI पिन न डालें',
      ],
      en: [
        'Step 1: Get a free Merchant QR linked to your primary bank account',
        'Step 2: Turn on Marathi/Hindi voice payment confirmation alerts',
        'Safety Rule: Never enter your UPI PIN when receiving money',
      ],
    },
    actionLabel: {
      mr: 'UPI QR प्रशिक्षण धडा सुरू करा',
      hi: 'UPI QR प्रशिक्षण पाठ शुरू करें',
      en: 'Open UPI QR Practical Guide',
    },
    actionType: 'tool',
    targetId: 'upi-qr-payments',
  },
  {
    id: 'whatsapp-catalogue',
    query: {
      mr: '“माझ्या मालाचे फोटो आणि दर ग्राहकांना व्हॉट्सॲपवर एकत्र कसे पाठवू?”',
      hi: '“अपने उत्पादों के फोटो और दाम ग्राहकों को व्हाट्सएप पर एक साथ कैसे भेजूं?”',
      en: '“How can I send my product photos and prices together on WhatsApp?”',
    },
    response: {
      mr: 'यासाठी "WhatsApp Business" मधील मोफत "डिजिटल कॅटलॉग" (Catalogue) वापरा. यात एकदाच तुमच्या वस्तूंचे फोटो, वजन आणि किंमत भरली की फक्त १ लिंक पाठवून ग्राहक तुमचे संपूर्ण दुकान पाहू शकतात.',
      hi: 'इसके लिए "WhatsApp Business" में निःशुल्क "डिजिटल कैटलॉग" (Catalogue) बनाएं। इसमें एक बार उत्पादों के फोटो, वजन और कीमत जोड़ने के बाद केवल 1 लिंक भेजकर ग्राहक आपकी पूरी दुकान देख सकते हैं।',
      en: 'Use the free "Catalogue" feature inside WhatsApp Business. Once you upload your product photos, weights, and prices, you can share a single link so buyers can browse your entire shop and send orders.',
    },
    structuredSteps: {
      mr: [
        'खिडकीजवळ दिवसाच्या उजेडात स्वच्छ फोटो काढा',
        'WhatsApp Business → Business Tools → Catalogue मध्ये वस्तू जोडा',
        'वस्तूच्या नावासोबत वजन (२५० ग्रॅम / १ किलो) आणि अचूक दर लिहा',
      ],
      hi: [
        'खिड़की के पास दिन की रोशनी में साफ फोटो खींचें',
        'WhatsApp Business → Business Tools → Catalogue में उत्पाद जोड़ें',
        'नाम के साथ वजन (250 ग्राम / 1 किलो) और कीमत स्पष्ट लिखें',
      ],
      en: [
        'Take bright daylight photos against a clean background',
        'Add items in WhatsApp Business → Business Tools → Catalogue',
        'Include exact weight (250g / 1kg) and price in ₹',
      ],
    },
    actionLabel: {
      mr: 'व्हॉट्सॲप कॅटलॉग साधन पहा',
      hi: 'व्हाट्सएप कैटलॉग टूल देखें',
      en: 'Open WhatsApp Business Guide',
    },
    actionType: 'tool',
    targetId: 'whatsapp-business',
  },
  {
    id: 'artisan-vishwakarma',
    query: {
      mr: '“मी पारंपरिक कारागीर / शिलाई काम करते. अवजारे आणि प्रशिक्षणासाठी मदत मिळेल का?”',
      hi: '“मैं पारंपरिक कारीगर / सिलाई का काम करती हूं। औजार और प्रशिक्षण के लिए मदद मिलेगी?”',
      en: '“I am a rural artisan / tailor. Can I get help for modern tools and training?”',
    },
    response: {
      mr: 'होय! पीएम विश्वकर्मा योजनेअंतर्गत शिंपीकाम, चर्मकार, सुतार, कुंभार यांसारख्या १८ पारंपरिक व्यवसायांना आधुनिक टूलकिटसाठी १५,००० रुपयांचे ई-व्हाउचर, ५ दिवसांचे मानधनासह प्रशिक्षण आणि ५% व्याजाने कर्ज मिळू शकते.',
      hi: 'जी हां! पीएम विश्वकर्मा योजना के तहत दर्जी, चर्मकार, बढ़ई, कुम्हार जैसे 18 पारंपरिक व्यवसायों को आधुनिक औजारों के लिए ₹15,000 का वाउचर, 5 दिन का सवेतन प्रशिक्षण और 5% ब्याज पर ऋण मिल सकता है।',
      en: 'Yes! Under the PM Vishwakarma scheme, 18 traditional trades including tailors, leather artisans, carpenters, and potters receive a ₹15,000 toolkit e-voucher, paid 5-day training, and 5% interest loans.',
    },
    structuredSteps: {
      mr: [
        '१५,००० रुपये आधुनिक अवजारे ई-व्हाउचर',
        '५०० रुपये प्रतिदिन भत्त्यासह कौशल्य प्रशिक्षण',
        'गावातील CSC (आपले सरकार सेवा केंद्र) मध्ये आधार व रेशन कार्डसह नोंदणी',
      ],
      hi: [
        '₹15,000 आधुनिक टूलकिट ई-वाउचर',
        '₹500 प्रतिदिन स्टाइपेंड के साथ कौशल प्रशिक्षण',
        'नजदीकी CSC केंद्र पर आधार व राशन कार्ड से बायोमेट्रिक पंजीकरण',
      ],
      en: [
        '₹15,000 e-voucher for modern certified toolkit',
        'Skill training with ₹500/day stipend',
        'Biometric registration at village CSC with Aadhaar & Ration Card',
      ],
    },
    actionLabel: {
      mr: 'पीएम विश्वकर्मा योजना पहा',
      hi: 'पीएम विश्वकर्मा योजना देखें',
      en: 'Inspect PM Vishwakarma Scheme',
    },
    actionType: 'scheme',
    targetId: 'pm-vishwakarma',
  },
];

export const AskSaarthiModal: React.FC<AskSaarthiModalProps> = ({
  isOpen,
  onClose,
  lang,
  setLang,
  onNavigateScheme,
  onNavigateTool,
  onNavigateTab,
}) => {
  const [selectedScenario, setSelectedScenario] = useState<VoiceScenario>(VOICE_SCENARIOS[0]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (!isOpen && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSimulateMic = (scenario?: VoiceScenario) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      if (scenario) {
        setSelectedScenario(scenario);
      }
    }, 900);
  };

  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSpeaking(!isSpeaking);
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(selectedScenario.response[lang]);
      utterance.lang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ask-saarthi-title"
    >
      <div className="bg-[#FAF8F5] border border-slate-300 rounded-lg max-w-2xl w-full overflow-hidden shadow-xl">
        {/* Top Desk Bar */}
        <div className="bg-[#0F172A] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-amber-400 font-medium">
              {lang === 'mr'
                ? 'आवाज व सोप्या भाषेतील व्यवसाय मार्गदर्शक'
                : lang === 'hi'
                ? 'आवाज और सरल भाषा व्यावसायिक सहायक'
                : 'Voice & Local-Language Business Help Desk'}
            </p>
            <h2 id="ask-saarthi-title" className="text-xl font-semibold font-display mt-0.5">
              {lang === 'mr' ? 'सारथीला विचारा (Ask Saarthi)' : lang === 'hi' ? 'सारथी से पूछें (Ask Saarthi)' : 'Ask Saarthi — Voice Companion'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-slate-800 p-0.5 rounded border border-slate-700">
              {(['mr', 'hi', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                    lang === l ? 'bg-[#C25E00] text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {l === 'mr' ? 'मराठी' : l === 'hi' ? 'हिन्दी' : 'English'}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded-md"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Prompt Picker */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold text-slate-600">
                {lang === 'mr'
                  ? 'खालीलपैकी एखादा प्रश्न निवडा किंवा माईक दाबा:'
                  : lang === 'hi'
                  ? 'नीचे से कोई प्रश्न चुनें या माइक दबाएं:'
                  : 'Select a common business question or press the microphone:'}
              </span>
              <span className="text-xs text-slate-500">
                {lang === 'mr' ? 'भाषा: मराठी' : lang === 'hi' ? 'भाषा: हिन्दी' : 'Language: English'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {VOICE_SCENARIOS.map((sc) => {
                const active = selectedScenario.id === sc.id;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => handleSimulateMic(sc)}
                    className={`text-left p-3 rounded-md border text-xs sm:text-sm transition-colors cursor-pointer ${
                      active
                        ? 'bg-white border-[#C25E00] text-[#0F172A] font-medium shadow-2xs'
                        : 'bg-white/60 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {sc.query[lang]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Microphone & Transcription Box */}
          <div className="bg-white border border-slate-200 rounded-md p-4">
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSimulateMic(selectedScenario)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-white transition-transform cursor-pointer ${
                    isListening ? 'bg-red-600 scale-105 animate-pulse' : 'bg-[#C25E00] hover:bg-[#9A3412]'
                  }`}
                  title="Tap to speak"
                >
                  <Mic className="w-5 h-5" />
                </button>
                <div>
                  <p className="text-xs text-slate-500">
                    {isListening
                      ? lang === 'mr'
                        ? 'ऐकत आहे... (Listening...)'
                        : lang === 'hi'
                        ? 'सुन रहा है... (Listening...)'
                        : 'Listening to your question...'
                      : lang === 'mr'
                      ? 'तुमचा प्रश्न (Transcription)'
                      : lang === 'hi'
                      ? 'आपका प्रश्न (Transcription)'
                      : 'Your Question (Transcription)'}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-[#0F172A] mt-0.5">
                    {selectedScenario.query[lang]}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleToggleSpeech}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold border transition-colors whitespace-nowrap cursor-pointer ${
                  isSpeaking
                    ? 'bg-amber-50 border-[#C25E00] text-[#9A3412]'
                    : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
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
                    ? 'उत्तर ऐका'
                    : lang === 'hi'
                    ? 'उत्तर सुनें'
                    : 'Listen to Answer'}
                </span>
              </button>
            </div>

            {/* Saarthi Explanation */}
            <div className="pt-3.5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A8A]">
                <span>
                  {lang === 'mr'
                    ? 'उद्यम सारथीचे सोपे मार्गदर्शन:'
                    : lang === 'hi'
                    ? 'उद्यम सारथी का सरल मार्गदर्शन:'
                    : 'Saarthi Guidance:'}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                {selectedScenario.response[lang]}
              </p>

              <div className="bg-[#FAF8F5] border border-slate-200 rounded p-3 space-y-1.5">
                {selectedScenario.structuredSteps[lang].map((st, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C25E00] shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Suggested Direct Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <span className="text-xs text-slate-500">
              {lang === 'mr'
                ? 'प्रोटोटाइप आवाज संवाद · प्रत्यक्ष कृतीसाठी खाली क्लिक करा'
                : lang === 'hi'
                ? 'प्रोटोटाइप वॉइस संवाद · सीधे जाने के लिए नीचे क्लिक करें'
                : 'Prototype Voice Explainer · Take direct action below'}
            </span>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (selectedScenario.actionType === 'scheme') {
                  onNavigateScheme(selectedScenario.targetId);
                } else if (selectedScenario.actionType === 'tool') {
                  onNavigateTool(selectedScenario.targetId);
                } else {
                  onNavigateTab('schemes');
                }
              }}
              className="inline-flex items-center gap-2 h-10 px-5 text-xs sm:text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 active:bg-black rounded-md border border-slate-900 shadow-xs transition-colors cursor-pointer"
            >
              <span>{selectedScenario.actionLabel[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
