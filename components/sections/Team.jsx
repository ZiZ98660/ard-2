import { teamdata } from "@/public/assets/data/dummydata";
import { Card } from "@/components/Card";
import { Title, TitleSm } from "@/components/Title";
import React from "react";

const Team = () => {
	return (
		<>
			<section className="agency bg-top">
				<div className="sass-container">
					<div className="heading-title">
						<TitleSm title="MEET OUR TEAM" /> <br />
						<br />
						<Title
							title="A team of smart & passionate creatives"
							className="title-bg"
						/>
					</div>
					<div className="grid-4 py">
						{teamdata.map((item) => (
							<Card data={item} key={item.id} caption={item.post} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
