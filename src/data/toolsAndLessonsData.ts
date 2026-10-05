import { DigitalTool, Lesson } from '../types';

export const DIGITAL_TOOLS_DATA: DigitalTool[] = [
  {
    id: 'whatsapp-business',
    name: {
      en: 'WhatsApp Business Profile & Product Catalogue',
      mr: 'व्हॉट्सॲप बिझनेस प्रोफाईल आणि डिजिटल कॅटलॉग',
      hi: 'व्हाट्सएप बिजनेस प्रोफाइल और डिजिटल कैटलॉग',
    },
    category: 'Talk to Customers',
    difficulty: 'Beginner',
    cost: 'Free',
    timeToLearn: '15 mins',
    shortDesc: {
      en: 'Turn your phone into a digital shopfront where customers can view your products, prices, and working hours automatically.',
      mr: 'तुमच्या मोबाईलवरच डिजिटल दुकान तयार करा जिथे ग्राहक स्वतः वस्तूंचे फोटो आणि दर पाहू शकतात.',
      hi: 'अपने फोन पर ही डिजिटल दुकान बनाएं जहां ग्राहक स्वयं उत्पादों के फोटो और दाम देख सकें।',
    },
    whatIsIt: {
      en: 'A free official app designed for small businesses that lets you create a verified business profile, showcase a product catalogue with prices, and send automatic greeting messages to customers.',
      mr: 'छोट्या व्यावसायिकांसाठी असलेले हे एक मोफत ॲप आहे. यात तुम्ही तुमच्या व्यवसायाची माहिती, कामाची वेळ आणि वस्तूंचे फोटो व किमती असलेली यादी (Catalogue) जोडू शकता.',
      hi: 'छोटे व्यवसायों के लिए बनाया गया एक निःशुल्क ऐप जिसमें आप अपने व्यवसाय का पता, समय और उत्पादों की मूल्य सूची (Catalogue) दिखा सकते हैं।',
    },
    whyCare: {
      en: 'Rural entrepreneurs waste hours sending the same product photos and prices one-by-one. With a WhatsApp Catalogue, one link shares your entire shop with wholesale buyers in Pune, Mumbai, or Nashik.',
      mr: 'ग्राहकांना प्रत्येक वेळी वेगवेगळे फोटो आणि दर पाठवण्यात खूप वेळ जातो. डिजिटल कॅटलॉगमुळे एका क्लिकवर तुमचे संपूर्ण दुकान पुणे, मुंबई किंवा तालुक्याच्या ग्राहकांना दिसते.',
      hi: 'हर ग्राहक को अलग-अलग फोटो और रेट भेजने में समय बर्बाद होता है। डिजिटल कैटलॉग से एक क्लिक में आपकी पूरी दुकान ग्राहकों को दिखती है।',
    },
    beforeScenario: {
      en: 'Customer calls asking price → Owner stops work → Searches phone gallery for 10 photos → Sends photos one by one → Types price manually every time.',
      mr: 'ग्राहक फोन करून दर विचारतो → मालक काम थांबवून गॅलरीत फोटो शोधतो → एक-एक फोटो पाठवतो → प्रत्येक वेळी किंमत टाईप करतो.',
      hi: 'ग्राहक फोन करके दाम पूछता है → मालिक काम रोककर गैलरी में फोटो ढूंढता है → एक-एक फोटो भेजता है → हर बार कीमत टाइप करता है।',
    },
    afterScenario: {
      en: 'Digital catalogue link shared → Customer browses all items with clear weights & prices → Selects items in cart → Owner receives a ready order list.',
      mr: 'डिजिटल कॅटलॉग लिंक पाठवली → ग्राहक स्वतः सर्व वस्तूंचे वजन आणि दर पाहतो → हव्या त्या वस्तू निवडतो → मालकाला थेट तयार ऑर्डर मिळते.',
      hi: 'डिजिटल कैटलॉग लिंक भेजा → ग्राहक स्वयं सभी उत्पादों के वजन और दाम देखता है → सामान चुनता है → मालिक को सीधे तैयार ऑर्डर मिलता है।',
    },
    relatedLessonId: 'lesson-whatsapp-catalogue',
  },
  {
    id: 'upi-qr-payments',
    name: {
      en: 'Business UPI QR Code & Voice Box Setup',
      mr: 'व्यवसाय UPI QR कोड आणि पेमेंट व्हॉइस बॉक्स',
      hi: 'व्यवसाय UPI QR कोड और पेमेंट वॉइस बॉक्स',
    },
    category: 'Get Paid',
    difficulty: 'Beginner',
    cost: 'Free',
    timeToLearn: '10 mins',
    shortDesc: {
      en: 'Accept instant digital payments directly into your bank account and build a strong bank statement for government loans.',
      mr: 'ग्राहकांकडून थेट बँक खात्यात पैसे स्वीकारा आणि शासकीय कर्जासाठी मजबूत बँक स्टेटमेंट तयार करा.',
      hi: 'ग्राहकों से सीधे बैंक खाते में भुगतान लें और सरकारी ऋण के लिए मजबूत बैंक स्टेटमेंट बनाएं।',
    },
    whatIsIt: {
      en: 'A printed QR standee linked to your merchant bank account that accepts payments from any UPI app (PhonePe, GPay, Paytm, BHIM) with zero transaction charges for micro merchants.',
      mr: 'तुमच्या बँक खात्याशी जोडलेला असा QR कोड ज्यावर ग्राहक कोणत्याही ॲपने पैसे पाठवू शकतात आणि पैसे थेट खात्यात जमा होतात.',
      hi: 'आपके बैंक खाते से जुड़ा एक QR कोड जिस पर ग्राहक किसी भी UPI ऐप से भुगतान कर सकते हैं और पैसा सीधे बैंक में जमा होता है।',
    },
    whyCare: {
      en: 'Eliminates loose change problems, prevents fake note risks, reduces unpaid credit (Udhaar), and creates an official monthly turnover record that banks look for when approving MUDRA or PMFME loans.',
      mr: 'सुट्ट्या पैशांची अडचण मिटते, उधारी कमी होते आणि सर्वात महत्त्वाचे म्हणजे बँक पासबुकवर व्यवसायाची अधिकृत उलाढाल दिसल्यामुळे शासकीय कर्ज लवकर मिळते.',
      hi: 'खुल्ले पैसों की समस्या खत्म होती है, उधारी कम होती है और बैंक पासबुक में नियमित लेनदेन दिखने से मुद्रा या सरकारी ऋण जल्दी स्वीकृत होता है।',
    },
    beforeScenario: {
      en: 'Cash-only sales → No proof of monthly business income in bank passbook → Bank rejects business loan application due to lack of turnover record.',
      mr: 'फक्त रोखीने व्यवहार → बँक खात्यात व्यवसायाची उलाढाल दिसत नाही → पुरावा नसल्यामुळे बँक कर्ज देण्यास नकार देते.',
      hi: 'केवल नकद बिक्री → बैंक पासबुक में व्यावसायिक आय का कोई प्रमाण नहीं → टर्नओवर रिकॉर्ड न होने से बैंक ऋण अस्वीकार कर देता है।',
    },
    afterScenario: {
      en: 'Merchant UPI QR on counter → Daily sales credited to bank → Clean 6-month bank statement proves business strength for subsidy & MUDRA loans.',
      mr: 'दुकानात UPI QR कोड → रोजची विक्री बँक खात्यात जमा → ६ महिन्यांचे मजबूत बँक स्टेटमेंट पाहून बँकेकडून सहज कर्ज मंजूर.',
      hi: 'दुकान पर UPI QR कोड → रोज की बिक्री बैंक में जमा → 6 महीने का मजबूत स्टेटमेंट देखकर बैंक से आसानी से ऋण स्वीकृत।',
    },
    relatedLessonId: 'lesson-upi-qr',
  },
  {
    id: 'digital-catalogue-photos',
    name: {
      en: 'Smartphone Product Photography & Digital Catalogue',
      mr: 'मोबाईलने आकर्षक प्रॉडक्ट फोटो आणि डिजिटल कॅटलॉग',
      hi: 'स्मार्टफोन से आकर्षक प्रोडक्ट फोटो और डिजिटल कैटलॉग',
    },
    category: 'Show Your Products',
    difficulty: 'Beginner',
    cost: 'Free',
    timeToLearn: '20 mins',
    shortDesc: {
      en: 'Take clean, trustworthy photos of your food products, handicrafts, or farm produce using natural daylight and a plain background.',
      mr: 'घरच्या घरी नैसर्गिक प्रकाशात तुमच्या उत्पादनांचे स्पष्ट आणि विश्वासार्ह फोटो काढण्याची सोपी पद्धत.',
      hi: 'घर पर ही प्राकृतिक रोशनी में अपने उत्पादों के साफ और भरोसेमंद फोटो खींचने का आसान तरीका।',
    },
    whatIsIt: {
      en: 'A practical method to photograph your products with clear packaging labels, weight details, and clean backgrounds so distant buyers trust your quality without visiting in person.',
      mr: 'तुमच्या मालाचा दर्जा, पॅकेजिंग आणि वजन स्पष्ट दिसेल अशा पद्धतीने मोबाईलवर फोटो काढून त्याची आकर्षक यादी तयार करणे.',
      hi: 'अपने उत्पाद की गुणवत्ता, पैकेजिंग और वजन साफ दिखे इस तरह मोबाइल से फोटो खींचकर आकर्षक सूची बनाना।',
    },
    whyCare: {
      en: 'City buyers and bulk retailers judge homemade or rural products by how clean and hygienic they look in photos. Good lighting and a clean background can double customer inquiries.',
      mr: 'शहरातील ग्राहक किंवा मोठे व्यापारी फोटो पाहूनच मालाच्या स्वच्छतेचा अंदाज लावतात. चांगला फोटो असल्यास मालाची मागणी दुपटीने वाढू शकते.',
      hi: 'शहर के ग्राहक और थोक व्यापारी फोटो देखकर ही उत्पाद की स्वच्छता का अंदाजा लगाते हैं। साफ फोटो से ऑर्डर दोगुने हो सकते हैं।',
    },
    beforeScenario: {
      en: 'Dark, blurry photo taken indoors on a cluttered floor → Label cannot be read → Buyer doubts hygiene and does not place an order.',
      mr: 'अंधारात किंवा अस्ताव्यस्त जागेवर काढलेला अस्पष्ट फोटो → ग्राहकाचा विश्वास बसत नाही आणि ऑर्डर मिळत नाही.',
      hi: 'अंधेरे में या अव्यवस्थित जगह पर खींचा गया धुंधला फोटो → ग्राहक को भरोसा नहीं होता और ऑर्डर नहीं मिलता।',
    },
    afterScenario: {
      en: 'Bright daylight photo near a window on a clean white/wooden surface showing weight & FSSAI number → Buyer immediately trusts and orders.',
      mr: 'खिडकीजवळ सूर्यप्रकाशात स्वच्छ पृष्ठभागावर काढलेला स्पष्ट फोटो, ज्यावर वजन आणि किंमत दिसते → ग्राहक लगेच विश्वास ठेवून ऑर्डर देतो.',
      hi: 'खिड़की के पास धूप में साफ सतह पर खींचा गया स्पष्ट फोटो जिसमें वजन व कीमत साफ दिखे → ग्राहक तुरंत भरोसा करके ऑर्डर देता है।',
    },
    relatedLessonId: 'lesson-product-photos',
  },
  {
    id: 'google-maps-business',
    name: {
      en: 'Google Maps Business Profile (Local Search Visibility)',
      mr: 'गूगल मॅप्सवर तुमचे दुकान नोंदवा (Google Business Profile)',
      hi: 'गूगल मैप्स पर अपनी दुकान दर्ज करें (Google Business Profile)',
    },
    category: 'Find Customers',
    difficulty: 'Beginner',
    cost: 'Free',
    timeToLearn: '15 mins',
    shortDesc: {
      en: 'Put your shop, dairy unit, or processing centre on Google Maps so nearby travellers, traders, and townspeople can find and call you.',
      mr: 'तुमचे दुकान, डेअरी किंवा उद्योग गूगल मॅपवर मोफत नोंदवा जेणेकरून नवीन ग्राहक तुम्हाला सहज शोधू शकतील.',
      hi: 'अपनी दुकान, डेयरी या इकाई को गूगल मैप्स पर निःशुल्क जोड़ें ताकि नए ग्राहक आपको आसानी से ढूंढ सकें।',
    },
    whatIsIt: {
      en: 'A free listing on Google Search and Google Maps showing your shop name, exact pin location, phone number, photos, and customer reviews.',
      mr: 'गूगल सर्च आणि मॅप्सवरील तुमची मोफत नोंदणी, ज्यामुळे कोणीही मोबाईलवर तुमचा व्यवसाय शोधल्यास तुमचा पत्ता आणि फोन नंबर दिसतो.',
      hi: 'गूगल सर्च और मैप्स पर आपकी निःशुल्क लिस्टिंग, जिससे मोबाइल पर खोजने पर आपकी दुकान का पता और फोन नंबर तुरंत दिखता है।',
    },
    whyCare: {
      en: 'When someone in your taluka or highway area searches "pure ghee near me", "agro centre in Satara", or "Kolhapuri chappal workshop", your business appears at the top with a direct Call button.',
      mr: 'जेव्हा तुमच्या परिसरात कोणी "जवळचे शुद्ध तूप", "मसाला केंद्र" किंवा "कृषी सेवा" शोधतो, तेव्हा तुमचे नाव आणि फोन नंबर सर्वात वर दिसतो.',
      hi: 'जब कोई आपके क्षेत्र में "शुद्ध घी", "मसाला केंद्र" या "कृषि सेवा" खोजता है, तो आपकी दुकान का नाम और कॉल बटन सबसे ऊपर दिखता है।',
    },
    beforeScenario: {
      en: 'Only people living on the same village street know about your business → Outside buyers drive past on the highway without knowing your shop exists.',
      mr: 'फक्त गावातील लोकांनाच तुमच्या व्यवसायाची माहिती असते → बाहेरचे ग्राहक किंवा व्यापारी तुमच्या दुकानापर्यंत पोहोचू शकत नाहीत.',
      hi: 'केवल गांव के लोग ही आपके व्यवसाय को जानते हैं → बाहर के ग्राहक या व्यापारी आपकी दुकान तक नहीं पहुंच पाते।',
    },
    afterScenario: {
      en: 'Verified Google Maps pin with 5 shop photos and phone number → Buyers from nearby towns find directions and call directly for orders.',
      mr: 'गूगल मॅपवर दुकानाचे फोटो आणि फोन नंबर उपलब्ध → जवळच्या शहरांतील ग्राहक मॅप पाहून थेट दुकानात येतात किंवा फोनवर ऑर्डर देतात.',
      hi: 'गूगल मैप्स पर दुकान के फोटो और फोन नंबर उपलब्ध → आसपास के शहरों के ग्राहक मैप देखकर सीधे दुकान आते हैं या फोन पर ऑर्डर देते हैं।',
    },
    relatedLessonId: 'lesson-google-maps',
  },
  {
    id: 'digital-bookkeeping-khata',
    name: {
      en: 'Digital Bahi-Khata & Daily Sales Record Keeping',
      mr: 'डिजिटल हिशोब वही (Digital Khata) आणि दैनंदिन नोंदी',
      hi: 'डिजिटल बही-खाता और दैनिक बिक्री रिकॉर्ड',
    },
    category: 'Manage Business',
    difficulty: 'Beginner',
    cost: 'Free',
    timeToLearn: '15 mins',
    shortDesc: {
      en: 'Track daily cash + online sales, raw material expenses, and customer credit (Udhaar) with automatic polite payment reminders.',
      mr: 'रोजची विक्री, कच्च्या मालाचा खर्च आणि ग्राहकांची उधारी मोबाईलवर सुरक्षित ठेवा आणि वेळेवर वसुली करा.',
      hi: 'रोज की बिक्री, कच्चे माल का खर्च और ग्राहकों की उधारी मोबाइल पर सुरक्षित रखें तथा समय पर वसूली करें।',
    },
    whatIsIt: {
      en: 'Simple mobile ledger apps (or structured digital notebooks) that calculate your daily profit, track pending customer dues, and send automatic SMS/WhatsApp reminders.',
      mr: 'मोबाईलवरील सोपी हिशोब प्रणाली जी तुमचा नफा मोजते, कोणाकडून किती येणे बाकी आहे ते सांगते आणि ग्राहकांना आठवण करून देते.',
      hi: 'मोबाइल पर सरल लेखा प्रणाली जो आपका मुनाफा गिनती है, किस ग्राहक से कितना बकाया है यह बताती है और रिमाइंडर भेजती है।',
    },
    whyCare: {
      en: 'Many rural businesses work hard all month but don’t know their true net profit because personal expenses and business cash get mixed up, and notebook pages get lost.',
      mr: 'अनेक व्यावसायिक महिनाभर कष्ट करतात पण घरखर्च आणि व्यवसायाचा गल्ला एकत्र झाल्यामुळे नेमका किती नफा झाला हे समजत नाही. डिजिटल हिशोबामुळे प्रत्येक रुपयाची नोंद राहते.',
      hi: 'कई उद्यमी महीने भर मेहनत करते हैं पर घर के खर्च और दुकान का गल्ला मिल जाने से वास्तविक मुनाफा पता नहीं चलता। डिजिटल खाते से हर रुपये का हिसाब रहता है।',
    },
    beforeScenario: {
      en: 'Credit written on loose paper slips → Slips get lost or damaged → Awkward to ask customers for old dues → 15% of profit stuck in unpaid Udhaar.',
      mr: 'कागदाच्या चिठ्ठ्यांवर उधारी लिहिली जाते → चिठ्ठ्या हरवतात → जुनी उधारी मागताना संकोच वाटतो → नफ्याचा मोठा भाग उधारीत अडकतो.',
      hi: 'कागज की पर्चियों पर उधारी लिखी जाती है → पर्चियां गुम हो जाती हैं → पुराना बकाया मांगने में संकोच होता है → मुनाफा उधारी में फंस जाता है।',
    },
    afterScenario: {
      en: 'Every credit entry logged in 5 seconds → Customer gets automatic polite SMS summary with UPI payment link → Faster collection and clear monthly profit sheet.',
      mr: '५ सेकंदात मोबाईलवर नोंद → ग्राहकाला आपोआप नम्र मेसेज आणि पेमेंट लिंक जाते → उधारी वेळेवर वसूल होते आणि महिन्याचा नफा स्पष्ट दिसतो.',
      hi: '5 सेकंड में मोबाइल पर एंट्री → ग्राहक को स्वतः विनम्र संदेश और पेमेंट लिंक जाता है → उधारी समय पर वसूल होती है और मासिक मुनाफा साफ दिखता है।',
    },
    relatedLessonId: 'lesson-digital-records',
  },
  {
    id: 'ondc-ecommerce-selling',
    name: {
      en: 'Selling Beyond Your Village (ONDC / SHG E-Commerce & Courier Basics)',
      mr: 'गावाबाहेर ऑनलाइन विक्री (ONDC / ई-कॉमर्स आणि कुरिअर सुविधा)',
      hi: 'गांव से बाहर ऑनलाइन बिक्री (ONDC / ई-कॉमर्स और डाक/कूरियर सुविधा)',
    },
    category: 'Sell Online',
    difficulty: 'Intermediate',
    cost: 'Free / Paid Options',
    timeToLearn: '25 mins',
    shortDesc: {
      en: 'Learn how rural producers ship dry food products, spices, and handicrafts across Maharashtra using India Post parcel and digital storefronts.',
      mr: 'भारतीय पोस्ट पार्सल आणि ऑनलाइन प्लॅटफॉर्मचा वापर करून तुमचा माल संपूर्ण महाराष्ट्रात कसा पाठवायचा ते शिका.',
      hi: 'भारतीय डाक पार्सल और डिजिटल प्लेटफॉर्म का उपयोग करके अपने उत्पाद पूरे महाराष्ट्र में कैसे भेजें, यह सीखें।',
    },
    whatIsIt: {
      en: 'Combining WhatsApp/ONDC seller apps with UPI payment before dispatch and India Post / local transport parcel booking to fulfil orders outside your district.',
      mr: 'ऑनलाइन ऑर्डर घेऊन, UPI द्वारे आगाऊ पेमेंट स्वीकारून भारतीय पोस्ट ऑफिस किंवा एसटी पार्सलने ग्राहकांपर्यंत माल पोहोचवण्याची सोपी पद्धत.',
      hi: 'ऑनलाइन ऑर्डर लेकर, UPI से भुगतान प्राप्त कर भारतीय डाकघर या एसटी पार्सल से ग्राहकों तक सामान पहुंचाने की व्यावहारिक प्रणाली।',
    },
    whyCare: {
      en: 'Your village market may have only 300 buyers, but Pune, Mumbai, and Nashik have millions of families looking for authentic homemade masalas, millets, papads, and handmade crafts.',
      mr: 'गावातील बाजारपेठ मर्यादित असते, पण पुणे, मुंबई, नाशिकसारख्या शहरांमध्ये गावरान, शुद्ध आणि घरगुती पदार्थांना खूप मोठी मागणी आणि चांगला दर मिळतो.',
      hi: 'गांव का बाजार सीमित होता है, लेकिन पुणे, मुंबई, नासिक जैसे शहरों में शुद्ध ग्रामीण और घरेलू उत्पादों की भारी मांग और बेहतर कीमत मिलती है।',
    },
    beforeScenario: {
      en: 'Dependent on local middlemen who buy in bulk at very low rates → Low profit margin for the rural producer.',
      mr: 'स्थानिक दलालांवर अवलंबून राहावे लागते जे खूप कमी दराने माल खरेदी करतात → उत्पादकाला अतिशय कमी नफा मिळतो.',
      hi: 'स्थानीय बिचौलियों पर निर्भर रहना पड़ता है जो बहुत कम दाम पर माल खरीदते हैं → ग्रामीण उत्पादक को कम मुनाफा मिलता है।',
    },
    afterScenario: {
      en: 'Direct retail & bulk orders from city customers → 100% advance payment via UPI → Packed securely and shipped via India Post Speed Post / Parcel.',
      mr: 'शहरातील ग्राहकांकडून थेट ऑर्डर → UPI ने आगाऊ पैसे जमा → व्यवस्थित पॅकिंग करून पोस्ट ऑफिस पार्सलने रवाना → दुप्पट नफा.',
      hi: 'शहर के ग्राहकों से सीधे ऑर्डर → UPI से अग्रिम भुगतान → सुरक्षित पैकिंग कर डाकघर पार्सल से डिस्पैच → दोगुना मुनाफा।',
    },
    relatedLessonId: 'lesson-whatsapp-catalogue',
  },
];

