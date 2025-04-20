"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const About = () => {
  return (
    <div className="min-h-screen h-fit w-full bg-[#010C0B] flex justify-center items-center">
      <div className="w-full h-fit flex-grow">
        <div className="min-h-36 h-fit text-center text-2xl md:text-3xl lg:text-5xl my-10 font-semibold text-white">
          Healthcare shouldn’t be complicated. Pulse is a powerful, easy-
          <br />
          to-use platform designed to make medical appointments <br />
          seamless for everyone.
        </div>
        <div className="flex min-h-80 h-fit justify-center items-center my-4 gap-x-2 gap-y-2 w-full flex-wrap">
          <div className="w-[600px] flex min-w-72 mx-10 overflow-hidden rounded-3xl h-72 bg-[#EBFBCF]">
            <div className="w-1/2 flex-1 h-full">
              <div className="flex  w-full h-full flex-col justify-between py-5 items-start ml-4 gap-y-5">
                <div className="h-14 text-2xl md:text-5xl font-semibold text-black text-start">
                  For Patients
                </div>
                <div className="h-fit text-sm md:text-[18px] font-normal text-black text-start">
                  book instantly, and manage your
                  <br /> appointments—all in one place.
                </div>
                <Button
                  className="rounded-3xl h-10 w-fit hover:bg-gray-300 cursor-pointer text-sm font-semibold bg-white text-black"
                  onClick={() =>
                    window.open(
                      "https://bookwithpulse.vercel.app/patients/login",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Register as Patient
                </Button>
              </div>
            </div>
            <div className="w-full flex-1 h-full flex justify-end items-end relative">
              <Image
                src="/icons/about-patient.svg"
                alt="Patient"
                width={230}
                height={230}
                className="object-cover hidden sm:block"
              />
              <Image
                src="/icons/about-patient.svg"
                alt="Patient"
                width={150}
                height={150}
                className="object-cover block sm:hidden"
              />
            </div>
          </div>
          <div className="w-[600px] flex min-w-72 mx-10 overflow-hidden rounded-3xl h-72 bg-[#EBFBCF]">
            <div className="w-1/2 flex-1 h-full">
              <div className="flex  w-full h-full flex-col justify-between py-5 items-start ml-4 gap-y-5">
                <div className="h-14 text-2xl md:text-5xl font-semibold text-black text-start">
                  For Doctors
                </div>
                <div className="h-fit text-sm md:text-[18px] font-normal text-black text-start">
                  Get a personalized booking page, streamline your schedule, and
                  focus on what you do best: caring for patients.
                </div>
                <Button
                  className="rounded-3xl h-10 w-fit hover:bg-gray-300 cursor-pointer  text-sm font-semibold bg-white text-black"
                  onClick={() =>
                    window.open(
                      "https://bookwithpulse.vercel.app/admin/auth/register",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Register as Doctor
                </Button>
              </div>
            </div>
            <div className="w-full flex-1 h-full flex justify-end items-end relative">
              <Image
                src="/icons/about-doctor.svg"
                alt="Patient"
                width={230}
                height={230}
                className="object-cover hidden sm:block"
              />
              <Image
                src="/icons/about-doctor.svg"
                alt="Patient"
                width={150}
                height={150}
                className="object-cover block sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
