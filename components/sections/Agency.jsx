import { Title, TitleSm } from "@/components/Title";
import Text from "../Text";
import { DotIcon } from "@/public/assets/icons/icons";



const Agency = () => {
	return (
    <>
      <section className="agency bg-top">
        <div className="sass-container">
          <div className="heading-title">
            <Title className={"text-[32px]"} title="WHO WE ARE" />
          </div>
          <div>
            <Text
              text={
                "The Association of Resident Doctors (ARD) at Delta State University Teaching Hospital (DELSUTH) unites doctors in residency training, along with other doctors of similar ranks and house officers. Our mission is to advance the welfare of doctors, uphold outstanding residency training, promote efficient hospital operations, and advocate for quality healthcare in Delta State. We actively engage in policy and collaborate with aligned organizations at the state and national levels to improve health and training outcomes. We are a chapter of the Nigerian Association of Resident Doctors (NARD) and are proudly affiliated with the Nigerian Medical Association (NMA)."
              }
              className={"text-center !text-lg"}
            />
          </div>

          <div className="content flex gap-x-4 max-800:!mt-12">
            <div className="left sass-w-60">
              <TitleSm title="Our Mission" />
              <br />
              <p className="misson-p ">
                To advance the welfare of doctors, uphold outstanding residency
                training, promote efficient hospital operations, and advocate
                for quality healthcare in Delta State.
              </p>
            </div>
            <div className="right h-[30em] sass-w-40 !py-[3em] max-800:!pt-0 ">
              <img
                src="/assets/images/surgery.png"
                alt="ARD DELSUTH"
                className="round w-full h-full object-cover"
                width="100%"
              />
            </div>
          </div>

          <div className="content flex max-800:!flex-col-reverse">
            <div className="left h-[30em] sass-w-40 !py-[3em] max-800:!pb-[0em]">
              <img
                src="/assets/images/place.png"
                alt="ARD Logo"
                className="round w-full h-full"
              />
            </div>
            <div className="right sass-w-60 ml max-800:!text-center ">
              <TitleSm title="Our Affiliations" />
              <br />
              <p className="misson-p">
                We are a chapter of the Nigerian Association of Resident Doctors
                (NARD) and are proudly affiliated with the Nigerian Medical
                Association (NMA).
              </p>
            </div>
          </div>

          <div>
            <Text
              text={
                "ARD DELSUTH is committed to fostering professional excellence, advocating for members’ welfare, and advancing healthcare delivery in Delta State and beyond. We invite all resident doctors and house officers to join us in our mission to improve health and training outcomes for all."
              }
              className={"text-center !text-lg !pt-10 !pb-28"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Agency;
