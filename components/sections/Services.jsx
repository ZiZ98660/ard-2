import { expertise } from "@/public/assets/data/dummydata";
import { Card } from "@/components/Card";
import { Title, TitleSm } from "@/components/Title";
import { DotIcon } from "@/public/assets/icons/icons";
import Text from "../Text";
import Link from "next/link";

const Services = () => {
	return (
		<>
			<section className="agency bg-top">
				<div className="sass-container !pb-28">
					<div className="heading-title">
						<TitleSm title="SERVICES" />
					</div>
					<div className="desc">
						<Text
							text={`Training Offerings`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg"}>
							At Capital Growth Academy, we offer a diverse range of specialized
							training programs designed to unlock potential and catalyze growth
							in businesses across Sub-Saharan Africa. Here’s a look at our
							current offerings:
						</p>
						<br />

						<Text
							text={`LEGO® SERIOUS PLAY® Workshops`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg"}>
							Recognized as some of the best LSP facilitators in Africa, we
							utilize the LEGO® SERIOUS PLAY® method to enhance team dynamics
							and problem-solving skills. Our workshops are designed to create
							flow in processes, remove obstacles, and build effective
							communication bridges within teams.{" "}
						</p>
						<Link
							href="/#form_section"
							className="link !py-[10px] inline-block !mt-3 !mb-7 bg-white text-primary-100 hover:text-white hover:bg-primary-100  border-solid border-primary-100 border-[1.4px] rounded-2xl !px-[30px]"
						>
							Get more information
						</Link>
						<br />
						<Text
							text={`Innovation Masterclasses and Innovation Management Program with KICKBOX`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg"}>
							Unlock the power of innovation with our KICKBOX entrepreneurship
							program. This comprehensive course transforms employees into
							passionate innovators and scales innovation across your
							organization. Our masterclasses cover all aspects of Innovation
							Management and Idea Execution, ensuring that your team can turn
							creative ideas into successful projects
						</p>
						<Link
							href="/#form_section"
							className="link !py-[10px] inline-block !mt-3 !mb-7 bg-white text-primary-100 hover:text-white hover:bg-primary-100  border-solid border-primary-100 border-[1.4px] rounded-2xl !px-[30px]"
						>
							Get more information
						</Link>
						<br />
						<Text
							text={`Design Thinking for Product Development`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg"}>
							Empower your product development teams with our Design Thinking
							workshops. These sessions provide the tools and frameworks
							necessary to foster innovation in product design, helping your
							team develop solutions that are not only viable and feasible but
							also deeply desired by your customers.
						</p>
						<Link
							href="/#form_section"
							className="link !py-[10px] inline-block !mt-3 !mb-8 bg-white text-primary-100 hover:text-white hover:bg-primary-100  border-solid border-primary-100 border-[1.4px] rounded-2xl !px-[30px]"
						>
							Get more information
						</Link>
						<br />
						<Text
							text={`Design Thinking for Experience Transformation`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg"}>
							Transform how your customers interact with your brand and products
							through our Design Thinking for Experience Transformation. This
							program focuses on enhancing user experience, ensuring that every
							touchpoint is optimized for engagement, satisfaction, and loyalty.
						</p>
						<Link
							href="/#form_section"
							className="link !py-[10px] inline-block !mt-3 !mb-8 bg-white text-primary-100 hover:text-white hover:bg-primary-100  border-solid border-primary-100 border-[1.4px] rounded-2xl !px-[30px]"
						>
							Get more information
						</Link>
						<br />
						<Text
							text={`Professional Services`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg"}>
							Capital Growth Academy is dedicated to providing a wide range of
							professional services tailored to enhance the strategic
							capabilities of businesses in Sub-Saharan Africa. Our services are
							designed to foster innovation, drive growth, and build strong
							brands. Here’s an overview of our offerings:
						</p>
						<br />
						<Text
							text={`Executive Coaching`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Our executive coaching service is focused on enhancing leadership
							skills, strategic thinking, and decision-making capabilities. We
							work one-on-one with top executives to refine their leadership
							style, improve their organizational impact, and ensure they are
							equipped to navigate the complex challenges of today's business
							environment.
						</p>
						<br />
						<Text
							text={`Product Development`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							From concept to market, our product development service helps
							businesses create innovative products that resonate with
							customers. We combine market insights with design thinking to
							ensure that new products not only meet market needs but also
							exceed customer expectations.
						</p>
						<br />
						<Text
							text={`Brand Conception, Design, and Development`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							Our branding service covers everything from brand conception to
							design and development. We help businesses establish a compelling
							brand identity that captures the essence of their company and
							resonates with their target audience. Our approach ensures that
							your brand stands out in a crowded market and aligns with your
							overall business strategy.{" "}
						</p>
						<br />
						<Text
							text={`Growth Strategy Development`}
							className={"font-bold !text-lg"}
						/>
						<p className={"!text-lg !pl-3 flex items-baseline gap-x-3"}>
							<DotIcon className={"w-[1em]"} color={"black"} />
							We assist companies in crafting robust growth strategies that are
							practical and scalable. Our strategic planning focuses on
							leveraging your company’s strengths, identifying new
							opportunities, and mitigating risks. This service is designed to
							position your business for sustainable growth and competitive
							advantage.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