export const LESSONS_DATA: Lesson[] = [
  {
    id: 'lesson-whatsapp-catalogue',
    title: {
      en: 'How to Create a WhatsApp Business Profile & Product Catalogue',
      mr: 'व्हॉट्सॲप बिझनेस प्रोफाईल आणि कॅटलॉग कसा तयार करावा?',
      hi: 'व्हाट्सएप बिजनेस प्रोफाइल और कैटलॉग कैसे बनाएं?',
    },
    category: 'Talk to Customers',
    duration: '15 mins · 5 Practical Steps',
    summary: {
      en: 'Step-by-step interactive guide to setting up a professional digital shopfront on your phone.',
      mr: 'तुमच्या मोबाईलवर व्यावसायिक डिजिटल दुकान सुरू करण्याचे ५ सोपे टप्पे.',
      hi: 'अपने फोन पर व्यावसायिक डिजिटल दुकान शुरू करने के 5 सरल चरण।',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Download WhatsApp Business & Set Business Name',
          mr: 'WhatsApp Business ॲप घ्या आणि व्यवसायाचे स्पष्ट नाव ठेवा',
          hi: 'WhatsApp Business ऐप डाउनलोड करें और व्यवसाय का स्पष्ट नाम रखें',
        },
        instruction: {
          en: 'Install the free "WhatsApp Business" app (with the "B" icon). Enter your business name clearly so buyers immediately know what you sell—for example: "Kulkarni Home Foods - Nashik" instead of just "Asha".',
          mr: 'प्ले स्टोअरवरून मोफत "WhatsApp Business" ॲप घ्या. त्यात फक्त स्वतःचे नाव न ठेवता व्यवसायाचे पूर्ण नाव लिहा—उदा. "कुलकर्णी होम फूड्स - नाशिक".',
          hi: 'प्ले स्टोर से निःशुल्क "WhatsApp Business" ऐप लें। इसमें केवल अपना नाम लिखने के बजाय व्यवसाय का पूरा नाम लिखें—जैसे "कुलकर्णी होम फूड्स - नासिक"।',
        },
        practicalTip: {
          en: 'Keep a clean photo of your shop board or your best product pack as your Profile Picture.',
          mr: 'प्रोफाईल फोटोमध्ये तुमच्या दुकानाच्या पाटीचा किंवा तुमच्या मुख्य उत्पादनाचा स्पष्ट फोटो ठेवा.',
          hi: 'प्रोफाइल फोटो में अपनी दुकान के बोर्ड या अपने मुख्य उत्पाद का साफ फोटो लगाएं।',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Fill Business Address, Category & Opening Hours',
          mr: 'व्यवसायाचा पत्ता, प्रकार आणि कामाची वेळ भरा',
          hi: 'व्यवसाय का पता, श्रेणी और खुलने का समय भरें',
        },
        instruction: {
          en: 'Go to Business Tools → Business Profile. Select your category (e.g., Food & Grocery / Apparel), write a 1-line description in Marathi & English, and set your working hours (e.g., 9:00 AM to 8:00 PM).',
          mr: 'Business Tools → Business Profile मध्ये जा. तुमच्या व्यवसायाचा प्रकार निवडा, १ ओळीत माहिती लिहा (उदा. "१००% घरगुती शुद्ध मसाले आणि पापड") आणि कामाची वेळ निश्चित करा.',
          hi: 'Business Tools → Business Profile में जाएं। अपने व्यवसाय की श्रेणी चुनें, 1 पंक्ति में विवरण लिखें और काम का समय (जैसे सुबह 9 से रात 8 बजे) सेट करें।',
        },
        practicalTip: {
          en: 'Adding your village/taluka pin helps wholesale buyers know where you ship from.',
          mr: 'तुमचा तालुका आणि जिल्हा स्पष्ट लिहिल्यामुळे ग्राहकांचा तुमच्यावर विश्वास वाढतो.',
          hi: 'अपना तालुका और जिला स्पष्ट लिखने से ग्राहकों का भरोसा बढ़ता है।',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Add Your First 3 Products to the Catalogue',
          mr: 'कॅटलॉगमध्ये तुमच्या प्रमुख ३ वस्तू फोटोसह जोडा',
          hi: 'कैटलॉग में अपने मुख्य 3 उत्पाद फोटो सहित जोड़ें',
        },
        instruction: {
          en: 'Tap Business Tools → Catalogue → Add New Item. Upload a clear daylight photo of your product, enter the exact item name with weight (e.g., "Goda Masala - 250g Pack"), and enter the price in ₹.',
          mr: 'Business Tools → Catalogue → Add New Item वर क्लिक करा. वस्तूचा स्पष्ट फोटो निवडा, वजनासह नाव लिहा (उदा. "घरगुती गोडा मसाला - २५० ग्रॅम") आणि अचूक किंमत टाका.',
          hi: 'Business Tools → Catalogue → Add New Item पर टैप करें। उत्पाद का साफ फोटो लगाएं, वजन के साथ नाम लिखें (जैसे "घरगुती गोडा मसाला - 250 ग्राम") और कीमत दर्ज करें।',
        },
        practicalTip: {
          en: 'Always mention weight or quantity (250g, 500g, 1 Litre, 1 Pair) so customers don’t have to ask.',
          mr: 'किमतीसोबत वजन (२५० ग्रॅम, १ किलो, १ नग) नक्की लिहा म्हणजे ग्राहकाला पुन्हा विचारावे लागत नाही.',
          hi: 'कीमत के साथ वजन या मात्रा (250 ग्राम, 1 किलो, 1 जोड़ी) अवश्य लिखें।',
        },
      },
      {
        stepNumber: 4,
        title: {
          en: 'Turn On Automatic Greeting Message',
          mr: 'आपोआप जाणारा स्वागत मेसेज (Greeting Message) सुरू करा',
          hi: 'स्वचालित स्वागत संदेश (Greeting Message) चालू करें',
        },
        instruction: {
          en: 'Open Business Tools → Greeting Message → Turn ON. Write a warm message in Marathi/Hindi with your catalogue link so even when you are busy making products, new customers get an instant reply.',
          mr: 'Greeting Message सुरू करा. त्यात "नमस्कार! कुलकर्णी होम फूड्समध्ये आपले स्वागत आहे. आमच्या सर्व पदार्थांचे दर पाहण्यासाठी खालील कॅटलॉग पहा" असा मेसेज ठेवा.',
          hi: 'Greeting Message चालू करें। इसमें "नमस्कार! हमारे सभी उत्पादों और दामों की सूची देखने के लिए नीचे दिए गए कैटलॉग लिंक पर क्लिक करें" संदेश लिखें।',
        },
        practicalTip: {
          en: 'Instant replies prevent customers from going to another seller while you are busy.',
          mr: 'तुम्ही कामात व्यस्त असतानाही ग्राहकाला लगेच उत्तर मिळाल्यामुळे ऑर्डर हातातून जात नाही.',
          hi: 'आपके व्यस्त होने पर भी ग्राहक को तुरंत जवाब मिलने से ऑर्डर पक्का होता है।',
        },
      },
      {
        stepNumber: 5,
        title: {
          en: 'Share Your Catalogue Link on Status & Local Groups',
          mr: 'तुमची कॅटलॉग लिंक व्हॉट्सॲप स्टेटस आणि ग्राहकांना पाठवा',
          hi: 'अपना कैटलॉग लिंक स्टेटस और ग्राहकों के साथ साझा करें',
        },
        instruction: {
          en: 'In Catalogue, tap the link icon at the top right → Copy Link. Paste it on your WhatsApp Status once a week and send it whenever someone asks "What items do you have?"',
          mr: 'कॅटलॉगमधील वरच्या कोपऱ्यातील लिंक चिन्हावर दाबून लिंक कॉपी करा. आठवड्यातून एकदा स्टेटसवर ठेवा आणि कोणी दर विचारल्यास ही एकच लिंक पाठवा.',
          hi: 'कैटलॉग के ऊपरी कोने से लिंक कॉपी करें। इसे सप्ताह में एक बार स्टेटस पर लगाएं और जब कोई दाम पूछे तो यही लिंक भेजें।',
        },
        practicalTip: {
          en: 'Print your WhatsApp number on your product sticker so repeat buyers can reorder easily.',
          mr: 'तुमच्या उत्पादनाच्या पॅकेटवर हा व्हॉट्सॲप नंबर छापा जेणेकरून ग्राहक पुन्हा ऑर्डर देऊ शकतील.',
          hi: 'अपने उत्पाद के पैकेट पर यह व्हाट्सएप नंबर छपवाएं ताकि ग्राहक दोबारा ऑर्डर दे सकें।',
        },
      },
    ],
  },
  {
    id: 'lesson-upi-qr',
    title: {
      en: 'How to Set Up a Business UPI QR Payment System Safely',
      mr: 'दुकानासाठी सुरक्षित UPI QR पेमेंट प्रणाली कशी सुरू करावी?',
      hi: 'दुकान के लिए सुरक्षित UPI QR पेमेंट सिस्टम कैसे शुरू करें?',
    },
    category: 'Get Paid',
    duration: '10 mins · 4 Practical Steps',
    summary: {
      en: 'Learn how to set up a Merchant QR board, verify real payments, and avoid common online payment scams.',
      mr: 'व्यावसायिक QR कोड कसा लावावा आणि फसवणूक टाळून सुरक्षित पेमेंट कसे घ्यावे ते शिका.',
      hi: 'मर्चेंट QR कोड कैसे लगाएं और धोखाधड़ी से बचते हुए सुरक्षित भुगतान कैसे स्वीकार करें।',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Use a Merchant / Business Account QR (Not Just Personal)',
          mr: 'बिझनेस / मर्चंट QR कोड वापरा (बँकेशी जोडलेला)',
          hi: 'बैंक से जुड़ा बिजनेस / मर्चेंट QR कोड उपयोग करें',
        },
        instruction: {
          en: 'Request a free Merchant QR Standee from your bank branch (State Bank, Bank of Maharashtra, Gramin Bank) or official Business app. Link it to the bank account where you want to show business turnover for loans.',
          mr: 'तुमच्या बँकेकडून (उदा. बँक ऑफ महाराष्ट्र, स्टेट बँक, ग्रामीण बँक) किंवा अधिकृत बिझनेस ॲपवरून मोफत मर्चंट QR कोड घ्या. ज्या खात्यावरून भविष्यात कर्ज घ्यायचे आहे तेच खाते जोडा.',
          hi: 'अपनी बैंक शाखा या अधिकृत बिजनेस ऐप से निःशुल्क मर्चेंट QR स्टैंड लें। इसे उसी बैंक खाते से जोड़ें जिससे आप भविष्य में व्यावसायिक ऋण लेना चाहते हैं।',
        },
        practicalTip: {
          en: 'All business UPI inflows in one bank account create a strong 6-month passbook record.',
          mr: 'एकाच बँक खात्यात सर्व व्यावसायिक पेमेंट घेतल्याने तुमचे बँक स्टेटमेंट मजबूत बनते.',
          hi: 'एक ही बैंक खाते में सभी व्यावसायिक भुगतान लेने से आपका बैंक स्टेटमेंट मजबूत बनता है।',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Enable Voice Notification in Marathi / Hindi',
          mr: 'मराठी किंवा हिंदीमध्ये व्हॉइस अलर्ट (आवाज सूचना) सुरू करा',
          hi: 'मराठी या हिंदी में वॉइस अलर्ट (आवाज सूचना) चालू करें',
        },
        instruction: {
          en: 'In your Merchant app settings, turn ON "Audio Payment Alert" and select Marathi or Hindi. Even without buying a paid soundbox, your phone speaker will announce "₹150 received" clearly.',
          mr: 'तुमच्या बिझनेस ॲपच्या सेटिंगमध्ये जाऊन "Voice Alert / ऑडिओ सूचना" सुरू करा आणि मराठी भाषा निवडा. पैसे जमा होताच मोबाईल मोठ्याने रक्कम सांगेल.',
          hi: 'अपने बिजनेस ऐप की सेटिंग में जाकर "वॉइस अलर्ट" चालू करें और मराठी या हिंदी भाषा चुनें। पैसे आते ही फोन जोर से राशि बोलेगा।',
        },
        practicalTip: {
          en: 'Never rely only on a screenshot shown by a stranger—always wait for your own phone/speaker alert.',
          mr: 'ग्राहकाने दाखवलेल्या केवळ स्क्रीनशॉटवर विश्वास ठेवू नका—तुमच्या मोबाईलवर मेसेज किंवा आवाज येण्याची खात्री करा.',
          hi: 'केवल ग्राहक द्वारा दिखाए गए स्क्रीनशॉट पर भरोसा न करें—अपने फोन पर आवाज या बैंक SMS की पुष्टि करें।',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Golden Safety Rule: You NEVER Need to Enter UPI PIN to Receive Money',
          mr: 'सुरक्षेचा सर्वात महत्त्वाचा नियम: पैसे घेताना पिन (PIN) टाकावा लागत नाही!',
          hi: 'सुरक्षा का सबसे बड़ा नियम: पैसे प्राप्त करने के लिए कभी भी UPI PIN नहीं डालना होता!',
        },
        instruction: {
          en: 'Remember and teach your family: UPI PIN is ONLY needed when money goes OUT of your bank account. If an unknown caller says "Scan this QR or enter your PIN to receive an advance order or government subsidy", hang up immediately.',
          mr: 'लक्षात ठेवा आणि कुटुंबालाही सांगा: पैसे स्वीकारताना कधीही UPI पिन टाकावा लागत नाही. पिन फक्त पैसे पाठवतानाच लागतो. कोणी फोनवरून "पैसे किंवा अनुदान मिळवण्यासाठी पिन टाका" असे सांगितल्यास तो फसवणुकीचा प्रकार आहे.',
          hi: 'हमेशा याद रखें: पैसे लेने के लिए कभी भी UPI पिन नहीं डालना पड़ता। यदि कोई फोन पर कहे कि "ऑर्डर के पैसे या सरकारी सब्सिडी पाने के लिए QR स्कैन करें या पिन डालें", तो तुरंत फोन काट दें।',
        },
        practicalTip: {
          en: 'Government subsidies come via Aadhaar DBT directly into your bank—never via a payment link.',
          mr: 'शासकीय अनुदान थेट बँक खात्यात (DBT द्वारे) जमा होते, त्यासाठी कोणतीही लिंक किंवा OTP लागत नाही.',
          hi: 'सरकारी सब्सिडी सीधे बैंक खाते (DBT) में आती है, उसके लिए कोई लिंक या पिन नहीं मांगा जाता।',
        },
      },
      {
        stepNumber: 4,
        title: {
          en: 'Update Your Passbook Monthly',
          mr: 'दर महिन्याला बँक पासबुक अपडेट करा',
          hi: 'हर महीने अपनी बैंक पासबुक अपडेट कराएं',
        },
        instruction: {
          en: 'At the end of every month, review your total UPI collection and keep your bank passbook printed. This printed passbook is your strongest document when visiting DIC or your bank for CMEGP / MUDRA loans.',
          mr: 'दर महिन्याला तुमची एकूण डिजिटल विक्री तपासा आणि बँक पासबुक प्रिंट करून घ्या. शासकीय कर्ज मिळवण्यासाठी हा सर्वात मोठा पुरावा ठरतो.',
          hi: 'हर महीने अपनी कुल डिजिटल बिक्री देखें और पासबुक प्रिंट कराएं। सरकारी ऋण के समय यह सबसे मजबूत प्रमाण होता है।',
        },
        practicalTip: {
          en: 'Keep at least 20–30% of daily UPI collections in the bank overnight instead of withdrawing 100% cash immediately.',
          mr: 'जमा झालेले सर्व पैसे लगेच एटीएममधून न काढता खात्यात काही शिल्लक ठेवल्यास बँक पत (Credit Score) वाढते.',
          hi: 'जमा हुए सारे पैसे तुरंत निकालने के बजाय खाते में कुछ शेष रखने से बैंक में आपकी साख बढ़ती है।',
        },
      },
    ],
  },
  {
    id: 'lesson-product-photos',
    title: {
      en: 'How to Photograph Products Using Your Phone (Zero Studio Cost)',
      mr: 'मोबाईलने घरच्या घरी आकर्षक प्रॉडक्ट फोटो कसे काढावेत?',
      hi: 'मोबाइल से घर पर ही आकर्षक प्रोडक्ट फोटो कैसे खींचें?',
    },
    category: 'Show Your Products',
    duration: '12 mins · 4 Practical Steps',
    summary: {
      en: 'Simple lighting and framing rules to make rural food, farm, and craft products look store-ready.',
      mr: 'कोणत्याही महागड्या कॅमेऱ्याशिवाय तुमच्या मालाचे स्पष्ट आणि आकर्षक फोटो काढण्याच्या ४ टिप्स.',
      hi: 'बिना किसी महंगे कैमरे के अपने उत्पाद के साफ और आकर्षक फोटो खींचने के 4 आसान नियम।',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Wipe Your Phone Camera Lens First',
          mr: 'फोटो काढण्यापूर्वी मोबाईलचा कॅमेरा स्वच्छ पुसून घ्या',
          hi: 'फोटो खींचने से पहले फोन के कैमरे का लेंस साफ कपड़े से पोंछ लें',
        },
        instruction: {
          en: 'Phone lenses get oily from fingers and dust, making photos look foggy. Gently wipe the back camera lens with a clean cotton cloth before taking product photos.',
          mr: 'हाताचे डाग आणि धुळीमुळे कॅमेरा लेन्स खराब होते आणि फोटो धूसर येतात. फोटो काढण्यापूर्वी सुती कपड्याने कॅमेरा स्वच्छ पुसून घ्या.',
          hi: 'उंगलियों के निशान और धूल से कैमरा लेंस धुंधला हो जाता है। फोटो लेने से पहले सूती कपड़े से लेंस साफ करें।',
        },
        practicalTip: {
          en: 'This 3-second habit instantly makes any ₹8,000 smartphone take 2x sharper photos.',
          mr: 'फक्त ३ सेकंदांच्या या सवयीमुळे साध्या मोबाईलमध्येही अतिशय स्पष्ट फोटो येतात.',
          hi: 'केवल 3 सेकंड की इस आदत से साधारण स्मार्टफोन से भी दोगुने साफ फोटो आते हैं।',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Use Morning/Afternoon Window Light (Turn Off Camera Flash)',
          mr: 'खिडकीजवळच्या नैसर्गिक सूर्यप्रकाशाचा वापर करा (फ्लॅश बंद ठेवा)',
          hi: 'खिड़की या आंगन की प्राकृतिक रोशनी का उपयोग करें (फ्लैश बंद रखें)',
        },
        instruction: {
          en: 'Place a small table near an open window or shaded veranda between 9 AM and 4 PM. Turn OFF your phone flash—flash creates harsh glare on plastic food packets.',
          mr: 'सकाळी ९ ते दुपारी ४ च्या दरम्यान खिडकीजवळ किंवा ओसरीत टेबल ठेवा. मोबाईलचा फ्लॅश (Flash) बंद ठेवा कारण फ्लॅशमुळे प्लास्टिक पॅकेटवर पांढरा चकचकीत डाग पडतो.',
          hi: 'सुबह 9 से शाम 4 बजे के बीच खिड़की या बरामदे में टेबल रखें। फोन का फ्लैश बंद रखें क्योंकि फ्लैश से पैकेट पर चमक पड़ती है और नाम नहीं दिखता।',
        },
        practicalTip: {
          en: 'Natural side light shows the real texture and authentic color of spices, grains, and fabrics.',
          mr: 'नैसर्गिक प्रकाशात मसाले, धान्य किंवा हस्तकलेच्या वस्तूंचा खरा रंग आणि दर्जा उठून दिसतो.',
          hi: 'प्राकृतिक रोशनी में मसालों, अनाज और हस्तशिल्प का असली रंग और गुणवत्ता साफ दिखती है।',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Use a Plain Clean Background (White Chart Paper or Clean Wood)',
          mr: 'मागे साधा आणि स्वच्छ पृष्ठभाग ठेवा (पांढरा कागद किंवा स्वच्छ लाकडी पाट)',
          hi: 'पीछे साफ और सादा बैकग्राउंड रखें (सफेद चार्ट पेपर या साफ लकड़ी)',
        },
        instruction: {
          en: 'Buy a ₹10 white or cream chart paper from a stationery shop and tape it against the wall and table, or use a clean wooden surface/brass plate for traditional foods.',
          mr: '१० रुपयांचा पांढरा किंवा क्रीम रंगाचा ड्रॉइंग पेपर भिंतीला आणि टेबलवर लावा, किंवा पारंपरिक पदार्थांसाठी स्वच्छ लाकडी पाट व पितळी ताटली वापरा.',
          hi: '₹10 का सफेद या क्रीम चार्ट पेपर टेबल और दीवार के सहारे लगाएं, या पारंपरिक खाद्य उत्पादों के लिए साफ लकड़ी/पीतल की थाली का उपयोग करें।',
        },
        practicalTip: {
          en: 'Make sure no household clutter, wires, or utensils are visible behind the product.',
          mr: 'उत्पादनाच्या मागे घरातील इतर पसारा, भांडी किंवा वायरी दिसणार नाहीत याची काळजी घ्या.',
          hi: 'ध्यान रखें कि उत्पाद के पीछे घर का अन्य सामान या तार दिखाई न दें।',
        },
      },
      {
        stepNumber: 4,
        title: {
          en: 'Show Both Sealed Packet AND Open Product Quality',
          mr: 'बंद पॅकेट आणि त्यातील खरा पदार्थ असे दोन्ही एकाच फोटोत दाखवा',
          hi: 'बंद पैकेट और उसके अंदर का उत्पाद दोनों एक साथ दिखाएं',
        },
        instruction: {
          en: 'Stand the sealed labelled packet upright and place a small clean bowl in front showing the actual masala, laddoo, or grain inside. This answers both "How is it packed?" and "How does the food look?"',
          mr: 'तुमचे पॅकेट उभे ठेवा आणि त्याच्या पुढे एका छोट्या स्वच्छ वाटीत आतील पदार्थ (उदा. मसाला, लाडू, पापड) ठेवा. यामुळे ग्राहकाला पॅकिंग आणि आतील मालाचा दर्जा दोन्ही एकाच वेळी दिसतात.',
          hi: 'अपना पैक किया हुआ पैकेट सीधा रखें और उसके आगे एक छोटी कटोरी में अंदर का उत्पाद (जैसे मसाला, लड्डू) रखें। इससे पैकिंग और गुणवत्ता दोनों साफ दिखते हैं।',
        },
        practicalTip: {
          en: 'Hold your phone steady at a 45-degree angle and tap the screen on the product label to focus before clicking.',
          mr: 'फोटो काढताना स्क्रीनवर पॅकेटच्या नावावर बोटाने टच करा म्हणजे अक्षरे अगदी स्पष्ट (Focus) येतील.',
          hi: 'फोटो खींचते समय स्क्रीन पर पैकेट के नाम पर टैप करें ताकि अक्षर बिल्कुल साफ फोकस में आएं।',
        },
      },
    ],
  },
  {
    id: 'lesson-google-maps',
    title: {
      en: 'How to List Your Rural Business on Google Maps for Free',
      mr: 'गूगल मॅप्सवर तुमचा व्यवसाय मोफत कसा नोंदवावा?',
      hi: 'गूगल मैप्स पर अपना व्यवसाय निःशुल्क कैसे दर्ज करें?',
    },
    category: 'Find Customers',
    duration: '15 mins · 4 Practical Steps',
    summary: {
      en: 'Help customers in your taluka and district find your location, photos, and phone number on Google.',
      mr: 'तुमच्या तालुक्यातील आणि जिल्ह्यातील ग्राहकांना तुमचा पत्ता आणि फोन नंबर गूगलवर मिळावा यासाठी सोपी कृती.',
      hi: 'अपने तालुका और जिले के ग्राहकों को गूगल पर अपनी दुकान का पता और फोन नंबर दिखाने की सरल प्रक्रिया।',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Open Google Maps & Tap "Add Your Business"',
          mr: 'Google Maps उघडा आणि "Add your business" वर टॅप करा',
          hi: 'Google Maps खोलें और "Add your business" पर टैप करें',
        },
        instruction: {
          en: 'Stand inside your shop or unit, open the Google Maps app on your phone, tap your profile icon at the top right, and select "Add your business".',
          mr: 'तुमच्या दुकानात किंवा युनिटमध्ये थांबून मोबाईलवर Google Maps ॲप उघडा. वरच्या बाजूला तुमच्या प्रोफाईल चिन्हावर टॅप करून "Add your business" निवडा.',
          hi: 'अपनी दुकान या इकाई में खड़े होकर फोन पर Google Maps खोलें, ऊपर प्रोफाइल आइकन पर टैप करें और "Add your business" चुनें।',
        },
        practicalTip: {
          en: 'Write your shop name in both English and Marathi (e.g., "Jadhav Agro & Cold Pressed Oil - जाधव लाकडी घाणा तेल").',
          mr: 'दुकानाचे नाव इंग्रजी आणि मराठी अशा दोन्ही भाषांत लिहा जेणेकरून दोन्ही प्रकारे शोधणाऱ्यांना ते सापडेल.',
          hi: 'दुकान का नाम अंग्रेजी और मराठी/हिंदी दोनों में लिखें ताकि हर कोई आसानी से खोज सके।',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Drop the Exact Map Pin & Landmark',
          mr: 'नकाशावर अचूक पिन लावा आणि जवळची ओळख (Landmark) लिहा',
          hi: 'मैप पर सटीक पिन लगाएं और पास की पहचान (Landmark) लिखें',
        },
        instruction: {
          en: 'In rural areas where street numbers are missing, mention a clear landmark in the address line (e.g., "Near Gram Panchayat Office / Opposite Bus Stand, Taluka Niphad, Dist. Nashik").',
          mr: 'ग्रामीण भागात घराचे क्रमांक नसल्यामुळे पत्त्यात स्पष्ट खूण लिहा (उदा. "ग्रामपंचायत कार्यालयाजवळ / एसटी स्टँडसमोर, ता. निफाड, जि. नाशिक").',
          hi: 'ग्रामीण क्षेत्रों में पते के साथ प्रमुख पहचान अवश्य लिखें (जैसे "ग्राम पंचायत कार्यालय के पास / बस स्टैंड के सामने")।',
        },
        practicalTip: {
          en: 'Zoom into satellite view to place the red pin right on your shop roof.',
          mr: 'सॅटेलाईट व्ह्यू सुरू करून तुमच्या दुकानाच्या छतावर अचूक लाल पिन सेट करा.',
          hi: 'सैटेलाइट व्यू चालू करके अपनी दुकान के ठीक ऊपर लाल पिन सेट करें।',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Add Your Active Mobile Number & 3 Real Photos',
          mr: 'चालू मोबाईल नंबर आणि दुकानाचे ३ खरे फोटो जोडा',
          hi: 'सक्रिय मोबाइल नंबर और दुकान के 3 वास्तविक फोटो जोड़ें',
        },
        instruction: {
          en: 'Upload 1 photo of your shop outside signboard, 1 photo of you with your products/machinery inside, and 1 photo of your main packaged products.',
          mr: '१ फोटो दुकानाच्या बाहेरील पाटीचा, १ फोटो आतील माल किंवा मशिनरीचा आणि १ फोटो तुमच्या तयार उत्पादनांचा असे ३ फोटो अपलोड करा.',
          hi: '1 फोटो दुकान के बाहरी बोर्ड का, 1 फोटो अंदर के सामान/मशीन का और 1 फोटो मुख्य उत्पादों का अपलोड करें।',
        },
        practicalTip: {
          en: 'Listings with real signboard photos get verified by Google much faster.',
          mr: 'दुकानाच्या पाटीचा खरा फोटो जोडल्यास गूगलकडून नोंदणी लवकर मंजूर (Verify) होते.',
          hi: 'दुकान के बोर्ड का वास्तविक फोटो डालने से गूगल वेरिफिकेशन जल्दी पूरा होता है।',
        },
      },
      {
        stepNumber: 4,
        title: {
          en: 'Ask 5 Happy Local Customers for a Review',
          mr: '५ समाधानी ग्राहकांना गूगलवर अभिप्राय (Review) द्यायला सांगा',
          hi: '5 संतुष्ट ग्राहकों से गूगल पर रिव्यू (Review) लिखने का आग्रह करें',
        },
        instruction: {
          en: 'Share your Google Maps link with 5 regular buyers and ask them to write a 1-line honest review about your product quality.',
          mr: 'तुमच्या ५ नियमित ग्राहकांना गूगल मॅपची लिंक पाठवा आणि तुमच्या मालाच्या दर्जाबद्दल १ ओळीचा अभिप्राय (Review) द्यायला सांगा.',
          hi: 'अपने 5 नियमित ग्राहकों को गूगल मैप लिंक भेजें और उत्पाद की गुणवत्ता के बारे में 1 पंक्ति का रिव्यू लिखने को कहें।',
        },
        practicalTip: {
          en: 'Even 5 genuine reviews with photos make your business rank at the top in your taluka.',
          mr: 'फक्त ५ खऱ्या ग्राहकांचे चांगले अभिप्राय असले तरी तुमच्या तालुक्यात तुमचा व्यवसाय सर्वात वर दिसू लागतो.',
          hi: 'केवल 5 सच्चे ग्राहकों के रिव्यू होने से भी आपके तालुका में आपकी दुकान सबसे ऊपर दिखने लगती है।',
        },
      },
    ],
  },
  {
    id: 'lesson-digital-records',
    title: {
      en: 'How to Maintain Simple Digital Sales & Expense Records',
      mr: 'व्यवसायाचा दैनंदिन जमा-खर्च आणि उधारीची डिजिटल नोंद कशी ठेवावी?',
      hi: 'व्यवसाय की दैनिक आय-व्यय और उधारी का डिजिटल रिकॉर्ड कैसे रखें?',
    },
    category: 'Manage Business',
    duration: '12 mins · 4 Practical Steps',
    summary: {
      en: 'Separate household money from business cashflow and prepare loan-ready monthly records.',
      mr: 'घरखर्च आणि व्यवसायाचा गल्ला वेगळा ठेवून महिन्याचा निव्वळ नफा मोजण्याची सोपी पद्धत.',
      hi: 'घर के खर्च और दुकान के गल्ले को अलग रखकर मासिक शुद्ध लाभ निकालने का सरल तरीका।',
    },
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Rule #1: Keep Business Money Separate from Household Money',
          mr: 'नियम १: व्यवसायाचा गल्ला आणि घरखर्च पूर्णपणे वेगळा ठेवा',
          hi: 'नियम 1: व्यवसाय का गल्ला और घर का खर्च पूरी तरह अलग रखें',
        },
        instruction: {
          en: 'Never take random cash out of the shop drawer for household groceries without writing it down. Instead, pay yourself a fixed weekly/monthly drawing and record all raw material costs separately.',
          mr: 'दुकानाच्या गल्ल्यातून घरखर्चासाठी न लिहिता पैसे काढू नका. त्याऐवजी स्वतःसाठी ठराविक रक्कम बाजूला काढा आणि कच्च्या मालाच्या खर्चाची स्वतंत्र नोंद ठेवा.',
          hi: 'दुकान के गल्ले से बिना लिखे घर खर्च के पैसे न निकालें। कच्चे माल के खर्च और घर खर्च का हिसाब अलग रखें।',
        },
        practicalTip: {
          en: 'Knowing your exact raw material cost helps you price your products profitably.',
          mr: 'कच्च्या मालाचा अचूक खर्च समजल्यामुळे वस्तूची विक्री किंमत ठरवणे सोपे जाते.',
          hi: 'कच्चे माल की सटीक लागत पता होने से उत्पाद का सही विक्रय मूल्य तय करना आसान होता है।',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Record 3 Numbers Every Evening at 8:30 PM',
          mr: 'रोज रात्री दुकान बंद करताना फक्त ३ आकडे लिहा',
          hi: 'रोज रात दुकान बंद करते समय केवल 3 आंकड़े दर्ज करें',
        },
        instruction: {
          en: 'Every evening, spend 3 minutes entering: (1) Today’s Cash + UPI Sales, (2) Today’s Business Expenses (raw material, transport, electricity), and (3) Any Credit (Udhaar) given or recovered.',
          mr: 'रोज रात्री फक्त ३ मिनिटे देऊन ३ गोष्टी नोंदवा: (१) आजची एकूण विक्री (रोख + UPI), (२) आजचा व्यवसाय खर्च (कच्चा माल, वाहतूक) आणि (३) आज दिलेली किंवा वसूल झालेली उधारी.',
          hi: 'रोज रात केवल 3 मिनट देकर 3 बातें दर्ज करें: (1) आज की कुल बिक्री (नकद + UPI), (2) आज का व्यावसायिक खर्च, और (3) आज दी गई या वसूल हुई उधारी।',
        },
        practicalTip: {
          en: '3 minutes every evening saves 3 days of confusion at the end of the month.',
          mr: 'रोजची ३ मिनिटांची सवय महिन्याच्या शेवटी होणारा गोंधळ टाळते.',
          hi: 'रोज की 3 मिनट की आदत महीने के अंत की उलझन बचाती है।',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Save Raw Material Purchase Bills by Taking a Phone Photo',
          mr: 'कच्च्या मालाच्या पक्क्या बिलांचे मोबाईलमध्ये फोटो काढून ठेवा',
          hi: 'कच्चे माल के पक्के बिलों का फोन में फोटो खींचकर सुरक्षित रखें',
        },
        instruction: {
          en: 'Paper thermal bills fade in 2 months. Create a folder or WhatsApp self-chat called "Business Bills" and snap a photo of every wholesale purchase bill and machinery receipt.',
          mr: 'कागदी बिले काही महिन्यांत पुसट होतात किंवा हरवतात. मोबाईलमध्ये "व्यवसाय बिले" नावाचा फोल्डर तयार करा आणि प्रत्येक खरेदी बिलाचा फोटो काढून ठेवा.',
          hi: 'कागज के बिल कुछ महीनों में मिट जाते हैं। फोन में "व्यवसाय बिल" फोल्डर बनाएं और हर थोक खरीद के बिल का फोटो सुरक्षित रखें।',
        },
        practicalTip: {
          en: 'Bank officers often ask for machinery and supplier invoices during scheme verification.',
          mr: 'शासकीय अनुदानाच्या तपासणीवेळी बँक अधिकारी मशिनरी आणि खरेदीच्या बिलांची मागणी करतात.',
          hi: 'सरकारी सब्सिडी सत्यापन के समय बैंक अधिकारी मशीनरी और खरीद के बिल मांगते हैं।',
        },
      },
      {
        stepNumber: 4,
        title: {
          en: 'Send Polite Monthly Payment Reminders Before the 5th of Every Month',
          mr: 'प्रत्येक महिन्याच्या १ ते ५ तारखेदरम्यान उधारी वसुलीचे नम्र मेसेज पाठवा',
          hi: 'हर महीने की 1 से 5 तारीख के बीच उधारी वसूली का विनम्र संदेश भेजें',
        },
        instruction: {
          en: 'Most salaried and dairy-payout customers receive money between the 1st and 5th of the month. Send your digital Khata balance reminder with your UPI QR on the 2nd of the month for highest recovery.',
          mr: 'पगारदार आणि दुधाचे पेमेंट मिळणाऱ्या ग्राहकांकडे महिन्याच्या १ ते ५ तारखेदरम्यान पैसे येतात. त्यामुळे २ तारखेलाच तुमच्या UPI QR कोडसह शिल्लक रकमेचा नम्र मेसेज पाठवा.',
          hi: 'अधिकांश ग्राहकों के पास महीने की 1 से 5 तारीख के बीच पैसा आता है। इसलिए 2 तारीख को अपने UPI QR के साथ बकाया राशि का विनम्र रिमाइंडर भेजें।',
        },
        practicalTip: {
          en: 'Timely collection keeps your working capital rotating without needing high-interest private loans.',
          mr: 'वेळेवर उधारी वसूल झाल्यास खेळते भांडवल टिकून राहते आणि खाजगी सावकाराकडून कर्ज घ्यावे लागत नाही.',
          hi: 'समय पर बकाया वसूल होने से कार्यशील पूंजी बनी रहती है और महंगे निजी ऋण की जरूरत नहीं पड़ती।',
        },
      },
    ],
  },
];
