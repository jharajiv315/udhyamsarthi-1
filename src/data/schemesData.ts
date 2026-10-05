import { DocumentItem, Scheme } from '../types';

export const DOCUMENTS_MASTER: Record<string, DocumentItem> = {
  aadhaar: {
    id: 'aadhaar',
    title: {
      en: 'Aadhaar Card (Linked with Active Mobile Number)',
      mr: 'आधार कार्ड (चालू मोबाईल नंबरशी जोडलेले)',
      hi: 'आधार कार्ड (सक्रिय मोबाइल नंबर से लिंक)',
    },
    whereToGet: {
      en: 'Nearest Maha e-Seva Kendra or Post Office Aadhaar Centre',
      mr: 'जवळचे महा ई-सेवा केंद्र किंवा पोस्ट ऑफिस आधार केंद्र',
      hi: 'निकटतम महा ई-सेवा केंद्र या डाकघर आधार केंद्र',
    },
  },
  pan: {
    id: 'pan',
    title: {
      en: 'PAN Card of Applicant / Proprietor',
      mr: 'अर्जदाराचे पॅन कार्ड (PAN Card)',
      hi: 'आवेदक का पैन कार्ड (PAN Card)',
    },
    whereToGet: {
      en: 'NSDL / UTI Portal or CSC Digital Seva Kendra',
      mr: 'डिजिटल सेवा केंद्र (CSC) किंवा ऑनलाइन पॅन सेवा',
      hi: 'डिजिटल सेवा केंद्र (CSC) या ऑनलाइन पैन पोर्टल',
    },
  },
  bank_passbook: {
    id: 'bank_passbook',
    title: {
      en: 'Bank Passbook First Page / Cancelled Cheque (Aadhaar Seeded)',
      mr: 'बँक पासबुकचे पहिले पान (आधार लिंक असलेले खाते)',
      hi: 'बैंक पासबुक का पहला पन्ना (आधार से जुड़ा खाता)',
    },
    whereToGet: {
      en: 'Your local bank branch or District Co-operative Bank',
      mr: 'तुमची स्थानिक बँक शाखा',
      hi: 'आपकी स्थानीय बैंक शाखा',
    },
  },
  udyam_reg: {
    id: 'udyam_reg',
    title: {
      en: 'Udyam Registration Certificate (Free MSME Registration)',
      mr: 'उद्यम नोंदणी प्रमाणपत्र (मोफत Udyam Registration)',
      hi: 'उद्यम पंजीकरण प्रमाणपत्र (निःशुल्क Udyam Registration)',
    },
    whereToGet: {
      en: 'Official Udyam Portal or District Industries Centre (DIC)',
      mr: 'जिल्हा उद्योग केंद्र (DIC) किंवा महा ई-सेवा केंद्र',
      hi: 'जिला उद्योग केंद्र (DIC) या महा ई-सेवा केंद्र',
    },
  },
  domicile: {
    id: 'domicile',
    title: {
      en: 'Maharashtra Domicile Certificate / Birth Proof / Ration Card',
      mr: 'महाराष्ट्र अधिवास प्रमाणपत्र (Domicile) किंवा रेशन कार्ड',
      hi: 'महाराष्ट्र निवास प्रमाणपत्र (Domicile) या राशन कार्ड',
    },
    whereToGet: {
      en: 'Tehsildar Office via Aaple Sarkar Seva Kendra',
      mr: 'तहसील कार्यालय / आपले सरकार सेवा केंद्र',
      hi: 'तहसील कार्यालय / आपले सरकार सेवा केंद्र',
    },
  },
  quotation: {
    id: 'quotation',
    title: {
      en: 'Machinery / Equipment Quotation & Basic Project Report (DPR)',
      mr: 'यंत्रसामग्रीचे कोटेशन आणि साधा प्रकल्प अहवाल (Project Report)',
      hi: 'मशीनरी कोटेशन और संक्षिप्त प्रोजेक्ट रिपोर्ट (DPR)',
    },
    whereToGet: {
      en: 'Authorized machinery vendor + DIC sample template',
      mr: 'यंत्रसामग्री विक्रेता आणि जिल्हा उद्योग केंद्राचा नमुना',
      hi: 'मशीनरी विक्रेता और जिला उद्योग केंद्र का प्रारूप',
    },
  },
  address_proof: {
    id: 'address_proof',
    title: {
      en: 'Business Place Proof (Electricity Bill / Gram Panchayat NOC / Rent Agreement)',
      mr: 'व्यवसाय जागेचा पुरावा (लाईट बिल / ग्रामपंचायत ना-हरकत प्रमाणपत्र)',
      hi: 'व्यवसाय स्थल का प्रमाण (बिजली बिल / ग्राम पंचायत NOC)',
    },
    whereToGet: {
      en: 'Gram Panchayat Office or MSEDCL Electricity Bill',
      mr: 'ग्रामपंचायत कार्यालय किंवा महावितरण वीज बिल',
      hi: 'ग्राम पंचायत कार्यालय या महावितरण बिजली बिल',
    },
  },
  education_cert: {
    id: 'education_cert',
    title: {
      en: 'Educational Qualification Certificate (7th / 8th / 10th Pass Marksheet)',
      mr: 'शैक्षणिक पात्रता दाखला (७ वी / ८ वी / १० वी गुणपत्रिका किंवा शाळा सोडल्याचा दाखला)',
      hi: 'शैक्षणिक योग्यता प्रमाणपत्र (7वीं / 8वीं / 10वीं अंकतालिका)',
    },
    whereToGet: {
      en: 'School / College Leaving Certificate',
      mr: 'शाळा सोडल्याचा दाखला (LC) किंवा बोर्ड प्रमाणपत्र',
      hi: 'स्कूल छोड़ने का प्रमाणपत्र (LC) या बोर्ड मार्कशीट',
    },
  },
};

