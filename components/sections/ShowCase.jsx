import { showcase } from "@/public/assets/data/dummydata"
import { Card } from "@/components/Card"
import { Title, TitleSm } from "@/components/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='sass-container'>
          <div className='heading-title'>
            <TitleSm title='SHOWCASE' /> <br />
            <br />
            <Title title='Fresh ideas. Bold design. Smart realisation.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <div className='py btn'>
            <button className='secondary-button'>View More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
