import { DistrictData, EntrepreneurProfile, FAQItem, LocalResource } from '../types';

export const DEMO_PROFILES: EntrepreneurProfile[] = [
  {
    id: 'asha-nashik',
    name: 'Asha Kulkarni',
    businessName: 'Kulkarni Griha Udyog & Masale',
    district: 'Nashik',
    taluka: 'Niphad',
    category: 'Food Processing',
    stage: 'Home-based / Micro',
    primaryNeed: 'Funding',
    products: 'Homemade Goda Masala, Onion Flakes, Nachani Papad & Pickles',
    toolsUsed: ['upi-qr-payments', 'whatsapp-business'],
  },
  {
    id: 'mahesh-satara',
    name: 'Mahesh Jadhav',
    businessName: 'Sahyadri Agro & Cold-Pressed Oils',
    district: 'Satara',
    taluka: 'Karad',
    category: 'Agriculture',
    stage: 'Growing Small Unit',
    primaryNeed: 'Machinery',
    products: 'Turmeric Powder, Groundnut & Safflower Lakdi Ghana Oil',
    toolsUsed: ['upi-qr-payments', 'google-maps-business', 'digital-bookkeeping-khata'],
  },
  {
    id: 'sneha-kolhapur',
    name: 'Sneha More',
    businessName: 'Karvir Heritage Craft & Footwear',
    district: 'Kolhapur',
    taluka: 'Panhala',
    category: 'Handicrafts',
    stage: 'Home-based / Micro',
    primaryNeed: 'Market access',
    products: 'Handcrafted Leather Chappals, Jute Bags & Embroidered Quilts',
    toolsUsed: ['whatsapp-business', 'digital-catalogue-photos'],
  },
  {
    id: 'vilas-solapur',
    name: 'Vilas Shinde',
    businessName: 'Bhima Milk Chilling & Paneer Kendra',
    district: 'Solapur',
    taluka: 'Pandharpur',
    category: 'Dairy',
    stage: 'Growing Small Unit',
    primaryNeed: 'Machinery',
    products: 'Fresh Paneer, Pure Tup (Ghee), Curd & Khawa',
    toolsUsed: ['upi-qr-payments'],
  },
];

