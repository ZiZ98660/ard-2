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
            <TitleSm title='FAQs' /> 
            
          </div>
          <div className='desc'>
            <Text
            text={`1. What is Capital Growth Academy?`}
            className={'font-bold !text-lg'}
            />
            <br />
            <p
            className = {'!text-lg'}
            >
Capital Growth Academy is an educational platform that focuses on teaching business innovation using a combination of standard and creative principles. We offer courses and workshops designed to help both new and existing businesses adapt and thrive in today's dynamic marketplace.            </p>
            <br />
            <br />
            <Text
            text={`2. Who can benefit from Capital Growth Academy's courses?`}
            className={'font-bold !text-lg'}
            />
             <br />
            <p
            className = {'!text-lg'}
            >
           Our courses are designed to cater to a wide range of individuals, from budding entrepreneurs looking to launch their first venture to established business owners seeking to innovate and revitalize their operations. LEGO® SERIOUS PLAY® facilitates full participation from all team members, ensuring that every voice is heard. Unlike conventional meetings where some participants may dominate the conversation, LSP encourages equal participation. This inclusivity helps unearth a diverse range of perspectives and solutions that might otherwise remain untapped.
            </p>
            <br />
            <br />
            <Text
            text={`3. What topics do your courses cover?`}
            className={'font-bold !text-lg'}
            />
             <br />
            <p
            className = {'!text-lg'}
            >
Our curriculum includes topics such as market research, ideation, product development, marketing strategies, and more. We aim to provide a comprehensive learning experience that addresses the essential aspects of business innovation.
            </p>
            <br />
            <br />
            <Text
            text={`4. Who are the instructors at Capital Growth Academy?`}
            className={'font-bold !text-lg'}
            />
             <br />
            <p
            className = {'!text-lg'}
            >
Our instructors are seasoned business professionals and innovation experts with years of industry experience. They are passionate about sharing their knowledge and facilitating a supportive learning environment. </p>
            <br />
            <br />
            <Text
            text={`5. What learning formats do you offer?`}
            className={'font-bold !text-lg'}
            />
             <br />
            <p
            className = {'!text-lg'}
            >
We offer a variety of learning formats to accommodate different preferences and schedules, including in-person classes, online courses, and customized training sessions.
            </p>
            <br />
            <br />
            <Text
            text={`6. How do I enroll in a course?`}
            className={'font-bold !text-lg'}
            />
             <br />
            <p
            className = {'!text-lg'}
            >
You can enroll in our courses directly through our website. Simply select the course you're interested in, choose a suitable learning format, and follow the registration instructions.
            </p>
            <br />
            <br />
            <Text
            text={`7. Can I get personalized guidance or consulting for my business?`}
            className={'font-bold !text-lg'}
            />
             <br />
            <p
            className = {'!text-lg'}
            >
Yes, we offer tailored training and consulting services to address the specific needs of your business. Please click on personalized training on the website and follow the registration steps.</p>
            <br />
            <br />
            <Text
            text={`8. Are there any prerequisites for enrolling in your courses?
            `}
            className={'font-bold !text-lg'}
            />
             <br />
            <p
            className = {'!text-lg'}
            >
While some courses may have recommended prerequisites, many of our courses are designed to be accessible to learners with varying levels of experience in business and innovation.
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
