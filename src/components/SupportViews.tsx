import React, { useState } from 'react';
import { Language, NavTab } from '../types';
import { LOCAL_RESOURCES_DATA, MAHARASHTRA_DISTRICTS, FAQ_ITEMS } from '../data/districtsAndResourcesData';
import { SCHEMES_DATA } from '../data/schemesData';
import { DIGITAL_TOOLS_DATA } from '../data/toolsAndLessonsData';
import { t } from '../data/translations';
import {
  MapPin,
  Phone,
  Clock,
  Search,
  Building,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Bookmark,
  ArrowRight,
  Shield,
  Heart,
  Sparkles,
} from 'lucide-react';

interface DirectoryViewProps {
  language: Language;
  onNavigate: (tab: NavTab) => void;
  selectedDistrict: string;
  onDistrictChange: (district: string) => void;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({
  language,
  onNavigate: _onNavigate,
  selectedDistrict,
  onDistrictChange,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const types = [
    { id: 'All', label: { en: 'All Services', mr: 'सर्व सेवा', hi: 'सभी सेवाएं' } },
    { id: 'Government Office', label: { en: 'Govt & DIC', mr: 'शासकीय व डीआयसी', hi: 'सरकारी व डीआईसी' } },
    { id: 'Digital Service Centre', label: { en: 'MahaSeva / CSC', mr: 'महाईसेवा / सीएससी', hi: 'महाईसेवा / सीएससी' } },
    { id: 'Training Centre', label: { en: 'Skill & Training', mr: 'प्रशिक्षण केंद्र', hi: 'प्रशिक्षण केंद्र' } },
    { id: 'Business Support', label: { en: 'Incubation & Hub', mr: 'उद्योग मदत केंद्र', hi: 'उद्योग सहायता केंद्र' } },
    { id: 'Financial Guidance', label: { en: 'Lead Bank & MSME', mr: 'बँक व वित्त', hi: 'बैंक व वित्त' } },
  ];

  const filteredResources = LOCAL_RESOURCES_DATA.filter((res) => {
    const matchDistrict = selectedDistrict === 'All' || res.district === 'All' || res.district === selectedDistrict;
    const matchType = selectedType === 'All' || res.type === selectedType;
    const query = searchQuery.toLowerCase();
    const matchSearch =
      query === '' ||
      t(res.name, language).toLowerCase().includes(query) ||
      t(res.services, language).toLowerCase().includes(query) ||
      t(res.location, language).toLowerCase().includes(query);

    return matchDistrict && matchType && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 border-b border-stone-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded text-xs font-mono font-medium mb-3">
          <MapPin className="w-3.5 h-3.5 text-amber-700" />
          <span>{t({ en: 'Offline Physical Helpdesk Network', mr: 'प्रत्यक्ष मदत केंद्र व कार्यालये', hi: 'भौतिक सहायता केंद्र व कार्यालय' }, language)}</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
          {t({ en: 'Find Help Near You in Maharashtra', mr: 'तुमच्या जवळचे सहाय्य केंद्र शोधा', hi: 'अपने नजदीकी सहायता केंद्र खोजें' }, language)}
        </h1>
        <p className="mt-2 text-stone-600 max-w-3xl">
          {t({
            en: 'Direct contact details for District Industries Centres (DIC), Maha E-Seva Kendras, RSETI training centres, and incubation desks across Maharashtra.',
            mr: 'जिल्हा उद्योग केंद्र (DIC), महा ई-सेवा केंद्र, आरसेटी (RSETI) प्रशिक्षण केंद्र आणि स्थानिक सहाय्य कार्यालयांची अधिकृत माहिती व संपर्क क्रमांक.',
            hi: 'जिला उद्योग केंद्र (DIC), महा ई-सेवा केंद्र, आरसेटी (RSETI) प्रशिक्षण केंद्र और स्थानीय सहायता कार्यालयों की जानकारी व संपर्क नंबर।',
          }, language)}
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 mb-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* District selector */}
          <div className="md:col-span-4">
            <label className="block text-xs font-mono font-semibold uppercase text-stone-600 mb-1.5">
              {t({ en: 'Select District', mr: 'जिल्हा निवडा', hi: 'जिला चुनें' }, language)}
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => onDistrictChange(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
            >
              <option value="All">{t({ en: 'All Maharashtra Districts (36)', mr: 'संपूर्ण महाराष्ट्र (३६ जिल्हे)', hi: 'संपूर्ण महाराष्ट्र (36 जिले)' }, language)}</option>
              {MAHARASHTRA_DISTRICTS.map((d) => (
                <option key={d.id} value={d.id}>
                  {t(d.name, language)} ({t(d.region, language)})
                </option>
              ))}
            </select>
          </div>

          {/* Search bar */}
          <div className="md:col-span-8">
            <label className="block text-xs font-mono font-semibold uppercase text-stone-600 mb-1.5">
              {t({ en: 'Search Centre, Service or City', mr: 'केंद्र, सेवा किंवा शहर शोधा', hi: 'केंद्र, सेवा या शहर खोजें' }, language)}
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t({
                  en: 'E.g., DIC office, Udyam registration, training, Satpur...',
                  mr: 'उदा. डीआयसी कार्यालय, उद्योग आधार, प्रशिक्षण, सातपूर...',
                  hi: 'उदा. डीआईसी ऑफिस, उद्यम पंजीकरण, ट्रेनिंग, सातपुर...',
                }, language)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-2">
          {types.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedType(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                selectedType === cat.id
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
              }`}
            >
              {t(cat.label, language)}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-stone-200 rounded-xl p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="inline-block px-2.5 py-0.5 bg-stone-100 text-stone-700 text-xs font-mono font-medium rounded">
                  {item.type}
                </span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {item.district === 'All' ? 'Pan-Maharashtra' : item.district}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                {t(item.name, language)}
              </h3>

              <p className="text-xs text-stone-600 mb-3 bg-stone-50 p-2 rounded border border-stone-100">
                <span className="font-semibold text-stone-800">{t({ en: 'Help available for: ', mr: 'मदत: ', hi: 'सहायता: ' }, language)}</span>
                {t(item.services, language)}
              </p>

              <div className="space-y-1.5 text-xs text-stone-600 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                  <span>{t(item.location, language)}</span>
                </div>
                {item.hours && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{item.hours}</span>
                  </div>
                )}
                {item.contact && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="font-mono text-stone-800">{item.contact}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500 font-mono">{item.languages}</span>
              <span className="text-amber-700 font-semibold">{t({ en: 'Walk-in Desk', mr: 'थेट भेट द्या', hi: 'प्रत्यक्ष जाएं' }, language)}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-16 bg-white border border-stone-200 rounded-xl p-8">
          <Building className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
            {t({ en: 'No matching centres found', mr: 'कोणतेही केंद्र आढळले नाही', hi: 'कोई केंद्र नहीं मिला' }, language)}
          </h4>
          <p className="text-stone-600 text-sm max-w-md mx-auto mb-4">
            {t({
              en: 'Try clearing your search query or selecting "All Maharashtra Districts" to find regional headquarters.',
              mr: 'कृपया शोध शब्द बदला किंवा संपूर्ण महाराष्ट्रातील प्रमुख विभागीय केंद्रे पाहण्यासाठी सर्व जिल्हे निवडा.',
              hi: 'कृपया सर्च बदलें या पूरे महाराष्ट्र के मुख्य केंद्र देखने के लिए "सभी जिले" चुनें।',
            }, language)}
          </p>
          <button
            onClick={() => {
              setSelectedType('All');
              setSearchQuery('');
              onDistrictChange('All');
            }}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold"
          >
            {t({ en: 'Reset Filters', mr: 'फिल्टर रीसेट करा', hi: 'फिल्टर रीसेट करें' }, language)}
          </button>
        </div>
      )}
    </div>
  );
};

interface SavedResourcesViewProps {
  language: Language;
  savedSchemeIds: string[];
  savedToolIds: string[];
  onToggleSaveScheme: (schemeId: string) => void;
  onToggleSaveTool: (toolId: string) => void;
  onSelectScheme: (schemeId: string) => void;
  onNavigate: (tab: NavTab) => void;
}

export const SavedResourcesView: React.FC<SavedResourcesViewProps> = ({
  language,
  savedSchemeIds,
  savedToolIds,
  onToggleSaveScheme,
  onToggleSaveTool,
  onSelectScheme,
  onNavigate,
}) => {
  const savedSchemes = SCHEMES_DATA.filter((s) => savedSchemeIds.includes(s.id));
  const savedTools = DIGITAL_TOOLS_DATA.filter((t) => savedToolIds.includes(t.id));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8 border-b border-stone-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded text-xs font-mono font-medium mb-3">
          <Bookmark className="w-3.5 h-3.5 text-amber-700" />
          <span>{t({ en: 'Personal Notebook', mr: 'माझी जतन केलेली माहिती', hi: 'मेरी सहेजी गई जानकारी' }, language)}</span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          {t({ en: 'Saved Schemes & Business Tools', mr: 'जतन केलेल्या योजना व डिजिटल साधने', hi: 'सहेजी गई योजनाएं व डिजिटल टूल्स' }, language)}
        </h1>
        <p className="mt-2 text-stone-600 text-sm">
          {t({
            en: 'Keep track of the schemes you are planning to apply for and digital tools you want to master.',
            mr: 'तुम्ही अर्ज करू इच्छित असलेल्या शासकीय योजना आणि शिकू इच्छित असलेल्या डिजिटल साधनांची तुमची वैयक्तिक यादी.',
            hi: 'जिन सरकारी योजनाओं के लिए आप आवेदन करना चाहते हैं और जिन डिजिटल टूल्स को सीखना चाहते हैं, उनकी सूची।',
          }, language)}
        </p>
      </div>

      {/* Saved Schemes Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <span>{t({ en: 'Bookmarked Schemes', mr: 'जतन केलेल्या योजना', hi: 'सहेजी गई योजनाएं' }, language)}</span>
            <span className="text-xs px-2 py-0.5 bg-stone-100 text-stone-700 font-mono rounded-full font-semibold">
              {savedSchemes.length}
            </span>
          </h2>
          <button
            onClick={() => onNavigate('schemes')}
            className="text-xs text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1"
          >
            <span>{t({ en: 'Explore More Schemes', mr: 'अधिक योजना शोधा', hi: 'और योजनाएं देखें' }, language)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {savedSchemes.length === 0 ? (
          <div className="bg-white border border-dashed border-stone-300 rounded-xl p-6 text-center text-stone-500 text-sm">
            {t({
              en: 'No schemes saved yet. Tap the bookmark icon on any scheme in Scheme Finder to save it here.',
              mr: 'अद्याप कोणतीही योजना जतन केलेली नाही. योजना शोधक मध्ये जाऊन कोणत्याही योजनेवर बुकमार्क चिन्हावर क्लिक करा.',
              hi: 'अभी तक कोई योजना सहेजी नहीं गई है। योजना खोजक में जाकर बुकमार्क आइकन दबाएं।',
            }, language)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white border border-stone-200 rounded-xl p-5 hover:border-amber-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded">
                      {scheme.categories[0]}
                    </span>
                    <button
                      onClick={() => onToggleSaveScheme(scheme.id)}
                      className="text-amber-700 hover:text-stone-400"
                      title="Remove bookmark"
                    >
                      <Bookmark className="w-4 h-4 fill-amber-700" />
                    </button>
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-1">
                    {t(scheme.title, language)}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                    {t(scheme.atAGlance.whatDoesThisMean, language)}
                  </p>
                  <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded inline-block">
                    {t(scheme.benefitSummary, language)}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onSelectScheme(scheme.id);
                      onNavigate('schemes');
                    }}
                    className="text-xs font-semibold text-stone-900 hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>{t({ en: 'View Checklist & Steps', mr: 'कागदपत्रे व पायऱ्या पहा', hi: 'दस्तावेज व चरण देखें' }, language)}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Saved Tools Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
            <span>{t({ en: 'Bookmarked Digital Tools', mr: 'जतन केलेली डिजिटल साधने', hi: 'सहेजे गए डिजिटल टूल्स' }, language)}</span>
            <span className="text-xs px-2 py-0.5 bg-stone-100 text-stone-700 font-mono rounded-full font-semibold">
              {savedTools.length}
            </span>
          </h2>
          <button
            onClick={() => onNavigate('tools')}
            className="text-xs text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1"
          >
            <span>{t({ en: 'Explore Tools Library', mr: 'साधनांची लायब्ररी पहा', hi: 'टूल्स लाइब्रेरी देखें' }, language)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {savedTools.length === 0 ? (
          <div className="bg-white border border-dashed border-stone-300 rounded-xl p-6 text-center text-stone-500 text-sm">
            {t({
              en: 'No digital tools saved yet. Save UPI apps, catalog makers, or accounting tools from the Tools Library.',
              mr: 'अद्याप कोणतेही साधन जतन केलेले नाही. डिजिटल टूल्स लायब्ररीमधून उपयोगी साधने बुकमार्क करा.',
              hi: 'अभी तक कोई टूल सहेजा नहीं गया है। टूल्स लाइब्रेरी से उपयोगी टूल्स बुकमार्क करें।',
            }, language)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-stone-200 rounded-xl p-5 hover:border-amber-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-stone-100 text-stone-700 rounded">
                      {tool.category}
                    </span>
                    <button
                      onClick={() => onToggleSaveTool(tool.id)}
                      className="text-amber-700 hover:text-stone-400"
                      title="Remove bookmark"
                    >
                      <Bookmark className="w-4 h-4 fill-amber-700" />
                    </button>
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-1">
                    {t(tool.name, language)}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                    {t(tool.shortDesc, language)}
                  </p>
                  <div className="text-xs font-semibold text-stone-700 bg-stone-100 px-2 py-1 rounded inline-block font-mono">
                    {tool.cost}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('tools')}
                    className="text-xs font-semibold text-stone-900 hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>{t({ en: 'Open Tool Guide', mr: 'मार्गदर्शक उघडा', hi: 'मार्गदर्शक खोलें' }, language)}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface AboutViewProps {
  language: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ language }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded text-xs font-mono font-medium mb-3">
          <Heart className="w-3.5 h-3.5 text-amber-700" />
          <span>{t({ en: 'Empowering Grassroots Maharashtra', mr: 'महाराष्ट्राच्या ग्रामीण अर्थव्यवस्थेला बळ', hi: 'महाराष्ट्र की ग्रामीण अर्थव्यवस्था को मजबूती' }, language)}</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-3">
          {t({ en: 'About Udyam Saarthi', mr: 'उद्यम सारथी बद्दल', hi: 'उद्यम सारथी के बारे में' }, language)}
        </h1>
        <p className="text-stone-600 text-base leading-relaxed">
          {t({
            en: 'Demystifying government finance, digital literacy, and modern market reach for micro-entrepreneurs, women SHGs, and rural youth across Maharashtra.',
            mr: 'शासकीय अर्थसहाय्य, डिजिटल कौशल्ये आणि स्थानिक बाजारपेठ यातील अंतर कमी करणारा एक विश्वासार्ह मराठी व हिंदी डिजिटल सहाय्यक.',
            hi: 'सरकारी वित्त, डिजिटल साक्षरता और बाजार तक पहुंच को आसान बनाने वाला एक विश्वसनीय डिजिटल मार्गदर्शक।',
          }, language)}
        </p>
      </div>

      {/* 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-4 font-mono">
            01
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
            {t({ en: 'Scheme Plain-Language Guide', mr: 'सोप्या भाषेतील योजना', hi: 'सरल भाषा में योजनाएं' }, language)}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {t({
              en: 'Complex government GRs translated into 4-step actionable summaries with realistic timelines and official portal links.',
              mr: 'कठीण शासकीय शासन निर्णय (GRs) सोप्या भाषेत, कागदपत्रे व प्रत्यक्ष लाभाच्या तपशिलासह.',
              hi: 'कठिन सरकारी आदेशों को सरल भाषा और स्पष्ट दस्तावेजों के साथ समझना।',
            }, language)}
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold mb-4 font-mono">
            02
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
            {t({ en: 'Practical Digital Enablement', mr: 'प्रत्यक्ष डिजिटल सक्षमीकरण', hi: 'व्यावहारिक डिजिटल सशक्तिकरण' }, language)}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {t({
              en: 'Zero-jargon business micro-lessons on UPI QR codes, WhatsApp Business catalogs, Google Maps presence, and packaging.',
              mr: 'कमी खर्चात व्हॉट्सॲप बिझनेस, युपीआय पेमेंट, गुगल मॅप्स व पॅकेजिंग शिकवणारे छोटे धडे.',
              hi: 'व्हाट्सएप बिजनेस, यूपीआई और गूगल मैप्स का उपयोग सिखाने वाले छोटे सबक।',
            }, language)}
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold mb-4 font-mono">
            03
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
            {t({ en: 'Ground-Truth Verification', mr: 'सत्य पडताळणी व दिशा', hi: 'सटीक मार्गदर्शन' }, language)}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {t({
              en: 'Direct telephone contacts and office coordinates for official DIC and training centres to protect from fraudulent middlemen.',
              mr: 'जिल्हा उद्योग केंद्र आणि अधिकृत महाईसेवा केंद्रांचे प्रत्यक्ष पत्ते व संपर्क क्रमांक.',
              hi: 'जिला उद्योग केंद्र व अधिकृत केंद्रों के सीधे पते ताकि बिचौलियों से बचा जा सके।',
            }, language)}
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-12 shadow-xs">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-700" />
          <span>{t({ en: 'Frequently Asked Questions (FAQ)', mr: 'वारंवार विचारले जाणारे प्रश्न', hi: 'अक्सर पूछे जाने वाले सवाल' }, language)}</span>
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.id}
                className="border border-stone-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-stone-50 hover:bg-stone-100 transition-colors"
                >
                  <span className="font-serif font-bold text-stone-900 text-sm md:text-base">
                    {t(faq.question, language)}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 py-4 text-stone-700 text-sm leading-relaxed bg-white border-t border-stone-100 space-y-2">
                    <p>{t(faq.whatItMeans, language)}</p>
                    <div className="bg-amber-50 p-2.5 rounded border border-amber-200 text-xs text-amber-950 font-medium">
                      <strong>{t({ en: 'Example: ', mr: 'उदाहरण: ', hi: 'उदाहरण: ' }, language)}</strong>
                      {t(faq.example, language)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Safety & Anti-Fraud Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-950 flex items-start gap-4">
        <Shield className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed">
          <h4 className="font-bold text-sm text-amber-900 mb-1">
            {t({ en: 'Public Awareness Notice: Beware of Fake Registration Websites', mr: 'जनहितार्थ सूचना: बनावट संकेतस्थळांपासून सावध रहा', hi: 'जनहित में सूचना: फर्जी वेबसाइटों से सावधान रहें' }, language)}
          </h4>
          <p>
            {t({
              en: 'Central Government Udyam Registration (udyamregistration.gov.in) is completely free of charge. No government official or department asks for OTPs, bank passwords, or upfront fees via private UPI IDs.',
              mr: 'केंद्र शासनाचे अधिकृत उद्यम नोंदणी पोर्टल पूर्णपणे मोफत आहे. कोणत्याही खासगी व्यक्तीला किंवा मध्यस्थाला ओटीपी किंवा बँक शुल्क देऊ नका.',
              hi: 'केंद्र सरकार का आधिकारिक उद्यम पंजीकरण पूर्णतः निःशुल्क है। किसी भी निजी व्यक्ति को ओटीपी या अनधिकृत शुल्क न दें।',
            }, language)}
          </p>
        </div>
      </div>
    </div>
  );
};

interface FooterProps {
  language: Language;
  onNavigate: (tab: NavTab) => void;
  onOpenVoice: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenVoice,
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-16 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                उ
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                {t({ en: 'Udyam Saarthi', mr: 'उद्यम सारथी', hi: 'उद्यम सारथी' }, language)}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              {t({
                en: 'Samjho. Seekho. Aage Badho. Dedicated civic-tech knowledge navigator for micro-enterprises across rural Maharashtra.',
                mr: 'समझा. शिका. पुढे व्हा. ग्रामीण व निमशहरी महाराष्ट्रातील सूक्ष्म उद्योजकांसाठी विश्वासू डिजिटल मार्गदर्शक.',
                hi: 'समझो. सीखो. आगे बढ़ो. ग्रामीण व अर्ध-शहरी महाराष्ट्र के सूक्ष्म उद्यमियों के लिए विश्वसनीय डिजिटल साथी।',
              }, language)}
            </p>
            <button
              onClick={onOpenVoice}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t({ en: 'Ask Saarthi Voice', mr: 'सारथी व्हॉइस सहाय्यक', hi: 'सारथी वॉइस साथी' }, language)}</span>
            </button>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-3">
              {t({ en: 'Government Schemes', mr: 'शासकीय योजना', hi: 'सरकारी योजनाएं' }, language)}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('schemes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  PMEGP Subsidy Loan (35%)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('schemes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  CMEGP (Maharashtra Govt)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('schemes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  PM Mudra Yojana (Tarun/Kishore)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('schemes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Free Udyam Registration
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-3">
              {t({ en: 'Digital Tools & Skills', mr: 'डिजिटल साधने व शिक्षण', hi: 'डिजिटल टूल्स व शिक्षा' }, language)}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  UPI & Soundbox Setup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tools')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  WhatsApp Business Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('learn')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Google Maps Business Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('readiness')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Business Readiness Diagnostic
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-3">
              {t({ en: 'Maharashtra Resources', mr: 'महाराष्ट्र सहाय्य नेटवर्क', hi: 'महाराष्ट्र सहायता नेटवर्क' }, language)}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('directory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  DIC Office Directory (36 Districts)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-white transition-colors cursor-pointer font-bold text-amber-300"
                >
                  Download Checklist PDF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Civic-Tech Educational Charter
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span>© 2026 Udyam Saarthi</span>
            <span>•</span>
            <span>Maharashtra Civic-Tech Knowledge Initiative</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-stone-400">Official Portals: udyamregistration.gov.in • msme.gov.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
