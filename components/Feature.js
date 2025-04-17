import Image from "next/image";
const Feature = () => {
  return (
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
          <div className="text-5xl font-semibold mb-5">Admin Feature</div>
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
                      (e.g. bookwithpulse.vercel.app/
                      {"{your-unique-username}"})
                    </li>
                    <li>
                      Share it on your website, social media, or email signature
                      to let patients book directly
                    </li>
                  </ol>
                </div>
              </li>
              <li className="flex items-start gap-2">
                ✅
                <div>
                  <span className="font-semibold text-gray-800">
                    Set up your profile and availability
                  </span>
                  <ol className="list-disc pl-6 mt-1 text-gray-600">
                    <li>
                      Specify your field of expertise, clinic address, and
                      assistant's contact details
                    </li>
                    <li>
                      Define your availability, working days and hours,
                      consultation fee, and optionally customize your unique
                      booking link
                    </li>
                  </ol>
                </div>
              </li>
              <li className="flex items-start gap-2">
                ✅
                <div>
                  <span className="font-semibold text-gray-800">
                    Get notifications about appointments
                  </span>
                  <ol className="list-disc pl-6 mt-1 text-gray-600">
                    <li>
                      Receive an email whenever a patient books through user own
                      appointment or your booking link
                    </li>
                    <li>
                      Automatically notify patients by email when their
                      appointment is scheduled or canceled
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
          <div className="text-5xl font-semibold mb-5">Patient Feature</div>
          <div className="w-full">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                ✅
                <div>
                  <span className="font-semibold text-gray-800">
                    Easy appointment booking
                  </span>
                  <ol className="list-disc pl-6 mt-1 text-gray-600">
                    <li>Register as a patient or register for someone</li>
                    <li>Select a doctor from the list of available doctors</li>
                  </ol>
                </div>
              </li>
              <li className="flex items-start gap-2">
                ✅
                <div>
                  <span className="font-semibold text-gray-800">
                    Intelligent Scheduling Assistance
                  </span>
                  <ol className="list-disc pl-6 mt-1 text-gray-600">
                    <li>
                      Get suggested free appointment times from your preferred
                      doctor while setting up appointment
                    </li>
                    <li>
                      Set a reason for the appointment and view doctor details
                      before confirming
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
  );
};

export default Feature;
