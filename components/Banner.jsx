import React from "react"
import { Title, TitleLogo } from "./Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='sass-container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <button className='button-primary'>Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
