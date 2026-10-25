/**
 * Local for a Day - Volunteer Data & Master Schedule
 * Generated from Google Sheet: 1S6Tm3oB1xvojMdTh6jc8dogRWtzeFs5TtvVEB0gscKM
 * San Miguel & Mercado Congregation · Philippines 2026 International Convention
 */

const VOLUNTEER_CONFIG = {
  passcode: 'sanmig',
  eventDate: 'Friday, October 24, 2026',
  congregation: 'San Miguel Congregation',
  location: 'Hagonoy, Bulacan'
};

const MASTER_ROLES = {
  "V1": {
    "code": "V1",
    "role": "Host Group Lead",
    "responsibilities": "I-welcome ang mga delegates; ipaliwanag ang programa; panatilihing magkakasama at komportable ang apat na delegates; i-coordinate ang mga pagbabago, mag-headcount, at maayos na turnover sa Okada."
  },
  "V1a": {
    "code": "V1a",
    "role": "Transport Coordinator",
    "responsibilities": "Tiyakin na magkakasama at komportable ang apat na delegates sa pagpick-up at turnover sa Okada; point person in case na magkaroon ng aberya ang sasakyan. Tiyakin na ready ang van driver at ang driver ng backup vehicle."
  },
  "V1b": {
    "code": "V1b",
    "role": "Ministry Coordinator",
    "responsibilities": "Mangangasiwa sa field service meeting, mga kaayusan sa safety sa ministeryo at pagpa-partner ng mga delegates sa local publishers."
  },
  "V1c": {
    "code": "V1c",
    "role": "Hospitality Coordinator",
    "responsibilities": "Titiyakin na magiging maayos at safe ang ginagawang paghahanda ng mga meals at ng mga volunteers na naka-assign sa paghahanda ng mga pagkain; alamin ang bawal o gustong pagkain ng mga bisita."
  },
  "V2": {
    "code": "V2",
    "role": "Ministry Lead",
    "responsibilities": "Kumpirmahin nang maaga ang Bible study o return visit; manguna sa panalangin at briefing sa ministeryo; maghanda ng alternatibong plano sa pagpapatotoo kung kailangan; makipag-usap sa Tricycle Transport Lead Driver (Bro. Howell) para sa tricycle ride."
  },
  "V2a": {
    "code": "V2a",
    "role": "Ministry Lead (Cart Witnessing)",
    "responsibilities": "Tiyakin na safe ang location, may equipment at literatura para sa cart witnessing; manguna sa panalangin at briefing sa ministeryo; maghanda ng alternatibong plano sa pagpapatotoo kung kailangan; makipag-usap sa Tricycle Transport Lead Driver (Bro. Howell) para sa tricycle ride."
  },
  "V3": {
    "code": "V3",
    "role": "Ministry Partner / Interpreter",
    "responsibilities": "Tumulong sa pag-aaral o return visit; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
  },
  "V3a": {
    "code": "V3a",
    "role": "Ministry Partner / Interpreter (Cart Witnessing)",
    "responsibilities": "Tumulong sa pagdadala at setup ng cart at mga literatura; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
  },
  "V4": {
    "code": "V4",
    "role": "Tricycle Transport Lead Driver",
    "responsibilities": "Tiyakin ang mga safe na ruta, bilang ng sakay at maayos na tricycle; safe na pagmamaneho ng nakatalagang tricycle; i-coordinate sa Host Group Lead (Bro. Paulo) ang bawat biyahe sa lugar."
  },
  "V5": {
    "code": "V5",
    "role": "Tricycle Driver",
    "responsibilities": "Tiyakin na safe at maayos ang tricycle; safe na pagmamaneho; tulungan ang mga bisita sa pagsakay at pagbaba; laging makipag-ugnayan sa Tricycle Transport Lead Driver (Bro. Howell)."
  },
  "V6": {
    "code": "V6",
    "role": "Van Driver",
    "responsibilities": "Magplano ng ruta sa pagsundo at paghatid sa Okada; alamin ang lagay ng kalsada at trapiko; ihanda ang van, seatbelts, at nasa kondisyon ang sasakyan; makipagtulungan sa Transport Coordinator (Bro. Francis) para sa transport ng mga delegates."
  },
  "V6a": {
    "code": "V6a",
    "role": "Van Transport Assistant",
    "responsibilities": "Tumulong sa Transport Coordinator (Bro. Francis) at sa van driver (Bro. Arnold) upang mapanatiling ligtas at komportable ang mga delegates habang bumibiyahe."
  },
  "V6b": {
    "code": "V6b",
    "role": "Backup Driver",
    "responsibilities": "Naka-standby sakaling magkaroon ng sira o aberya sa pangunahing sasakyan. Maging ready at open ang contact line sa Transport Coordinator (Bro. Francis)  sa lahat ng oras."
  },
  "V7": {
    "code": "V7",
    "role": "Morning Merienda Host",
    "responsibilities": "Maghanda ng pang-umagang meryenda, inuming tubig, at malinis na lugar; tumulong sa tanghalian at panghapon na meryenda kung kinakailangan."
  },
  "V8": {
    "code": "V8",
    "role": "Lunch Host",
    "responsibilities": "Ihanda ang lugar ng kakainan sa tanghalian; tiyaking malinis at ligtas ang pagkain, dining area at kitchen."
  },
  "V9": {
    "code": "V9",
    "role": "Afternoon Merienda Host",
    "responsibilities": "Maghanda ng panghapong meryenda, inuming tubig, at pahingahan; bantayan ang kalagayan ng mga bisita at agad sabihan si Host Group Lead (Bro. Paulo) kung may problema."
  },
  "V10": {
    "code": "V10",
    "role": "Guest Care Host",
    "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
  }
};