export const MAHARASHTRA_DISTRICTS: DistrictData[] = [
  {
    id: 'Nashik',
    name: { en: 'Nashik', mr: 'नाशिक', hi: 'नासिक' },
    region: { en: 'North Maharashtra (Khandesh)', mr: 'उत्तर महाराष्ट्र', hi: 'उत्तर महाराष्ट्र' },
    talukas: ['Niphad', 'Sinnar', 'Dindori', 'Malegaon', 'Nashik Rural', 'Yeola', 'Igatpuri'],
    keyIndustries: {
      en: 'Onion Dehydration, Raisin & Grape Processing, Homemade Spices, Paithani Handloom (Yeola), Millet Snacks',
      mr: 'कांदा प्रक्रिया, मनुका व द्राक्ष प्रक्रिया, घरगुती मसाले, येवला पैठणी हातमाग, नाचणी पदार्थ',
      hi: 'प्याज प्रसंस्करण, किशमिश व अंगूर प्रसंस्करण, मसाले, येवला पैठणी हथकरघा, मिलेट उत्पाद',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC) & DSAO Office, Nashik (Illustrative)',
        mr: 'जिल्हा उद्योग केंद्र (DIC) व जिल्हा अधीक्षक कृषी कार्यालय, नाशिक',
        hi: 'जिला उद्योग केंद्र (DIC) एवं जिला कृषि कार्यालय, नासिक',
      },
      address: {
        en: 'ITI Signal, Satpur MIDC / Trimbak Road, Nashik - 422007',
        mr: 'आयटीआय सिग्नलजवळ, सातपूर एमआयडीसी / त्र्यंबक रोड, नाशिक',
        hi: 'आईटीआई सिग्नल के पास, सातपुर एमआईडीसी, नासिक',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '0253-2351039 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Asha Kulkarni — Niphad, Nashik',
      business: {
        en: 'Homemade Food Products & Spice Processing',
        mr: 'घरगुती अन्नपदार्थ आणि मसाला उद्योग (निफाड, नाशिक)',
        hi: 'घरेलू खाद्य उत्पाद एवं मसाला प्रसंस्करण (निफाड, नासिक)',
      },
      quote: {
        en: 'Understanding the 35% PMFME machinery subsidy in plain Marathi and creating a WhatsApp catalogue helped me move from loose village sales to supplying packaged masalas to 18 grocery stores.',
        mr: 'PMFME योजनेतील ३५% मशिनरी अनुदानाची सोप्या मराठीत माहिती मिळाली आणि व्हॉट्सॲप कॅटलॉग तयार केल्यामुळे माझा घरगुती मसाला आता १८ किराणा दुकानांत जातो.',
        hi: 'PMFME की 35% मशीनरी सब्सिडी को सरल भाषा में समझने और व्हाट्सएप कैटलॉग बनाने से मेरा घरेलू मसाला अब 18 दुकानों में सप्लाई होता है।',
      },
      outcome: {
        en: 'Prepared 5/5 PMFME documents · Set up WhatsApp Catalogue · +65% repeat wholesale orders',
        mr: '५/५ कागदपत्रे पूर्ण · व्हॉट्सॲप कॅटलॉग सुरू · घाऊक ऑर्डर्समध्ये ६५% वाढ',
        hi: '5/5 दस्तावेज तैयार · व्हाट्सएप कैटलॉग शुरू · थोक ऑर्डर में 65% वृद्धि',
      },
    },
  },
  {
    id: 'Satara',
    name: { en: 'Satara', mr: 'सातारा', hi: 'सातारा' },
    region: { en: 'Western Maharashtra (Paschim Maharashtra)', mr: 'पश्चिम महाराष्ट्र', hi: 'पश्चिम महाराष्ट्र' },
    talukas: ['Karad', 'Phaltan', 'Wai', 'Koregaon', 'Satara', 'Mahabaleshwar', 'Patan'],
    keyIndustries: {
      en: 'Turmeric & Ginger Processing, Jaggery (Gul) Units, Strawberry & Fruit Pulping, Cold-Pressed Oil, Dairy',
      mr: 'हळद व आले प्रक्रिया, गूळ व काकवी निर्मिती, स्ट्रॉबेरी पल्प, लाकडी घाणा तेल, दुग्धव्यवसाय',
      hi: 'हल्दी व अदरक प्रसंस्करण, गुड़ निर्माण, स्ट्रॉबेरी पल्प, लकड़ी घाना तेल, डेयरी',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC), Powai Naka, Satara (Illustrative)',
        mr: 'जिल्हा उद्योग केंद्र (DIC), पोवई नाका, सातारा',
        hi: 'जिला उद्योग केंद्र (DIC), पोवई नाका, सातारा',
      },
      address: {
        en: 'Near Collector Office Compound, Satara - 415001',
        mr: 'जिल्हाधिकारी कार्यालय परिसर, सातारा',
        hi: 'कलेक्टर कार्यालय परिसर, सातारा',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '02162-239864 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Mahesh Jadhav — Karad, Satara',
      business: {
        en: 'Agro Processing & Cold-Pressed Oil Unit',
        mr: 'कृषी प्रक्रिया आणि लाकडी घाणा तेल उद्योग (कराड, सातारा)',
        hi: 'कृषि प्रसंस्करण एवं लकड़ी घाना तेल इकाई (कराड, सातारा)',
      },
      quote: {
        en: 'Adding our unit on Google Maps and switching to a Business UPI QR built the 6-month bank statement we needed for CMEGP machinery expansion.',
        mr: 'गूगल मॅपवर युनिट नोंदवल्यामुळे आणि बिझनेस UPI QR वापरल्यामुळे CMEGP कर्जासाठी आवश्यक असलेले ६ महिन्यांचे बँक स्टेटमेंट सहज तयार झाले.',
        hi: 'गूगल मैप्स पर यूनिट जोड़ने और बिजनेस UPI QR अपनाने से CMEGP ऋण के लिए आवश्यक 6 महीने का बैंक स्टेटमेंट आसानी से तैयार हो गया।',
      },
      outcome: {
        en: 'CMEGP Checklist Ready · Listed on Google Maps · 40+ highway buyers every month',
        mr: 'CMEGP कागदपत्रे सज्ज · गूगल मॅपवर नोंदणी · दरमहा ४०+ नवीन ग्राहक',
        hi: 'CMEGP चेकलिस्ट तैयार · गूगल मैप्स पर लिस्टेड · हर माह 40+ नए ग्राहक',
      },
    },
  },
  {
    id: 'Kolhapur',
    name: { en: 'Kolhapur', mr: 'कोल्हापूर', hi: 'कोल्हापुर' },
    region: { en: 'Western Maharashtra', mr: 'पश्चिम महाराष्ट्र', hi: 'पश्चिम महाराष्ट्र' },
    talukas: ['Panhala', 'Hatkanangale', 'Shirol', 'Karveer', 'Kagal', 'Gadhinglaj'],
    keyIndustries: {
      en: 'Kolhapuri Leather Craft, Jaggery Export Units, Cashew Processing, Foundry & Textiles, Dairy',
      mr: 'कोल्हापुरी चप्पल व चर्मद्योग, सेंद्रिय गूळ, काजू प्रक्रिया, फाउंड्री व वस्त्रोद्योग, दुग्धव्यवसाय',
      hi: 'कोल्हापुरी चप्पल व चर्म शिल्प, गुड़ प्रसंस्करण, काजू प्रसंस्करण, वस्त्र एवं डेयरी',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC), Udyam Nagar, Kolhapur (Illustrative)',
        mr: 'जिल्हा उद्योग केंद्र (DIC), उद्यमनगर, कोल्हापूर',
        hi: 'जिला उद्योग केंद्र (DIC), उद्यम नगर, कोल्हापुर',
      },
      address: {
        en: 'Udyog Bhavan, Assembly Road, Kolhapur - 416001',
        mr: 'उद्योग भवन, असेंब्ली रोड, कोल्हापूर',
        hi: 'उद्योग भवन, असेंबली रोड, कोल्हापुर',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '0231-2652541 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Sneha More — Panhala, Kolhapur',
      business: {
        en: 'Handcrafted Leather & Textile Artisan Unit',
        mr: 'हस्तकला आणि पारंपरिक चप्पल कारागीर युनिट (पन्हाळा, कोल्हापूर)',
        hi: 'हस्तशिल्प एवं पारंपरिक चर्म शिल्प इकाई (पन्हाला, कोल्हापुर)',
      },
      quote: {
        en: 'Learning how to take clean daylight product photos on my phone and applying under PM Vishwakarma helped me sell directly to Pune customers without middlemen.',
        mr: 'मोबाईलवर दिवसाच्या उजेडात स्पष्ट फोटो काढायला शिकल्यामुळे आणि पीएम विश्वकर्मा योजनेच्या मदतीमुळे मी आता दलालांशिवाय थेट पुण्याच्या ग्राहकांना माल विकते.',
        hi: 'फोन से साफ प्रोडक्ट फोटो खींचना सीखने और पीएम विश्वकर्मा योजना की मदद से अब मैं बिना बिचौलियों के सीधे पुणे के ग्राहकों को सामान बेचती हूं।',
      },
      outcome: {
        en: 'PM Vishwakarma Toolkit Registered · Digital Photo Catalogue · 2x Margin per Order',
        mr: 'पीएम विश्वकर्मा टूलकिट नोंदणी · डिजिटल फोटो कॅटलॉग · नफ्यात दुपटीने वाढ',
        hi: 'पीएम विश्वकर्मा टूलकिट पंजीकृत · डिजिटल फोटो कैटलॉग · दोगुना मुनाफा',
      },
    },
  },
  {
    id: 'Solapur',
    name: { en: 'Solapur', mr: 'सोलापूर', hi: 'सोलापुर' },
    region: { en: 'Southern Maharashtra', mr: 'दक्षिण महाराष्ट्र', hi: 'दक्षिण महाराष्ट्र' },
    talukas: ['Pandharpur', 'Barshi', 'Sangola', 'Madha', 'Akkalkot', 'Mohol'],
    keyIndustries: {
      en: 'Dairy & Khawa/Paneer Units, Pomegranate & Dal Milling (Barshi), Solapur Chaddar & Terry Towels, Millet Bhakri/Chutney',
      mr: 'दुग्धव्यवसाय (खवा/पनीर), डाळ मिल (बार्शी), डाळिंब प्रक्रिया, सोलापुरी चादर, ज्वारी व शेंगदाणा चटणी उद्योग',
      hi: 'डेयरी (खोया/पनीर), दाल मिल (बार्शी), अनार प्रसंस्करण, सोलापुरी चादर, ज्वार व मूंगफली चटनी',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC), Hotgi Road, Solapur (Illustrative)',
        mr: 'जिल्हा उद्योग केंद्र (DIC), होटगी रोड, सोलापूर',
        hi: 'जिला उद्योग केंद्र (DIC), होटगी रोड, सोलापुर',
      },
      address: {
        en: 'Industrial Estate Compound, Hotgi Road, Solapur - 413003',
        mr: 'औद्योगिक वसाहत परिसर, होटगी रोड, सोलापूर',
        hi: 'औद्योगिक क्षेत्र परिसर, होटगी रोड, सोलापुर',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '0217-2602358 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Vilas Shinde — Pandharpur, Solapur',
      business: {
        en: 'Dairy Processing & Paneer Unit',
        mr: 'दूध शीतकरण आणि पनीर निर्मिती केंद्र (पंढरपूर, सोलापूर)',
        hi: 'डेयरी प्रसंस्करण एवं पनीर केंद्र (पंढरपुर, सोलापुर)',
      },
      quote: {
        en: 'We used to sell only raw milk. Udyam Saarthi showed us the Dairy Entrepreneurship subsidy and how digital Bahi-Khata recovers monthly hotel dues on time.',
        mr: 'आम्ही आधी फक्त कच्चे दूध विकायचो. उद्यम सारथीवरून दुग्धव्यवसाय अनुदानाची माहिती मिळाली आणि डिजिटल खात्यामुळे हॉटेल्सची उधारी वेळेवर वसूल होऊ लागली.',
        hi: 'हम पहले केवल कच्चा दूध बेचते थे। उद्यम सारथी से डेयरी सब्सिडी की जानकारी मिली और डिजिटल बही-खाते से होटलों का बकाया समय पर मिलने लगा।',
      },
      outcome: {
        en: 'Dairy Equipment Checklist Complete · Digital Khata Active · 95% On-Time Payment Recovery',
        mr: 'डेअरी मशिनरी कागदपत्रे पूर्ण · डिजिटल हिशोब सुरू · ९५% वेळेवर उधारी वसुली',
        hi: 'डेयरी उपकरण दस्तावेज पूर्ण · डिजिटल खाता सक्रिय · 95% समय पर भुगतान वसूली',
      },
    },
  },
  {
    id: 'Pune',
    name: { en: 'Pune', mr: 'पुणे (ग्रामीण)', hi: 'पुणे (ग्रामीण)' },
    region: { en: 'Western Maharashtra', mr: 'पश्चिम महाराष्ट्र', hi: 'पश्चिम महाराष्ट्र' },
    talukas: ['Baramati', 'Junnar', 'Ambegaon', 'Shirur', 'Indapur', 'Bhor', 'Maval'],
    keyIndustries: {
      en: 'Dairy & Cattle Feed, Ambemohar Rice & Millet Packaging, Rural Auto/Machinery Servicing, Direct Farm-to-Society Sales',
      mr: 'दुग्धव्यवसाय व पशुखाद्य, आंबेमोहोर तांदूळ व भरडधान्य पॅकिंग, कृषी अवजारे दुरुस्ती, थेट गृहनिर्माण सोसायटी विक्री',
      hi: 'डेयरी व पशु आहार, आंबेमोहोर चावल व मिलेट पैकिंग, कृषि उपकरण मरम्मत, सीधी सोसायटी बिक्री',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC), Agriculture College Compound, Shivajinagar, Pune',
        mr: 'जिल्हा उद्योग केंद्र (DIC), कृषी महाविद्यालय परिसर, शिवाजीनगर, पुणे',
        hi: 'जिला उद्योग केंद्र (DIC), कृषि महाविद्यालय परिसर, शिवाजीनगर, पुणे',
      },
      address: {
        en: 'Ganeshkhind Road, Shivajinagar, Pune - 411005',
        mr: 'गणेशखिंड रोड, शिवाजीनगर, पुणे',
        hi: 'गणेशखिंड रोड, शिवाजीनगर, पुणे',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '020-25537664 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Rameshwar Thorat — Junnar, Pune',
      business: {
        en: 'Direct Farm Produce & Spice Pack Unit',
        mr: 'शेतकरी थेट धान्य व मसाला पॅकिंग युनिट (जुन्नर, पुणे)',
        hi: 'किसान प्रत्यक्ष अनाज व मसाला पैकिंग इकाई (जुन्नर, पुणे)',
      },
      quote: {
        en: 'Using WhatsApp Broadcast lists and UPI pre-orders, our SHG supplies cleaned grains and spices directly to 4 housing societies every Sunday.',
        mr: 'व्हॉट्सॲप ग्रुप आणि UPI आगाऊ ऑर्डर वापरून आमचा गट दर रविवारी पुण्यातील ४ सोसायट्यांमध्ये थेट स्वच्छ धान्य आणि मसाले पोहोचवतो.',
        hi: 'व्हाट्सएप और UPI प्री-ऑर्डर की मदद से हमारा समूह हर रविवार पुणे की 4 सोसायटियों में सीधे साफ अनाज और मसाले पहुंचाता है।',
      },
      outcome: {
        en: 'Udyam + FSSAI Registered · Weekly Society Pre-Orders via WhatsApp',
        mr: 'उद्यम व FSSAI नोंदणी पूर्ण · व्हॉट्सॲपद्वारे साप्ताहिक आगाऊ ऑर्डर',
        hi: 'उद्यम व FSSAI पंजीकृत · व्हाट्सएप से साप्ताहिक प्री-ऑर्डर',
      },
    },
  },
  {
    id: 'Ahmednagar',
    name: { en: 'Ahilyanagar (Ahmednagar)', mr: 'अहिल्यानगर (अहमदनगर)', hi: 'अहिल्यानगर (अहमदनगर)' },
    region: { en: 'Central / Western Maharashtra', mr: 'मध्य-पश्चिम महाराष्ट्र', hi: 'मध्य-पश्चिम महाराष्ट्र' },
    talukas: ['Sangamner', 'Rahuri', 'Shrirampur', 'Kopargaon', 'Parner', 'Nevasa'],
    keyIndustries: {
      en: 'Dairy & Milk Products, Millet & Pulses Processing, Guava/Pomegranate Grading, Rural Retail & Agro Input',
      mr: 'दुग्धव्यवसाय व दूध प्रक्रिया, बाजरी व कडधान्य प्रक्रिया, फळ ग्रेडिंग, कृषी सेवा केंद्र',
      hi: 'डेयरी व दुग्ध उत्पाद, बाजरा व दाल प्रसंस्करण, फल ग्रेडिंग, कृषि सेवा केंद्र',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC), Savedi Road, Ahilyanagar (Illustrative)',
        mr: 'जिल्हा उद्योग केंद्र (DIC), सावेडी रोड, अहिल्यानगर',
        hi: 'जिला उद्योग केंद्र (DIC), सावेडी रोड, अहिल्यानगर',
      },
      address: {
        en: 'Near MIDC / Collectorate Area, Ahilyanagar - 414003',
        mr: 'एमआयडीसी / जिल्हाधिकारी कार्यालय परिसर, अहिल्यानगर',
        hi: 'एमआईडीसी / कलेक्ट्रेट परिसर, अहिल्यानगर',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '0241-2423192 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Sunita Pawar — Sangamner',
      business: {
        en: 'Women SHG Millet Papad & Sevai Unit',
        mr: 'महिला बचत गट नाचणी पापड व शेवया उद्योग (संगमनेर)',
        hi: 'महिला बचत गट मिलेट पापड़ एवं सेवई इकाई (संगमनेर)',
      },
      quote: {
        en: 'Through UMED interest subvention and digital order tracking, our 10-woman Bachat Gat bought an electric sevai machine and doubled summer production.',
        mr: 'उमेद अभियानातील व्याज परतावा आणि डिजिटल ऑर्डर नोंदणीमुळे आमच्या १० महिलांच्या बचत गटाने इलेक्ट्रिक शेवया मशीन घेतली आणि उत्पादन दुप्पट केले.',
        hi: 'उमेद ब्याज सब्सिडी और डिजिटल ऑर्डर ट्रैकिंग से हमारे 10 महिलाओं के समूह ने इलेक्ट्रिक सेवई मशीन खरीदी और उत्पादन दोगुना किया।',
      },
      outcome: {
        en: 'UMED Bank Linkage · 0% Effective Interest · 10 Women Employed',
        mr: 'उमेद बँक कर्ज · ०% प्रभावी व्याज · १० महिलांना रोजगार',
        hi: 'उमेद बैंक लिंकेज · 0% प्रभावी ब्याज · 10 महिलाओं को रोजगार',
      },
    },
  },
  {
    id: 'Nagpur',
    name: { en: 'Nagpur (Rural)', mr: 'नागपूर (ग्रामीण)', hi: 'नागपुर (ग्रामीण)' },
    region: { en: 'Vidarbha', mr: 'विदर्भ', hi: 'विदर्भ' },
    talukas: ['Katol', 'Narkhed', 'Savner', 'Ramtek', 'Umred', 'Hingna'],
    keyIndustries: {
      en: 'Orange & Citrus Processing, Cotton Ginning & Handloom, Bhiwapur Chilli Powder, Bamboo Craft',
      mr: 'संत्रा प्रक्रिया व ज्यूस, कापूस व हातमाग, भिवापूर मिरची पावडर, बांबू हस्तकला',
      hi: 'संतरा प्रसंस्करण, कपास व हथकरघा, भिवापुर मिर्च पाउडर, बांस हस्तशिल्प',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC), Civil Lines, Nagpur (Illustrative)',
        mr: 'जिल्हा उद्योग केंद्र (DIC), सिव्हिल लाईन्स, नागपूर',
        hi: 'जिला उद्योग केंद्र (DIC), सिविल लाइन्स, नागपुर',
      },
      address: {
        en: 'Udyog Bhavan, Civil Lines, Nagpur - 440001',
        mr: 'उद्योग भवन, सिव्हिल लाईन्स, नागपूर',
        hi: 'उद्योग भवन, सिविल लाइन्स, नागपुर',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '0712-2565423 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Pradeep Deshmukh — Katol, Nagpur',
      business: {
        en: 'Citrus Burfi & Chilli Powder Unit',
        mr: 'संत्रा बर्फी व भिवापुरी मिरची मसाला उद्योग (काटोल, नागपूर)',
        hi: 'संतरा बर्फी एवं मिर्च मसाला इकाई (काटोल, नागपुर)',
      },
      quote: {
        en: 'Setting up India Post parcel shipping with WhatsApp pre-payment let us deliver Katol orange products to customers across Maharashtra.',
        mr: 'व्हॉट्सॲपवर आगाऊ पेमेंट आणि पोस्ट ऑफिस पार्सल सेवेमुळे आम्ही काटोलचे संत्रा पदार्थ आता राज्यभरातील ग्राहकांना पाठवतो.',
        hi: 'व्हाट्सएप अग्रिम भुगतान और डाकघर पार्सल की मदद से हम काटोल के संतरा उत्पाद अब पूरे महाराष्ट्र में भेजते हैं।',
      },
      outcome: {
        en: 'PMFME ODOP Eligible · Pan-Maharashtra Parcel Delivery',
        mr: 'PMFME एक जिल्हा एक उत्पादन पात्र · राज्यभर पार्सल सेवा',
        hi: 'PMFME एक जिला एक उत्पाद पात्र · पूरे राज्य में पार्सल डिलीवरी',
      },
    },
  },
  {
    id: 'Ratnagiri',
    name: { en: 'Ratnagiri', mr: 'रत्नागिरी (कोकण)', hi: 'रत्नागिरी (कोंकण)' },
    region: { en: 'Konkan Division', mr: 'कोकण विभाग', hi: 'कोंकण विभाग' },
    talukas: ['Chiplun', 'Dapoli', 'Sangameshwar', 'Rajapur', 'Khed', 'Guhagar'],
    keyIndustries: {
      en: 'Alphonso Mango Pulp & Amba Poli, Cashew Processing, Kokum Syrup, Jackfruit Chips, Fishery Allied',
      mr: 'हापूस आंबा पल्प व आंबापोळी, काजू प्रक्रिया, कोकम सरबत व आगळ, फणस वेफर्स, मत्स्य प्रक्रिया',
      hi: 'हापुस आम पल्प व आम पापड़, काजू प्रसंस्करण, कोकम शरबत, कटहल चिप्स, मत्स्य प्रसंस्करण',
    },
    sevaCenter: {
      name: {
        en: 'District Industries Centre (DIC), Kuwarbav, Ratnagiri (Illustrative)',
        mr: 'जिल्हा उद्योग केंद्र (DIC), कुवारबाव, रत्नागिरी',
        hi: 'जिला उद्योग केंद्र (DIC), कुवारबाव, रत्नागिरी',
      },
      address: {
        en: 'MIDC Mirjole / Kuwarbav, Ratnagiri - 415639',
        mr: 'एमआयडीसी मिरजोळे / कुवारबाव, रत्नागिरी',
        hi: 'एमआईडीसी मिरजोले / कुवारबाव, रत्नागिरी',
      },
      hours: 'Mon–Fri · 10:00 AM – 5:30 PM',
      contact: '02352-222340 (Prototype Ref)',
    },
    demoStory: {
      entrepreneur: 'Mansi Sawant — Dapoli, Ratnagiri',
      business: {
        en: 'Konkan Cashew & Kokum Syrup Enterprise',
        mr: 'कोकण काजू आणि कोकम प्रक्रिया गृहउद्योग (दापोली, रत्नागिरी)',
        hi: 'कोंकण काजू एवं कोकम प्रसंस्करण गृह उद्योग (दापोली, रत्नागिरी)',
      },
      quote: {
        en: 'Listing our workshop on Google Maps helped tourists visiting Dapoli beaches stop directly at our unit and buy Kokum syrup & cashews at retail rates.',
        mr: 'गूगल मॅपवर आमचा गृहउद्योग नोंदवल्यामुळे दापोलीत येणारे पर्यटक आता थेट आमच्या केंद्रावर येऊन कोकम सरबत आणि काजू खरेदी करतात.',
        hi: 'गूगल मैप्स पर अपनी इकाई दर्ज करने से दापोली आने वाले पर्यटक अब सीधे हमारे केंद्र पर आकर कोकम शरबत और काजू खरीदते हैं।',
      },
      outcome: {
        en: 'Google Maps Tourist Pin · Direct Retail Pricing · +80% Seasonal Sales',
        mr: 'गूगल मॅपवर पर्यटक पिन · थेट किरकोळ विक्री · हंगामी विक्रीत ८०% वाढ',
        hi: 'गूगल मैप्स पिन · सीधी खुदरा बिक्री · मौसमी बिक्री में 80% वृद्धि',
      },
    },
  },
];

