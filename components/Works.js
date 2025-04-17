import Image from "next/image";

const Works = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col gap-y-10 justify-center items-center px-2 sm:px-10 md:px-20 lg:px-40 py-10">
      <div className="w-full text-2xl font-bold md:text-4xl">How It Works</div>

      <div className="flex flex-col md:flex-row items-stretch justify-center w-full gap-10">
        {/* IMAGE COLUMN */}
        <div className="relative md:w-1/2 w-full">
          <Image
            src="/images/work-doctor.png"
            alt="Doctor"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT COLUMN */}
        <div className="w-full flex flex-col gap-y-10">
          {/* Doctors */}
          <div>
            <div className="text-2xl font-semibold mb-5">For Doctors</div>
            <ol className="list-disc pl-6 mt-1 text-gray-600 space-y-3">
              <li>
                Register with your full name, email, password, phone, and field
                of practice. Once verified, complete your profile, set your
                availability, and create a custom booking link.
              </li>
              <li>
                View and filter today’s, upcoming, past, or all appointments at
                a glance.
              </li>
              <li>
                Search patients by name, manage your schedule, and cancel or
                complete appointments with ease.
              </li>
              <li>
                Track key stats on scheduled, cancelled, and pending visits.
              </li>
              <li>
                From your menu, update profile or availability, create custom
                appointments, or copy and share your unique booking link.
              </li>
            </ol>
          </div>

          {/* Patients */}
          <div>
            <div className="text-2xl font-semibold mb-5">For Patients</div>
            <ol className="list-disc pl-6 mt-1 text-gray-600 space-y-3">
              <li>
                Register quickly with your full name, email, and phone number.
              </li>
              <li>
                Update your name, email, or phone anytime from your dashboard.
              </li>
              <li>
                Book for yourself or someone else—choose an existing profile or
                add a new patient.
              </li>
              <li>
                See the next available slots with any doctor, view their
                details, and set your appointment instantly.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