const MASTER_SCHEDULE = [
  {
    "order": 1,
    "time": "7:15 AM",
    "activity": "Pickup at Okada Manila",
    "reminders": ""
  },
  {
    "order": 2,
    "time": "07:15 - 09:45 AM",
    "activity": "Van ride to Kingdom Hall",
    "reminders": ""
  },
  {
    "order": 3,
    "time": "09:45 - 10:00 AM",
    "activity": "Welcome and orientation",
    "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates."
  },
  {
    "order": 4,
    "time": "10:00 - 10:30 AM",
    "activity": "Tricycle ride to AM ministry",
    "reminders": ""
  },
  {
    "order": 5,
    "time": "10:30 - 11:30 AM",
    "activity": "Morning ministry appointments",
    "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry."
  },
  {
    "order": 6,
    "time": "11:30 - 12:00 PM",
    "activity": "Tricycle ride to lunch location",
    "reminders": "Location: Zoleta's residence."
  },
  {
    "order": 7,
    "time": "12:00 - 01:00 PM",
    "activity": "Lunch & association",
    "reminders": "Pakisuyong tiyakin na ready na ang lunch ng mga delagates by 12:00 PM."
  },
  {
    "order": 8,
    "time": "01:00 - 01:30 PM",
    "activity": "Transfer to afternoon host venue",
    "reminders": "Location: Soco's residence."
  },
  {
    "order": 9,
    "time": "01:30 - 03:00 PM",
    "activity": "Afternoon association and activity",
    "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities."
  },
  {
    "order": 10,
    "time": "02:00 - 03:00 PM",
    "activity": "Afternoon merienda preparation",
    "reminders": ""
  },
  {
    "order": 11,
    "time": "03:00 - 03:30 PM",
    "activity": "Afternoon merienda & association",
    "reminders": ""
  },
  {
    "order": 12,
    "time": "03:30 - 04:00 PM",
    "activity": "Tricycle ride to territory PM ministry",
    "reminders": ""
  },
  {
    "order": 13,
    "time": "03:30 - 05:00 PM",
    "activity": "Flexible afternoon ministry",
    "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry."
  },
  {
    "order": 14,
    "time": "05:00 - 05:15 PM",
    "activity": "Transfer to early dinner venue",
    "reminders": "Location: TBA."
  },
  {
    "order": 15,
    "time": "05:15 - 06:00 PM",
    "activity": "Early dinner",
    "reminders": ""
  },
  {
    "order": 16,
    "time": "06:00 - 06:15 PM",
    "activity": "Return to Kingdom Hall",
    "reminders": ""
  },
  {
    "order": 17,
    "time": "06:15 - 06:45 PM",
    "activity": "Souvenir handoff and farewell",
    "reminders": "Tiyakin na nasa Kingdom Hall na kayo nang 6:00 PM para sa farewell and souvenir handoff."
  },
  {
    "order": 18,
    "time": "06:45 - 09:00 PM",
    "activity": "Van ride to Okada Manila",
    "reminders": ""
  },
  {
    "order": 19,
    "time": "9:00 PM",
    "activity": "Arrival at Okada Manila",
    "reminders": ""
  },
  {
    "order": 20,
    "time": "As needed",
    "activity": "On-call Backup Vehicle",
    "reminders": ""
  }
];

