"use client";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/Title";
import { activities, home, strategy } from "@/public/assets/data/dummydata";
import BlogCard from "@/components/BlogCard";
import Brand from "@/components/FAQs";
import { Card2, Card3 } from "@/components/Card";
import Image from "next/image";
import Text from "@/components/Text";
import { FaDotCircle } from "react-icons/fa";
import { DotIcon } from "@/public/assets/icons/icons";
import FAQs from "@/components/FAQs";
import Link from "next/link";
import Testimonial2 from "@/components/Testimonial copy";
import Form from "@/components/sections/Form";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          The Association of Resident Doctors (ARD) at Delta State University
          Teaching Hospital (DELSUTH){" "}
        </title>
      </Head>
      <section
        className="h-[85vh] relative opacity-[.96]"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(132,90,255,0.1) 0%, rgba(129,212,250,0.1) 40%, #fff 50%, rgba(129,212,250,0.17) 80%, rgba(132,90,255,0.2) 100% )",
        }}
      >
        <div className=" flex  gap-x-8 justify-between items-center h-full !text-left max-800:!grid max-800:!text-center max-800:!place-items-center max-800:!gap-y-8">
          <div className=" 800:pl-12 sass-container grid gap-y-4">
            <Title
              title="Uniting Resident Doctors, Advancing Healthcare Excellence"
              className={"text-[45px] max-800:!w-full  "}
            />
            <TitleSm
              className={""}
              title="Empowering DELSUTH ARD for Advocacy, Training, and Quality Care."
            />
          </div>
          <div className="relative max-800:!hidden w-full h-full max-800:w-full">
            {/* Solid white overlay covering at least 10% of the left side */}
            <div
              className="absolute left-0 top-0 h-full z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(244,246,252) 0%, rgba(244,246,252,0.85) 50%, rgba(244,246,252,0.65) 80%, transparent 100%)",
                filter: "blur(12px)",
                boxShadow: "30px 0 58px 0 rgba(244,246,252,0.45)",
              }}
            />
            {/* Gradient box shadow from left */}
            <div
              className="absolute left-[-23px] h-full top-0 bottom-0 w-28 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(244,246,252) 0%, rgba(244,246,252,0.85) 50%, rgba(244,246,252,0.65) 80%, transparent 100%)",
                filter: "blur(12px)",
                boxShadow: "30px 0 58px 0 rgba(244,246,252,0.45)",
              }}
            />
            {/* Image with dark veil overlay */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top shadow-2xl"
                src={"/assets/images/image.png"}
                alt="ARD DELSUTH"
                style={{
                  boxShadow: "0 0 0 0 transparent", // disables default shadow
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(20,20,30,0.52) 0%, rgba(20,20,30,0.27) 100%)",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="sass-container pt-5 !pb-24">
          <div className="heading-title !text-3xl !text-dark">
            <div className="flex w-full justify-center">
              <Title className={"text-[37px]"} title="Who we are" />
            </div>
            <div className="!pt-10 max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
              <p className="mb-4">
                The Association of Resident Doctors (ARD) at Delta State
                University Teaching Hospital (DELSUTH) unites doctors in
                residency training, along with other doctors of similar ranks
                and house officers.
              </p>
              <p className="mb-4">
                Our mission is to advance the welfare of doctors, uphold
                outstanding residency training, promote efficient hospital
                operations, and advocate for quality healthcare in Delta State.
              </p>
              <Link
                href="/about-us/who-we-are"
                className="btn_link max-800:!w-2/3 !py-[10px] !mt-3 !mb-5 text-white bg-primary-100 hover:bg-primary-200 rounded-[2em] !px-[30px]"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="!pt-5 sass-container ">
            <div className="flex w-full justify-center">
              <Title className={"text-[37px]"} title="What we do" />
            </div>
            <div className="grid-2 !pt-10  items-center ">
              <img
                src="/assets/images/header.png"
                className="w-5/6 max-800:w-full h-[28em] object-cover rounded-lg"
                alt="ARD DELSUTH doctors group"
                loading="lazy"
                decoding="async"
                style={{
                  filter: "contrast(1.08) brightness(1.04) saturate(1.08)",
                  imageRendering: "auto",
                }}
                // srcSet="/assets/images/header.png 1x, /assets/images/header@2x.png 2x"S
              />
              <div className="w-full">
                {/*
                  Summarized, elucidated points for the first three activities.
                  Dot color is light indigo (#818cf8).
                */}
                {(() => {
                  const summarizedPoints = [
                    {
                      title: "Meetings & Governance",
                      summary:
                        "Regular Ordinary and Annual General Meetings foster engagement, accountability, and decision-making on union matters.",
                    },
                    {
                      title: "Training & Capacity Building",
                      summary:
                        "Workshops, mock exams, and certified courses drive professional growth and maintain high standards in residency training.",
                    },
                    {
                      title: "Welfare & Remuneration Advocacy",
                      summary:
                        "Active engagement with management and government ensures fair remuneration, improved welfare, and quality work conditions for doctors.",
                    },
                  ];
                  return (
                    <div className="space-y-8 !mb-10">
                      {summarizedPoints.map(({ title, summary }, idx) => (
                        <div key={title} className="flex items-start gap-x-4">
                          <span className="flex-shrink-0 mt-2.5">
                            <DotIcon color="#818cf8" className="w-2 h-2" />
                          </span>
                          <span className="text-lg text-dark">
                            <span className="font-semibold">{title}:</span>{" "}
                            {summary}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })()}
                <Link
                  className="btn_link max-800:!w-full !py-[10px] !mt-3 !mb-5 text-white bg-primary-100 hover:bg-primary-200 rounded-[2em] !px-[30px]"
                  href="/about-us/what-we-do"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Banner /> */}
      {/* <ShowCase /> */}
      <Form />
      <FAQs />

      {/* <div className='text-center'>
      <Title title='Latest news & articles' />
    </div>
    <BlogCard /> */}
    </>
  );
}