export const LOCAL_RESOURCES_DATA: LocalResource[] = [
  {
    id: 'res-dic-nashik',
    name: {
      en: 'District Industries Centre (DIC) — Udyog Mitra Desk',
      mr: 'जिल्हा उद्योग केंद्र (DIC) — उद्योग मित्र मदत कक्ष',
      hi: 'जिला उद्योग केंद्र (DIC) — उद्योग मित्र सहायता कक्ष',
    },
    type: 'Government Office',
    district: 'Nashik',
    location: {
      en: 'Satpur MIDC Signal, Trimbak Road, Nashik (Available in every District HQ)',
      mr: 'सातपूर एमआयडीसी सिग्नलजवळ, नाशिक (प्रत्येक जिल्ह्याच्या ठिकाणी उपलब्ध)',
      hi: 'सातपुर एमआईडीसी सिग्नल, नासिक (प्रत्येक जिला मुख्यालय में उपलब्ध)',
    },
    services: {
      en: 'CMEGP subsidy guidance, Udyam MSME Registration, Project Report (DPR) templates, Export & cluster support.',
      mr: 'CMEGP अनुदान मार्गदर्शन, उद्यम नोंदणी, प्रकल्प अहवाल (DPR) नमुना आणि लघुउद्योग परवाने.',
      hi: 'CMEGP सब्सिडी मार्गदर्शन, उद्यम पंजीकरण, प्रोजेक्ट रिपोर्ट (DPR) प्रारूप और लघु उद्योग सहायता।',
    },
    languages: 'Marathi · Hindi · English',
    hours: 'Mon–Fri, 10:00 AM – 5:30 PM',
    contact: '0253-2351039 (Prototype Illustrative Desk)',
  },
  {
    id: 'res-mcED-training',
    name: {
      en: 'MCED — Maharashtra Centre for Entrepreneurship Development',
      mr: 'महाराष्ट्र उद्योजकता विकास केंद्र (MCED प्रशिक्षण केंद्र)',
      hi: 'महाराष्ट्र उद्यमिता विकास केंद्र (MCED प्रशिक्षण केंद्र)',
    },
    type: 'Training Centre',
    district: 'All',
    location: {
      en: 'Regional & District DIC Building Compound (Nashik, Satara, Kolhapur, Solapur, Pune, Nagpur)',
      mr: 'जिल्हा उद्योग केंद्र इमारत परिसर (नाशिक, सातारा, कोल्हापूर, सोलापूर, पुणे, नागपूर)',
      hi: 'जिला उद्योग केंद्र परिसर (नासिक, सातारा, कोल्हापुर, सोलापुर, पुणे, नागपुर)',
    },
    services: {
      en: 'EDP certification for loan release, Food Processing training, Packaging & pricing workshops.',
      mr: 'बँक कर्जासाठी आवश्यक EDP प्रमाणपत्र प्रशिक्षण, अन्नप्रक्रिया कार्यशाळा, पॅकेजिंग व हिशोब प्रशिक्षण.',
      hi: 'बैंक ऋण के लिए EDP प्रमाणपत्र प्रशिक्षण, खाद्य प्रसंस्करण कार्यशाला, पैकेजिंग व लेखा प्रशिक्षण।',
    },
    languages: 'Marathi · Hindi',
    hours: 'Mon–Sat, 10:00 AM – 5:00 PM',
    contact: '0240-2334216 (Prototype Illustrative Desk)',
  },
  {
    id: 'res-rseti-bank',
    name: {
      en: 'RSETI — Rural Self Employment Training Institute (Lead Bank)',
      mr: 'ग्रामीण स्वयंरोजगार प्रशिक्षण संस्था (RSETI — अग्रणी बँक)',
      hi: 'ग्रामीण स्वरोजगार प्रशिक्षण संस्थान (RSETI — अग्रणी बैंक)',
    },
    type: 'Skill Development',
    district: 'All',
    location: {
      en: 'Sponsored by Bank of Maharashtra / SBI at every District HQ in Maharashtra',
      mr: 'बँक ऑफ महाराष्ट्र / स्टेट बँकेमार्फत प्रत्येक जिल्ह्यात कार्यरत मोफत निवासी प्रशिक्षण संस्था',
      hi: 'बैंक ऑफ महाराष्ट्र / स्टेट बैंक द्वारा प्रत्येक जिले में संचालित निःशुल्क आवासीय प्रशिक्षण संस्थान',
    },
    services: {
      en: '100% Free skill courses (Dairy, Masala making, Tailoring, Mobile repair, Beauty parlour) + 2-year bank credit handholding.',
      mr: '१००% मोफत व्यावसायिक प्रशिक्षण (मसाला उद्योग, दुग्धव्यवसाय, शिलाई, मोबाईल दुरुस्ती) आणि बँक कर्ज मार्गदर्शन.',
      hi: '100% निःशुल्क कौशल प्रशिक्षण (मसाला, डेयरी, सिलाई, मोबाइल रिपेयर) एवं बैंक ऋण मार्गदर्शन।',
    },
    languages: 'Marathi · Hindi',
    hours: 'Mon–Sat, 9:30 AM – 5:30 PM',
    contact: '1800-233-4526 (Prototype Illustrative Desk)',
  },
  {
    id: 'res-maha-eseva',
    name: {
      en: 'Aaple Sarkar Seva Kendra / Village CSC Digital Centre',
      mr: 'आपले सरकार सेवा केंद्र / ग्रामीण सीएससी (CSC) डिजिटल केंद्र',
      hi: 'आपले सरकार सेवा केंद्र / ग्रामीण सीएससी (CSC) डिजिटल केंद्र',
    },
    type: 'Digital Service Centre',
    district: 'All',
    location: {
      en: 'Gram Panchayat Bhavan or Main Bazaar Road in every village / taluka',
      mr: 'प्रत्येक गावातील ग्रामपंचायत भवन किंवा मुख्य बाजारपेठ',
      hi: 'प्रत्येक गांव के ग्राम पंचायत भवन या मुख्य बाजार में उपलब्ध',
    },
    services: {
      en: 'Domicile & Income certificates, Udyam Registration print, PM Vishwakarma biometric application, Basic FSSAI filing, Document scanning.',
      mr: 'रहिवासी व उत्पन्नाचा दाखला, उद्यम नोंदणी प्रिंट, पीएम विश्वकर्मा बायोमेट्रिक अर्ज, FSSAI नोंदणी व कागदपत्रे स्कॅनिंग.',
      hi: 'निवास व आय प्रमाणपत्र, उद्यम पंजीकरण प्रिंट, पीएम विश्वकर्मा बायोमेट्रिक आवेदन, FSSAI पंजीकरण व स्कैनिंग।',
    },
    languages: 'Marathi · Hindi',
    hours: 'Mon–Sat, 9:00 AM – 7:00 PM',
    contact: 'Visit Local Gram Panchayat CSC Operator',
  },
  {
    id: 'res-mavim-umed',
    name: {
      en: 'UMED (MSRLM) & MAVIM Women Enterprise Support Cell',
      mr: 'उमेद (MSRLM) आणि महिला आर्थिक विकास महामंडळ (MAVIM) कक्ष',
      hi: 'उमेद (MSRLM) एवं महिला आर्थिक विकास महामंडल (MAVIM) कक्ष',
    },
    type: 'Business Support',
    district: 'All',
    location: {
      en: 'Panchayat Samiti (Block Level) & Zilla Parishad Building',
      mr: 'पंचायत समिती (तालुका स्तर) आणि जिल्हा परिषद कार्यालय',
      hi: 'पंचायत समिति (तालुका स्तर) एवं जिला परिषद कार्यालय',
    },
    services: {
      en: 'Bachat Gat bank linkage, Nav Tejaswini rural enterprise support, Mahalaxmi Saras stall booking, Krishi/Udyog Sakhi guidance.',
      mr: 'बचत गट बँक कर्ज, नव तेजस्विनी ग्रामीण उद्योग मदत, महालक्ष्मी सरस प्रदर्शन स्टॉल नोंदणी व उद्योग सखी मार्गदर्शन.',
      hi: 'बचत गट बैंक लिंकेज, नव तेजस्विनी उद्यम सहायता, महालक्ष्मी सरस प्रदर्शनी स्टॉल एवं उद्योग सखी मार्गदर्शन।',
    },
    languages: 'Marathi · Hindi',
    hours: 'Mon–Fri, 10:00 AM – 5:30 PM',
    contact: 'Block Mission Manager at Panchayat Samiti',
  },
  {
    id: 'res-kvk-agro',
    name: {
      en: 'Krishi Vigyan Kendra (KVK) — Food & Agro Processing Lab',
      mr: 'कृषी विज्ञान केंद्र (KVK) — अन्नप्रक्रिया व तंत्रज्ञान मार्गदर्शन केंद्र',
      hi: 'कृषि विज्ञान केंद्र (KVK) — खाद्य प्रसंस्करण एवं प्रौद्योगिकी केंद्र',
    },
    type: 'Financial Guidance',
    district: 'All',
    location: {
      en: 'Available in Nashik (Babombewadi), Satara (Borgao), Kolhapur (Talsande), Solapur (Mohol), Baramati',
      mr: 'नाशिक, सातारा (बोरगाव), कोल्हापूर (तळसंदे), सोलापूर (मोहोळ), बारामती येथे कार्यरत',
      hi: 'नासिक, सातारा, कोल्हापुर, सोलापुर, बारामती सहित प्रत्येक जिले में कार्यरत',
    },
    services: {
      en: 'Shelf-life testing for homemade foods, Solar dryer & cold storage demo, PMFME District Resource Person (DRP) connect.',
      mr: 'घरगुती अन्नपदार्थ जास्त दिवस टिकवण्याचे तंत्रज्ञान, सोलर ड्रायर प्रात्यक्षिक आणि PMFME प्रकल्प अहवाल (DRP) मदत.',
      hi: 'घरेलू खाद्य उत्पादों की शेल्फ-लाइफ परीक्षण, सोलर ड्रायर प्रदर्शन और PMFME प्रोजेक्ट रिपोर्ट सहायता।',
    },
    languages: 'Marathi · Hindi · English',
    hours: 'Mon–Sat, 9:30 AM – 5:00 PM',
    contact: 'Local KVK Subject Matter Specialist (Food Tech)',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-upi',
    category: 'Payments',
    question: {
      en: 'How does accepting UPI QR payments help me get a government business loan?',
      mr: 'दुकानात UPI QR कोडने पैसे स्वीकारल्यामुळे शासकीय कर्ज मिळायला कशी मदत होते?',
      hi: 'दुकान में UPI QR कोड से भुगतान लेने से सरकारी व्यावसायिक ऋण मिलने में कैसे मदद होती है?',
    },
    whatItMeans: {
      en: 'When you take only cash, your bank passbook looks empty. When customers pay via UPI QR into your bank account, your passbook shows daily business deposits—proving to the bank manager that your business has real income and can repay a loan.',
      mr: 'जेव्हा तुम्ही फक्त रोख पैसे घेता, तेव्हा तुमचे बँक पासबुक रिकामे दिसते. पण जेव्हा ग्राहक UPI QR कोडवर पैसे पाठवतात, तेव्हा बँक पासबुकवर रोजची विक्री दिसते. यामुळे बँक मॅनेजरला तुमच्या खऱ्या उत्पन्नाचा पुरावा मिळतो.',
      hi: 'जब आप केवल नकद पैसे लेते हैं, तो बैंक पासबुक खाली दिखती है। लेकिन जब ग्राहक UPI QR से भुगतान करते हैं, तो पासबुक में रोज की बिक्री दर्ज होती है जिससे बैंक मैनेजर को आपकी आय का पक्का प्रमाण मिलता है।',
    },
    example: {
      en: 'A kirana owner accepting ₹1,500/day on UPI shows ₹45,000 monthly banking turnover, making a ₹1.5 Lakh MUDRA loan easy to sanction.',
      mr: 'रोज १,५०० रुपये UPI ने स्वीकारणाऱ्या दुकानदाराच्या खात्यात महिन्याला ४५,००० रुपयांची उलाढाल दिसते, ज्यामुळे १.५ लाख रुपयांचे मुद्रा कर्ज सहज मंजूर होऊ शकते.',
      hi: 'रोज ₹1,500 UPI से लेने वाले दुकानदार के खाते में महीने का ₹45,000 टर्नओवर दिखता है, जिससे ₹1.5 लाख का मुद्रा ऋण आसानी से स्वीकृत हो सकता है।',
    },
    nextAction: {
      en: 'Put up a free Merchant UPI QR board today and keep at least 6 months of updated passbook entries.',
      mr: 'आजच तुमच्या बँकेचा मर्चंट UPI QR कोड लावा आणि ६ महिन्यांचे पासबुक अपडेट ठेवा.',
      hi: 'आज ही अपने बैंक का मर्चेंट UPI QR कोड लगाएं और 6 महीने की पासबुक अपडेट रखें।',
    },
  },
  {
    id: 'faq-udyam',
    category: 'Registration',
    question: {
      en: 'Why should I register my rural or home business on Udyam, and does it cost money?',
      mr: 'माझ्या घरगुती किंवा ग्रामीण व्यवसायाची "उद्यम नोंदणी" (Udyam Registration) का करावी? त्यासाठी किती खर्च येतो?',
      hi: 'मुझे अपने घरेलू या ग्रामीण व्यवसाय का "उद्यम पंजीकरण" (Udyam Registration) क्यों कराना चाहिए और इसका शुल्क क्या है?',
    },
    whatItMeans: {
      en: 'Udyam Registration is the official Government of India identity certificate for Micro, Small, and Medium Enterprises. On the official government portal, it is 100% FREE and requires only your Aadhaar and PAN number—no complex paperwork.',
      mr: 'उद्यम नोंदणी हे लहान आणि घरगुती व्यवसायांसाठी शासनाचे अधिकृत ओळखपत्र आहे. अधिकृत सरकारी वेबसाईटवर ही नोंदणी १००% मोफत आहे आणि त्यासाठी फक्त आधार व पॅन कार्ड लागते.',
      hi: 'उद्यम पंजीकरण सूक्ष्म और लघु व्यवसायों के लिए सरकार का आधिकारिक पहचान पत्र है। आधिकारिक पोर्टल पर यह 100% निःशुल्क है और इसके लिए केवल आधार व पैन कार्ड लगता है।',
    },
    example: {
      en: 'With an Udyam Certificate, a home spice maker in Satara qualifies for priority sector bank loans, CMEGP/PMFME subsidies, and current account opening.',
      mr: 'उद्यम प्रमाणपत्र असल्यामुळे साताऱ्यातील एका घरगुती मसाला व्यावसायिकाला बँकेत करंट खाते उघडणे आणि शासकीय अनुदान योजनांचा लाभ घेणे सोपे झाले.',
      hi: 'उद्यम प्रमाणपत्र होने से सातारा के एक घरेलू मसाला उद्यमी को बैंक ऋण और सरकारी सब्सिडी योजनाओं का लाभ आसानी से मिला।',
    },
    nextAction: {
      en: 'Keep your Aadhaar-linked mobile number ready and complete Udyam Registration online or at your village CSC.',
      mr: 'आधारशी जोडलेला मोबाईल सोबत ठेवून स्वतः किंवा गावातील CSC केंद्रातून उद्यम नोंदणी पूर्ण करा.',
      hi: 'आधार से जुड़ा मोबाइल साथ रखकर स्वयं या गांव के CSC केंद्र से उद्यम पंजीकरण पूरा करें।',
    },
  },
  {
    id: 'faq-catalogue',
    category: 'Digital Tools',
    question: {
      en: 'What is a Digital Product Catalogue and how is it better than sending normal WhatsApp photos?',
      mr: 'डिजिटल कॅटलॉग म्हणजे नेमके काय? साध्या व्हॉट्सॲप फोटोपेक्षा तो कसा चांगला आहे?',
      hi: 'डिजिटल प्रोडक्ट कैटलॉग क्या है और यह सामान्य व्हाट्सएप फोटो भेजने से बेहतर कैसे है?',
    },
    whatItMeans: {
      en: 'Normal WhatsApp photos get buried in chat history and don’t show structured prices or weights. A WhatsApp Business Catalogue acts like a neat menu card inside your profile where every item has a clean photo, exact weight, price, and "Add to Cart" button.',
      mr: 'साधे फोटो चॅटमध्ये खाली जातात आणि त्यावर किंमत किंवा वजन एकत्र दिसत नाही. डिजिटल कॅटलॉग म्हणजे तुमच्या प्रोफाईलमधील एका मेनू कार्डसारखा असतो जिथे प्रत्येक वस्तूचा फोटो, वजन आणि किंमत व्यवस्थित मांडलेली असते.',
      hi: 'सामान्य फोटो चैट में खो जाते हैं। डिजिटल कैटलॉग आपकी प्रोफाइल के अंदर एक साफ मेनू कार्ड की तरह काम करता है जहां हर उत्पाद का फोटो, वजन और कीमत एक साथ दिखती है।',
    },
    example: {
      en: 'Instead of sending 15 separate images to every customer, Sneha shares 1 link and receives clear orders with item quantities.',
      mr: 'प्रत्येक ग्राहकाला १५ वेगवेगळे फोटो पाठवण्याऐवजी स्नेहा फक्त १ लिंक पाठवतात आणि ग्राहक स्वतः हव्या त्या वस्तू निवडून ऑर्डर देतात.',
      hi: 'हर ग्राहक को 15 अलग-अलग फोटो भेजने के बजाय स्नेहा केवल 1 लिंक भेजती हैं और ग्राहक स्वयं सामान चुनकर ऑर्डर देते हैं।',
    },
    nextAction: {
      en: 'Open our 15-minute "WhatsApp Business Profile & Catalogue" lesson in the Learn section.',
      mr: 'आमच्या "प्रशिक्षण" विभागातील १५ मिनिटांचा "व्हॉट्सॲप बिझनेस कॅटलॉग" धडा उघडा.',
      hi: 'हमारे "सीखें" अनुभाग में 15 मिनट का "व्हाट्सएप बिजनेस कैटलॉग" पाठ खोलें।',
    },
  },
  {
    id: 'faq-documents',
    category: 'Schemes',
    question: {
      en: 'What 5 basic documents are usually required before applying for any Maharashtra government scheme?',
      mr: 'महाराष्ट्रातील कोणत्याही शासकीय व्यवसाय योजनेसाठी अर्ज करण्यापूर्वी कोणती ५ मूलभूत कागदपत्रे तयार ठेवावीत?',
      hi: 'महाराष्ट्र की किसी भी सरकारी व्यावसायिक योजना में आवेदन करने से पहले कौन से 5 मुख्य दस्तावेज तैयार रखने चाहिए?',
    },
    whatItMeans: {
      en: 'Almost 85% of rural scheme delays happen because one basic document has a spelling mismatch or missing link. Keeping 5 core documents ready saves weeks of trips to the taluka office.',
      mr: 'अनेकदा कागदपत्रांतील नावाची स्पेलिंग चूक किंवा अपूर्ण दाखल्यामुळे योजनेचा अर्ज अडकतो. ५ मुख्य कागदपत्रे आधीच तपासून ठेवल्यास तालुक्याच्या फेऱ्या वाचतात.',
      hi: 'अक्सर दस्तावेजों में नाम की त्रुटि या अधूरे प्रमाणपत्र के कारण आवेदन रुक जाता है। 5 मुख्य दस्तावेज पहले से तैयार रखने से समय की बचत होती है।',
    },
    example: {
      en: '(1) Aadhaar linked to mobile, (2) PAN Card with matching name spelling, (3) Aadhaar-seeded Bank Passbook, (4) Maharashtra Domicile/Ration Card, and (5) Machinery GST Quotation.',
      mr: '(१) मोबाईल लिंक असलेले आधार कार्ड, (२) अचूक नावाचे पॅन कार्ड, (३) बँक पासबुक, (४) रहिवासी दाखला किंवा रेशन कार्ड, आणि (५) मशिनरीचे GST कोटेशन.',
      hi: '(1) मोबाइल से जुड़ा आधार कार्ड, (2) सही नाम वाला पैन कार्ड, (3) बैंक पासबुक, (4) निवास प्रमाणपत्र/राशन कार्ड, और (5) मशीनरी का GST कोटेशन।',
    },
    nextAction: {
      en: 'Use our interactive Document Checklist on any Scheme Detail page to track your readiness.',
      mr: 'तुमची कागदपत्रे किती तयार आहेत हे तपासण्यासाठी योजना पानावरील "कागदपत्रे तपासणी यादी" वापरा.',
      hi: 'अपनी तैयारी जांचने के लिए योजना पृष्ठ पर "दस्तावेज जांच सूची" का उपयोग करें।',
    },
  },
];

export const FAQ_ITEMS = FAQ_DATA;
