'use client'
import Image from "next/image";
import { Title } from "./Title";
import { brand, faq_data } from "@/public/assets/data/dummydata";
import Text from "./Text";
import { FAQCard } from "./Card";
import Link from "next/link";
import { useState } from "react";

const FAQs = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const handleToggle = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};
	return (
		<>
			<section className="sass-container !pt-4 !pb-16 ">
				<div className="grid-2 !pb-16">
					<div>
						<div>
							<Title title={"Any questions?"} />
							<Text
								text={
									"We are here to answer your questions or get you a coffee."
								}
							/>
						</div>
						<div className="flex gap-x-2 w-full justify-center">
							<Link
								href={"/faqs"}
								className="!py-[10px] !mt-5 bg-primary-100 rounded-lg !px-[30px]"
							>
								See FAQs
							</Link>
							<button className="!py-[10px] !mt-5 text-primary-200 bg-[#e3e2e0] rounded-lg !px-[30px]">
								Ask questions
							</button>
						</div>
					</div>
					<img
						src="/assets/images/coffee.gif"
						className="flex justify-self-end"
						alt=""
					/>
				</div>
				{faq_data.map((fd, i) => (
					<FAQCard
						key={i}
						question={fd.question}
						answer={fd.answer}
						isOpen={openIndex === i}
						onClick={() => handleToggle(i)}
					/>
				))}
			</section>
			{/* <div className=''>
          <div className='heading-title !pt-16 text-[#141a15a1] !text-3xl '>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </div>
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id}  />
              </div>
            ))}
          </div>
        </div> */}
		</>
	);
};

export default FAQs;
