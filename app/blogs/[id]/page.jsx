'use client'
import { blogdata } from "@/public/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/Title"
import Head from "next/head"
import Image from "next/image";
import React, { useEffect } from "react"
import Text from "@/components/Text"
import { DotIcon } from "@/public/assets/icons/icons"
import { useParams } from 'next/navigation';
// import { useRouter } from "next/router"


const SinglePost = () => {


  const params = useParams();
  const id = parseInt(params.id, 10);
  const post = blogdata.find((post) => post.id === id);
  
  return (
    <>
      <Head>
        <title>{post?.title||'Blog Title'}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='sass-container'>
          <div className='heading-title'>
            <TitleSm title={`${post?.category||'Category'} / ${post?.date||'---'}`} /> <br />
            <br />
            <Title title={post?.title} className='title-bg' />
            <div className='img flex gap-x-4 !py-5'>
              <img src={post?.cover} alt={post?.title} width={50} height={50} className='rounded-[50%]' />
              <div>
                By Author
              </div>
            </div>
            <>
            {
              post?.id === 1
              ?
              <div className='desc'>
            <Text
            text={`Unleashing Creativity in Business Strategy with LEGO® SERIOUS PLAY®`}
            className={'font-bold !text-lg'}
            />
            <p
            className = {'!text-lg'}
            >
            In an increasingly complex business world, traditional brainstorming methods are often no longer sufficient to navigate the ever-evolving challenges companies face. This is where LEGO® SERIOUS PLAY® (LSP) comes into the picture, offering a powerful, experiential process designed to enhance innovation and business performance. Here’s how LSP can transform your strategy development and business model:
            </p>
            <br />
            <Text
            text={`Encourages Deep Engagement`}
            className={'font-bold !text-lg'}
            />
            <p
            className = {'!text-lg'}
            >
            LEGO® SERIOUS PLAY® facilitates full participation from all team members, ensuring that every voice is heard. Unlike conventional meetings where some participants may dominate the conversation, LSP encourages equal participation. This inclusivity helps unearth a diverse range of perspectives and solutions that might otherwise remain untapped.
            </p>
            <br />
            <Text
            text={`Enhances Problem Solving and Complexity`}
            className={'font-bold !text-lg'}
            />
            <p
            className = {'!text-lg'}
            >
            One of the standout features of LSP is its ability to simplify the complex. By building models, participants can visualize problems and explore various scenarios in a tangible way. This hands-on approach helps break down abstract concepts into manageable, understandable parts, making it easier to address complex issues within strategy and business models.
            </p>
            <br />
            <Text
            text={`Fosters Innovative Thinking`}
            className={'font-bold !text-lg'}
            />
            <p
            className = {'!text-lg'}
            >
            LSP prompts participants to think outside the box and use their imagination to build metaphoric models of their business realities. This creative process can lead to unique insights and innovative solutions that conventional desk-bound brainstorming sessions might never produce.            </p>
            <br />
            <Text
            text={`Builds Shared Understanding and Buy-In
            `}
            className={'font-bold !text-lg'}
            />
            <p
            className = {'!text-lg'}
            >
            By engaging in a playful, yet serious discussion about model building, team members develop a shared understanding of the business landscape and the strategic paths ahead. This collective insight fosters a stronger alignment and commitment to the developed strategy, as participants are more likely to buy into a plan they helped create.
            </p>
            <br />
            <Text
            text={`Accelerates Decision-Making`}
            className={'font-bold !text-lg'}
            />
            <p
            className = {'!text-lg'}
            >
            With LEGO® SERIOUS PLAY®, decision-making becomes a dynamic and swift process. The method facilitates a quicker understanding of the factors at play and the potential outcomes of different decisions. This can significantly speed up the time it takes to align on a strategy and move forward with implementing changes.
            </p>
            <br />
            <Text
            text={`Drives Flexible and Adaptive Thinking`}
            className={'font-bold !text-lg'}
            />
            <p
            className = {'!text-lg'}
            >
            In today’s rapidly changing business environment, adaptability is crucial. LSP helps develop agile thinking by allowing participants to quickly reconfigure their LEGO® models as new information emerges and scenarios change. This ability to pivot and adapt is directly translatable to real-world business situations.            </p>
            <br />

            <p
            >
LEGO® SERIOUS PLAY® is not just about playing with bricks; it's a serious business tool designed to foster deeper thinking, collaboration, and innovation. For companies looking to develop effective strategies or transform their business models, LSP offers a refreshing, engaging, and profoundly productive approach to meeting the complex demands of today’s business environment.
            </p>

            </div>
              :
              post?.id === 2 ?
            <div className='desc'>
            <Text
            text={`"The KICKBOX methodology is revolutionizing the way companies approach innovation. Originating from Adobe's innovation programs, KICKBOX was designed to empower employees to become intrapreneurs, taking ownership of their innovative ideas and driving them from inception to implementation. This self-driven, bottom-up approach to innovation has been adopted by numerous companies globally, including Swisscom and Roche, who have reported significant breakthroughs and improvements in their innovation processes."`}
            className={'text-center !text-lg'}
            />
            <br/>
            <Text
            text={"A Brief History of KICKBOX"}
            className={'font-bold !text-lg'}
            />
                   
            <div className='pl-6'><span className="font-bold text-black ">Origin:</span><span className=''>{' KICKBOX was developed by Adobe as a part of its Adobe Kickbox Innovation Kit. The goal was to decentralize innovation, giving every employee, not just those in R&D or leadership roles, the tools to innovate.'}</span></div>
            <div className='pl-6'><span className="font-bold text-black ">Adaptation and Spread:</span><span className='' >{' Following its success at Adobe, the methodology spread to other companies and industries, adapting to different corporate cultures and objectives. Each organization molds the KICKBOX framework to suit its unique needs, driving innovation across various sectors.'}</span></div>     
            <br />
            <Text
            text={"Examples and Case Studies"}
            className={'font-bold !text-lg'}
            />
            <div className='pl-6'><span className="font-bold inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Adobe:</span></span> <span className='' >{'The creator of KICKBOX, Adobe used this methodology to spur hundreds of new ideas, many of which have been developed into successful projects and features within Adobe’s offerings.'}</span></div>     
            <div className='pl-6'><span className="font-bold inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Swisscom:</span></span> <span className='' >{"Switzerland's leading telecom company, Swisscom, adopted KICKBOX and created an internal innovation ecosystem. This has led to the development of numerous new products and services that have significantly contributed to Swisscom's market competitiveness"}</span></div>     
            <div className='pl-6'><span className="font-bold inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Roche:</span></span> <span className='' >{"Global healthcare company Roche implemented KICKBOX to enhance its innovation in medical and diagnostic solutions, leading to improvements in both product offerings and internal processes"}</span></div>     
            <br />
            <Text
            text={"Key Benefits of the KICKBOX Methodology"}
            className={'font-bold !text-lg'}
            />
            <div className=''><span className="inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Empowers Employees:</span></span> <span className='' >{'Employees at all levels are given the resources, time, and support to pursue their innovative ideas, fostering a strong sense of ownership and engagement.'}</span></div>     
            <div className=''><span className="inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Drives a Culture of Innovation:</span></span> <span className='' >{"KICKBOX encourages a continuous flow of ideas, which helps create a sustained culture of innovation within the organization."}</span></div>     
            <div className=''><span className="inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Scalable and Flexible:</span></span> <span className='' >{"The methodology is adaptable to various organizational sizes and industries, making it a versatile tool for driving innovation"}</span></div>     
            <div className=''><span className="inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Provides Structure to Innovation:</span></span> <span className='' >{" KICKBOX offers a clear framework and process, from idea generation to execution, ensuring that innovations are not only creative but also aligned with business goals."}</span></div>     
            <div className=''><span className="inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Accelerates Time to Market:</span></span> <span className='' >{"By empowering employees to act on their ideas quickly and providing them with a structured path, KICKBOX can significantly reduce the time it takes for new products and services to reach the market"}</span></div>     
            <div className=''><span className="inline-flex items-baseline gap-x-2  text-black"> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Measurable Outcomes:</span></span> <span className='' >{"Each step of the KICKBOX process is designed to be measurable, allowing companies to track progress and assess the impact of innovations"}</span></div>     
            <br />
            <Text
            text={`"The KICKBOX methodology is more than just a tool for generating ideas; it's a comprehensive system that equips employees to take an active role in their company's innovation journey. By embedding this methodology into their operational framework, companies can unleash the potential of their workforce, turning creative ideas into tangible, impactful innovations."`}
            className={' text-center !text-lg'}
            />

            </div>
            : 
            ''
            }
            </>
          </div>
          {/* <Banner /> */}
        </div>
      </section>
    </>
  )
}

export default SinglePost
