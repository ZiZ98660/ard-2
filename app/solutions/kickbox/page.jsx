import Text from '@/components/Text'
import { TitleSm } from '@/components/Title'
import { DotIcon } from '@/public/assets/icons/icons'
import React from 'react'
import Link from "next/link"

const KickBox = () => {
  return (
    <>
      <section className='agency bg-top'> 
        <div className='sass-container !pb-28'>
          <div className='heading-title'>
            <TitleSm title='IGNITE INNOVATION WITH KICKBOX' /> 
            <TitleSm title={`"Transform Your Ideas into Reality with Kickbox"`} /> 
          
                  
          </div>
          <div>
            <Text
            text={'Kickbox is your all-in-one solution for employee engagement, idea management, and idea execution. This methodology, pioneered by Adobe and refined by Swisscom, has been embraced by leading organizations worldwide to drive innovation and growth.'}
            className={'text-center !text-lg'}
            />
          </div>
          <br />
          <div>
            <Text
            text = 'Real-World Success Stories:'
            className={'!text-lg font-semibold'}
            />
            <div className='pl-6'><span className="font-[500] inline-flex items-baseline gap-x-2  "> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Swisscom:</span></span> <span className='' > <span > <Link className=' link underline hover:text-green-500' href="https://innov8rs.co/articles/employee-driven-innovation-with-kickbox">Over 700 employee ideas have been developed</Link></span>, including "Help2Type," a keyboard for the visually impaired, and a laundry machine tracker used in office space management​ (Kickbox Foundation)(Innov8rs).</span></div>     
            <div className='pl-6'><span className="font-[500] inline-flex items-baseline gap-x-2  "> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Siemens Energy:</span></span> <span className='' > <span > <Link className='  link underline hover:text-green-500' href="https://www.rready.com/kickbox-methodology">Boosted internal innovation with projects</Link></span> {` like developing new sources of income and improving operational efficiency​ (BIMS Services)​.`}</span></div>     
            <div className='pl-6'><span className="font-[500] inline-flex items-baseline gap-x-2  "> <DotIcon className={'flex self-center'} color={'black'}/> <span className="!pt-[1.8px]">Post Luxembourg:</span></span> <span className='' ><span > <Link className='  link underline hover:text-green-500' href="https://ventures.swisscom.com/news/rready-ag-makes-innovation-management-for-companies-globally-scalable">Leveraged Kickbox to streamline and enhance their innovation processes</Link> </span>{", leading to substantial cost savings and improved service delivery​ (Swisscom Ventures)​."}</span></div>  
          </div>
          <br />
          <div
          className='grid gap-y-4 place-items-center '
          >
            <Text
            text={`"Kickbox empowers your team to discover and seize opportunities, driving measurable growth and sustainable success."`}
            className={'text-center !text-lg'}
            />

<Link
              className="bg-primary-300  flex justify-center !mx-auto w rounded-md !py-4 !px-8  text-sm  !text-light "
              href={'/solutions/kickbox/discover'}
              >
              Discover KICKBOX      
              </Link>
              
          </div>

        </div>
      </section>

      {/* <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br /> */}
    </>
  )
}

export default KickBox
