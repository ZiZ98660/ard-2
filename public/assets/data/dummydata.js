import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiUser } from "react-icons/bi"
import { Jim_Nightshade } from "next/font/google"
import Text from "@/components/Text"

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "100+ cuccessful cases in portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
  },
]
export const expertise = [
  {
    id: 1,
    title: "Web Design & Development",
    cover: "/assets/images/e1.jpg",
    desc: [{ text: "Web design" }, { text: "Web development" }, { text: "Custom icons & illustrations" }, { text: "Hosting" }, { text: "Website audit" }],
  },
  {
    id: 2,
    title: "Digital Marketing",
    cover: "/assets/images/e2.jpg",
    desc: [{ text: "Social media marketing" }, { text: "Marketing campaigns" }, { text: "Markting management" }, { text: "SEO" }],
  },
  {
    id: 3,
    title: "E-Commerce",
    cover: "/assets/images/e3.jpg",
    desc: [{ text: "E-Commerce website design" }, { text: "WooCommerce" }, { text: "Content management" }, { text: "Hosting" }],
  },
  {
    id: 4,
    title: "Branding & Creative Services",
    cover: "/assets/images/e4.jpg",
    desc: [{ text: "Visual identity" }, { text: "Branding for social media" }, { text: "Custom illustrations" }],
  },
]
export const testimonial = [
  {
    id: 1,
    name: "Alexander Black",
    cover: "/assets/images/e1.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 2,
    name: "Diana Green",
    cover: "/assets/images/e2.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
  {
    id: 3,
    name: "Alexander Black",
    cover: "/assets/images/e3.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 4,
    name: "Diana Green",
    cover: "/assets/images/e4.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
]

export const testimonial2 = [
  {
    id: 1,
    name: "Innovation Accounting",
    // cover"../images/e1.jpg",
    // post: "Seven consulting - CEO",
    desc: "Track and report progress with precision.",
  },
  {
    id: 2,
    name: "Explore",
    // cover: "../images/e2.jpg",
    // post: "Seven Arts - marketing manager",
    desc: "Identify and incubate new opportunities through idea management, hackathons, and accelerated programs. Use LEGO SeriousPlay to visualize and understand complex problems, fostering creative and collaborative solutions.",
  },
  {
    id: 3,
    name: "Exploit",
    // cover: "../images/e3.jpg",
    // post: "Seven consulting - CEO",
    desc: "Maximize ROI with robust management practices, continuous improvement, and effective partner collaboration. Apply Kickbox Innovation principles to ensure that ideas are rapidly prototyped, tested, and scaled efficiently.",
  },
  {
    id: 4,
    name: "Open Innovation",
    // cover: "../images/e4.jpg",
    // post: "Seven Arts - marketing manager",
    desc: "Leverage your ecosystem through dynamic collaborations and open idea exchanges. Integrate both LEGO SeriousPlay for team-building and ideation, and Kickbox for structured innovation processes.",
  },
]

export const showcase = [
  {
    id: 1,
    title: "Neon Lights",
    cover: "/assets/images/s1.jpg",
    catgeory: "DIGITAL MARKETING",
  },
  {
    id: 2,
    title: "Futuristic Furniture",
    catgeory: "WEBSITES",
    cover: "/assets/images/s2.jpg",
  },
  {
    id: 3,
    title: "Smart Living",
    cover: "/assets/images/s3.jpg",
    catgeory: "WEBSITES",
  },
  {
    id: 4,
    title: "Light Painting",
    cover: "/assets/images/s4.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "Ideabox",
    cover: "/assets/images/s5.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "VR Experience",
    cover: "/assets/images/s6.jpg",
    catgeory: "WEBSITES	",
  },
]
export const brand = [
  {
    id: 1,
    cover: "/assets/images/l1.svg",
  },
  {
    id: 2,
    cover: "/assets/images/l2.svg",
  },
  {
    id: 3,
    cover: "/assets/images/l3.svg",
  },
  {
    id: 4,
    cover: "/assets/images/l4.svg",
  },
  {
    id: 5,
    cover: "/assets/images/l5.svg",
  },
  {
    id: 6,
    cover: "/assets/images/l6.svg",
  },
]
export const blogdata = [
  {
    id: 1,
    title: "Unleashing Creativity in Business Strategy with LEGO® SERIOUS PLAY®",
    cover: "/assets/images/serious_play.png",
    category: "STRATEGY",
    date: "APRIL 21, 2024",
    desc: [
      { text: "Explore how LEGO® SERIOUS PLAY® can unlock new perspectives in your business strategy." }
    ]
  },
  {
    id: 2,
    title: "Spark Innovation with the KICKBOX Methodology",
    cover: "/assets/images/adobe_KB.png",
    category: "STRATEGY",
    date: "APRIL 21, 2024",
    desc: [
      { text: "Discover the KICKBOX approach to fostering innovation within your organization." }
    ]
  },
  // {
  //   id: 3,
  //   title: "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
  //   cover: "/assets/images/b3.jpg",
  //   catgeory: "TIPS & TRICKS",
  //   date: "OCTOBER 9, 2023",
  // },
  // {
  //   id: 4,
  //   title: "What eleifend posuere tincidunt",
  //   cover: "/assets/images/b4.jpg",
  //   catgeory: "EVENTS",
  //   date: "OCTOBER 8, 2023",
  // },
]
export const teamdata = [
  {
    id: 1,
    title: "Alexander Black",
    cover: "/assets/images/t1.jpg",
    post: "FOUNDER, CEO",
  },
  {
    id: 2,
    title: "Anna Kovalenko",
    cover: "/assets/images/t2.jpg",
    post: "FINANCE DIRECTOR",
  },
  {
    id: 3,
    title: "Tiffany White",
    cover: "/assets/images/t3.jpg",
    post: "CREATIVE DIRECTOR",
  },
  {
    id: 4,
    title: "Richard Greenwood",
    cover: "/assets/images/t4.jpg",
    post: "PROGRAMMER",
  },
  {
    id: 5,
    title: "Jessica Brown",
    cover: "/assets/images/t5.jpg",
    post: "MARKETING DIRECTOR",
  },
  {
    id: 6,
    title: "Gregory Windstorm",
    cover: "/assets/images/t6.jpg",
    post: "ACCOUNTING MANAGER",
  },
  {
    id: 7,
    title: "Anna Red",
    cover: "/assets/images/t7.jpg",
    post: "PROJECT MANAGER",
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "/assets/images/t8.jpg",
    post: "",
  },
]

export const strategy = [
  {    
    detail_one: "Intrepreneuship",
    detail_two: "Idea Management",
    detail_three: "Startup Collaboration",
  },
  {
    detail_one: "Hackathon",
    detail_two: "Continuous Improvement",
    detail_three: "Open Idea Collaboration",
  },
  {
    detail_one: "Idea Campaigns",
    detail_two: "Partner Collaboration",
    detail_three: "",
  },
  {
    detail_one: "Accelerator Program",
    detail_two: "",
    detail_three: "",
  },
]

export const card_data = [
  {
    profile: 'roger.jpeg',
    name: 'Roger Wüthrich-Hasenböhler',
    position: 'Non-Executive Vice President',
    company: 'Swisscom',
    remark: 'With the KICKBOX program, our employees can drive innovation resulting in new services and products for Swisscom.',
    logo: 'swiss_logo.svg'
  },
  {
    profile: 'daniel.jpeg',
    name: 'Daniel Alzer',
    position: 'Investment & Innovation Manager',
    company: 'CSS Insurance',
    remark: 'Of course, we are looking for the next big thing – however, the transformational impact the KICKBOX Program has on our entire culture is impressive and exactly what we have been looking for!',
    logo: 'css_logo.png'
  },
  {
    profile: 'karel.jpg',
    name: 'Karel van Eechoud',
    position: 'Senior Innovation Manager',
    company: 'Implenia',
    remark: 'The decentralized KICKBOX approach was effective at generating new ideas, and also helped to engage our people making us more attractive as an employer.',
    logo: 'imp_logo.png'
  },
]

export const faq_data = [
  {
    question: "What is ARD DELSUTH?",
    answer:
      "ARD DELSUTH is the association of resident doctors and house officers at Delta State University Teaching Hospital. We focus on doctors' welfare, quality training, efficient hospital operations, and better healthcare in Delta State. We are part of NARD and affiliated with the NMA."
  },
  {
    question: "What is the mission of ARD DELSUTH?",
    answer:
      "To promote doctors' welfare, high-quality residency training, efficient hospital operations, and improved healthcare in Delta State."
  },
  {
    question: "What are the main activities of ARD DELSUTH?",
    answer:
      "We hold regular meetings, support departmental accreditation, organize research and training events, run certified courses, publish a medical journal, advocate for welfare and better facilities, and contribute to hospital policy."
  },
  {
    question: "What is ARD DELSUTH's approach to innovation and infrastructure development?",
    answer:
      "We advocate for new medical equipment, address staffing and infrastructure issues, and help shape hospital policies and reforms."
  },
  {
    question: "Who can join ARD DELSUTH?",
    answer:
      "All resident doctors and house officers at DELSUTH are eligible to join."
  },
  {
    question: "What affiliations does ARD DELSUTH have?",
    answer:
      "We are a chapter of NARD and affiliated with the NMA."
  }
];

export const link = [
  {
    title: "Who We Are",
    link: "/about-us/who-we-are",
  },
  {
    title: "What We Do",
    link: "/about-us/what-we-do",
  },
];

export const activities = [
  {
    title: "Meetings & Governance",
    points: [
      "Three Ordinary General Meetings and one Annual General Meeting are held yearly",
      "Emergency General Meetings convened as needed",
      "Foster member engagement, accountability, and decision-making on union matters",
    ],
    img: "/assets/images/meetings.jpg",
  },
  {
    title: "Training & Capacity Building",
    points: [
      "Drive for departmental accreditation and reaccreditation",
      "Organise research workshops, mock exams, and journal clubs",
      "Conduct certified courses in: Basic Surgical Skills, Basic Life Support (BLS), Advanced Cardiac Life Support (ACLS), Paediatric Advanced Life Support (PALS)",
      "Publish and maintain an online medical journal",
    ],
    img: "/assets/images/training.jpg",
  },
  {
    title: "Welfare & Remuneration Advocacy",
    points: [
      "Engage with management and government on salary arrears and irregularities",
      "Launch legal campaigns for fair and timely remuneration",
      "Advocate for improved health insurance services for doctors",
      "Lobby for quality call rooms, call meals, and accommodation",
      "Maintain a well-equipped Secretariat, Lounge, and Recreational Facilities for doctors",
    ],
    img: "/assets/images/welfare.jpg",
  },
  {
    title: "Innovation & Infrastructure Development",
    points: [
      "Campaign for the acquisition of CT/MRI machines, advanced surgical equipment, and other facilities",
      "Push for resolution of staffing gaps and infrastructure bottlenecks",
      "Contribute to hospital policy-making and institutional reform agendas",
    ],
    img: "/assets/images/innovation.jpg",
  },
  {
    title: "Partnerships & Community Outreach",
    points: [
      "Collaborate with NGOs, government agencies, and international bodies",
      "Host school, prison, hospital, and rural outreach programs",
      "Sponsor scientific research and encourage scholarly publications",
      "Promote alumni engagement and provide structured mentorship for junior doctors",
    ],
    img: "/assets/images/outreach.jpg",
  },
  {
    title: "Media Engagement & Public Health Campaigns",
    points: [
      "Publish the ARD DELSUTH MedDigest, a biweekly email newsletter for health education and union updates",
      "Run health awareness campaigns via Twitter, Facebook, television, and radio",
      "Lead commemorative events like: World Health Day, Breast Cancer Awareness Month, Mental Health Awareness, and other national and global health observances",
    ],
    img: "/assets/images/media.jpg",
  },
];

// export const faq_data = [

//   {
//     question: "What is ARD DELSUTH?",
//     answer:
//       "The Association of Resident Doctors (ARD) at Delta State University Teaching Hospital (DELSUTH) unites doctors in residency training, along with other doctors of similar ranks and house officers. Our mission is to advance the welfare of doctors, uphold outstanding residency training, promote efficient hospital operations, and advocate for quality healthcare in Delta State. We are a chapter of the Nigerian Association of Resident Doctors (NARD) and are proudly affiliated with the Nigerian Medical Association (NMA).",
//   },
//   {
//     question: "What is the mission of ARD DELSUTH?",
//     answer:
//       "To advance the welfare of doctors, uphold outstanding residency training, promote efficient hospital operations, and advocate for quality healthcare in Delta State.",
//   },
//   {
//     question: "What are the main activities of ARD DELSUTH?",
//     answer:
//       "Our activities include: \n- Organizing Ordinary and Annual General Meetings, as well as Emergency General Meetings as needed\n- Driving departmental accreditation and reaccreditation\n- Organizing research workshops, mock exams, and journal clubs\n- Conducting certified courses such as Basic Surgical Skills, BLS, ACLS, and PALS\n- Publishing and maintaining an online medical journal\n- Advocating for welfare and remuneration, including salary arrears, health insurance, and improved facilities\n- Campaigning for acquisition of advanced medical equipment and infrastructure improvements\n- Contributing to hospital policy-making and institutional reforms",
//   },
//   // {
//   //   question: "How does ARD DELSUTH support the welfare of its members?",
//   //   answer:
//   //     "We engage with management and government on salary arrears and irregularities, launch legal campaigns for fair and timely remuneration, advocate for improved health insurance services, lobby for quality call rooms and meals, and maintain a well-equipped Secretariat, Lounge, and Recreational Facilities for doctors."
//   // },
//   // {
//   //   question: "How does ARD DELSUTH contribute to training and capacity building?",
//   //   answer:
//   //     "We drive departmental accreditation and reaccreditation, organize research workshops, mock exams, and journal clubs, conduct certified courses in Basic Surgical Skills, Basic Life Support (BLS), Advanced Cardiac Life Support (ACLS), and Paediatric Advanced Life Support (PALS), and publish and maintain an online medical journal."
//   // },
//   {
//     question:
//       "What is ARD DELSUTH's approach to innovation and infrastructure development?",
//     answer:
//       "We campaign for the acquisition of CT/MRI machines, advanced surgical equipment, and other facilities, push for resolution of staffing gaps and infrastructure bottlenecks, and contribute to hospital policy-making and institutional reform agendas.",
//   },
//   {
//     question: "Who can join ARD DELSUTH?",
//     answer:
//       "All resident doctors and house officers at Delta State University Teaching Hospital are welcome to join ARD DELSUTH and participate in our mission to improve health and training outcomes for all.",
//   },
//   {
//     question: "What affiliations does ARD DELSUTH have?",
//     answer:
//       "We are a chapter of the Nigerian Association of Resident Doctors (NARD) and are proudly affiliated with the Nigerian Medical Association (NMA).",
//   },
// ];


export const activities2 = [
  {
    icon: "mdi:calendar-month-outline",
    color: "#2563eb", // blue-600
    bg: "#dbeafe",    // blue-100
    title: "Meetings & Governance",
    desc: "Three Ordinary General Meetings and one Annual General Meeting yearly. Emergency General Meetings as needed to foster member engagement and decision-making.",
    delay: 100,
  },
  {
    icon: "mdi:book-open-variant",
    color: "#ea580c", // orange-600
    bg: "#ffedd5",    // orange-100
    title: "Training & Capacity Building",
    desc: "Research workshops, mock exams, journal clubs, and certified courses including BLS, ACLS, PALS. Maintain an online medical journal.",
    delay: 200,
  },
  {
    icon: "mdi:heart-outline",
    color: "#16a34a", // green-600
    bg: "#bbf7d0",    // green-100
    title: "Welfare & Remuneration",
    desc: "Advocate for fair remuneration, improved health insurance, quality call rooms and meals. Maintain recreational facilities for doctors.",
    delay: 300,
  },
  {
    icon: "mdi:cpu-64-bit",
    color: "#9333ea", // purple-600
    bg: "#f3e8ff",    // purple-100
    title: "Innovation & Infrastructure",
    desc: "Campaign for advanced medical equipment and resolution of staffing gaps. Contribute to hospital policy-making and reform.",
    delay: 100,
  },
  {
    icon: "mdi:account-group-outline",
    color: "#ca8a04", // yellow-600
    bg: "#fef9c3",    // yellow-100
    title: "Community Outreach",
    desc: "Collaborate with NGOs and government agencies. Host school, prison, and rural outreach programs. Promote alumni engagement.",
    delay: 200,
  },
  {
    icon: "mdi:radio",
    color: "#dc2626", // red-600
    bg: "#fee2e2",    // red-100
    title: "Media & Public Health",
    desc: "Publish ARD DELSUTH MedDigest newsletter. Run health awareness campaigns and lead commemorative health events.",
    delay: 300,
  },
];