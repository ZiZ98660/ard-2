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
    question: 'What is Capital Growth Academy',
    answer: "Capital Growth Academy is an educational platform that focuses on teaching business innovation using a combination of standard and creative principles. We offer courses and workshops designed to help both new and existing businesses adapt and thrive in today's dynamic marketplace"
  },
  {
    question: "Who can benefit from Capital Growth Academy's courses",
    answer: 'Our courses are designed to cater to a wide range of individuals, from budding entrepreneurs looking to launch their first venture to established business owners seeking to innovate and revitalize their operations.'
  },
  {
    question: 'What topics do your courses cover',
    answer: 'Our curriculum includes topics such as market research, ideation, product development, marketing strategies, and more. We aim to provide a comprehensive learning experience that addresses the essential aspects of business innovation.'
  },
  {
    question: 'Who are the instructors at Capital Growth Academy',
    answer:'Not at all. Our programs are built on whatever your company already has implemented. Since our methods are decentralized and bottom-up, they complement any top-down programs you may already have.'
  }
]

export const link = [
  {
    title: 'KICKBOX',
    link: '/solutions/kickbox'
  },
  {
    title: 'LEGO® SERIOUS PLAY®',
    link: '/solutions/lsp'
  },
]