import Agency from "@/components/sections/Agency";
import { Title, TitleSm } from "@/components/Title";
import { activities } from "@/public/assets/data/dummydata";
import { DotIcon } from "@/public/assets/icons/icons";
import Head from "next/head";

const WhatWeDo = () => {
  return (
    <>
      <Head>
        <title>About ARD DELSUTH</title>
      </Head>
      <section className="sass-container agency bg-top pb-10 ">
        <div className="heading-title">
          <Title className={"text-[32px]"} title="ACTIVITIES OF ARD DELSUTH" />
        </div>
        <div>
          <p className="text-center !text-lg mb-8">
            ARD DELSUTH advances the welfare and professional growth of doctors
            at Delta State University Teaching Hospital through regular
            meetings, training, and advocacy. The association drives innovation,
            supports community outreach, and promotes public health via
            education and media campaigns, all aimed at strengthening healthcare
            delivery and supporting its members.
          </p>
        </div>
        <div className=" ">
          <div className="left ">
            <div className="misson-p gap-y-6">
              {activities.map((activity, idx) => (
                <div key={activity.title} className="mb-4">
                  <div className="flex items-center gap-x-2 mb-2">
                    <DotIcon
                      className="!inline !mb-[3.5px] !mr-[5px]"
                      color="black"
                    />
                    <span className="font-bold">{activity.title}</span>
                  </div>
                  <ol className="pl-6 list-disc">
                    {activity.points.map((point, i) => (
                      <li key={i} className="mb-1">
                        {point}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="right sass-w-40 !py-[3em] flex flex-col gap-y-6">
            {activities.slice(0, 3).map((activity, idx) => (
              <img
                key={activity.img}
                src={activity.img}
                alt={activity.title}
                className="round mb-4"
                width="100%"
                height="100%"
              />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
