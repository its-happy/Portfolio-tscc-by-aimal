import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex justify-center items-center">
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {/* Profile Image */}
        <div className="flex justify-center items-center w-full sm:w-1/2 p-4">
          <Image
            src="/aimalkhan.jpg"
            width={300}
            height={300}
            alt="Aimal Khan's Profile Picture"
            className="border-[6px] border-blue-500 rounded-full shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:text-left text-center p-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900">
              Hi There,
            </h1>
            <h2 className="text-3xl sm:text-4xl mt-2 text-gray-800">
              I’m <span className="text-orange-600">Aimal Khan</span>
            </h2>
            <p className="text-xl sm:text-2xl mt-4 font-medium text-gray-600">
              A Passionate <span className="text-blue-600">Frontend Developer</span>
            </p>
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 mt-8 rounded-lg shadow-md transition duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
