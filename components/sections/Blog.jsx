import BlogCard from "@/components/BlogCard"
// import { Card } from "@/components/Card"
import { Title, TitleSm } from "@/components/Title"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top !pb-16'>
        <div className='sass-container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <Title title='Our views on tested and trusted business strategies and methodologies ' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