const VOLUNTEERS_LIST = [
  {
    "name": "Aija Mae Pormilos",
    "codes": [
      "V2",
      "V9",
      "V10"
    ],
    "rawRoles": [
      "AM Ministry Partner",
      "Afternoon Merienda Prep",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V2",
        "title": "Ministry Lead",
        "responsibilities": "Kumpirmahin nang maaga ang Bible study o return visit; manguna sa panalangin at briefing sa ministeryo; maghanda ng alternatibong plano sa pagpapatotoo kung kailangan; makipag-usap sa Tricycle Transport Lead Driver (Bro. Howell) para sa tricycle ride."
      },
      {
        "code": "V9",
        "title": "Afternoon Merienda Host",
        "responsibilities": "Maghanda ng panghapong meryenda, inuming tubig, at pahingahan; bantayan ang kalagayan ng mga bisita at agad sabihan si Host Group Lead (Bro. Paulo) kung may problema."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Morning ministry appointments",
        "time": "10:30 - 11:30 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry.",
        "order": 5,
        "notes": "Partner with Sis. Vanessa Maclang."
      },
      {
        "activity": "Afternoon association and activity",
        "time": "01:30 - 03:00 PM",
        "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities.",
        "order": 9,
        "notes": ""
      },
      {
        "activity": "Afternoon merienda preparation",
        "time": "02:00 - 03:00 PM",
        "reminders": "",
        "order": 10,
        "notes": ""
      }
    ]
  },
  {
    "name": "Amiel Joshua Zoleta",
    "codes": [
      "V6b",
      "V8"
    ],
    "rawRoles": [
      "Backup/Emergency Car",
      "Lunch Host"
    ],
    "roles": [
      {
        "code": "V6b",
        "title": "Backup Driver",
        "responsibilities": "Naka-standby sakaling magkaroon ng sira o aberya sa pangunahing sasakyan. Maging ready at open ang contact line sa Transport Coordinator (Bro. Francis)  sa lahat ng oras."
      },
      {
        "code": "V8",
        "title": "Lunch Host",
        "responsibilities": "Ihanda ang lugar ng kakainan sa tanghalian; tiyaking malinis at ligtas ang pagkain, dining area at kitchen."
      }
    ],
    "activities": [
      {
        "activity": "Lunch & association",
        "time": "12:00 - 01:00 PM",
        "reminders": "Pakisuyong tiyakin na ready na ang lunch ng mga delagates by 12:00 PM.",
        "order": 7,
        "notes": ""
      },
      {
        "activity": "On-call Backup Vehicle",
        "time": "As needed",
        "reminders": "",
        "order": 20,
        "notes": ""
      }
    ]
  },
  {
    "name": "Ann Mariel Zoleta",
    "codes": [
      "V8"
    ],
    "rawRoles": [
      "Lunch Host"
    ],
    "roles": [
      {
        "code": "V8",
        "title": "Lunch Host",
        "responsibilities": "Ihanda ang lugar ng kakainan sa tanghalian; tiyaking malinis at ligtas ang pagkain, dining area at kitchen."
      }
    ],
    "activities": [
      {
        "activity": "Lunch & association",
        "time": "12:00 - 01:00 PM",
        "reminders": "Pakisuyong tiyakin na ready na ang lunch ng mga delagates by 12:00 PM.",
        "order": 7,
        "notes": ""
      }
    ]
  },
  {
    "name": "Arlene Enriquez",
    "codes": [
      "V3",
      "V9",
      "V10"
    ],
    "rawRoles": [
      "PM Ministry Partner (with Lorie)",
      "Afternoon Merienda Prep",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V3",
        "title": "Ministry Partner / Interpreter",
        "responsibilities": "Tumulong sa pag-aaral o return visit; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
      },
      {
        "code": "V9",
        "title": "Afternoon Merienda Host",
        "responsibilities": "Maghanda ng panghapong meryenda, inuming tubig, at pahingahan; bantayan ang kalagayan ng mga bisita at agad sabihan si Host Group Lead (Bro. Paulo) kung may problema."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Afternoon association and activity",
        "time": "01:30 - 03:00 PM",
        "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities.",
        "order": 9,
        "notes": ""
      },
      {
        "activity": "Afternoon merienda preparation",
        "time": "02:00 - 03:00 PM",
        "reminders": "",
        "order": 10,
        "notes": ""
      },
      {
        "activity": "Flexible afternoon ministry",
        "time": "03:30 - 05:00 PM",
        "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry.",
        "order": 13,
        "notes": "Partner with Sis. Lorinda Soco."
      }
    ]
  },
  {
    "name": "Arnold Cabrales Sr.",
    "codes": [
      "V6"
    ],
    "rawRoles": [
      "Van Driver (To & From)",
      "Van Pick-up",
      "Van Drop-off"
    ],
    "roles": [
      {
        "code": "V6",
        "title": "Van Driver",
        "responsibilities": "Magplano ng ruta sa pagsundo at paghatid sa Okada; alamin ang lagay ng kalsada at trapiko; ihanda ang van, seatbelts, at nasa kondisyon ang sasakyan; makipagtulungan sa Transport Coordinator (Bro. Francis) para sa transport ng mga delegates."
      }
    ],
    "activities": [
      {
        "activity": "Pickup at Okada Manila",
        "time": "7:15 AM",
        "reminders": "",
        "order": 1,
        "notes": ""
      },
      {
        "activity": "Van ride to Kingdom Hall",
        "time": "07:15 - 09:45 AM",
        "reminders": "",
        "order": 2,
        "notes": ""
      },
      {
        "activity": "Van ride to Okada Manila",
        "time": "06:45 - 09:00 PM",
        "reminders": "",
        "order": 18,
        "notes": ""
      },
      {
        "activity": "Arrival at Okada Manila",
        "time": "9:00 PM",
        "reminders": "",
        "order": 19,
        "notes": ""
      }
    ]
  },
  {
    "name": "Arnulfo Sebastian",
    "codes": [
      "V6a",
      "V10"
    ],
    "rawRoles": [
      "Van Pick-up",
      "Van Drop-off",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V6a",
        "title": "Van Transport Assistant",
        "responsibilities": "Tumulong sa Transport Coordinator (Bro. Francis) at sa van driver (Bro. Arnold) upang mapanatiling ligtas at komportable ang mga delegates habang bumibiyahe."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Pickup at Okada Manila",
        "time": "7:15 AM",
        "reminders": "",
        "order": 1,
        "notes": ""
      },
      {
        "activity": "Van ride to Kingdom Hall",
        "time": "07:15 - 09:45 AM",
        "reminders": "",
        "order": 2,
        "notes": ""
      },
      {
        "activity": "Van ride to Okada Manila",
        "time": "06:45 - 09:00 PM",
        "reminders": "",
        "order": 18,
        "notes": ""
      },
      {
        "activity": "Arrival at Okada Manila",
        "time": "9:00 PM",
        "reminders": "",
        "order": 19,
        "notes": ""
      }
    ]
  },
  {
    "name": "Bethzaida Francisco",
    "codes": [
      "V7"
    ],
    "rawRoles": [
      "Travel Food Pack Prep"
    ],
    "roles": [
      {
        "code": "V7",
        "title": "Morning Merienda Host",
        "responsibilities": "Maghanda ng pang-umagang meryenda, inuming tubig, at malinis na lugar; tumulong sa tanghalian at panghapon na meryenda kung kinakailangan."
      }
    ],
    "activities": []
  },
  {
    "name": "Cathlyn Berba",
    "codes": [
      "V6a",
      "V10"
    ],
    "rawRoles": [
      "Welcomer",
      "Souvenir Prep/Handoff",
      "Van Drop-off"
    ],
    "roles": [
      {
        "code": "V6a",
        "title": "Van Transport Assistant",
        "responsibilities": "Tumulong sa Transport Coordinator (Bro. Francis) at sa van driver (Bro. Arnold) upang mapanatiling ligtas at komportable ang mga delegates habang bumibiyahe."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Souvenir handoff and farewell",
        "time": "06:15 - 06:45 PM",
        "reminders": "Tiyakin na nasa Kingdom Hall na kayo nang 6:00 PM para sa farewell and souvenir handoff.",
        "order": 17,
        "notes": ""
      },
      {
        "activity": "Van ride to Okada Manila",
        "time": "06:45 - 09:00 PM",
        "reminders": "",
        "order": 18,
        "notes": ""
      },
      {
        "activity": "Arrival at Okada Manila",
        "time": "9:00 PM",
        "reminders": "",
        "order": 19,
        "notes": ""
      }
    ]
  },
  {
    "name": "Ellyza Andrea Sebastian",
    "codes": [
      "V3",
      "V10"
    ],
    "rawRoles": [
      "AM Ministry Partner (with Julie)",
      "Welcomer"
    ],
    "roles": [
      {
        "code": "V3",
        "title": "Ministry Partner / Interpreter",
        "responsibilities": "Tumulong sa pag-aaral o return visit; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Morning ministry appointments",
        "time": "10:30 - 11:30 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry.",
        "order": 5,
        "notes": "Partner with Sis. Julie Ann Aguilar."
      }
    ]
  },
  {
    "name": "Francis Francisco",
    "codes": [
      "V1a",
      "V3a",
      "V10"
    ],
    "rawRoles": [
      "Transport & Emergency Coordinator",
      "Cart Witnessing",
      "Van Pick-up",
      "Van Drop-off",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V1a",
        "title": "Transport Coordinator",
        "responsibilities": "Tiyakin na magkakasama at komportable ang apat na delegates sa pagpick-up at turnover sa Okada; point person in case na magkaroon ng aberya ang sasakyan. Tiyakin na ready ang van driver at ang driver ng backup vehicle."
      },
      {
        "code": "V3a",
        "title": "Ministry Partner / Interpreter (Cart Witnessing)",
        "responsibilities": "Tumulong sa pagdadala at setup ng cart at mga literatura; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Pickup at Okada Manila",
        "time": "7:15 AM",
        "reminders": "",
        "order": 1,
        "notes": ""
      },
      {
        "activity": "Van ride to Kingdom Hall",
        "time": "07:15 - 09:45 AM",
        "reminders": "",
        "order": 2,
        "notes": ""
      },
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Morning ministry appointments",
        "time": "10:30 - 11:30 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry.",
        "order": 5,
        "notes": "Wait for assignment from Ministry Coordinator (Bro. Jeremy)."
      },
      {
        "activity": "Afternoon association and activity",
        "time": "01:30 - 03:00 PM",
        "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities.",
        "order": 9,
        "notes": ""
      },
      {
        "activity": "Afternoon merienda & association",
        "time": "03:00 - 03:30 PM",
        "reminders": "",
        "order": 11,
        "notes": ""
      },
      {
        "activity": "Flexible afternoon ministry",
        "time": "03:30 - 05:00 PM",
        "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry.",
        "order": 13,
        "notes": "Wait for assignment from Ministry Coordinator (Bro. Jeremy)."
      },
      {
        "activity": "Souvenir handoff and farewell",
        "time": "06:15 - 06:45 PM",
        "reminders": "Tiyakin na nasa Kingdom Hall na kayo nang 6:00 PM para sa farewell and souvenir handoff.",
        "order": 17,
        "notes": ""
      },
      {
        "activity": "Van ride to Okada Manila",
        "time": "06:45 - 09:00 PM",
        "reminders": "",
        "order": 18,
        "notes": ""
      },
      {
        "activity": "Arrival at Okada Manila",
        "time": "9:00 PM",
        "reminders": "",
        "order": 19,
        "notes": ""
      }
    ]
  },
  {
    "name": "Hollie Berba",
    "codes": [
      "V6a",
      "V10"
    ],
    "rawRoles": [
      "Welcomer",
      "Souvenir Prep/Handoff",
      "Van Drop-off"
    ],
    "roles": [
      {
        "code": "V6a",
        "title": "Van Transport Assistant",
        "responsibilities": "Tumulong sa Transport Coordinator (Bro. Francis) at sa van driver (Bro. Arnold) upang mapanatiling ligtas at komportable ang mga delegates habang bumibiyahe."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Souvenir handoff and farewell",
        "time": "06:15 - 06:45 PM",
        "reminders": "Tiyakin na nasa Kingdom Hall na kayo nang 6:00 PM para sa farewell and souvenir handoff.",
        "order": 17,
        "notes": ""
      },
      {
        "activity": "Van ride to Okada Manila",
        "time": "06:45 - 09:00 PM",
        "reminders": "",
        "order": 18,
        "notes": ""
      },
      {
        "activity": "Arrival at Okada Manila",
        "time": "9:00 PM",
        "reminders": "",
        "order": 19,
        "notes": ""
      }
    ]
  },
  {
    "name": "Howell Dela Cruz",
    "codes": [
      "V1c",
      "V4"
    ],
    "rawRoles": [
      "Food Coordinator",
      "Tricycle Driver"
    ],
    "roles": [
      {
        "code": "V1c",
        "title": "Hospitality Coordinator",
        "responsibilities": "Titiyakin na magiging maayos at safe ang ginagawang paghahanda ng mga meals at ng mga volunteers na naka-assign sa paghahanda ng mga pagkain; alamin ang bawal o gustong pagkain ng mga bisita."
      },
      {
        "code": "V4",
        "title": "Tricycle Transport Lead Driver",
        "responsibilities": "Tiyakin ang mga safe na ruta, bilang ng sakay at maayos na tricycle; safe na pagmamaneho ng nakatalagang tricycle; i-coordinate sa Host Group Lead (Bro. Paulo) ang bawat biyahe sa lugar."
      }
    ],
    "activities": [
      {
        "activity": "Tricycle ride to AM ministry",
        "time": "10:00 - 10:30 AM",
        "reminders": "",
        "order": 4,
        "notes": ""
      },
      {
        "activity": "Tricycle ride to lunch location",
        "time": "11:30 - 12:00 PM",
        "reminders": "Location: Zoleta's residence.",
        "order": 6,
        "notes": ""
      },
      {
        "activity": "Transfer to afternoon host venue",
        "time": "01:00 - 01:30 PM",
        "reminders": "Location: Soco's residence.",
        "order": 8,
        "notes": ""
      },
      {
        "activity": "Tricycle ride to territory PM ministry",
        "time": "03:30 - 04:00 PM",
        "reminders": "",
        "order": 12,
        "notes": ""
      },
      {
        "activity": "Transfer to early dinner venue",
        "time": "05:00 - 05:15 PM",
        "reminders": "Location: TBA.",
        "order": 14,
        "notes": ""
      },
      {
        "activity": "Return to Kingdom Hall",
        "time": "06:00 - 06:15 PM",
        "reminders": "",
        "order": 16,
        "notes": ""
      }
    ]
  },
  {
    "name": "Huward Berba",
    "codes": [
      "V5",
      "V6a"
    ],
    "rawRoles": [
      "Tricycle Driver",
      "Welcomer",
      "Van Drop-off"
    ],
    "roles": [
      {
        "code": "V5",
        "title": "Tricycle Driver",
        "responsibilities": "Tiyakin na safe at maayos ang tricycle; safe na pagmamaneho; tulungan ang mga bisita sa pagsakay at pagbaba; laging makipag-ugnayan sa Tricycle Transport Lead Driver (Bro. Howell)."
      },
      {
        "code": "V6a",
        "title": "Van Transport Assistant",
        "responsibilities": "Tumulong sa Transport Coordinator (Bro. Francis) at sa van driver (Bro. Arnold) upang mapanatiling ligtas at komportable ang mga delegates habang bumibiyahe."
      }
    ],
    "activities": [
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Tricycle ride to AM ministry",
        "time": "10:00 - 10:30 AM",
        "reminders": "",
        "order": 4,
        "notes": ""
      },
      {
        "activity": "Tricycle ride to lunch location",
        "time": "11:30 - 12:00 PM",
        "reminders": "Location: Zoleta's residence.",
        "order": 6,
        "notes": ""
      },
      {
        "activity": "Transfer to afternoon host venue",
        "time": "01:00 - 01:30 PM",
        "reminders": "Location: Soco's residence.",
        "order": 8,
        "notes": ""
      },
      {
        "activity": "Tricycle ride to territory PM ministry",
        "time": "03:30 - 04:00 PM",
        "reminders": "",
        "order": 12,
        "notes": ""
      },
      {
        "activity": "Transfer to early dinner venue",
        "time": "05:00 - 05:15 PM",
        "reminders": "Location: TBA.",
        "order": 14,
        "notes": ""
      },
      {
        "activity": "Return to Kingdom Hall",
        "time": "06:00 - 06:15 PM",
        "reminders": "",
        "order": 16,
        "notes": ""
      }
    ]
  },
  {
    "name": "Jeremy Barte",
    "codes": [
      "V1b",
      "V2a"
    ],
    "rawRoles": [
      "Ministry Coordinator",
      "Cart Witnessing Lead",
      "Welcomer"
    ],
    "roles": [
      {
        "code": "V1b",
        "title": "Ministry Coordinator",
        "responsibilities": "Mangangasiwa sa field service meeting, mga kaayusan sa safety sa ministeryo at pagpa-partner ng mga delegates sa local publishers."
      },
      {
        "code": "V2a",
        "title": "Ministry Lead (Cart Witnessing)",
        "responsibilities": "Tiyakin na safe ang location, may equipment at literatura para sa cart witnessing; manguna sa panalangin at briefing sa ministeryo; maghanda ng alternatibong plano sa pagpapatotoo kung kailangan; makipag-usap sa Tricycle Transport Lead Driver (Bro. Howell) para sa tricycle ride."
      }
    ],
    "activities": [
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Morning ministry appointments",
        "time": "10:30 - 11:30 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry.",
        "order": 5,
        "notes": ""
      },
      {
        "activity": "Flexible afternoon ministry",
        "time": "03:30 - 05:00 PM",
        "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry.",
        "order": 13,
        "notes": ""
      }
    ]
  },
  {
    "name": "John Michael Sta. Cruz",
    "codes": [
      "V3a"
    ],
    "rawRoles": [
      "Cart Witnessing Partner"
    ],
    "roles": [
      {
        "code": "V3a",
        "title": "Ministry Partner / Interpreter (Cart Witnessing)",
        "responsibilities": "Tumulong sa pagdadala at setup ng cart at mga literatura; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
      }
    ],
    "activities": [
      {
        "activity": "Morning ministry appointments",
        "time": "10:30 - 11:30 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry.",
        "order": 5,
        "notes": "Wait for assignment from Ministry Coordinator (Bro. Jeremy)."
      },
      {
        "activity": "Flexible afternoon ministry",
        "time": "03:30 - 05:00 PM",
        "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry.",
        "order": 13,
        "notes": "Wait for assignment from Ministry Coordinator (Bro. Jeremy)."
      }
    ]
  },
  {
    "name": "Julie Ann Aguilar",
    "codes": [
      "V2"
    ],
    "rawRoles": [
      "AM Ministry Partner"
    ],
    "roles": [
      {
        "code": "V2",
        "title": "Ministry Lead",
        "responsibilities": "Kumpirmahin nang maaga ang Bible study o return visit; manguna sa panalangin at briefing sa ministeryo; maghanda ng alternatibong plano sa pagpapatotoo kung kailangan; makipag-usap sa Tricycle Transport Lead Driver (Bro. Howell) para sa tricycle ride."
      }
    ],
    "activities": [
      {
        "activity": "Morning ministry appointments",
        "time": "10:30 - 11:30 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry.",
        "order": 5,
        "notes": "Partner with Sis. Ellyza Andrea Sebastian."
      }
    ]
  },
  {
    "name": "Lira Zoleta",
    "codes": [
      "V8"
    ],
    "rawRoles": [
      "Lunch Host"
    ],
    "roles": [
      {
        "code": "V8",
        "title": "Lunch Host",
        "responsibilities": "Ihanda ang lugar ng kakainan sa tanghalian; tiyaking malinis at ligtas ang pagkain, dining area at kitchen."
      }
    ],
    "activities": [
      {
        "activity": "Lunch & association",
        "time": "12:00 - 01:00 PM",
        "reminders": "Pakisuyong tiyakin na ready na ang lunch ng mga delagates by 12:00 PM.",
        "order": 7,
        "notes": ""
      }
    ]
  },
  {
    "name": "Lizel Sebastian",
    "codes": [
      "V9",
      "V10"
    ],
    "rawRoles": [
      "Welcomer",
      "Souvenir Prep/Handoff",
      "Afternoon Merienda Prep",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V9",
        "title": "Afternoon Merienda Host",
        "responsibilities": "Maghanda ng panghapong meryenda, inuming tubig, at pahingahan; bantayan ang kalagayan ng mga bisita at agad sabihan si Host Group Lead (Bro. Paulo) kung may problema."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Afternoon association and activity",
        "time": "01:30 - 03:00 PM",
        "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities.",
        "order": 9,
        "notes": ""
      },
      {
        "activity": "Afternoon merienda preparation",
        "time": "02:00 - 03:00 PM",
        "reminders": "",
        "order": 10,
        "notes": ""
      },
      {
        "activity": "Early dinner",
        "time": "05:15 - 06:00 PM",
        "reminders": "",
        "order": 15,
        "notes": ""
      },
      {
        "activity": "Souvenir handoff and farewell",
        "time": "06:15 - 06:45 PM",
        "reminders": "Tiyakin na nasa Kingdom Hall na kayo nang 6:00 PM para sa farewell and souvenir handoff.",
        "order": 17,
        "notes": ""
      },
      {
        "activity": "Souvenir handoff and farewell",
        "time": "06:15 - 06:45 PM",
        "reminders": "Tiyakin na nasa Kingdom Hall na kayo nang 6:00 PM para sa farewell and souvenir handoff.",
        "order": 17,
        "notes": ""
      }
    ]
  },
  {
    "name": "Lorinda Soco",
    "codes": [
      "V2",
      "V10"
    ],
    "rawRoles": [
      "PM Ministry Partner",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V2",
        "title": "Ministry Lead",
        "responsibilities": "Kumpirmahin nang maaga ang Bible study o return visit; manguna sa panalangin at briefing sa ministeryo; maghanda ng alternatibong plano sa pagpapatotoo kung kailangan; makipag-usap sa Tricycle Transport Lead Driver (Bro. Howell) para sa tricycle ride."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Afternoon association and activity",
        "time": "01:30 - 03:00 PM",
        "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities.",
        "order": 9,
        "notes": ""
      },
      {
        "activity": "Flexible afternoon ministry",
        "time": "03:30 - 05:00 PM",
        "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry.",
        "order": 13,
        "notes": "Partner with Sis. Arlene Enriquez."
      }
    ]
  },
  {
    "name": "Lydia Aguilar",
    "codes": [
      "V2",
      "V10"
    ],
    "rawRoles": [
      "PM Ministry Partner",
      "Welcomer"
    ],
    "roles": [
      {
        "code": "V2",
        "title": "Ministry Lead",
        "responsibilities": "Kumpirmahin nang maaga ang Bible study o return visit; manguna sa panalangin at briefing sa ministeryo; maghanda ng alternatibong plano sa pagpapatotoo kung kailangan; makipag-usap sa Tricycle Transport Lead Driver (Bro. Howell) para sa tricycle ride."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Flexible afternoon ministry",
        "time": "03:30 - 05:00 PM",
        "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry.",
        "order": 13,
        "notes": "Partner with Sis. Milca Joyce Francisco."
      }
    ]
  },
  {
    "name": "Malou Dela Cruz",
    "codes": [
      "V10"
    ],
    "rawRoles": [
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Afternoon association and activity",
        "time": "01:30 - 03:00 PM",
        "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities.",
        "order": 9,
        "notes": ""
      }
    ]
  },
  {
    "name": "Milca Joyce Francisco",
    "codes": [
      "V3",
      "V6a",
      "V9",
      "V10"
    ],
    "rawRoles": [
      "PM Ministry Partner (with Lydia)",
      "Welcomer",
      "Van Pick-up",
      "Van Drop-off",
      "Merienda Prep",
      "Souvenir Prep",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V3",
        "title": "Ministry Partner / Interpreter",
        "responsibilities": "Tumulong sa pag-aaral o return visit; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
      },
      {
        "code": "V6a",
        "title": "Van Transport Assistant",
        "responsibilities": "Tumulong sa Transport Coordinator (Bro. Francis) at sa van driver (Bro. Arnold) upang mapanatiling ligtas at komportable ang mga delegates habang bumibiyahe."
      },
      {
        "code": "V9",
        "title": "Afternoon Merienda Host",
        "responsibilities": "Maghanda ng panghapong meryenda, inuming tubig, at pahingahan; bantayan ang kalagayan ng mga bisita at agad sabihan si Host Group Lead (Bro. Paulo) kung may problema."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": [
      {
        "activity": "Pickup at Okada Manila",
        "time": "7:15 AM",
        "reminders": "",
        "order": 1,
        "notes": ""
      },
      {
        "activity": "Van ride to Kingdom Hall",
        "time": "07:15 - 09:45 AM",
        "reminders": "",
        "order": 2,
        "notes": ""
      },
      {
        "activity": "Welcome and orientation",
        "time": "09:45 - 10:00 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:00 AM para makapaghanda sa pag-welcome sa mga delegates.",
        "order": 3,
        "notes": ""
      },
      {
        "activity": "Afternoon association and activity",
        "time": "01:30 - 03:00 PM",
        "reminders": "Tiyakin na kayo ay nasa afternoon merienda location (Soco's residence) ng 1:30 PM para sa afternoon association & activities.",
        "order": 9,
        "notes": ""
      },
      {
        "activity": "Afternoon merienda preparation",
        "time": "02:00 - 03:00 PM",
        "reminders": "",
        "order": 10,
        "notes": ""
      },
      {
        "activity": "Flexible afternoon ministry",
        "time": "03:30 - 05:00 PM",
        "reminders": "In case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa dinner location (TBA) na ang delegate nang 5:15 PM after ng afternoon ministry.",
        "order": 13,
        "notes": "Partner with Sis. Lydia Aguilar."
      },
      {
        "activity": "Souvenir handoff and farewell",
        "time": "06:15 - 06:45 PM",
        "reminders": "Tiyakin na nasa Kingdom Hall na kayo nang 6:00 PM para sa farewell and souvenir handoff.",
        "order": 17,
        "notes": ""
      }
    ]
  },
  {
    "name": "Noemi Zoleta",
    "codes": [
      "V8"
    ],
    "rawRoles": [
      "Lunch Host"
    ],
    "roles": [
      {
        "code": "V8",
        "title": "Lunch Host",
        "responsibilities": "Ihanda ang lugar ng kakainan sa tanghalian; tiyaking malinis at ligtas ang pagkain, dining area at kitchen."
      }
    ],
    "activities": [
      {
        "activity": "Lunch & association",
        "time": "12:00 - 01:00 PM",
        "reminders": "Pakisuyong tiyakin na ready na ang lunch ng mga delagates by 12:00 PM.",
        "order": 7,
        "notes": ""
      }
    ]
  },
  {
    "name": "Pierre Paulo Sebastian",
    "codes": [
      "V1",
      "V3a",
      "V10"
    ],
    "rawRoles": [
      "Hosting & Activities Coordinator",
      "Cart Witnessing",
      "Welcomer",
      "Afternoon Activities"
    ],
    "roles": [
      {
        "code": "V1",
        "title": "Host Group Lead",
        "responsibilities": "I-welcome ang mga delegates; ipaliwanag ang programa; panatilihing magkakasama at komportable ang apat na delegates; i-coordinate ang mga pagbabago, mag-headcount, at maayos na turnover sa Okada."
      },
      {
        "code": "V3a",
        "title": "Ministry Partner / Interpreter (Cart Witnessing)",
        "responsibilities": "Tumulong sa pagdadala at setup ng cart at mga literatura; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
      },
      {
        "code": "V10",
        "title": "Guest Care Host",
        "responsibilities": "Tumulong kay Host Group Lead (Bro. Paulo) sa mga activities gaya ng pag-welcome sa mga delegates at pag-handoff ng mga souvenirs."
      }
    ],
    "activities": []
  },
  {
    "name": "Samuel Barte",
    "codes": [
      "V5"
    ],
    "rawRoles": [
      "Tricycle Driver"
    ],
    "roles": [
      {
        "code": "V5",
        "title": "Tricycle Driver",
        "responsibilities": "Tiyakin na safe at maayos ang tricycle; safe na pagmamaneho; tulungan ang mga bisita sa pagsakay at pagbaba; laging makipag-ugnayan sa Tricycle Transport Lead Driver (Bro. Howell)."
      }
    ],
    "activities": [
      {
        "activity": "Tricycle ride to AM ministry",
        "time": "10:00 - 10:30 AM",
        "reminders": "",
        "order": 4,
        "notes": ""
      },
      {
        "activity": "Tricycle ride to lunch location",
        "time": "11:30 - 12:00 PM",
        "reminders": "Location: Zoleta's residence.",
        "order": 6,
        "notes": ""
      },
      {
        "activity": "Transfer to afternoon host venue",
        "time": "01:00 - 01:30 PM",
        "reminders": "Location: Soco's residence.",
        "order": 8,
        "notes": ""
      },
      {
        "activity": "Tricycle ride to territory PM ministry",
        "time": "03:30 - 04:00 PM",
        "reminders": "",
        "order": 12,
        "notes": ""
      },
      {
        "activity": "Transfer to early dinner venue",
        "time": "05:00 - 05:15 PM",
        "reminders": "Location: TBA.",
        "order": 14,
        "notes": ""
      },
      {
        "activity": "Return to Kingdom Hall",
        "time": "06:00 - 06:15 PM",
        "reminders": "",
        "order": 16,
        "notes": ""
      }
    ]
  },
  {
    "name": "Vanessa Maclang",
    "codes": [
      "V3"
    ],
    "rawRoles": [
      "AM Ministry Partner (with Ajie)"
    ],
    "roles": [
      {
        "code": "V3",
        "title": "Ministry Partner / Interpreter",
        "responsibilities": "Tumulong sa pag-aaral o return visit; mag-translate sa English o Tagalog kung kailangan; tiyaking komportable at safe ang pagsama ng delegate."
      }
    ],
    "activities": [
      {
        "activity": "Morning ministry appointments",
        "time": "10:30 - 11:30 AM",
        "reminders": "Dapat na nasa Kingdom Hall na ng 9:45 AM para sa service meeting at pagpapartner ng delegate.\nIn case man na kailangan ng delegate na mag-CR sa lugar ng ministeryo, pakisuyo na maghanap ng malinis at maayos na lugar para sa kaniya.\nPakisuyo na siguruhing nasa lunch location (Zoleta's residence) na ang delegate nang 12:00 PM after ng morning ministry.",
        "order": 5,
        "notes": "Partner with Sis. Aija Mae Pormilos."
      }
    ]
  }
];

