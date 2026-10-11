const courtroomData = {
  judge: {
    en: {
      title: 'Presiding Judge',
      category: 'Courtroom Role',
      description:
        'The Presiding Judge conducts court proceedings and ensures that the hearing is fair and orderly.',
      responsibilities: [
        'Conducts and manages court proceedings',
        'Hears arguments and examines the evidence presented',
        'Ensures that both sides receive a fair hearing',
        'Gives judicial orders and decisions',
      ],
    },
    hi: {
      title: 'पीठासीन न्यायाधीश',
      category: 'न्यायालय की भूमिका',
      description:
        'पीठासीन न्यायाधीश न्यायालय की कार्यवाही संचालित करते हैं और यह सुनिश्चित करते हैं कि सुनवाई निष्पक्ष और व्यवस्थित हो।',
      responsibilities: [
        'न्यायालय की कार्यवाही संचालित करते हैं',
        'दलीलें सुनते हैं और प्रस्तुत साक्ष्यों पर विचार करते हैं',
        'दोनों पक्षों को निष्पक्ष सुनवाई सुनिश्चित करते हैं',
        'न्यायिक आदेश और निर्णय देते हैं',
      ],
    },
  },

  clerk: {
    en: {
      title: 'Bench Clerk / Reader',
      category: 'Courtroom Role',
      description:
        'The Bench Clerk or Reader assists the Judge during court proceedings and helps manage important court records and case information.',
      responsibilities: [
        'Maintains and organizes court records',
        'Calls out case numbers and case names',
        'Assists the Judge with case files and documents',
        'Helps maintain the order of cases during proceedings',
      ],
    },
    hi: {
      title: 'बेंच क्लर्क / रीडर',
      category: 'न्यायालय की भूमिका',
      description:
        'बेंच क्लर्क या रीडर न्यायालय की कार्यवाही के दौरान न्यायाधीश की सहायता करते हैं और महत्वपूर्ण न्यायालयीन अभिलेखों एवं मामलों की जानकारी व्यवस्थित रखते हैं।',
      responsibilities: [
        'न्यायालयीन अभिलेखों को व्यवस्थित रखते हैं',
        'मामले के नंबर और नाम पुकारते हैं',
        'मामले की फाइलों और दस्तावेजों में न्यायाधीश की सहायता करते हैं',
        'मामलों की कार्यवाही को व्यवस्थित रखने में सहायता करते हैं',
      ],
    },
  },

  stenographer: {
    en: {
      title: 'Stenographer / Court Typist',
      category: 'Courtroom Role',
      description:
        'The Stenographer records important proceedings of the court and prepares official records as required.',
      responsibilities: [
        'Records important statements and proceedings',
        'Prepares and maintains court transcripts',
        'Types orders and other documents as directed',
        'Helps maintain an accurate record of proceedings',
      ],
    },
    hi: {
      title: 'आशुलिपिक / न्यायालय टाइपिस्ट',
      category: 'न्यायालय की भूमिका',
      description:
        'आशुलिपिक न्यायालय की महत्वपूर्ण कार्यवाही को दर्ज करते हैं और आवश्यकतानुसार आधिकारिक अभिलेख तैयार करते हैं।',
      responsibilities: [
        'महत्वपूर्ण बयानों और कार्यवाही को दर्ज करते हैं',
        'न्यायालयीन प्रतिलेख तैयार और व्यवस्थित करते हैं',
        'निर्देशानुसार आदेश और अन्य दस्तावेज टाइप करते हैं',
        'कार्यवाही का सटीक रिकॉर्ड बनाए रखने में सहायता करते हैं',
      ],
    },
  },

  prosecutor: {
    en: {
      title: 'Public Prosecutor',
      category: 'Courtroom Role',
      description:
        'The Public Prosecutor represents the State in criminal proceedings and presents the prosecution case before the court.',
      responsibilities: [
        'Represents the State in criminal cases',
        'Presents evidence and examines witnesses',
        'Presents arguments on behalf of the prosecution',
        'Assists the court in reaching a fair decision',
      ],
    },
    hi: {
      title: 'लोक अभियोजक',
      category: 'न्यायालय की भूमिका',
      description:
        'लोक अभियोजक आपराधिक मामलों में राज्य का प्रतिनिधित्व करते हैं और न्यायालय के समक्ष अभियोजन पक्ष का मामला प्रस्तुत करते हैं।',
      responsibilities: [
        'आपराधिक मामलों में राज्य का प्रतिनिधित्व करते हैं',
        'साक्ष्य प्रस्तुत करते हैं और गवाहों से पूछताछ करते हैं',
        'अभियोजन पक्ष की ओर से दलीलें प्रस्तुत करते हैं',
        'न्यायालय को निष्पक्ष निर्णय तक पहुंचने में सहायता करते हैं',
      ],
    },
  },

  defence: {
    en: {
      title: 'Defence Counsel',
      category: 'Courtroom Role',
      description:
        'The Defence Counsel represents and protects the legal interests of the accused during court proceedings.',
      responsibilities: [
        'Represents the accused before the court',
        'Challenges evidence presented by the prosecution',
        'Questions prosecution witnesses',
        'Presents arguments and evidence for the defence',
      ],
    },
    hi: {
      title: 'बचाव पक्ष के अधिवक्ता',
      category: 'न्यायालय की भूमिका',
      description:
        'बचाव पक्ष के अधिवक्ता न्यायालय की कार्यवाही के दौरान अभियुक्त के कानूनी हितों का प्रतिनिधित्व और संरक्षण करते हैं।',
      responsibilities: [
        'न्यायालय के समक्ष अभियुक्त का प्रतिनिधित्व करते हैं',
        'अभियोजन पक्ष द्वारा प्रस्तुत साक्ष्यों को चुनौती देते हैं',
        'अभियोजन पक्ष के गवाहों से प्रश्न करते हैं',
        'बचाव पक्ष की ओर से दलीलें और साक्ष्य प्रस्तुत करते हैं',
      ],
    },
  },

  junior: {
    en: {
      title: 'Legal Intern / Junior',
      category: 'Courtroom Role',
      description:
        'Legal interns and junior lawyers assist senior advocates with research, documents and other case-related work.',
      responsibilities: [
        'Assists senior advocates with case preparation',
        'Researches laws and previous judgments',
        'Organizes case documents and files',
        'Supports the advocate during court proceedings',
      ],
    },
    hi: {
      title: 'कानूनी प्रशिक्षु / जूनियर अधिवक्ता',
      category: 'न्यायालय की भूमिका',
      description:
        'कानूनी प्रशिक्षु और जूनियर अधिवक्ता वरिष्ठ अधिवक्ताओं को शोध, दस्तावेजों और मामले से संबंधित अन्य कार्यों में सहायता करते हैं।',
      responsibilities: [
        'मामले की तैयारी में वरिष्ठ अधिवक्ताओं की सहायता करते हैं',
        'कानून और पूर्व निर्णयों पर शोध करते हैं',
        'मामले के दस्तावेज और फाइलें व्यवस्थित करते हैं',
        'न्यायालय की कार्यवाही के दौरान अधिवक्ता की सहायता करते हैं',
      ],
    },
  },

  accused: {
    en: {
      title: 'Accused',
      category: 'Person in the Courtroom',
      description:
        'The accused is the person against whom an allegation or criminal charge has been brought. Being accused does not mean being guilty.',
      responsibilities: [
        'Has the right to a fair trial',
        'Can be represented by a lawyer',
        'Can respond to allegations according to law',
        'Is presumed innocent until proven guilty',
      ],
    },
    hi: {
      title: 'अभियुक्त',
      category: 'न्यायालय में व्यक्ति',
      description:
        'अभियुक्त वह व्यक्ति है जिसके विरुद्ध आरोप या आपराधिक मामला लाया गया है। अभियुक्त होना दोषी होने के समान नहीं है।',
      responsibilities: [
        'निष्पक्ष सुनवाई का अधिकार रखता है',
        'वकील द्वारा प्रतिनिधित्व प्राप्त कर सकता है',
        'कानून के अनुसार आरोपों का जवाब दे सकता है',
        'दोष सिद्ध होने तक निर्दोष माना जाता है',
      ],
    },
  },

  witness: {
    en: {
      title: 'Witness',
      category: 'Person in the Courtroom',
      description:
        'A witness provides information or testimony relevant to a case before the court.',
      responsibilities: [
        'Provides truthful testimony',
        'Answers questions during examination',
        'Provides relevant information or evidence',
        'Follows the directions of the court',
      ],
    },
    hi: {
      title: 'गवाह',
      category: 'न्यायालय में व्यक्ति',
      description:
        'गवाह न्यायालय के समक्ष मामले से संबंधित जानकारी या गवाही प्रस्तुत करता है।',
      responsibilities: [
        'सत्य और सही गवाही देता है',
        'पूछताछ के दौरान प्रश्नों के उत्तर देता है',
        'प्रासंगिक जानकारी या साक्ष्य प्रस्तुत करता है',
        'न्यायालय के निर्देशों का पालन करता है',
      ],
    },
  },

  complainant: {
    en: {
      title: 'Complainant / Victim',
      category: 'Person in the Courtroom',
      description:
        'The complainant is the person who brings a complaint before the appropriate authority. In some cases, the complainant may also be the victim.',
      responsibilities: [
        'Provides information about the incident',
        'May provide relevant documents or evidence',
        'May participate in proceedings as permitted by law',
        'Can seek appropriate legal remedies',
      ],
    },
    hi: {
      title: 'शिकायतकर्ता / पीड़ित',
      category: 'न्यायालय में व्यक्ति',
      description:
        'शिकायतकर्ता वह व्यक्ति है जो किसी घटना या समस्या के संबंध में संबंधित प्राधिकारी के समक्ष शिकायत प्रस्तुत करता है। कुछ मामलों में शिकायतकर्ता स्वयं पीड़ित भी हो सकता है।',
      responsibilities: [
        'घटना से संबंधित जानकारी प्रदान करता है',
        'प्रासंगिक दस्तावेज या साक्ष्य प्रस्तुत कर सकता है',
        'कानून के अनुसार कार्यवाही में भाग ले सकता है',
        'उचित कानूनी उपाय प्राप्त करने का प्रयास कर सकता है',
      ],
    },
  },

  investigatingOfficer: {
    en: {
      title: 'Investigating Officer',
      category: 'Police / Investigation',
      description:
        'The Investigating Officer conducts the investigation of a case and collects relevant information and evidence according to law.',
      responsibilities: [
        'Investigates the reported offence',
        'Collects and documents relevant evidence',
        'Records statements of relevant persons',
        'Prepares investigation reports and case records',
      ],
    },
    hi: {
      title: 'जांच अधिकारी',
      category: 'पुलिस / जांच',
      description:
        'जांच अधिकारी कानून के अनुसार मामले की जांच करते हैं और संबंधित जानकारी तथा साक्ष्य एकत्र करते हैं।',
      responsibilities: [
        'रिपोर्ट किए गए अपराध की जांच करते हैं',
        'प्रासंगिक साक्ष्य एकत्र और दर्ज करते हैं',
        'संबंधित व्यक्तियों के बयान दर्ज करते हैं',
        'जांच रिपोर्ट और मामले के अभिलेख तैयार करते हैं',
      ],
    },
  },

  policeEscort: {
    en: {
      title: 'Police Escort Team',
      category: 'Police / Courtroom Role',
      description:
        'The police escort team is responsible for the safe movement and custody of persons in their care as required by law and court orders.',
      responsibilities: [
        'Ensures safe movement of persons in custody',
        'Follows lawful court directions',
        'Maintains security during movement',
        'Assists in maintaining courtroom order when required',
      ],
    },
    hi: {
      title: 'पुलिस एस्कॉर्ट टीम',
      category: 'पुलिस / न्यायालय की भूमिका',
      description:
        'पुलिस एस्कॉर्ट टीम कानून और न्यायालय के आदेशों के अनुसार हिरासत में या उनके संरक्षण में व्यक्तियों की सुरक्षित आवाजाही सुनिश्चित करती है।',
      responsibilities: [
        'हिरासत में व्यक्तियों की सुरक्षित आवाजाही सुनिश्चित करती है',
        'न्यायालय के वैध निर्देशों का पालन करती है',
        'आवाजाही के दौरान सुरक्षा बनाए रखती है',
        'आवश्यकता पड़ने पर न्यायालय में व्यवस्था बनाए रखने में सहायता करती है',
      ],
    },
  },

  courtSecurity: {
    en: {
      title: 'Court Security',
      category: 'Courtroom Area',
      description:
        'Court security helps maintain a safe and orderly environment for everyone inside the court premises.',
      responsibilities: [
        'Monitors security at the court entrance',
        'Helps maintain order within the premises',
        'Assists visitors when required',
        'Responds to security concerns according to procedure',
      ],
    },
    hi: {
      title: 'न्यायालय सुरक्षा',
      category: 'न्यायालय क्षेत्र',
      description:
        'न्यायालय सुरक्षा दल न्यायालय परिसर में सभी लोगों के लिए सुरक्षित और व्यवस्थित वातावरण बनाए रखने में सहायता करता है।',
      responsibilities: [
        'न्यायालय के प्रवेश द्वार पर सुरक्षा की निगरानी करता है',
        'परिसर में व्यवस्था बनाए रखने में सहायता करता है',
        'आवश्यकता पड़ने पर आगंतुकों की सहायता करता है',
        'निर्धारित प्रक्रिया के अनुसार सुरक्षा संबंधी समस्याओं पर कार्रवाई करता है',
      ],
    },
  },

  courtReporter: {
    en: {
      title: 'Court Reporter / Journalist',
      category: 'Courtroom Role',
      description:
        'Court reporters and journalists may observe proceedings and report on matters that can legally be reported to the public.',
      responsibilities: [
        'Observes court proceedings',
        'Records information for reporting',
        'Reports court developments responsibly',
        'Follows restrictions on confidential or restricted information',
      ],
    },
    hi: {
      title: 'न्यायालय संवाददाता / पत्रकार',
      category: 'न्यायालय की भूमिका',
      description:
        'न्यायालय संवाददाता और पत्रकार कार्यवाही का निरीक्षण कर सकते हैं तथा कानूनन सार्वजनिक रूप से रिपोर्ट की जा सकने वाली जानकारी पर समाचार प्रकाशित कर सकते हैं।',
      responsibilities: [
        'न्यायालय की कार्यवाही का निरीक्षण करते हैं',
        'रिपोर्टिंग के लिए जानकारी दर्ज करते हैं',
        'न्यायालय की घटनाओं की जिम्मेदारी से रिपोर्टिंग करते हैं',
        'गोपनीय या प्रतिबंधित जानकारी से संबंधित नियमों का पालन करते हैं',
      ],
    },
  },

  publicGallery: {
    en: {
      title: 'Public Gallery',
      category: 'Courtroom Area',
      description:
        'The public gallery provides seating for members of the public and other permitted visitors attending court proceedings.',
      responsibilities: [
        'Provides seating for permitted visitors',
        'Allows members of the public to observe proceedings when permitted',
        'Visitors must maintain courtroom decorum',
        'Visitors must follow court security instructions',
      ],
    },
    hi: {
      title: 'सार्वजनिक दर्शक दीर्घा',
      category: 'न्यायालय क्षेत्र',
      description:
        'सार्वजनिक दर्शक दीर्घा न्यायालय की कार्यवाही में उपस्थित होने वाले आम लोगों और अन्य अनुमत आगंतुकों के लिए बैठने की जगह प्रदान करती है।',
      responsibilities: [
        'अनुमत आगंतुकों के लिए बैठने की व्यवस्था प्रदान करती है',
        'अनुमति होने पर लोग कार्यवाही देख सकते हैं',
        'आगंतुकों को न्यायालय की मर्यादा बनाए रखनी चाहिए',
        'आगंतुकों को न्यायालय की सुरक्षा संबंधी निर्देशों का पालन करना चाहिए',
      ],
    },
  },

  judgeBench: {
    en: {
      title: "Judge's Bench / Dais",
      category: 'Courtroom Area',
      description:
        "The Judge's Bench is the designated area from which the Presiding Judge conducts court proceedings.",
      responsibilities: [
        'Area where the Judge presides over proceedings',
        'Provides the central position for conducting the hearing',
        'Used for issuing judicial directions and orders',
        'Access may be restricted to authorized court personnel',
      ],
    },
    hi: {
      title: 'न्यायाधीश की पीठ / आसन',
      category: 'न्यायालय क्षेत्र',
      description:
        'न्यायाधीश की पीठ वह निर्धारित स्थान है जहां से पीठासीन न्यायाधीश न्यायालय की कार्यवाही संचालित करते हैं।',
      responsibilities: [
        'वह स्थान जहां न्यायाधीश कार्यवाही की अध्यक्षता करते हैं',
        'सुनवाई संचालित करने के लिए केंद्रीय स्थान',
        'न्यायिक निर्देश और आदेश जारी करने के लिए उपयोग किया जाता है',
        'यह क्षेत्र अधिकृत न्यायालयीन कर्मचारियों तक सीमित हो सकता है',
      ],
    },
  },

  accusedDock: {
    en: {
      title: 'Accused Dock / Kathehra',
      category: 'Courtroom Area',
      description:
        'The accused dock, commonly known as the Kathehra, is a designated area where an accused person may be positioned during proceedings.',
      responsibilities: [
        'Provides a designated place for the accused',
        'Allows the accused to remain visible to the court',
        'Used according to court procedure and circumstances',
        'The accused continues to have legal rights during proceedings',
      ],
    },
    hi: {
      title: 'अभियुक्त कटघरा',
      category: 'न्यायालय क्षेत्र',
      description:
        'अभियुक्त कटघरा, जिसे आमतौर पर कटघरा कहा जाता है, वह निर्धारित स्थान है जहां कार्यवाही के दौरान अभियुक्त को रखा जा सकता है।',
      responsibilities: [
        'अभियुक्त के लिए निर्धारित स्थान प्रदान करता है',
        'अभियुक्त को न्यायालय के समक्ष उपस्थित रखने में सहायता करता है',
        'न्यायालय की प्रक्रिया और परिस्थितियों के अनुसार उपयोग किया जाता है',
        'कार्यवाही के दौरान अभियुक्त के कानूनी अधिकार बने रहते हैं',
      ],
    },
  },

  witnessBlock: {
    en: {
      title: 'Witness Box / Enclosure',
      category: 'Courtroom Area',
      description:
        'The witness box is the designated area from which a witness gives evidence or testimony before the court.',
      responsibilities: [
        'Provides a designated place for witnesses',
        'Witnesses give evidence from this area when directed',
        'Witnesses answer questions during examination',
        'Witnesses must follow the directions of the court',
      ],
    },
    hi: {
      title: 'गवाह कक्ष / गवाह कटघरा',
      category: 'न्यायालय क्षेत्र',
      description:
        'गवाह कक्ष वह निर्धारित स्थान है जहां से गवाह न्यायालय के समक्ष साक्ष्य या गवाही प्रस्तुत करता है।',
      responsibilities: [
        'गवाहों के लिए निर्धारित स्थान प्रदान करता है',
        'निर्देश दिए जाने पर गवाह यहां से साक्ष्य देता है',
        'गवाह पूछताछ के दौरान प्रश्नों के उत्तर देता है',
        'गवाह को न्यायालय के निर्देशों का पालन करना होता है',
      ],
    },
  },
  bailiff: {
  en: {
    title: 'Bailiff / Chobdar',
    category: 'Courtroom Role',
    description:
      'The Bailiff or Chobdar assists the court in maintaining order and carrying out procedural directions during court proceedings.',
    responsibilities: [
      'Maintains order inside the courtroom',
      'Assists the Judge and court staff when required',
      'Calls or announces matters as directed by the court',
      'Helps manage movement and access within the courtroom',
    ],
  },

  hi: {
    title: 'बेलिफ / चोबदार',
    category: 'न्यायालय की भूमिका',
    description:
      'बेलिफ या चोबदार न्यायालय में व्यवस्था बनाए रखने और न्यायालय के निर्देशों को कार्यान्वित करने में सहायता करते हैं।',
    responsibilities: [
      'न्यायालय के अंदर व्यवस्था बनाए रखने में सहायता करते हैं',
      'आवश्यकता पड़ने पर न्यायाधीश और न्यायालयीन कर्मचारियों की सहायता करते हैं',
      'न्यायालय के निर्देशानुसार मामलों की घोषणा या सूचना देते हैं',
      'न्यायालय में लोगों की आवाजाही और प्रवेश व्यवस्था में सहायता करते हैं',
    ],
  },
},
}

export default courtroomData