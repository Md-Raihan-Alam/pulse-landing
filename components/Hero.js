import Image from "next/image";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#EBFBCF] flex flex-col relative">
      <div className="absolute inset-0">
        <Image
          src="/icons/eclipse.svg"
          alt="Eclipse"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="h-24 flex justify-between items-center px-20 relative z-10">
        <Image src="/icons/logo.svg" alt="Pulse" width={200} height={100} />
        <Button className="bg-black text-white text-xl font-semibold w-40 h-14">
          Use Pulse
        </Button>
      </div>

      <div className="flex-grow flex justify-between items-center px-20 relative z-10">
        <div className="w-1/2 space-y-6">
          <div className="text-5xl flex flex-col  gap-y-3 font-bold text-gray-900">
            <div>Your Time Matters. </div>
            <div> Healthcare Should</div>
            <div>Be Simple.</div>
          </div>
          <p className="text-lg  text-[#010C0B]">
            <div>
              Tired of endless phone calls and clunky scheduling? Pulse bridges
            </div>
            <div>
              the gap between patients and healthcare providers with a modern,
            </div>
            <div>intuitive platform.</div>
          </p>
          <Button className="bg-[#BEF264] text-black w-56 h-16 text-lg font-bold">
            <div>Use Pulse</div>
            <Image
              src="/icons/arrow-right.svg"
              alt="Arrow Right"
              width={20}
              height={20}
            />
          </Button>
        </div>
        <div className="relative w-1/2 h-full flex justify-end items-center">
          <Image
            src="/images/hero-image.jpg"
            alt="Doctor"
            width={400}
            height={400}
          />
          <Image
            src="/icons/hero-patient.svg"
            alt="Doctor"
            width={400}
            height={400}
            className="absolute bottom-30 left-30"
          />
          <Image
            src="/icons/hero-doctor.svg"
            alt="Doctor"
            width={400}
            height={400}
            className="absolute bottom-0 left-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
