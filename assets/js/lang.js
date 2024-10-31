const jsonAm = {
    "home__title": "ጊዜው ለጥሩ ቡና",
    "home__subtitle": "ልዩ ጥራት",
    "home__description": "እያንዳንዱ የተመረጠ የቡና ፍሬ ምርጡን ቡና ወደ ጠረጴዛዎ የሚያመጡት ለፔሩ ቡና አብቃዮች ያለንን ቁርጠኝነት ያንፀባርቃል።",
    "products__button": "ወደ ታች ሸብልል",
    "products__description": "ከገበሬዎች ጋር ጥልቅ ትብብር ለመፍጠር እንጥራለን። እይታን ለመፍጠር ከመላው አለም አንድ ላይ እና ጤናማ የስራ ግንኙነት ይመሰርታሉ በመተማመን እና በመከባበር ላይ የተገነባ።",
    "products__name":"ክላሲክ ቡና",
    "products__name01":"ጥቁር ቡና",
     "products__name02":"ጠንካራ ቡና",
     "products__price":"717.90 ብር",
     "products__price01":"1124.90 ብር",
     "products__price02":"1232.90 ብር",
     "section__title":"ታሪካችን",
     "about__description":"የወል  የሚለው ቃል ጋርዮሻዊ አንድነትን  ፣ ህብረትን ወይም ስምምነትን ያመለክታል ። ቡና በኢትዮጵያ በወል ተመርቶ በወል ተለቅሞ በወል ምርቃት ደምቆ በልዩ ስነ-ስርዓት  በወል የሚጠጣ ሁሉንም ኢትዮጵያዊያን በስምምነት በጣዕሙ ያስተሳሰረ ተፈጥሮዋዊ  ጸጋ ነው። ቡና በተፈጥሯዊ ጣዕሙ ዓለምን አንድ ያደረገ ለመጀመሪያ ጊዜ በኢትዮጵያ የተገኘ የዓለም የወል ሀብት ነው። የወል ቡና በከፍተኛ ጥራት ተፈጥሯዊ ቃናውን ሳይለቅ በእጅ ተለቅሞ የእርስዎን የቡና ጥም ለመቁረጥ በልዩ ሁኔታ ተዘጋጅቶ የቀረበ 100 %የኢትዮጵያ አረቢካ ቡና ነው።",
     "section__title01":"ምርቶቻችንን የማምረት ደረጃዎች",
     "steps__description":"ቡና በሚሰበሰብበት ጊዜ ምርቱ በየዓመቱ ይከሰታል ባቄላ ወደ ብስለት ይደርሳል እና ይሰበሰባል ለማቀነባበር.",
     "steps__description01":"ባቄላዎቹ እርጥብ ወይም ደረቅ በመጠቀም ይደርቃሉ ቴክኒክ, በምንፈልገው ጣዕም ላይ በመመስረት ለማግኘት.",
     "steps__description02":"ቡናው ተጠብሶ ያገኛል እህሉን በማቀነባበር ጣዕሙ በምድጃዎች ውስጥ.",
     "section__title02":"ቡና በ ውስጥ በጣም ጥሩው መጠጥ ነው።  ጠዋት, ትኩረትን ይጠብቅዎታል.",
     "footer__logo":"የወል ቡና",
     "footer__title":"ይምጡ እና ከእኛ ጋር ይደሰቱ",
     "button footer__button":"ኢሜል ይላኩልን።",
     "footer__description":"የእርስዎን ግላዊነት እንጨነቃለን። የእኛን ያንብቡ ",
     "footer__privacy":"የግላዊነት ፖሊሲ",
  };
  
  const jsonEN = {
    "home__title": "It's time for a good coffee",
    "home__subtitle": "EXCEPTIONAL QUALITY",
    "home__description": "Each select coffee bean reflects our commitment to Peruvian coffee growers, who bring the best select coffee to your table.",
    "products__button": "Scroll Down",
    "products__description": "We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.",
    "products__name":"Classic Coffee",
    "products__name01":"Black coffee",
    "products__name02":"Strong coffee",
    "products__price":"ETB 717.90",
    "products__price01":"ETB 1124.90",
    "products__price02":"ETB 1232.90",
    "section__title":"Our History",
    "about__description":"The word “ Yäwäl ” refers to concepts like communal,inclusive,and shared.Coffee in Ethiopia is “ Yäwäl ” by everyone,it is harvested by the community ,produced collectively,brings the community together to celebrate and wish the best to one another.However Coffee was first found in Ethiopia,it unites the whole world in its unique taste.“Yäwäl”  Coffee is 100% Ethiopian Arabic Coffee, but kept the standard value of world coffee,it serves everyone inclusively, preserve people's shared cultural integrity.“Yäwäl”  Coffee is hand-picked from Ethiopia and prepared carefully to protect its genuine taste of nature.“ Yäwäl ” Coffee pursue to quench the thirst of true coffee lovers by true coffee",
    "section__title01":"Steps of manufacturing our products",
    "steps__description":"Harvest occurs annually when the coffee  beans reach maturity and are collected for processing.",
    "steps__description01":"The beans are dried using a wet or dry technique, depending on the taste we want  to obtain.",
    "steps__description02":"The coffee is roasted and acquires its flavor by processing the grain in ovens. ",
    "section__title02":"Coffee is the best drink in the  morning, it keeps you focused.",
    "footer__logo":"YewaleCoffee",
    "footer__title":" Come and Enjoy with Us",
    "button footer__button":"Email Us"
    "footer__description":"We care about your data. Read our ",
    "footer__privacy":"Privacy Policy",


  };
  
  document.querySelector('#language').addEventListener("change", function() {
    const selectedLanguage = this.value;
    const translations = selectedLanguage === "en" ? jsonEN : jsonAm;
  
    // Update each element with the corresponding translation
    for (let key in translations) {
      const element = document.querySelector('.' + key);
      if (element) {
        element.textContent = translations[key];
      }
    }
  });