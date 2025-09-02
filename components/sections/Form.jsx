import React from "react";
import { Title } from "../Title";
import Text from "../Text";

const Form = () => {
	return (
		<section className=" !pt-8 !pb-14 border-solid border-b border-[#e5e7eb]">
			<form id="form_section" className="text-dark sass-container" action="">
				<div className="!pb-8">
					<Title className={"!pb-2"} title={"Get more information"} />
					<Text
						text={
							"Answer a few questions and get more information about the course."
						}
					/>
				</div>
				<div className="grid-2  justify-between">
					<label className="w-full text-left" htmlFor="First name *">
						<p>First name *</p>
						<input className="input" required type="text" />
					</label>
					<label className="w-full text-left" htmlFor="Last name *">
						<p>Last name *</p>
						<input className="input" required type="text" />
					</label>
				</div>
				<div className="mt-8">
					<p>Email *</p>
					<input className="input" required type="email" />
				</div>
				<span className="block !my-4 italic">
					By consenting to receive communications, you agree to the use of your
					data as described in our privacy policy. You may opt out of receiving
					communication at any time.
				</span>
				<button className="btn_link max-800:!w-full !py-[10px] !mt-3 !mb-5 text-white bg-primary-100 hover:bg-primary-200 rounded-[2em] !px-[30px]">
					Submit
				</button>
			</form>
		</section>
	);
};

export default Form;
