import Banner from "@/components/Banner"
import Brand from "@/components/FAQs"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/Title"
import Text from "../Text"
import { DotIcon } from "@/public/assets/icons/icons"

const Faqs = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='sass-container'>
          <div className='heading-title'>
            <Title className={"text-[32px]"} title="FAQs" />
          </div>
          <div className='desc'>
            <Text
              text={`1. Who is eligible for membership in the ARD DELSUTH?`}
              className={'font-bold !text-lg'}
            />
            <br />
            <p className='!text-lg'>
              The association unites doctors currently in residency training at the Delta State University Teaching Hospital. Membership also includes other doctors of similar ranks as well as house officers.
            </p>
            <br />
            <br />
            <Text
              text={`2. What are the primary objectives of the association?`}
              className={'font-bold !text-lg'}
            />
            <br />
            <p className='!text-lg'>
              The mission of ARD DELSUTH is fourfold:
            </p>
            <ul className="list-disc pl-5 mt-2 !text-lg">
              <li>To advance the welfare of doctors.</li>
              <li>To uphold outstanding standards in residency training.</li>
              <li>To promote efficient hospital operations.</li>
              <li>To advocate for quality healthcare delivery within Delta State.</li>
            </ul>
            <br />
            <br />
            <Text
              text={`3. How has the association improved the welfare and living conditions of its members?`}
              className={'font-bold !text-lg'}
            />
            <br />
            <p className='!text-lg'>
              The ARD has achieved several milestones regarding staff welfare, including:
            </p>
            <ul className="list-disc pl-5 mt-2 !text-lg">
              <li>
                <span className="font-semibold">Healthcare:</span> Securing government approval in 2013 for free healthcare coverage for all hospital staff.
              </li>
              <li>
                <span className="font-semibold">Housing:</span> Obtaining approval in 2023 for the construction of modern residential buildings for residents and house officers.
              </li>
              <li>
                <span className="font-semibold">Compensation:</span> Securing a 25% Basic Consolidated Allowance as a hazard inducement for health workers during the COVID-19 pandemic in 2020.
              </li>
            </ul>
            <br />
            <br />
            <Text
              text={`4. What contributions has ARD DELSUTH made to specialized medical care and hospital capacity?`}
              className={'font-bold !text-lg'}
            />
            <br />
            <p className='!text-lg'>
              The association has actively strengthened hospital capacity by:
            </p>
            <ul className="list-disc pl-5 mt-2 !text-lg">
              <li>
                <span className="font-semibold">Neurosurgery:</span> Championing the employment of a neurosurgeon in 2017, which led to the establishment of DELSUTH’s first Neurosurgery Unit.
              </li>
              <li>
                <span className="font-semibold">Staffing:</span> Securing approval for the employment of 95 new nurses in 2023 to improve patient care and reduce waiting times.
              </li>
              <li>
                <span className="font-semibold">Security:</span> Advocating for and achieving reinforced security measures by the Delta State Police Command to protect medical practitioners.
              </li>
            </ul>
            <br />
            <br />
            <Text
              text={`5. How has ARD DELSUTH demonstrated leadership at the national level?`}
              className={'font-bold !text-lg'}
            />
            <br />
            <p className='!text-lg'>
              The association demonstrated national leadership by hosting the 2020 National Association of Resident Doctors (NARD) Annual General Meeting. This event placed Delta State at the forefront of the medical community and resulted in ARD DELSUTH members being elected to key national positions, including NARD President, Secretary General, and Treasurer.
            </p>
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  )
}

export default Faqs
