import React from "react"
import { Card } from "./Card"
import { blogdata } from "@/public/assets/data/dummydata"

const BlogCard = () => {
  return (
    <>
      <div className='sass-container blog-card grid-2 !py-[3em]'>
        {blogdata.map((item) => (
          <Card data={item} key={item.id} path='blogs' />
        ))}
      </div>
    </>
  )
}

export default BlogCard
