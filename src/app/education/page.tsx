import React from "react";
import Image from "next/image";

function Education() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-teal-600 text-white pt-28 pb-16 px-6 sm:px-12">
      {/* Heading Section */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-orange-600 mb-6">
        Education & Learning Journey
      </h1>

      {/* Education Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Matriculation Section */}
        <div className="flex flex-col justify-center text-lg sm:text-xl text-gray-200 leading-relaxed space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600">
            Matriculation
          </h2>
          <p className="text-gray-200">
            I completed my Matriculation from <b>Rafi Public Secondary School</b>, Karachi, where I developed a strong foundation in academics.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/Rafi.jpg"  
            alt="Rafi Public Secondary School"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Intermediate Section */}
        <div className="flex flex-col justify-center text-lg sm:text-xl text-gray-200 leading-relaxed space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600">
            Intermediate
          </h2>
          <p className="text-gray-200">
            I pursued my Intermediate studies from <b>Govt. College For Men, Nazimabad</b>, Karachi, which further honed my knowledge in the sciences.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/Formen.jpg" 
            alt="Govt. College For Men, Nazimabad"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Current Learning Section */}
        <div className="flex flex-col justify-center text-lg sm:text-xl text-gray-200 leading-relaxed space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600">
            Current Learning
          </h2>
          <p className="text-gray-200">
            I am currently enhancing my skills in <b>Frontend Development</b> and <b>Artificial Intelligence</b>, with a focus on learning technologies like <b>Agentic AI, Python, Next.js, TypeScript, HTML, and CSS</b> at <b>Govener House</b>.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/Ghouse.jpg"  
            alt="Govener House"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
