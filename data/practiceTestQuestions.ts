export type PracticeTestQuestion = {
  id: number;
  category:
    | 'Australia & its people'
    | 'Democratic beliefs, rights & liberties'
    | 'Government & law'
    | 'Australian values';
  question: string;
  options: [string, string, string, string];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isAustralianValues: boolean;
};

/**
 * Website Practice Test #1
 *
 * 20 high-value practice questions selected from the
 * main citizenship question dataset.
 *
 * These are NOT official Australian citizenship test questions.
 */
export const practiceTestQuestions: PracticeTestQuestion[] = [
  // =====================================================
  // PART 1 — AUSTRALIA & ITS PEOPLE
  // =====================================================

  {
    id: 37,
    category: 'Australia & its people',
    question: "Who are Australia's First Peoples?",
    options: [
      'Only recent migrants',
      'Aboriginal and Torres Strait Islander peoples',
      'Only Europeans',
      'Only Pacific Islanders',
    ],
    correctAnswer: 'B',
    explanation:
      "Aboriginal and Torres Strait Islander peoples are Australia's First Peoples.",
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 41,
    category: 'Australia & its people',
    question:
      'What is the Dreaming in Aboriginal and Torres Strait Islander cultures?',
    options: [
      'A sporting event',
      'A modern political party',
      'A term for ancestral stories, laws, beliefs and connections to Country',
      'A type of government',
    ],
    correctAnswer: 'C',
    explanation:
      'The Dreaming encompasses diverse Indigenous traditions concerning ancestors, Country, law and culture.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 78,
    category: 'Australia & its people',
    question: 'Why is migration important to modern Australia?',
    options: [
      'Migration has had no effect',
      'Only tourism changed',
      'Migration is prohibited',
      "Migrants have contributed to Australia's social, cultural and economic development",
    ],
    correctAnswer: 'D',
    explanation:
      "Migration has been a major part of Australia's development.",
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 80,
    category: 'Australia & its people',
    question: 'What is the citizenship pledge?',
    options: [
      'A voting ballot',
      'A public commitment to Australia and its people',
      'A driving licence',
      'A tax form',
    ],
    correctAnswer: 'B',
    explanation:
      'The pledge expresses loyalty to Australia and commitment to its democratic beliefs, rights, liberties and laws.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 90,
    category: 'Australia & its people',
    question: "What is Australia's federal system?",
    options: [
      'States are independent countries',
      'Government powers are divided between the Commonwealth and state/territory governments',
      'Local councils are sovereign',
      'One government controls everything',
    ],
    correctAnswer: 'B',
    explanation:
      "Australia's federal system distributes responsibilities between levels of government.",
    difficulty: 'medium',
    isAustralianValues: false,
  },

  // =====================================================
  // PART 2 — DEMOCRATIC BELIEFS, RIGHTS & LIBERTIES
  // =====================================================

  {
    id: 101,
    category: 'Democratic beliefs, rights & liberties',
    question: 'What does democracy mean?',
    options: [
      'Rule by hereditary nobles',
      'Rule by one person',
      'A system in which people have a say in how they are governed',
      'Rule by the military',
    ],
    correctAnswer: 'C',
    explanation:
      'Democracy means people participate in choosing and influencing government.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 102,
    category: 'Democratic beliefs, rights & liberties',
    question: 'What is the rule of law?',
    options: [
      'Only citizens obey laws',
      'Everyone is subject to the law',
      'Courts can ignore laws',
      'Government is above the law',
    ],
    correctAnswer: 'B',
    explanation:
      'The rule of law means all people, including governments, are subject to the law.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 103,
    category: 'Democratic beliefs, rights & liberties',
    question: 'What does equality under the law mean?',
    options: [
      'Different laws for each religion',
      'People should be treated equally by the law',
      'Some people are above the law',
      'Only wealthy people have rights',
    ],
    correctAnswer: 'B',
    explanation:
      'Equality before the law is a core democratic principle.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 138,
    category: 'Democratic beliefs, rights & liberties',
    question: 'Why are elections important?',
    options: [
      'They remove courts',
      'They appoint judges directly',
      'They allow citizens to choose representatives',
      'They replace the Constitution',
    ],
    correctAnswer: 'C',
    explanation:
      'Elections are a central mechanism of representative democracy.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 182,
    category: 'Democratic beliefs, rights & liberties',
    question: 'Why are responsibilities important alongside rights?',
    options: [
      'Rights are unlimited',
      'A stable society requires people to respect others and follow shared rules',
      'Responsibilities replace rights',
      'Laws become unnecessary',
    ],
    correctAnswer: 'B',
    explanation:
      'Rights and responsibilities work together in a democratic society.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  // =====================================================
  // PART 3 — GOVERNMENT & LAW
  // =====================================================

  {
    id: 201,
    category: 'Government & law',
    question: 'What are the three levels of government in Australia?',
    options: [
      'Federal, state/territory and local',
      'Federal, royal and military',
      'State, police and court',
      'National, tribal and foreign',
    ],
    correctAnswer: 'A',
    explanation:
      'Australia has federal, state/territory and local levels of government.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 207,
    category: 'Government & law',
    question: 'What are the two houses of the Australian Parliament?',
    options: [
      'House of Lords and Commons',
      'Cabinet and High Court',
      'Senate and Council',
      'House of Representatives and Senate',
    ],
    correctAnswer: 'D',
    explanation:
      "Australia's federal Parliament has two houses: the House of Representatives and the Senate.",
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 208,
    category: 'Government & law',
    question: 'What is the House of Representatives?',
    options: [
      'The highest court',
      'A state parliament',
      'The upper house',
      'The lower house of the federal Parliament',
    ],
    correctAnswer: 'D',
    explanation:
      'The House of Representatives is the lower house.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 209,
    category: 'Government & law',
    question: 'What is the Senate?',
    options: [
      'The upper house of the federal Parliament',
      'The lower house',
      'The High Court',
      'A local council',
    ],
    correctAnswer: 'A',
    explanation:
      'The Senate is the upper house.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  {
    id: 228,
    category: 'Government & law',
    question: 'What is the Constitution?',
    options: [
      'A local council rule',
      'A criminal law book',
      "The document establishing the framework and powers of Australia's government",
      'A tax manual',
    ],
    correctAnswer: 'C',
    explanation:
      'The Constitution sets out the structure and powers of government.',
    difficulty: 'medium',
    isAustralianValues: false,
  },

  // =====================================================
  // PART 4 — AUSTRALIAN VALUES
  // =====================================================

  {
    id: 301,
    category: 'Australian values',
    question:
      'Which set best describes core Australian values in the citizenship test?',
    options: [
      'Freedom, respect and equality',
      'Silence, obedience and isolation',
      'Wealth, power and status',
      'Religion, ancestry and class',
    ],
    correctAnswer: 'A',
    explanation:
      'The testable material emphasises freedom, respect and equality.',
    difficulty: 'medium',
    isAustralianValues: true,
  },

  {
    id: 311,
    category: 'Australian values',
    question: 'What does the rule of law require?',
    options: [
      'Courts can ignore Parliament',
      'Only citizens follow laws',
      'Everyone follows the law, including government',
      'Government can ignore laws',
    ],
    correctAnswer: 'C',
    explanation:
      'The rule of law applies to everyone.',
    difficulty: 'medium',
    isAustralianValues: true,
  },

  {
    id: 318,
    category: 'Australian values',
    question: 'What does freedom of speech allow?',
    options: [
      'Lawful expression of opinions',
      'Threats against people',
      'Breaking laws',
      'Incitement of violence',
    ],
    correctAnswer: 'A',
    explanation:
      'Speech is protected but subject to Australian law.',
    difficulty: 'medium',
    isAustralianValues: true,
  },

  {
    id: 320,
    category: 'Australian values',
    question: 'What does freedom of religion allow?',
    options: [
      'People to follow, change or have no religion',
      'Banning religious practice',
      'Forcing others to worship',
      'Government choosing a religion',
    ],
    correctAnswer: 'A',
    explanation:
      'Religious freedom includes choice of belief and non-belief.',
    difficulty: 'medium',
    isAustralianValues: true,
  },

  {
    id: 384,
    category: 'Australian values',
    question: 'What is the relationship between freedom and responsibility?',
    options: [
      'Freedom has no responsibility',
      'Only officials have responsibility',
      'People should use freedom while respecting law and others',
      'Responsibility removes freedom',
    ],
    correctAnswer: 'C',
    explanation:
      'Freedom and responsibility operate together.',
    difficulty: 'medium',
    isAustralianValues: true,
  },
];