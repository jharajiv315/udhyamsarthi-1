import { Language, LocalizedText } from '../types';

export const t = (item?: LocalizedText | string | null, lang: Language = 'en'): string => {
  if (!item) return '';
  if (typeof item === 'string') return item;
  if (typeof item !== 'object') return String(item);
  try {
    const val = (item as any)[lang];
    if (typeof val === 'string' && val.trim().length > 0) return val;
    return item.en || item.mr || item.hi || '';
  } catch {
    return '';
  }
};

export const UI_LABELS: Record<string, LocalizedText> = {
  brandTitle: {
    en: 'Udyam Saarthi',
    mr: 'उद्यम सारथी',
    hi: 'उद्यम सारथी',
  },
  tagline: {
    en: 'Samjho. Seekho. Aage Badho.',
    mr: 'समजा. शिका. पुढे चला.',
    hi: 'समझो. सीखो. आगे बढ़ो.',
  },
  navSchemes: {
    en: 'Schemes',
    mr: 'शासकीय योजना',
    hi: 'सरकारी योजनाएं',
  },
  navTools: {
    en: 'Digital Tools',
    mr: 'डिजिटल साधने',
    hi: 'डिजिटल टूल्स',
  },
  navLearn: {
    en: 'Learn',
    mr: 'प्रशिक्षण',
    hi: 'सीखें',
  },
  navReadiness: {
    en: 'Readiness Check',
    mr: 'डिजिटल चाचणी',
    hi: 'डिजिटल जांच',
  },
  navDashboard: {
    en: 'Action Centre',
    mr: 'कृती केंद्र',
    hi: 'कार्य केंद्र',
  },
  navDirectory: {
    en: 'Local Help',
    mr: 'स्थानिक मदत',
    hi: 'स्थानीय सहायता',
  },
  askSaarthi: {
    en: 'Ask Saarthi',
    mr: 'सारथीला विचारा',
    hi: 'सारथी से पूछें',
  },
  heroTitle: {
    en: 'Government schemes and digital tools, explained for your business.',
    mr: 'तुमच्या व्यवसायासाठी शासकीय योजना आणि डिजिटल साधने, सोप्या भाषेत.',
    hi: 'आपके व्यवसाय के लिए सरकारी योजनाएं और डिजिटल टूल्स, सरल भाषा में।',
  },
  heroHeading: {
    en: 'Government schemes and digital tools, explained for your business.',
    mr: 'तुमच्या व्यवसायासाठी शासकीय योजना आणि डिजिटल साधने, सोप्या भाषेत.',
    hi: 'आपके व्यवसाय के लिए सरकारी योजनाएं और डिजिटल टूल्स, सरल भाषा में।',
  },
  heroSubtitle: {
    en: 'Discover the support you may be eligible for, understand what it means, and learn how digital tools can help your rural business grow.',
    mr: 'तुम्ही कोणत्या मदतीसाठी पात्र आहात ते शोधा, त्याचा सोपा अर्थ समजून घ्या आणि डिजिटल साधनांनी तुमचा ग्रामीण व्यवसाय कसा वाढवायचा ते शिका.',
    hi: 'जानें कि आप किस सहायता के पात्र हैं, इसका सरल अर्थ समझें, और सीखें कि डिजिटल टूल्स आपके ग्रामीण व्यवसाय को कैसे आगे बढ़ा सकते हैं।',
  },
  heroSubheading: {
    en: 'Discover the support you may be eligible for, understand what it means, and learn how digital tools can help your rural business grow.',
    mr: 'तुम्ही कोणत्या मदतीसाठी पात्र आहात ते शोधा, त्याचा सोपा अर्थ समजून घ्या आणि डिजिटल साधनांनी तुमचा ग्रामीण व्यवसाय कसा वाढवायचा ते शिका.',
    hi: 'जानें कि आप किस सहायता के पात्र हैं, इसका सरल अर्थ समझें, और सीखें कि डिजिटल टूल्स आपके ग्रामीण व्यवसाय को कैसे आगे बढ़ा सकते हैं।',
  },
  findSchemes: {
    en: 'Find My Schemes',
    mr: 'माझ्यासाठी योजना शोधा',
    hi: 'मेरे लिए योजनाएं खोजें',
  },
  ctaFindSchemes: {
    en: 'Find My Schemes',
    mr: 'माझ्यासाठी योजना शोधा',
    hi: 'मेरे लिए योजनाएं खोजें',
  },
  exploreTools: {
    en: 'Explore Digital Tools',
    mr: 'डिजिटल साधने पहा',
    hi: 'डिजिटल टूल्स देखें',
  },
  ctaExploreTools: {
    en: 'Explore Digital Tools',
    mr: 'डिजिटल साधने पहा',
    hi: 'डिजिटल टूल्स देखें',
  },
  ctaViewInMarathi: {
    en: 'मराठीत पाहा',
    mr: 'View in English',
    hi: 'मराठीत पाहा',
  },
  whatNeedHelpWith: {
    en: 'What do you need help with today?',
    mr: 'आज तुम्हाला कोणत्या बाबतीत मदत हवी आहे?',
    hi: 'आज आपको किस विषय में मदद चाहिए?',
  },
  prototypeNotice: {
    en: 'Prototype Data · Illustrative Example · Verify with Official Source',
    mr: 'प्रोटोटाइप माहिती · उदाहरणादाखल · अधिकृत कार्यालयातून खात्री करा',
    hi: 'प्रोटोटाइप डेटा · उदाहरण मात्र · आधिकारिक स्रोत से पुष्टि करें',
  },
  searchPlaceholder: {
    en: 'Search schemes, tools, guides or business help...',
    mr: 'योजना, डिजिटल साधने, मार्गदर्शक किंवा मदत शोधा...',
    hi: 'योजनाएं, टूल्स, गाइड या व्यावसायिक सहायता खोजें...',
  },
};