export const SCHEMES_DATA: Scheme[] = [
  {
    id: 'pmfme-maharashtra',
    code: 'SCHEME-MH-01',
    title: {
      en: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
      mr: 'प्रधानमंत्री सूक्ष्म अन्नप्रक्रिया उद्योग योजना (PMFME)',
      hi: 'प्रधानमंत्री सूक्ष्म खाद्य प्रसंस्करण उद्यम योजना (PMFME)',
    },
    authority: {
      en: 'Department of Agriculture, Govt. of Maharashtra & MoFPI (Illustrative Prototype Info)',
      mr: 'कृषी विभाग, महाराष्ट्र शासन आणि अन्नप्रक्रिया मंत्रालय (प्रोटोटाइप माहिती)',
      hi: 'कृषि विभाग, महाराष्ट्र शासन एवं खाद्य प्रसंस्करण मंत्रालय (प्रोटोटाइप जानकारी)',
    },
    categories: ['Food Processing', 'Agriculture', 'Dairy'],
    needs: ['Funding', 'Machinery', 'Training', 'Women entrepreneurship'],
    districts: ['All', 'Nashik', 'Satara', 'Kolhapur', 'Solapur', 'Pune', 'Ahmednagar', 'Nagpur', 'Ratnagiri', 'Amravati', 'Chhatrapati Sambhajinagar'],
    benefitSummary: {
      en: 'Up to 35% credit-linked capital subsidy (up to ₹10 Lakh) for upgrading or setting up small food units.',
      mr: 'अन्नप्रक्रिया व्यवसायाच्या यंत्रसामग्री आणि विस्तारासाठी ३५% पर्यंत (कमाल १० लाख रुपये) भांडवली अनुदान.',
      hi: 'खाद्य प्रसंस्करण इकाई की मशीनरी और विस्तार के लिए 35% तक (अधिकतम ₹10 लाख) पूंजीगत सब्सिडी।',
    },
    maxSubsidy: '35% · Max ₹10,00,000',
    atAGlance: {
      whatDoesThisMean: {
        en: 'If you make homemade food products, spices, pickles, millets, jaggery, onion dehydration, or dairy items, this program helps you buy commercial machines and get FSSAI packaging support with a bank loan plus a 35% government grant.',
        mr: 'जर तुम्ही मसाले, लोणची, पापड, कांदा प्रक्रिया, गूळ, बेकरी किंवा दुग्धजन्य पदार्थ बनवत असाल, तर नवीन मशिनरी घेण्यासाठी बँक कर्जासोबत शासनाकडून ३५% अनुदान मिळू शकते.',
        hi: 'यदि आप मसाले, अचार, पापड़, प्याज प्रसंस्करण, गुड़ या डेयरी उत्पाद बनाते हैं, तो नई मशीनरी खरीदने के लिए बैंक ऋण के साथ 35% सरकारी अनुदान मिल सकता है।',
      },
      example: {
        en: 'Asha Kulkarni in Nashik wants to buy an automatic spice grinding and packing machine costing ₹3,00,000. She puts ₹30,000 (10%) of her own savings, gets a bank loan for the rest, and receives ₹1,05,000 (35%) subsidy credited to reduce her loan burden.',
        mr: 'नाशिकच्या आशा कुलकर्णी यांना ३,००,००० रुपयांचे मसाला कांडप आणि पॅकिंग मशीन घ्यायचे आहे. त्या स्वतःचे ३०,००० रुपये (१०%) गुंतवतात, उर्वरित रकमेचे बँक कर्ज मिळते आणि त्यापैकी १,०५,००० रुपये (३५%) शासकीय अनुदान मिळते.',
        hi: 'नासिक की आशा कुलकर्णी ₹3,00,000 की मसाला पिसाई और पैकिंग मशीन खरीदना चाहती हैं। वे स्वयं ₹30,000 (10%) लगाती हैं, शेष बैंक ऋण मिलता है जिसमें ₹1,05,000 (35%) सरकारी सब्सिडी मिलती है।',
      },
      nextAction: {
        en: 'Prepare a machine price quotation and contact your Taluka Agriculture Officer or District Resource Person (DRP) for free DPR preparation.',
        mr: 'मशिनरीचे कोटेशन घ्या आणि मोफत प्रकल्प अहवाल (DPR) बनवण्यासाठी तालुका कृषी अधिकारी किंवा जिल्हा संसाधन व्यक्तीशी (DRP) संपर्क साधा.',
        hi: 'मशीनरी का कोटेशन लें और निःशुल्क प्रोजेक्ट रिपोर्ट (DPR) बनवाने के लिए तालुका कृषि अधिकारी या जिला संसाधन व्यक्ति (DRP) से मिलें।',
      },
    },
    whoCanBenefit: [
      {
        en: 'Individual rural entrepreneurs, proprietors, Self Help Groups (SHGs), and Farmer Producer Companies (FPOs).',
        mr: 'वैयक्तिक ग्रामीण उद्योजक, घरगुती अन्नप्रक्रिया व्यावसायिक, महिला बचत गट (SHG) आणि शेतकरी उत्पादक कंपन्या.',
        hi: 'व्यक्तिगत ग्रामीण उद्यमी, घरेलू खाद्य उत्पादक, महिला स्वयं सहायता समूह (SHG) और किसान उत्पादक संगठन।',
      },
      {
        en: 'Applicant must be above 18 years of age; no minimum formal degree is mandatory for micro food units.',
        mr: 'अर्जदाराचे वय १८ वर्षांपेक्षा जास्त असावे. उच्च शिक्षणाची अट नाही.',
        hi: 'आवेदक की आयु 18 वर्ष से अधिक होनी चाहिए; उच्च शिक्षा की बाध्यता नहीं है।',
      },
      {
        en: 'Must contribute at least 10% of the total project cost as own margin money.',
        mr: 'एकूण प्रकल्प खर्चाच्या किमान १०% रक्कम स्वतः गुंतवण्याची तयारी असावी.',
        hi: 'कुल परियोजना लागत का कम से कम 10% स्वयं का अंशदान होना आवश्यक है।',
      },
    ],
    supportAvailable: [
      {
        en: '35% Credit-Linked Capital Subsidy on eligible project cost (up to ₹10.00 Lakh per unit).',
        mr: 'पात्र प्रकल्प खर्चावर ३५% कर्जाशी निगडित भांडवली अनुदान (प्रती उद्योग कमाल १० लाख रुपये).',
        hi: 'पात्र परियोजना लागत पर 35% ऋण-आधारित पूंजीगत सब्सिडी (अधिकतम ₹10 लाख प्रति इकाई)।',
      },
      {
        en: '₹40,000 seed capital assistance per member for rural Self Help Groups (SHGs) working in food processing.',
        mr: 'महिला बचत गटातील सदस्यांना खेळत्या भांडवलासाठी प्रती सदस्य ४०,००० रुपयांपर्यंत प्रारंभिक मदत.',
        hi: 'खाद्य प्रसंस्करण से जुड़े स्वयं सहायता समूह (SHG) के सदस्यों को ₹40,000 प्रति सदस्य सीड कैपिटल सहायता।',
      },
      {
        en: 'Free handholding support from a District Resource Person (DRP) for bank DPR, FSSAI license, and Udyam registration.',
        mr: 'बँक प्रस्ताव (DPR), FSSAI अन्न सुरक्षा परवाना आणि उद्यम नोंदणीसाठी जिल्हा प्रतिनिधींकडून मोफत मार्गदर्शन.',
        hi: 'बैंक DPR, FSSAI लाइसेंस और उद्यम पंजीकरण के लिए जिला संसाधन व्यक्ति (DRP) से निःशुल्क सहायता।',
      },
    ],
    documentsRequired: ['aadhaar', 'pan', 'bank_passbook', 'address_proof', 'quotation'],
    importantNotes: [
      {
        en: 'Do NOT purchase machinery in cash before bank loan sanction; subsidy applies only to bank-financed equipment.',
        mr: 'बँकेचे कर्ज मंजूर होण्यापूर्वी रोखीने मशीन खरेदी करू नका; केवळ बँक कर्जाद्वारे घेतलेल्या यंत्रसामग्रीवरच अनुदान मिळते.',
        hi: 'बैंक ऋण स्वीकृत होने से पहले नकद में मशीन न खरीदें; सब्सिडी केवल बैंक द्वारा वित्तपोषित उपकरणों पर लागू होती है।',
      },
      {
        en: 'District Resource Persons (DRPs) are paid by the government—do not pay middlemen or private agents for filing the application.',
        mr: 'जिल्हा संसाधन व्यक्तींना (DRP) शासनाकडून मानधन मिळते—अर्ज भरण्यासाठी कोणत्याही एजंटला पैसे देऊ नका.',
        hi: 'जिला संसाधन व्यक्तियों (DRP) को सरकार द्वारा भुगतान किया जाता है—आवेदन के लिए किसी दलाल को पैसे न दें।',
      },
    ],
    helpOffice: {
      name: {
        en: 'Taluka Agriculture Office / District Superintendent Agriculture Officer (DSAO)',
        mr: 'तालुका कृषी अधिकारी कार्यालय / जिल्हा अधीक्षक कृषी अधिकारी कार्यालय',
        hi: 'तालुका कृषि अधिकारी कार्यालय / जिला अधीक्षक कृषि अधिकारी कार्यालय',
      },
      phone: '0253-2351039 (Sample Helpline)',
      portalName: 'Official PMFME Portal / Krishi Maharashtra (Verify at local office)',
    },
    audioScript: {
      en: 'Under the PMFME Food Processing Scheme, rural entrepreneurs in Maharashtra making spices, pickles, jaggery, or packaged foods can receive a 35 percent subsidy up to 10 lakh rupees on a bank loan for machinery. You only need 10 percent own contribution, Aadhaar, PAN, bank passbook, place proof, and a machine quotation.',
      mr: 'नमस्कार! प्रधानमंत्री सूक्ष्म अन्नप्रक्रिया योजनेअंतर्गत, जर तुम्ही मसाले, लोणची, पापड, गूळ किंवा इतर अन्नपदार्थ बनवत असाल, तर नवीन मशिनरी घेण्यासाठी ३५ टक्के म्हणजेच १० लाख रुपयांपर्यंत अनुदान मिळू शकते. यासाठी आधार कार्ड, बँक पासबुक, जागेचा पुरावा आणि मशीनचे कोटेशन घेऊन तुमच्या तालुका कृषी कार्यालयाशी संपर्क साधा.',
      hi: 'नमस्कार! पीएम सूक्ष्म खाद्य प्रसंस्करण योजना के तहत, मसाले, अचार, गुड़ या अन्य खाद्य उत्पाद बनाने वाले ग्रामीण उद्यमियों को मशीनरी खरीदने पर 35 प्रतिशत यानी 10 लाख रुपये तक की सब्सिडी मिल सकती है। इसके लिए आधार कार्ड, बैंक पासबुक और मशीन कोटेशन के साथ अपने तालुका कृषि कार्यालय से संपर्क करें।',
    },
  },
  {
    id: 'cmegp-maharashtra',
    code: 'SCHEME-MH-02',
    title: {
      en: 'Chief Minister Employment Generation Programme (CMEGP Maharashtra)',
      mr: 'मुख्यमंत्री रोजगार निर्मिती कार्यक्रम (CMEGP महाराष्ट्र)',
      hi: 'मुख्यमंत्री रोजगार सृजन कार्यक्रम (CMEGP महाराष्ट्र)',
    },
    authority: {
      en: 'Directorate of Industries, Govt. of Maharashtra & KVIB (Illustrative Prototype Info)',
      mr: 'उद्योग संचालनालय, महाराष्ट्र शासन आणि खादी ग्रामोद्योग मंडळ (प्रोटोटाइप माहिती)',
      hi: 'उद्योग निदेशालय, महाराष्ट्र शासन एवं खादी ग्रामोद्योग बोर्ड (प्रोटोटाइप जानकारी)',
    },
    categories: ['Manufacturing', 'Food Processing', 'Rural Services', 'Handicrafts', 'Dairy', 'Retail', 'Other'],
    needs: ['Funding', 'Business setup', 'Machinery', 'Women entrepreneurship'],
    districts: ['All', 'Nashik', 'Satara', 'Kolhapur', 'Solapur', 'Pune', 'Ahmednagar', 'Thane', 'Mumbai', 'Nagpur', 'Ratnagiri', 'Amravati'],
    benefitSummary: {
      en: '25% to 35% margin money subsidy in rural Maharashtra for starting new manufacturing or service enterprises.',
      mr: 'ग्रामीण भागात नवीन उत्पादन किंवा सेवा व्यवसाय सुरू करण्यासाठी २५% ते ३५% पर्यंत शासकीय अनुदान.',
      hi: 'ग्रामीण महाराष्ट्र में नया विनिर्माण या सेवा व्यवसाय शुरू करने के लिए 25% से 35% तक मार्जिन मनी सब्सिडी।',
    },
    maxSubsidy: '25%–35% · Project up to ₹50 Lakh',
    atAGlance: {
      whatDoesThisMean: {
        en: 'Maharashtra State’s flagship scheme for first-time entrepreneurs setting up a new workshop, agro-unit, tailoring unit, repair centre, or manufacturing unit. Rural applicants get higher subsidy rates (25% general, 35% special/women/SC/ST categories) and only contribute 5% to 10% own funds.',
        mr: 'नवीन उद्योग किंवा सेवा व्यवसाय सुरू करणाऱ्या महाराष्ट्रातील तरुण आणि महिला उद्योजकांसाठी ही प्रमुख योजना आहे. ग्रामीण भागात सामान्य गटासाठी २५% आणि महिला व राखीव प्रवर्गासाठी ३५% पर्यंत अनुदान मिळते.',
        hi: 'महाराष्ट्र में नई विनिर्माण या सेवा इकाई शुरू करने वाले उद्यमियों के लिए यह प्रमुख राज्य योजना है। ग्रामीण क्षेत्रों में 25% से 35% तक अनुदान मिलता है और केवल 5% से 10% स्वयं की पूंजी लगानी होती है।',
      },
      example: {
        en: 'Mahesh Jadhav in Satara sets up a ₹10,00,000 cold-pressed oil & agro unit. Under Rural category, up to ₹2,50,000–₹3,50,000 is covered as government margin subsidy while the remaining amount is repaid as a term loan.',
        mr: 'साताऱ्याचे महेश जाधव १० लाख रुपयांचा लाकडी घाणा तेल आणि कृषी प्रक्रिया उद्योग सुरू करतात. ग्रामीण निकषानुसार त्यांना २.५० लाख ते ३.५० लाख रुपयांपर्यंत अनुदान मिळते.',
        hi: 'सातारा के महेश जाधव ₹10,00,000 की लकड़ी घाना तेल इकाई शुरू करते हैं। ग्रामीण श्रेणी के अंतर्गत उन्हें ₹2.50 लाख से ₹3.50 लाख तक की सब्सिडी सहायता मिलती है।',
      },
      nextAction: {
        en: 'Check your Maharashtra Domicile and educational marksheet (7th/8th pass for bigger projects) and visit your District Industries Centre (DIC).',
        mr: 'तुमचा रहिवासी दाखला (Domicile) आणि शाळेचा दाखला तयार ठेवा आणि जिल्हा उद्योग केंद्रात (DIC) भेट द्या.',
        hi: 'अपना महाराष्ट्र निवास प्रमाणपत्र (Domicile) और शैक्षणिक प्रमाणपत्र तैयार रखें तथा जिला उद्योग केंद्र (DIC) से संपर्क करें।',
      },
    },
    whoCanBenefit: [
      {
        en: 'Maharashtra domicile residents aged 18 to 45 years (relaxation up to 50 years for women, SC/ST, OBC, and differently-abled).',
        mr: 'महाराष्ट्राचे रहिवासी असलेले १८ ते ४५ वयोगटातील नागरिक (महिला व विशेष प्रवर्गासाठी ५० वर्षांपर्यंत सवलत).',
        hi: 'महाराष्ट्र के निवासी जिनकी आयु 18 से 45 वर्ष के बीच है (महिलाओं और विशेष वर्ग के लिए 50 वर्ष तक छूट)।',
      },
      {
        en: 'Minimum 7th pass for projects above ₹10 Lakh and 10th pass for projects above ₹25 Lakh.',
        mr: '१० लाखांवरील प्रकल्पासाठी किमान ७ वी उत्तीर्ण आणि २५ लाखांवरील प्रकल्पासाठी १० वी उत्तीर्ण असणे आवश्यक.',
        hi: '₹10 लाख से अधिक की परियोजना के लिए 7वीं पास और ₹25 लाख से अधिक के लिए 10वीं पास होना आवश्यक है।',
      },
      {
        en: 'Only applicable for NEW business units (not for paying off old loans).',
        mr: 'ही योजना केवळ नवीन सुरू होणाऱ्या व्यवसायासाठी लागू आहे.',
        hi: 'यह योजना केवल नई व्यावसायिक इकाइयों की स्थापना के लिए मान्य है।',
      },
    ],
    supportAvailable: [
      {
        en: 'Up to 35% subsidy in rural areas for Women / SC / ST / Special categories (25% for General category in rural areas).',
        mr: 'ग्रामीण भागात महिला व विशेष प्रवर्गासाठी ३५% अनुदान (खुल्या प्रवर्गासाठी ग्रामीण भागात २५% अनुदान).',
        hi: 'ग्रामीण क्षेत्रों में महिलाओं और विशेष वर्ग के लिए 35% सब्सिडी (सामान्य वर्ग के लिए ग्रामीण क्षेत्र में 25%)।',
      },
      {
        en: 'Project limit up to ₹50 Lakh for manufacturing units and up to ₹20 Lakh for service/agro-allied units.',
        mr: 'उत्पादन उद्योगासाठी ५० लाख रुपयांपर्यंत आणि सेवा उद्योगासाठी २० लाख रुपयांपर्यंत प्रकल्प मर्यादा.',
        hi: 'विनिर्माण इकाई के लिए ₹50 लाख तक और सेवा इकाई के लिए ₹20 लाख तक की परियोजना सीमा।',
      },
      {
        en: 'Mandatory Entrepreneurship Development Programme (EDP) training provided before disbursement.',
        mr: 'कर्ज वितरणापूर्वी उद्योजकता विकास प्रशिक्षण (EDP) दिले जाते.',
        hi: 'ऋण वितरण से पूर्व उद्यमिता विकास प्रशिक्षण (EDP) प्रदान किया जाता है।',
      },
    ],
    documentsRequired: ['aadhaar', 'pan', 'domicile', 'education_cert', 'bank_passbook', 'quotation'],
    importantNotes: [
      {
        en: 'At least 30% of the total CMEGP beneficiaries in Maharashtra are reserved for women entrepreneurs.',
        mr: 'या योजनेत किमान ३०% जागा महिला उद्योजकांसाठी राखीव असतात.',
        hi: 'इस योजना में कम से कम 30% सीटें महिला उद्यमियों के लिए आरक्षित हैं।',
      },
      {
        en: 'Ensure your CIBIL / credit history has no defaulted loans before submitting to the bank.',
        mr: 'बँकेत अर्ज करण्यापूर्वी तुमचे कोणतेही जुने कर्ज थकीत नसल्याची खात्री करा.',
        hi: 'बैंक में आवेदन करने से पहले सुनिश्चित करें कि आपका कोई पुराना ऋण बकाया या डिफ़ॉल्ट न हो।',
      },
    ],
    helpOffice: {
      name: {
        en: 'District Industries Centre (DIC) / District KVIB Office',
        mr: 'जिल्हा उद्योग केंद्र (DIC) / जिल्हा खादी व ग्रामोद्योग कार्यालय',
        hi: 'जिला उद्योग केंद्र (DIC) / जिला खादी ग्रामोद्योग कार्यालय',
      },
      phone: '022-22028616 (Sample DIC Desk)',
      portalName: 'MahaCMEGP Official Portal (Verify at local DIC)',
    },
    audioScript: {
      en: 'The Chief Minister Employment Generation Programme, or CMEGP Maharashtra, supports new manufacturing and service businesses in rural areas with 25 to 35 percent subsidy. If you live in Maharashtra and want to start a workshop, food unit, or rural service centre, prepare your Domicile certificate, school marksheet, Aadhaar, and project quotation.',
      mr: 'मुख्यमंत्री रोजगार निर्मिती कार्यक्रम म्हणजेच CMEGP अंतर्गत, ग्रामीण भागात नवीन व्यवसाय सुरू करण्यासाठी २५ ते ३५ टक्के अनुदान मिळते. महिला उद्योजकांना केवळ ५ टक्के स्वतःचे भांडवल गुंतवावे लागते. यासाठी अधिवास प्रमाणपत्र, शाळेचा दाखला आणि आधार कार्ड घेऊन जिल्हा उद्योग केंद्रात संपर्क साधा.',
      hi: 'मुख्यमंत्री रोजगार सृजन कार्यक्रम यानी CMEGP के अंतर्गत, ग्रामीण महाराष्ट्र में नया उद्योग या सेवा केंद्र शुरू करने पर 25 से 35 प्रतिशत तक अनुदान मिलता है। इसके लिए निवास प्रमाणपत्र, स्कूल प्रमाणपत्र और आधार कार्ड के साथ जिला उद्योग केंद्र से संपर्क करें।',
    },
  },
  {
    id: 'pm-vishwakarma',
    code: 'SCHEME-MH-03',
    title: {
      en: 'PM Vishwakarma Artisan & Traditional Craft Support Scheme',
      mr: 'पीएम विश्वकर्मा कारागीर आणि पारंपरिक व्यवसाय सन्मान योजना',
      hi: 'पीएम विश्वकर्मा कारीगर एवं पारंपरिक शिल्प सहायता योजना',
    },
    authority: {
      en: 'Ministry of Micro, Small & Medium Enterprises (Illustrative Prototype Info)',
      mr: 'सूक्ष्म, लघु आणि मध्यम उद्योग मंत्रालय (प्रोटोटाइप माहिती)',
      hi: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय (प्रोटोटाइप जानकारी)',
    },
    categories: ['Handicrafts', 'Rural Services', 'Manufacturing', 'Other'],
    needs: ['Training', 'Machinery', 'Funding', 'Skill development', 'Digital support'],
    districts: ['All', 'Kolhapur', 'Solapur', 'Satara', 'Nashik', 'Pune', 'Ratnagiri', 'Nagpur', 'Ahmednagar'],
    benefitSummary: {
      en: '₹15,000 toolkit e-voucher + 5-day skill training with stipend + collateral-free loan at 5% interest.',
      mr: '१५,००० रुपयांचे आधुनिक टूलकिट व्हाउचर + मानधनासह कौशल्य प्रशिक्षण + ५% व्याजदराने विनातारण कर्ज.',
      hi: '₹15,000 का आधुनिक टूलकिट वाउचर + स्टाइपेंड के साथ प्रशिक्षण + 5% ब्याज पर बिना गारंटी ऋण।',
    },
    maxSubsidy: '₹15,000 Toolkit + ₹3 Lakh @ 5% Interest',
    atAGlance: {
      whatDoesThisMean: {
        en: 'Designed for 18 traditional rural trades including tailors, cobblers/leather artisans (like Kolhapuri craft), carpenters, blacksmiths, potters, basket weavers, and masons. You receive an Artisan ID card, paid training, ₹15,000 for modern tools, and low-interest working capital.',
        mr: 'शिंपीकाम, चर्मकार (कोल्हापुरी चप्पल कारागीर), सुतार, लोहार, कुंभार, सोनार, गवंडी अशा १८ पारंपरिक व्यवसायांतील कारागिरांना ओळखपत्र, आधुनिक अवजारांसाठी १५,००० रुपये आणि ५% व्याजाने कर्ज मिळते.',
        hi: 'दर्जी, चर्मकार, बढ़ई, लोहार, कुम्हार, राजमिस्त्री जैसे 18 पारंपरिक ग्रामीण कारीगरों को पहचान पत्र, आधुनिक औजारों के लिए ₹15,000 और 5% ब्याज पर ऋण मिलता है।',
      },
      example: {
        en: 'Sneha More in Kolhapur crafts handmade leather & textile goods. She completes the 5-day skill training (receiving ₹500/day stipend), gets a ₹15,000 e-voucher for an electric stitching machine, and accesses a ₹1,00,000 first-tranche loan at 5% interest.',
        mr: 'कोल्हापूरच्या स्नेहा मोरे हस्तकला वस्तू आणि शिलाई काम करतात. त्यांना ५ दिवसांच्या प्रशिक्षणा दरम्यान रोज ५०० रुपये भत्ता, आधुनिक शिलाई मशीनसाठी १५,००० रुपयांचे ई-व्हाउचर आणि १ लाख रुपयांचे सोपे कर्ज मिळते.',
        hi: 'कोल्हापुर की स्नेहा मोरे हस्तशिल्प और सिलाई का कार्य करती हैं। उन्हें 5 दिन के प्रशिक्षण भत्ते के साथ आधुनिक मशीन के लिए ₹15,000 का वाउचर और ₹1,00,000 का प्रथम चरण ऋण मिलता है।',
      },
      nextAction: {
        en: 'Visit your nearest Common Service Centre (CSC) with Aadhaar, Ration Card, and Aadhaar-linked Bank Passbook for biometric registration.',
        mr: 'तुमचे आधार कार्ड, रेशन कार्ड आणि बँक पासबुक घेऊन गावातील सीएससी (CSC) किंवा आपले सरकार सेवा केंद्रात बायोमेट्रिक नोंदणी करा.',
        hi: 'अपना आधार कार्ड, राशन कार्ड और बैंक पासबुक लेकर नजदीकी सीएससी (CSC) केंद्र पर बायोमेट्रिक पंजीकरण करवाएं।',
      },
    },
    whoCanBenefit: [
      {
        en: 'Traditional artisans and craftspeople working with hands and tools in 18 specified rural trades.',
        mr: '१८ पारंपरिक व्यवसायांमध्ये स्वतःच्या हाताने आणि अवजारांनी काम करणारे कारागीर.',
        hi: '18 सूचीबद्ध पारंपरिक व्यवसायों में हाथ और औजारों से काम करने वाले ग्रामीण कारीगर।',
      },
      {
        en: 'Minimum age 18 years; one member per family (husband, wife, and unmarried children) can register.',
        mr: 'किमान वय १८ वर्षे; एका कुटुंबातून (रेशन कार्डनुसार) एका व्यक्तीला लाभ घेता येतो.',
        hi: 'न्यूनतम आयु 18 वर्ष; एक परिवार (राशन कार्ड) से एक सदस्य पात्र है।',
      },
    ],
    supportAvailable: [
      {
        en: '₹15,000 Toolkit Incentive via e-RUPI voucher to buy modern certified tools.',
        mr: 'आधुनिक प्रमाणित अवजारे खरेदी करण्यासाठी १५,००० रुपयांचे ई-व्हाउचर.',
        hi: 'आधुनिक प्रमाणित औजार खरीदने के लिए ₹15,000 का ई-वाउचर।',
      },
      {
        en: 'Collateral-free enterprise development loan: ₹1,00,000 (First Tranche) + ₹2,00,000 (Second Tranche) at concessional 5% interest.',
        mr: 'विनातारण व्यवसाय कर्ज: पहिला टप्पा १ लाख रुपये आणि दुसरा टप्पा २ लाख रुपये (फक्त ५% व्याजदराने).',
        hi: 'बिना गारंटी ऋण: प्रथम चरण ₹1,00,000 और द्वितीय चरण ₹2,00,000 (केवल 5% रियायती ब्याज दर पर)।',
      },
      {
        en: '₹1 per transaction digital incentive (up to 100 transactions/month) when accepting UPI QR payments.',
        mr: 'डिजिटल पेमेंट (UPI QR) स्वीकारल्यास दरमहा १०० व्यवहारांपर्यंत प्रोत्साहन भत्ता.',
        hi: 'डिजिटल भुगतान (UPI QR) स्वीकार करने पर प्रति माह 100 लेनदेन तक डिजिटल प्रोत्साहन।',
      },
    ],
    documentsRequired: ['aadhaar', 'bank_passbook', 'domicile'],
    importantNotes: [
      {
        en: 'Gram Panchayat Sarpanch / ULB verification is conducted online after CSC registration.',
        mr: 'सीएससी नोंदणीनंतर ग्रामपंचायत स्तरावरून ऑनलाइन पडताळणी केली जाते.',
        hi: 'सीएससी पंजीकरण के बाद ग्राम पंचायत स्तर पर ऑनलाइन सत्यापन किया जाता है।',
      },
    ],
    helpOffice: {
      name: {
        en: 'Village Common Service Centre (CSC) / Gram Panchayat Office',
        mr: 'ग्रामीण सीएससी केंद्र (CSC) / ग्रामपंचायत कार्यालय',
        hi: 'ग्रामीण सीएससी केंद्र (CSC) / ग्राम पंचायत कार्यालय',
      },
      phone: '1800-11-6446 (Sample Toll-Free)',
      portalName: 'PM Vishwakarma Portal (Verify via CSC)',
    },
    audioScript: {
      en: 'PM Vishwakarma supports rural artisans, tailors, leather workers, carpenters, and potters. You get a 15,000 rupee voucher for modern tools, paid skill training, and up to 3 lakh rupees collateral-free loan at just 5 percent interest.',
      mr: 'पीएम विश्वकर्मा योजनेद्वारे ग्रामीण भागातील कारागीर, शिंपी, चर्मकार, सुतार आणि कुंभार बांधवांना आधुनिक अवजारांसाठी १५ हजार रुपयांचे व्हाउचर, प्रशिक्षण भत्ता आणि ५ टक्के व्याजाने ३ लाख रुपयांपर्यंत कर्ज मिळते.',
      hi: 'पीएम विश्वकर्मा योजना के माध्यम से ग्रामीण कारीगरों, दर्जी, चर्मकार, बढ़ई और कुम्हारों को आधुनिक औजारों के लिए 15 हजार रुपये का वाउचर, प्रशिक्षण भत्ता और 5 प्रतिशत ब्याज पर 3 लाख रुपये तक का ऋण मिलता है।',
    },
  },
  {
    id: 'umed-maharashtra-shg',
    code: 'SCHEME-MH-04',
    title: {
      en: 'UMED — Maharashtra State Rural Livelihoods Mission (MSRLM & Nav Tejaswini)',
      mr: 'उमेद (UMED) — महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियान व नव तेजस्विनी',
      hi: 'उमेद (UMED) — महाराष्ट्र राज्य ग्रामीण आजीविका मिशन एवं नव तेजस्विनी',
    },
    authority: {
      en: 'Rural Development Department, Govt. of Maharashtra (Illustrative Prototype Info)',
      mr: 'ग्रामविकास विभाग, महाराष्ट्र शासन (प्रोटोटाइप माहिती)',
      hi: 'ग्रामीण विकास विभाग, महाराष्ट्र शासन (प्रोटोटाइप जानकारी)',
    },
    categories: ['Food Processing', 'Handicrafts', 'Agriculture', 'Dairy', 'Retail', 'Other'],
    needs: ['Women entrepreneurship', 'Market access', 'Funding', 'Training', 'Digital support'],
    districts: ['All', 'Nashik', 'Satara', 'Kolhapur', 'Solapur', 'Pune', 'Ahmednagar', 'Nagpur', 'Ratnagiri', 'Amravati'],
    benefitSummary: {
      en: 'Revolving fund, 0% effective interest (Sumatibai Sukalikar व्याज परतावा) on timely SHG loans, and Mahalaxmi Saras exhibition access.',
      mr: 'महिला बचत गटांना फिरता निधी, वेळेवर कर्जफेडीवर शून्य टक्के व्याज परतावा आणि महालक्ष्मी सरस प्रदर्शनात विक्रीची संधी.',
      hi: 'महिला समूहों को रिवॉल्विंग फंड, समय पर ऋण चुकाने पर ब्याज सब्सिडी और महालक्ष्मी सरस प्रदर्शनी में बाजार पहुंच।',
    },
    maxSubsidy: 'Interest Subvention + Revolving Grant',
    atAGlance: {
      whatDoesThisMean: {
        en: 'Specifically built for rural women in Maharashtra who are part of a Self Help Group (Bachat Gat) or want to scale a home enterprise into a collective brand. Provides low-cost capital, packaging training, and direct stalls at district and state exhibitions.',
        mr: 'महाराष्ट्रातील ग्रामीण महिला आणि बचत गटांना घरगुती व्यवसाय वाढवण्यासाठी कमी व्याजात भांडवल, पॅकेजिंग प्रशिक्षण आणि जिल्हा व राज्यस्तरीय प्रदर्शनांमध्ये थेट विक्रीचे स्टॉल्स मिळवून देणारी योजना.',
        hi: 'महाराष्ट्र की ग्रामीण महिलाओं और बचत गटों को घरेलू व्यवसाय बढ़ाने के लिए सस्ता ऋण, पैकेजिंग प्रशिक्षण और जिला/राज्य प्रदर्शनियों में सीधे स्टॉल उपलब्ध कराने वाली योजना।',
      },
      example: {
        en: 'A women’s food group in Nashik takes a ₹3,00,000 bank linkage loan to make millet laddoos and papads. By paying EMIs on time, their interest is reimbursed under state interest subvention, and they get a stall at the district Saras exhibition.',
        mr: 'नाशिकमधील महिला गटाने नाचणी लाडू आणि पापड व्यवसायासाठी ३ लाख रुपयांचे बँक कर्ज घेतले. वेळेवर हप्ते भरल्यामुळे त्यांना व्याज परतावा मिळाला आणि जिल्हा प्रदर्शनात विक्रीसाठी स्टॉल मिळाला.',
        hi: 'नासिक के एक महिला समूह ने मिलेट लड्डू और पापड़ व्यवसाय के लिए ₹3,00,000 का बैंक ऋण लिया। समय पर किश्त चुकाने पर उन्हें ब्याज सब्सिडी मिली और जिला प्रदर्शनी में स्टॉल मिला।',
      },
      nextAction: {
        en: 'Connect with your village Krishi Sakhi / Bank Sakhi or Block Mission Management Unit (Panchayat Samiti) to register your product enterprise.',
        mr: 'तुमच्या गावातील बँक सखी / कृषी सखी किंवा पंचायत समितीतील तालुका अभियान व्यवस्थापन कक्षाशी संपर्क साधा.',
        hi: 'अपने गांव की बैंक सखी / कृषि सखी या पंचायत समिति के तालुका मिशन प्रबंधन इकाई से संपर्क करें।',
      },
    },
    whoCanBenefit: [
      {
        en: 'Rural women entrepreneurs and registered Self Help Groups (Bachat Gats) adhering to Dashasutri principles.',
        mr: 'ग्रामीण महिला उद्योजक आणि दशसूत्रीचे पालन करणारे नोंदणीकृत महिला बचत गट.',
        hi: 'ग्रामीण महिला उद्यमी और पंजीकृत महिला स्वयं सहायता समूह (बचत गट)।',
      },
    ],
    supportAvailable: [
      {
        en: 'Revolving Fund (RF) & Community Investment Fund (CIF) for starting micro enterprises.',
        mr: 'लघु उद्योग सुरू करण्यासाठी फिरता निधी (Revolving Fund) आणि समुदाय गुंतवणूक निधी.',
        hi: 'सूक्ष्म उद्यम शुरू करने के लिए रिवॉल्विंग फंड और सामुदायिक निवेश निधी।',
      },
      {
        en: 'Interest subvention on prompt repayment of bank loans up to prescribed limits.',
        mr: 'बँक कर्जाची वेळेवर परतफेड केल्यास व्याज परतावा सवलत.',
        hi: 'बैंक ऋण का समय पर भुगतान करने पर ब्याज अनुदान छूट।',
      },
      {
        en: 'Branding, FSSAI registration help, and e-commerce onboarding for rural SHG products.',
        mr: 'बचत गटाच्या उत्पादनांचे ब्रँडिंग, पॅकेजिंग आणि ऑनलाइन विक्रीसाठी विशेष मदत.',
        hi: 'बचत गट उत्पादों की ब्रांडिंग, पैकेजिंग और ऑनलाइन बिक्री के लिए विशेष मार्गदर्शन।',
      },
    ],
    documentsRequired: ['aadhaar', 'bank_passbook', 'udyam_reg', 'address_proof'],
    importantNotes: [
      {
        en: 'Keep regular weekly/monthly meeting minutes and repayment registers updated to qualify for interest subvention.',
        mr: 'व्याज परतावा मिळण्यासाठी बचत गटाचे हिशोब आणि कर्जाचे हप्ते नियमित ठेवणे आवश्यक आहे.',
        hi: 'ब्याज सब्सिडी प्राप्त करने के लिए समूह का लेखा-जोखा और किश्तों का भुगतान नियमित रखें।',
      },
    ],
    helpOffice: {
      name: {
        en: 'Panchayat Samiti — UMED Block Mission Management Unit (BMMU)',
        mr: 'पंचायत समिती — उमेद तालुका अभियान व्यवस्थापन कक्ष',
        hi: 'पंचायत समिति — उमेद तालुका मिशन प्रबंधन कक्ष',
      },
      phone: '022-27562552 (Sample MSRLM Desk)',
      portalName: 'UMED MSRLM Maharashtra (Verify at Panchayat Samiti)',
    },
    audioScript: {
      en: 'UMED Maharashtra State Rural Livelihoods Mission helps women entrepreneurs and Bachat Gats get low-interest capital, packaging training, and direct market access at Mahalaxmi Saras exhibitions.',
      mr: 'उमेद अभियानामार्फत महाराष्ट्रातील ग्रामीण महिलांना आणि बचत गटांना व्यवसायासाठी खेळते भांडवल, वेळेवर कर्जफेडीवर व्याज परतावा आणि महालक्ष्मी सरस प्रदर्शनात हक्काची बाजारपेठ मिळते.',
      hi: 'उमेद अभियान के माध्यम से महाराष्ट्र की ग्रामीण महिलाओं और बचत गटों को व्यवसाय के लिए कार्यशील पूंजी, समय पर ऋण चुकाने पर ब्याज छूट और महालक्ष्मी सरस प्रदर्शनी में बाजार मिलता है।',
    },
  },
  {
    id: 'ahidf-dairy-maharashtra',
    code: 'SCHEME-MH-05',
    title: {
      en: 'Dairy & Animal Husbandry Entrepreneurship Support (NLM / Dairy Processing)',
      mr: 'दुग्धव्यवसाय व पशुसंवर्धन उद्योजकता विकास योजना (दूध प्रक्रिया व गोठा विस्तार)',
      hi: 'डेयरी एवं पशुपालन उद्यमिता विकास योजना (दूध प्रसंस्करण एवं विस्तार)',
    },
    authority: {
      en: 'Department of Animal Husbandry & Dairy Development, Maharashtra (Illustrative Prototype Info)',
      mr: 'पशुसंवर्धन व दुग्धव्यवसाय विकास विभाग, महाराष्ट्र शासन (प्रोटोटाइप माहिती)',
      hi: 'पशुपालन एवं डेयरी विकास विभाग, महाराष्ट्र शासन (प्रोटोटाइप जानकारी)',
    },
    categories: ['Dairy', 'Agriculture', 'Food Processing'],
    needs: ['Machinery', 'Funding', 'Business setup'],
    districts: ['All', 'Solapur', 'Kolhapur', 'Satara', 'Ahmednagar', 'Pune', 'Nashik', 'Amravati'],
    benefitSummary: {
      en: 'Capital subsidy and interest subvention for bulk milk coolers, khawa/paneer making machines, and fodder units.',
      mr: 'दूध शीतकरण यंत्र (BMC), खवा/पनीर/तूप निर्मिती मशिनरी आणि चारा प्रक्रिया उद्योगासाठी भांडवली अनुदान.',
      hi: 'दूध शीतलन मशीन, खोया/पनीर/घी निर्माण उपकरण और चारा प्रसंस्करण इकाई के लिए पूंजीगत सब्सिडी।',
    },
    maxSubsidy: 'Up to 25%–35% Subsidy / 3% Interest Subvention',
    atAGlance: {
      whatDoesThisMean: {
        en: 'Instead of selling only raw milk at fluctuating rates, rural dairy owners can set up small paneer, curd, khawa, or ghee processing units and cold storage with government subsidy support.',
        mr: 'केवळ कच्चे दूध विकण्यापेक्षा पनीर, दही, ताक, खवा किंवा तूप बनवून विकल्यास जास्त नफा मिळतो. त्यासाठी लागणारी मशिनरी आणि फ्रीजर घेण्यासाठी ही योजना मदत करते.',
        hi: 'केवल कच्चा दूध बेचने के बजाय पनीर, दही, खोया या घी बनाकर बेचने से अधिक मुनाफा होता है। इसके लिए मशीनरी और कोल्ड स्टोरेज खरीदने में यह योजना सहायता करती है।',
      },
      example: {
        en: 'Vilas Shinde in Solapur sets up a small milk chilling and paneer pressing unit costing ₹4,50,000. He supplies packaged paneer to local hotels and receives capital subsidy support on the processing equipment.',
        mr: 'सोलापूरचे विलास शिंदे ४,५०,००० रुपये खर्चून छोटे दूध शीतकरण आणि पनीर निर्मिती युनिट सुरू करतात. स्थानिक हॉटेल्सना पनीर पुरवून त्यांचे उत्पन्न वाढते आणि मशिनरीवर अनुदान मिळते.',
        hi: 'सोलापुर के विलास शिंदे ₹4,50,000 की लागत से छोटी दूध चिलिंग और पनीर इकाई शुरू करते हैं। स्थानीय होटलों को पनीर बेचकर उनकी आय बढ़ती है और मशीनरी पर सब्सिडी मिलती है।',
      },
      nextAction: {
        en: 'Meet the Livestock Development Officer (LDO) at your Panchayat Samiti Veterinary Hospital with your machine quotation.',
        mr: 'पंचायत समितीच्या पशुवैद्यकीय दवाखान्यातील पशुधन विकास अधिकारी (LDO) यांची भेट घ्या.',
        hi: 'पंचायत समिति के पशु चिकित्सालय में पशुधन विकास अधिकारी (LDO) से मशीनरी कोटेशन के साथ मिलें।',
      },
    },
    whoCanBenefit: [
      {
        en: 'Dairy farmers, rural entrepreneurs, cooperative societies, and SHGs in Maharashtra.',
        mr: 'महाराष्ट्रातील दुग्ध व्यावसायिक, शेतकरी, बचत गट आणि ग्रामीण उद्योजक.',
        hi: 'महाराष्ट्र के डेयरी किसान, ग्रामीण उद्यमी और स्वयं सहायता समूह।',
      },
    ],
    supportAvailable: [
      {
        en: 'Subsidy on milk processing equipment (pasteurizer, khawa machine, cream separator, vacuum packing).',
        mr: 'दूध प्रक्रिया यंत्रसामग्रीवर (खवा मशीन, क्रीम सेपरेटर, पनीर प्रेस, व्हॅक्यूम पॅकिंग) अनुदान.',
        hi: 'दूध प्रसंस्करण उपकरणों (खोया मशीन, क्रीम सेपरेटर, पनीर प्रेस, वैक्यूम पैकिंग) पर अनुदान।',
      },
      {
        en: 'Veterinary and clean milk production training at district level.',
        mr: 'स्वच्छ दूध निर्मिती आणि दुग्धजन्य पदार्थ टिकवण्याचे तांत्रिक प्रशिक्षण.',
        hi: 'स्वच्छ दुग्ध उत्पादन और डेयरी उत्पाद प्रसंस्करण का तकनीकी प्रशिक्षण।',
      },
    ],
    documentsRequired: ['aadhaar', 'pan', 'bank_passbook', 'address_proof', 'quotation'],
    importantNotes: [
      {
        en: 'Obtain basic FSSAI registration (₹100/year fee) before selling packaged paneer, ghee, or khawa.',
        mr: 'पॅकिंग केलेले पनीर, तूप किंवा खवा विकण्यापूर्वी १०० रुपये वार्षिक शुल्काची प्राथमिक FSSAI नोंदणी नक्की करा.',
        hi: 'पैक किया हुआ पनीर, घी या खोया बेचने से पहले ₹100 वार्षिक शुल्क वाला बेसिक FSSAI पंजीकरण अवश्य कराएं।',
      },
    ],
    helpOffice: {
      name: {
        en: 'District Deputy Commissioner of Animal Husbandry / Taluka Veterinary Office',
        mr: 'जिल्हा पशुसंवर्धन उपायुक्त कार्यालय / तालुका पशुवैद्यकीय अधिकारी',
        hi: 'जिला पशुपालन उपायुक्त कार्यालय / तालुका पशु चिकित्सा अधिकारी',
      },
      phone: '1800-233-0418 (Sample Pashusavardhan Desk)',
      portalName: 'Aaple Sarkar / Mahavet Portal (Verify at local office)',
    },
    audioScript: {
      en: 'The Dairy and Animal Husbandry Entrepreneurship program helps rural milk producers buy khawa, paneer, and ghee making machines or milk coolers with capital subsidy support.',
      mr: 'दुग्धव्यवसाय उद्योजकता योजनेअंतर्गत ग्रामीण भागातील दूध उत्पादकांना खवा, पनीर, तूप बनवण्याची मशीन आणि कुलिंग युनिट घेण्यासाठी शासनाकडून अनुदान मिळते.',
      hi: 'डेयरी उद्यमिता योजना के अंतर्गत ग्रामीण दुग्ध उत्पादकों को खोया, पनीर और घी बनाने की मशीन तथा कूलिंग यूनिट खरीदने के लिए सरकारी अनुदान मिलता है।',
    },
  },
  {
    id: 'mudra-udyam-maharashtra',
    code: 'SCHEME-MH-06',
    title: {
      en: 'PM MUDRA Yojana (Shishu, Kishore & Tarun) + Free Udyam Registration',
      mr: 'प्रधानमंत्री मुद्रा योजना (शिशु, किशोर व तरुण) आणि मोफत उद्यम नोंदणी',
      hi: 'प्रधानमंत्री मुद्रा योजना (शिशु, किशोर एवं तरुण) और निःशुल्क उद्यम पंजीकरण',
    },
    authority: {
      en: 'Department of Financial Services & Nationalized/Rural Banks (Illustrative Prototype Info)',
      mr: 'राष्ट्रीयकृत व ग्रामीण बँका आणि जिल्हा अग्रणी बँक (प्रोटोटाइप माहिती)',
      hi: 'राष्ट्रीयकृत एवं ग्रामीण बैंक तथा जिला अग्रणी बैंक (प्रोटोटाइप जानकारी)',
    },
    categories: ['Retail', 'Rural Services', 'Food Processing', 'Handicrafts', 'Manufacturing', 'Dairy', 'Other'],
    needs: ['Funding', 'Business setup', 'Digital support', 'Machinery'],
    districts: ['All', 'Nashik', 'Satara', 'Kolhapur', 'Solapur', 'Pune', 'Ahmednagar', 'Thane', 'Mumbai', 'Nagpur'],
    benefitSummary: {
      en: 'Collateral-free working capital and term loans from ₹50,000 (Shishu) up to ₹10–20 Lakh for micro shops & units.',
      mr: 'किराणा दुकान, सेवा केंद्र किंवा लघु उद्योगासाठी ५०,००० रुपयांपासून १० लाख रुपयांपर्यंत विनातारण व्यवसाय कर्ज.',
      hi: 'किराना दुकान, सेवा केंद्र या लघु उद्यम के लिए ₹50,000 से ₹10 लाख तक बिना गारंटी व्यावसायिक ऋण।',
    },
    maxSubsidy: 'Collateral-Free Loan · ₹50K to ₹10L+',
    atAGlance: {
      whatDoesThisMean: {
        en: 'When you need quick working capital to buy stock for your shop, upgrade a repair shop, or buy a small machine without pledging land or house papers, banks provide collateral-free MUDRA loans backed by CGTMSE credit guarantee.',
        mr: 'जेव्हा तुम्हाला दुकानासाठी माल भरायला, छोटा व्यवसाय वाढवायला किंवा मशीन घ्यायला जमीन किंवा घर गहाण न ठेवता कर्जाची गरज असते, तेव्हा बँका मुद्रा योजनेतून विनातारण कर्ज देतात.',
        hi: 'जब आपको अपनी दुकान में माल भरने, सेवा केंद्र बढ़ाने या छोटी मशीन खरीदने के लिए जमीन या मकान गिरवी रखे बिना ऋण चाहिए, तब बैंक मुद्रा योजना के तहत बिना गारंटी ऋण देते हैं।',
      },
      example: {
        en: 'A rural kirana and grain merchant in Ahmednagar gets a ₹1,50,000 Kishore MUDRA loan using his Udyam Registration Certificate and 6 months of UPI digital payment transaction history as business proof.',
        mr: 'अहमदनगरमधील एका किराणा व्यावसायिकाने उद्यम नोंदणी प्रमाणपत्र आणि मागील ६ महिन्यांचे UPI डिजिटल पेमेंट स्टेटमेंट दाखवून १,५०,००० रुपयांचे किशोर मुद्रा कर्ज मिळवले.',
        hi: 'अहमदनगर के एक किराना व्यवसायी ने अपने उद्यम प्रमाणपत्र और पिछले 6 महीने के UPI डिजिटल लेनदेन के आधार पर ₹1,50,000 का किशोर मुद्रा ऋण प्राप्त किया।',
      },
      nextAction: {
        en: 'First complete your free Udyam Registration online, accept UPI payments into your bank account to build a 3–6 month cashflow record, and apply via JanSamarth or your bank branch.',
        mr: 'सर्वप्रथम मोफत उद्यम नोंदणी (Udyam Registration) करून घ्या, व्यवसायाचे पैसे UPI ने बँक खात्यात घ्या जेणेकरून बँक स्टेटमेंट तयार होईल, आणि तुमच्या बँक शाखेत अर्ज करा.',
        hi: 'सबसे पहले निःशुल्क उद्यम पंजीकरण (Udyam Registration) कराएं, UPI से बैंक खाते में लेनदेन करें ताकि मजबूत बैंक स्टेटमेंट बने, और अपनी बैंक शाखा में आवेदन करें।',
      },
    },
    whoCanBenefit: [
      {
        en: 'Any non-corporate small business, shopkeeper, trader, artisan, food processor, or service provider.',
        mr: 'कोणताही छोटा दुकानदार, कारागीर, सेवा पुरवठादार, अन्नप्रक्रिया व्यावसायिक किंवा लघु उद्योजक.',
        hi: 'कोई भी छोटा दुकानदार, कारीगर, सेवा प्रदाता, खाद्य उत्पादक या लघु व्यवसायी।',
      },
    ],
    supportAvailable: [
      {
        en: 'Shishu Category: Loans up to ₹50,000 with minimal documentation for micro startups.',
        mr: 'शिशु गट: नवीन किंवा छोट्या व्यवसायासाठी ५०,००० रुपयांपर्यंत तातडीचे कर्ज.',
        hi: 'शिशु श्रेणी: सूक्ष्म व्यवसाय के लिए ₹50,000 तक का सरल ऋण।',
      },
      {
        en: 'Kishore Category: Loans from ₹50,000 to ₹5,00,000 for expanding existing rural businesses.',
        mr: 'किशोर गट: चालू व्यवसाय वाढवण्यासाठी ५०,००० ते ५ लाख रुपयांपर्यंत कर्ज.',
        hi: 'किशोर श्रेणी: व्यवसाय विस्तार के लिए ₹50,000 से ₹5,00,000 तक का ऋण।',
      },
    ],
    documentsRequired: ['aadhaar', 'pan', 'udyam_reg', 'bank_passbook', 'address_proof'],
    importantNotes: [
      {
        en: 'Tip: Banks trust digital transaction trails! Using a Business UPI QR code for 3 to 6 months makes loan approval significantly easier.',
        mr: 'महत्त्वाची टीप: बँका डिजिटल व्यवहारांवर विश्वास ठेवतात! दुकानात ३ ते ६ महिने UPI QR कोड वापरल्यास बँक स्टेटमेंट मजबूत होते आणि कर्ज लवकर मंजूर होते.',
        hi: 'महत्वपूर्ण टिप: बैंक डिजिटल लेनदेन पर भरोसा करते हैं! अपनी दुकान में 3 से 6 महीने UPI QR कोड का उपयोग करने से ऋण स्वीकृति बहुत आसान हो जाती है।',
      },
    ],
    helpOffice: {
      name: {
        en: 'District Lead Bank Manager (LDM) Office / Nearest Nationalized or Gramin Bank Branch',
        mr: 'जिल्हा अग्रणी बँक (Lead Bank) कार्यालय किंवा तुमची जवळची बँक शाखा',
        hi: 'जिला अग्रणी बैंक (Lead Bank) कार्यालय या आपकी नजदीकी बैंक शाखा',
      },
      phone: '1800-180-1111 (Sample JanDhan/Mudra Desk)',
      portalName: 'JanSamarth / Udyamimitra Portal (Verify at your bank)',
    },
    audioScript: {
      en: 'Under PM Mudra Yojana, small shopkeepers and rural entrepreneurs can get collateral-free loans from 50,000 to 10 lakh rupees. Having a free Udyam Registration certificate and regular UPI payments in your bank passbook helps banks approve your loan faster.',
      mr: 'प्रधानमंत्री मुद्रा योजनेअंतर्गत छोट्या दुकानदारांना आणि व्यावसायिकांना ५० हजार ते १० लाख रुपयांपर्यंत विनातारण कर्ज मिळू शकते. तुमच्याकडे मोफत उद्यम नोंदणी प्रमाणपत्र आणि बँक खात्यात UPI चे नियमित व्यवहार असल्यास बँकेकडून कर्ज मिळणे खूप सोपे होते.',
      hi: 'प्रधानमंत्री मुद्रा योजना के तहत छोटे दुकानदारों और ग्रामीण उद्यमियों को 50 हजार से 10 लाख रुपये तक बिना गारंटी ऋण मिल सकता है। निःशुल्क उद्यम प्रमाणपत्र और बैंक खाते में नियमित UPI लेनदेन होने से ऋण जल्दी स्वीकृत होता है।',
    },
  },
];