// Helper Utilities
const VolunteerService = {
  getAllNames: function() {
    return VOLUNTEERS_LIST.map(v => v.name);
  },

  getVolunteerByName: function(name) {
    if (!name) return null;
    const cleanName = name.trim().toLowerCase();
    return VOLUNTEERS_LIST.find(v => v.name.toLowerCase() === cleanName) || null;
  },

  AUTH_TTL_MS: 3 * 24 * 60 * 60 * 1000, // 3 Days in milliseconds

  verifyPasscode: function(code) {
    if (!code) return false;
    return code.trim().toLowerCase() === VOLUNTEER_CONFIG.passcode.toLowerCase();
  },

  isAuthenticated: function() {
    try {
      const isAuth = localStorage.getItem('lfd_v2_auth_volunteer') === 'true';
      const expiryStr = localStorage.getItem('lfd_v2_auth_volunteer_expiry');
      const name = localStorage.getItem('lfd_v2_volunteer_name');
      if (isAuth && name && expiryStr) {
        const expiry = parseInt(expiryStr, 10);
        if (Date.now() < expiry) {
          return true;
        }
        // Expired after 3 days: clear
        this.logout();
        return false;
      }
    } catch (e) {}

    // Fallback to sessionStorage
    try {
      return sessionStorage.getItem('lfd_v2_auth_volunteer') === 'true';
    } catch (e) {
      return false;
    }
  },

  getCurrentVolunteerName: function() {
    try {
      if (this.isAuthenticated()) {
        const localName = localStorage.getItem('lfd_v2_volunteer_name');
        if (localName) return localName;
      }
    } catch (e) {}
    try {
      return sessionStorage.getItem('lfd_v2_volunteer_name') || '';
    } catch (e) {
      return '';
    }
  },

  setCurrentVolunteer: function(name) {
    const expiry = Date.now() + this.AUTH_TTL_MS;
    try {
      localStorage.setItem('lfd_v2_auth_volunteer', 'true');
      localStorage.setItem('lfd_v2_auth_volunteer_expiry', expiry.toString());
      localStorage.setItem('lfd_v2_volunteer_name', name);
    } catch (e) {}
    try {
      sessionStorage.setItem('lfd_v2_auth_volunteer', 'true');
      sessionStorage.setItem('lfd_v2_volunteer_name', name);
    } catch (e) {}
  },

  logout: function() {
    try {
      localStorage.removeItem('lfd_v2_auth_volunteer');
      localStorage.removeItem('lfd_v2_auth_volunteer_expiry');
      localStorage.removeItem('lfd_v2_volunteer_name');
    } catch (e) {}
    try {
      sessionStorage.removeItem('lfd_v2_auth_volunteer');
      sessionStorage.removeItem('lfd_v2_volunteer_name');
    } catch (e) {}
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    VOLUNTEER_CONFIG,
    MASTER_ROLES,
    MASTER_SCHEDULE,
    VOLUNTEERS_LIST,
    VolunteerService
  };
}