export const BUSINESS_CATEGORIES: { id: string; label: LocalizedText }[] = [
  { id: 'Food Processing', label: { en: 'Food Processing', mr: 'अन्नप्रक्रिया (Food Processing)', hi: 'खाद्य प्रसंस्करण (Food Processing)' } },
  { id: 'Agriculture', label: { en: 'Agriculture & Allied', mr: 'शेतीपूरक व्यवसाय', hi: 'कृषि एवं संबद्ध व्यवसाय' } },
  { id: 'Handicrafts', label: { en: 'Handicrafts & Textiles', mr: 'हस्तकला आणि हातमाग', hi: 'हस्तशिल्प और हथकरघा' } },
  { id: 'Dairy', label: { en: 'Dairy & Animal Husbandry', mr: 'दुग्धव्यवसाय आणि पशुपालन', hi: 'डेयरी और पशुपालन' } },
  { id: 'Retail', label: { en: 'Retail & Kirana Shop', mr: 'किराणा आणि किरकोळ दुकान', hi: 'किराना और खुदरा दुकान' } },
  { id: 'Rural Services', label: { en: 'Rural Services & Repair', mr: 'ग्रामीण सेवा आणि दुरुस्ती', hi: 'ग्रामीण सेवाएं और मरम्मत' } },
  { id: 'Manufacturing', label: { en: 'Small Manufacturing', mr: 'लघु उत्पादन उद्योग', hi: 'लघु विनिर्माण इकाई' } },
  { id: 'Other', label: { en: 'Other Micro Enterprise', mr: 'इतर गृहउद्योग / व्यवसाय', hi: 'अन्य गृह उद्योग / व्यवसाय' } },
];

export const BUSINESS_NEEDS: { id: string; label: LocalizedText }[] = [
  { id: 'Funding', label: { en: 'Funding & Subsidy', mr: 'भांडवल आणि अनुदान (Funding)', hi: 'पूंजी और सब्सिडी (Funding)' } },
  { id: 'Machinery', label: { en: 'Machinery & Equipment', mr: 'यंत्रसामग्री खरेदी', hi: 'मशीनरी और उपकरण' } },
  { id: 'Training', label: { en: 'Training & Mentorship', mr: 'व्यवसाय प्रशिक्षण', hi: 'व्यावसायिक प्रशिक्षण' } },
  { id: 'Market access', label: { en: 'Market Access & Exhibitions', mr: 'बाजारपेठ आणि विक्री केंद्र', hi: 'बाजार पहुंच और प्रदर्शनी' } },
  { id: 'Business setup', label: { en: 'Business Setup & Registration', mr: 'नवीन व्यवसाय नोंदणी', hi: 'व्यवसाय पंजीकरण और शुरुआत' } },
  { id: 'Digital support', label: { en: 'Digital Tools & Online Sales', mr: 'डिजिटल साधने आणि ऑनलाइन विक्री', hi: 'डिजिटल टूल्स और ऑनलाइन बिक्री' } },
  { id: 'Women entrepreneurship', label: { en: 'Women Entrepreneurship Support', mr: 'महिला उद्योजकता विशेष मदत', hi: 'महिला उद्यमिता सहायता' } },
  { id: 'Skill development', label: { en: 'Skill Development', mr: 'कौशल्य विकास', hi: 'कौशल विकास' } },
];
