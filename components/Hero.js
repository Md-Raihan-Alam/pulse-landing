"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-[#EBFBCF] flex flex-col relative">
      <div className="absolute inset-0">
        <Image
          src="/icons/eclipse.svg"
          alt="Eclipse"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="h-24 flex justify-between items-center px-5 sm:px-20 relative z-10">
        {/* Responsive Logo */}
        <Image
          src="/icons/logo.svg"
          alt="Pulse"
          width={200}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/icons/logo.svg"
          alt="Pulse"
          width={100}
          height={50}
          className="hidden sm:block md:hidden"
        />
        <Image
          src="/icons/logo.svg"
          alt="Pulse"
          width={80}
          height={40}
          className="block sm:hidden"
        />
        <Button
          className="bg-black text-white text-xs sm:text-base md:text-xl font-semibold cursor-pointer w-16 sm:w-24 md:w-40 h-9 sm:h-10 md:h-14"
          onClick={() =>
            window.open(
              "https://bookwithpulse.vercel.app/admin/auth/register",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Use Pulse
        </Button>
      </div>

      <div className="flex-grow flex flex-col md:flex-row justify-between items-center px-5 my-5 sm:px-20 relative z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-3xl md:text-5xl flex justify-center md:justify-start items-center md:items-start flex-col gap-y-3 font-bold text-gray-900">
            <div>Your Time Matters.</div>
            <div>Healthcare Should</div>
            <div>Be Simple.</div>
          </div>
          <p className="text-base md:text-lg text-center md:text-start text-[#010C0B]">
            <div>
              Tired of endless phone calls and clunky scheduling? Pulse bridges
            </div>
            <div>
              the gap between patients and healthcare providers with a modern,
            </div>
            <div>intuitive platform.</div>
          </p>
          <div className="w-full h-fit flex justify-center my-10 md:justify-start items-center md:items-start">
            <Button
              className="bg-[#BEF264] cursor-pointer hover:bg-green-300 text-black w-32 md:w-56 h-10 md:h-16 text-base md:text-lg font-bold flex items-center gap-x-2"
              onClick={() =>
                window.open(
                  "https://bookwithpulse.vercel.app/admin/auth/register",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>Use Pulse</span>
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow Right"
                width={20}
                height={20}
                className="hidden md:block"
              />
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow Right"
                width={10}
                height={10}
                className="block md:hidden"
              />
            </Button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-full mb-10 flex justify-center md:justify-end items-center">
          <Image
            src="/images/hero-image.jpg"
            alt="Doctor"
            width={400}
            height={400}
            className="relative z-10 hidden md:block"
          />
          <Image
            src="/images/hero-image.jpg"
            alt="Doctor"
            width={250}
            height={250}
            className="relative z-10 block md:hidden"
          />

          <Image
            src="/icons/hero-patient.svg"
            alt="Doctor"
            width={300}
            height={300}
            className="absolute bottom-15 left-[5%] sm:left-[10%] md:left-[20%] lg:left-[30%] z-20 transition-all duration-300 hidden md:block"
          />
          <Image
            src="/icons/hero-patient.svg"
            alt="Doctor"
            width={200}
            height={100}
            className="absolute bottom-15 -left-[3%] sm:left-[10%] md:left-[10%] lg:left-[15%] z-20 transition-all duration-300 block md:hidden"
          />
          <Image
            src="/icons/hero-doctor.svg"
            alt="Doctor"
            width={300}
            height={300}
            className="absolute -bottom-10 left-[10%] sm:left-[15%] md:left-[25%] lg:left-[35%] z-20 transition-all duration-300 hidden md:block"
          />
          <Image
            src="/icons/hero-doctor.svg"
            alt="Doctor"
            width={200}
            height={100}
            className="absolute -bottom-10 left-[5%] sm:left-[20%] md:left-[10%] lg:left-[15%] z-20 transition-all duration-300 block md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
