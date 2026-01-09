import { Title } from "@/components/Title";
import { DotIcon } from "@/public/assets/icons/icons";
import Head from "next/head";

const achievements = [
  {
    title: "Hosting the 2020 NARD National Convention",
    points: [
      "In 2020, ARD DELSUTH proudly hosted the National Association of Resident Doctors Annual General Meeting, placing Delta State at the forefront of Nigeria's medical community.",
      "This landmark event brought together resident doctors from across the nation and was graced by His Excellency, the Governor of Delta State, alongside two former Governors.",
      "The convention resulted in ARD DELSUTH members being elected to key national positions, including NARD President, Secretary General, and Treasurer—a testament to our leadership in advancing healthcare excellence nationwide."
    ]
  },
  {
    title: "Universal Healthcare Coverage for Hospital Staff",
    points: [
      "In 2013, we achieved a groundbreaking milestone by securing government approval for free healthcare coverage for all hospital staff.",
      "This initiative ensures that those who dedicate their lives to caring for others have access to quality medical care for themselves and their families.",
      "It represents our unwavering commitment to the welfare of healthcare workers and sets a standard for employee benefits in the medical sector."
    ]
  },
  {
    title: "Establishing the DELSUTH Neurosurgery Unit",
    points: [
      "Through persistent advocacy in 2017, we successfully championed the employment of a neurosurgeon, leading to the establishment of DELSUTH's first Neurosurgery Unit.",
      "This achievement expanded access to life-saving specialized care for citizens of Delta State, eliminating the need for patients to travel long distances for neurosurgical interventions.",
      "Today, this unit continues to provide critical care to patients across the region."
    ]
  },
  {
    title: "COVID-19 Frontline Recognition",
    points: [
      "When the global pandemic struck in 2020, we stood firmly with all healthcare workers in Delta State.",
      "Through collaboration with the Nigerian Medical Association, we secured a 25% Basic Consolidated Allowance as hazard inducement for all health workers.",
      "This recognition honored the courage and sacrifice of frontline workers who risked their lives daily to protect our communities during the nation's health crisis."
    ]
  },
  {
    title: "Modern Residential Facilities for Medical Staff",
    points: [
      "In 2023, we achieved government approval for the construction of new residential buildings for house officers and residents.",
      "These modern accommodations enhance the living conditions of young doctors, allowing them to focus on their training and patient care.",
      "By investing in quality housing, we're creating an environment that attracts and retains the best medical talent in Delta State."
    ]
  },
  {
    title: "Strengthening Healthcare Capacity",
    points: [
      "Recognizing the critical need for adequate nursing staff, we secured approval in 2023 for the employment of 95 new nurses.",
      "This significant expansion of our healthcare workforce directly translates to improved patient care, reduced waiting times, and enhanced service delivery across all departments.",
      "It demonstrates our commitment to comprehensive healthcare strengthening beyond just physician welfare."
    ]
  },
  {
    title: "Championing Safety and Security",
    points: [
      "The safety of our members and the medical community remains paramount.",
      "In 2023, following incidents affecting medical practitioners, we mobilized peaceful advocacy that resulted in reinforced security measures by the Delta State Police Command.",
      "Through dialogue and responsible action, we've created a safer environment for healthcare workers to serve their communities with confidence and dignity."
    ]
  }
];

const Achievements = () => {
  return (
    <>
      <Head>
        <title>ARD DELSUTH Achievements</title>
      </Head>
      <section className="sass-container agency bg-top pb-10 ">
        <div className="heading-title">
          <Title className={"text-[32px]"} title="OUR MAJOR EVENTS & ACHIEVEMENTS" />
        </div>
        <div>
          <p className="text-center !text-lg mb-8">
            These milestones represent our ongoing commitment to excellence in healthcare delivery, member welfare, and community service. Together, we continue building a stronger medical community in Delta State.
          </p>
        </div>
        <div>
          <div className="misson-p gap-y-6">
            {achievements.map((achievement, idx) => (
              <div key={achievement.title} className="mb-4">
                <div className="flex items-center gap-x-2 mb-2">
                  <DotIcon
                    className="!inline !mb-[3.5px] !mr-[5px]"
                    color="black"
                  />
                  <span className="font-bold">{achievement.title}</span>
                </div>
                <ol className="pl-6 list-disc">
                  {achievement.points.map((point, i) => (
                    <li key={i} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
