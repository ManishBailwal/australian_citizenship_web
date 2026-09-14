export interface CitizenshipPoint {
  title: string;
  description: string;
}

export interface CitizenshipSection {
  title: string;
  slug: string;
  points: CitizenshipPoint[];
}

export const australianCitizenshipData: Record<string, CitizenshipSection> = {
  "part-1": {
    title: "Part 1: Australia and its people",
    slug: "part-1",
    points: [
      {
        title: "Indigenous Heritage",
        description: "Aboriginal and Torres Strait Islander peoples are Australia's first inhabitants, possessing the oldest continuous cultures and traditions in the world, with deep spiritual connections to the land."
      },
      {
        title: "European Settlement & Migration",
        description: "European settlement began with the arrival of the First Fleet on 26 January 1788 under Captain Arthur Phillip, establishing early British administration."
      },
      {
        title: "Population Growth and Gold Rushes",
        description: "The 1851 gold rush era rapidly doubled the population and attracted diverse global migration waves that fundamentally shaped modern Australian society."
      },
      {
        title: "Federation & Geography",
        description: "On 1 January 1901, the independent colonies united into the Commonwealth of Australia, comprising six states (New South Wales, Victoria, Queensland, Western Australia, South Australia, Tasmania) and two mainland territories (Australian Capital Territory and Northern Territory)."
      },
      {
        title: "National Languages and Traditions",
        description: "English serves as the de facto national language, complemented by inclusive cultural practices such as the Welcome to Country and Acknowledgement of Country."
      },
      {
        title: "Key National Commemorations",
        description: "Important historical days unite the community, including Australia Day on 26 January and Anzac Day on 25 April, which honours those who served in wars and peacekeeping."
      },
      {
        title: "Official National Symbols",
        description: "Recognised symbols include the Australian National Flag, the Commonwealth Coat of Arms, the golden wattle floral emblem, and the national anthem Advance Australia Fair."
      }
    ]
  },
  "part-2": {
    title: "Part 2: Australia's democratic beliefs, rights and liberties",
    slug: "part-2",
    points: [
      {
        title: "Democratic Principles",
        description: "Australia operates as a robust parliamentary democracy anchored by the Rule of Law, peaceful social transformation, and accountability of elected leaders."
      },
      {
        title: "Fundamental Freedoms",
        description: "Citizens enjoy core liberties including freedom of speech, freedom of expression, freedom of association, and freedom of religion within a secular governance framework."
      },
      {
        title: "Equalities and Fair Go",
        description: "Laws guarantee absolute gender equality and promote a cultural 'fair go', ensuring that personal success depends on talent and hard work rather than background."
      },
      {
        title: "Citizenship Duties and Responsibilities",
        description: "Responsibilities include obeying laws, voting in elections and referendums, defending the nation if required, and serving on juries when called."
      },
      {
        title: "Citizenship Privileges",
        description: "Entitlements include holding an Australian passport, seeking election to parliament, registering children born overseas as citizens, and accessing full consular support abroad."
      }
    ]
  },
  "part-3": {
    title: "Part 3: Government and the law in Australia",
    slug: "part-3",
    points: [
      {
        title: "System of Government",
        description: "Australia is a constitutional monarchy and parliamentary democracy where the King acts as Head of State, represented locally by the Governor-General, while the Prime Minister heads the government."
      },
      {
        title: "Separation of Powers",
        description: "Power is divided under the Australian Constitution into legislative power (Parliament to make laws), executive power (Prime Minister and Cabinet to administer laws), and independent judicial power (courts to interpret laws)."
      },
      {
        title: "Three Levels of Government",
        description: "Governance is decentralized across the Commonwealth Government (national economy, defence, foreign affairs), state and territory governments (hospitals, schools, police), and local councils (local infrastructure, waste management, parks)."
      },
      {
        title: "Parliamentary Structure",
        description: "The federal Parliament consists of two houses: the House of Representatives (lower house where government is formed) and the Senate (upper house representing the states and territories)."
      },
      {
        title: "Legal and Enforcement Systems",
        description: "Independent courts, judges, juries, and police forces maintain public safety and enforce federal, state, and local laws, penalizing offences such as violence, domestic abuse, and traffic violations."
      }
    ]
  },
  "part-4": {
    title: "Part 4: Australian values",
    slug: "part-4",
    points: [
      {
        title: "Core Shared Values",
        description: "Society is unified by a commitment to the Rule of Law, parliamentary democracy, institutional transparency, and mutual respect for individual liberties."
      },
      {
        title: "Equality and Mutual Respect",
        description: "Society mandates equal legal rights for men and women, absolute zero tolerance for domestic violence, racism, or religious intolerance, and a dedication to peaceful disagreement."
      },
      {
        title: "Community Participation and Mateship",
        description: "Citizens are expected to actively contribute, support themselves and their families, demonstrate compassion through volunteering and mateship, and help keep communities safe."
      },
      {
        title: "National Integration and Social Cohesion",
        description: "Learning and using English is valued as a vital tool for social cohesion, employment, and full integration into civic life."
      },
      {
        title: "Loyalty and Security",
        description: "Citizenship requires enduring loyalty to Australia, respect for its democratic institutions, and a commitment to protecting its national security interests."
      }
    ]
  }
};