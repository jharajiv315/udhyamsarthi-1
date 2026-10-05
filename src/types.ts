export type Language = 'en' | 'mr' | 'hi';

export type BusinessCategory =
  | 'Food Processing'
  | 'Agriculture'
  | 'Handicrafts'
  | 'Dairy'
  | 'Retail'
  | 'Rural Services'
  | 'Manufacturing'
  | 'Other';

export type BusinessNeed =
  | 'Funding'
  | 'Machinery'
  | 'Training'
  | 'Market access'
  | 'Business setup'
  | 'Digital support'
  | 'Women entrepreneurship'
  | 'Skill development';

export type NavTab =
  | 'home'
  | 'schemes'
  | 'tools'
  | 'learn'
  | 'readiness'
  | 'dashboard'
  | 'directory'
  | 'saved'
  | 'about';

export interface LocalizedText {
  en: string;
  mr: string;
  hi: string;
}

export interface DocumentItem {
  id: string;
  title: LocalizedText;
  whereToGet: LocalizedText;
}

export interface Scheme {
  id: string;
  code: string;
  title: LocalizedText;
  authority: LocalizedText;
  categories: BusinessCategory[];
  needs: BusinessNeed[];
  districts: string[]; // 'All' or specific districts
  benefitSummary: LocalizedText;
  maxSubsidy: string;
  atAGlance: {
    whatDoesThisMean: LocalizedText;
    example: LocalizedText;
    nextAction: LocalizedText;
  };
  whoCanBenefit: LocalizedText[];
  supportAvailable: LocalizedText[];
  documentsRequired: string[]; // IDs of DocumentItem
  importantNotes: LocalizedText[];
  helpOffice: {
    name: LocalizedText;
    phone: string;
    portalName: string;
  };
  audioScript: LocalizedText;
}

export type ToolCategory =
  | 'Get Paid'
  | 'Talk to Customers'
  | 'Show Your Products'
  | 'Find Customers'
  | 'Manage Business'
  | 'Sell Online';

export interface DigitalTool {
  id: string;
  name: LocalizedText;
  category: ToolCategory;
  difficulty: 'Beginner' | 'Intermediate';
  cost: 'Free' | 'Free / Paid Options';
  timeToLearn: string;
  shortDesc: LocalizedText;
  whatIsIt: LocalizedText;
  whyCare: LocalizedText;
  beforeScenario: LocalizedText;
  afterScenario: LocalizedText;
  relatedLessonId: string;
}

export interface LessonStep {
  stepNumber: number;
  title: LocalizedText;
  instruction: LocalizedText;
  practicalTip: LocalizedText;
}

export interface Lesson {
  id: string;
  title: LocalizedText;
  category: ToolCategory;
  duration: string;
  summary: LocalizedText;
  steps: LessonStep[];
}

export interface DistrictData {
  id: string;
  name: LocalizedText;
  region: LocalizedText;
  talukas: string[];
  keyIndustries: LocalizedText;
  sevaCenter: {
    name: LocalizedText;
    address: LocalizedText;
    hours: string;
    contact: string;
  };
  demoStory: {
    entrepreneur: string;
    business: LocalizedText;
    quote: LocalizedText;
    outcome: LocalizedText;
  };
}

export interface LocalResource {
  id: string;
  name: LocalizedText;
  type: 'Government Office' | 'Training Centre' | 'Business Support' | 'Digital Service Centre' | 'Financial Guidance' | 'Skill Development';
  district: string;
  location: LocalizedText;
  services: LocalizedText;
  languages: string;
  hours: string;
  contact: string;
}

export interface FAQItem {
  id: string;
  category: 'Schemes' | 'Digital Tools' | 'Registration' | 'Payments';
  question: LocalizedText;
  whatItMeans: LocalizedText;
  example: LocalizedText;
  nextAction: LocalizedText;
}

export interface EntrepreneurProfile {
  id: string;
  name: string;
  businessName: string;
  district: string;
  taluka: string;
  category: BusinessCategory;
  stage: 'Idea / Starting' | 'Home-based / Micro' | 'Growing Small Unit';
  primaryNeed: BusinessNeed;
  products: string;
  toolsUsed: string[];
}
