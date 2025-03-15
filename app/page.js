import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="min-h-screen h-fit flex flex-col justify-center items-center p-10 bg-[#EBFBCF]">
        <div className="w-full h-fit p-10 flex justify-center items-start gap-x-5">
          <div className="w-1/2 h-fit flex justify-center items-center">
            <Image
              src="/icons/feature-admin.svg"
              width={500}
              height={500}
              alt="Admin Feature"
            />
          </div>
          <div className="w-1/2 h-fit flex flex-col justify-around items-start">
            <div className="text-5xl font-semibold mb-5">Admin Dashboard</div>
            <div className="w-full">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  ✅
                  <div>
                    <span className="font-semibold text-gray-800">
                      Your own booking page
                    </span>
                    <ol className="list-disc pl-6 mt-1 text-gray-600">
                      <li>
                        Every doctor gets a unique, customizable booking link
                        (e.g.pulse.com/doctor's name)
                      </li>
                      <li>
                        Share it on your website, social media, or email
                        signature to let patients book directly
                      </li>
                    </ol>
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  ✅
                  <div>
                    <span className="font-semibold text-gray-800">
                      Small Scheduling Tools
                    </span>
                    <ol className="list-disc pl-6 mt-1 text-gray-600">
                      <li>Sync your calender to avoid double bookings</li>
                      <li>
                        Set your availability, appointment types, and session
                        durations.
                      </li>
                    </ol>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-fit p-10 flex justify-center items-start gap-x-5">
          <div className="w-1/2 h-fit flex flex-col justify-around items-start">
            <div className="text-5xl font-semibold mb-5">Patient Dashboard</div>
            <div className="w-full">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  ✅
                  <div>
                    <span className="font-semibold text-gray-800">
                      Book Appointments in seconds
                    </span>
                    <ol className="list-disc pl-6 mt-1 text-gray-600">
                      <li>
                        See real-time availability and book instantly - no phone
                        calls, no waiting
                      </li>
                      <li>
                        Get instant confirmation and reminders via email or SMS
                      </li>
                    </ol>
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  ✅
                  <div>
                    <span className="font-semibold text-gray-800">
                      Manage Your health easily
                    </span>
                    <ol className="list-disc pl-6 mt-1 text-gray-600">
                      <li>
                        Access your appointment history, medical notes, and
                        follow-up reminders in one secure portal
                      </li>
                    </ol>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 h-fit flex justify-center items-center">
            <Image
              src="/icons/feature-patient.svg"
              width={500}
              height={500}
              alt="Admin Feature"
            />
          </div>
        </div>
      </div>
    </>
  );
}
