import { Button } from "@/components/ui/button";
import Image from "next/image";
const About = () => {
  return (
    <div className="min-h-screen h-fit w-full bg-[#010C0B] flex justify-center items-center">
      <div className="w-full h-fit flex-grow">
        <div className="min-h-36 h-fit text-center text-5xl font-semibold text-white">
          Healthcare shouldn’t be complicated. Pulse is a powerful, easy-
          <br />
          to-use platform designed to make medical appointments <br />
          seamless for everyone.
        </div>
        <div className="flex  h-80 justify-center items-center my-4 gap-x-2 gap-y-2 w-full flex-wrap">
          <div className="w-[600px] flex min-w-72 rounded-3xl h-72 bg-[#EBFBCF]">
            <div className="w-1/2 flex-1 h-full">
              <div className="flex  w-full h-full flex-col justify-center items-start ml-4 gap-y-5">
                <div className="h-14 text-5xl font-semibold text-black text-start">
                  For Patients
                </div>
                <div className="h-fit text-[18px] font-normal text-black text-start">
                  book instantly, and manage your
                  <br /> appointments—all in one place.
                </div>
                <Button className="rounded-3xl h-10 w-32 text-sm font-semibold bg-white text-black">
                  Read More
                </Button>
              </div>
            </div>
            <div className="w-full flex-1 h-full relative">
              <Image
                src="/images/about-patient.png"
                alt="Patient"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-[600px] flex min-w-72 rounded-3xl h-72 bg-[#EBFBCF]">
            <div className="w-1/2 flex-1 h-full">
              <div className="flex  w-full h-full flex-col justify-center items-start ml-4 gap-y-5">
                <div className="h-14 text-5xl font-semibold text-black text-start">
                  For Doctors
                </div>
                <div className="h-fit text-[18px] font-normal text-black text-start">
                  Get a personalized booking page, streamline your schedule, and
                  focus on what you do best: caring for patients.
                </div>
                <Button className="rounded-3xl h-10 w-32 mt-5 text-sm font-semibold bg-white text-black">
                  Read More
                </Button>
              </div>
            </div>
            <div className="w-full flex-1 h-full relative">
              <Image
                src="/images/about-doctor.png"
                alt="Patient"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
