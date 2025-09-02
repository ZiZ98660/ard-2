"use client";

import Link from "next/link";
import { Title, TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Text from "./Text";
import { FaArrowRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Card = ({ data, caption, show, path }) => {
	return (
		<>
			<div className="card">
				<div className="card-img">
					<img src={data.cover} alt={data.title} />
				</div>
				<div className="card-details">
					<Link href={`${path}/${data.id}`} className="title-link">
						<TitleSm title={data.title} />
					</Link>
					{caption && (
						<Link href={`${path}/${data.id}`}>
							{caption} <HiOutlineArrowRight className="link-icon" />
						</Link>
					)}
					<div className="flex">
						<span> {data.category} </span>{" "}
						{data.date && <span> / {data.date}</span>}
					</div>
					{show && data.desc && data.desc.length > 0 && (
						<ul>
							{data.desc.map((text, i) => (
								<li key={i}> - {text.text}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export const Card2 = ({ percent, details }) => {
	return (
		<div className="bg-dark grid gap-y-6 place-items-center !px-6 !py-20  text-light rounded-tl-[2em] rounded-br-[2em] ">
			<div className="text-[3em]">{percent}%</div>
			<span className="grid justify-center text-sm text-center">{details}</span>
		</div>
	);
};

export const Card3 = ({
	title,
	sub_title,
	details,
	tag,
	kickbox,
	ideahub,
	card_one,
	card_two,
}) => {
	return (
		<div className="bg-light rounded-lg cursor-pointer p-6 ">
			<div className="border-b border-b-[#373435] !pb-1 ">
				<div className="flex gap-x-2">
					<Title className={"text-xl font-bold"} title={title} />
					<FaArrowRight />
				</div>
				<Text text={sub_title} className={"text-dark !pb-2"} />
			</div>

			<div className="flex gap-x-3 !pt-2 items-start ">
				<div className="grid">
					{details.map((d, i) => (
						<Text
							key={i}
							text={
								card_one
									? d.detail_one
									: card_two
									? d.detail_two
									: d.detail_three
							}
							className={"text-sm text-dark "}
						/>
					))}
				</div>
				{tag ? (
					<div className="bg-dark !px-1 text-center rounded-md flex place-items-center ">
						{kickbox ? (
							<Text text="+ KICKBOX*" className={"text-[6.7px] text-light"} />
						) : ideahub ? (
							<Text text="+ IDEAHUB*" className={"text-[6.7px] text-light"} />
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
};

export const TestimonialCard = ({
	profile,
	name,
	position,
	company,
	remark,
	logo,
}) => {
	return (
		<div className="bg-[#eef9edf4] p-10 rounded-[10px] grid-4 w-full !mb-[26px] justify-between">
			<img
				loading="lazy"
				src={`/assets/images/${profile}`}
				alt=""
				width={120}
				height={120}
				className="rounded-[10px] object-cover aspect-[1/1]"
			/>
			<div>
				<div>
					<Text
						className={"font-semibold !text-[1.4rem] !mb-[10px]"}
						text={name}
					/>
				</div>
				<Text className={" !text-xs !mb-[10px]"} text={position} />
				<div>
					<Text className={"!text-xs"} text={company} />
				</div>
			</div>

			<Text className="font-[300] " text={`"${remark}"`} />
			<img
				src={`/assets/images/${logo}`}
				width={60}
				className="flex place-self-center"
			/>
		</div>
	);
};

export const FAQCard = ({ question, answer, isOpen, onClick }) => {
	return (
		<div
			className={`p-4 !mb-4 ease-in-out duration-200 bg-[#eef9edf4] rounded-lg ${
				isOpen ? "grid  gap-y-2" : ""
			}`}
		>
			<div
				onClick={onClick}
				className="w-full flex justify-between cursor-pointer"
			>
				<h3 className="font-bold">{`${question}?`}</h3>
				{isOpen ? <FaCaretUp /> : <FaCaretDown />}
			</div>
			<div
				className={`transition-all duration-500 overflow-hidden ${
					isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				{isOpen && (
					<div>
						<Text className={""} text={answer} />
					</div>
				)}
			</div>
		</div>
	);
};