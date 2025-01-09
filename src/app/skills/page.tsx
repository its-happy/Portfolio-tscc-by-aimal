import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-16">
      <div className="px-8 sm:px-16">
        <h1 className="text-4xl sm:text-5xl text-center text-orange-600 mb-8 font-bold">
          My Skills
        </h1>

        {/* Description about skills */}
        <p className="text-lg sm:text-xl text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          As a Frontend Developer, I have honed my skills in various web development technologies. I am passionate about building responsive and dynamic websites that provide exceptional user experiences. Below are the key technologies I work with:
        </p>

        {/* Skill Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* HTML */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/htmllogo.png"
              alt="HTML logo"
              width={100}
              height={100}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white p-4"
            />
            <h3 className="mt-4 text-xl font-semibold">HTML</h3>
            <p className="text-gray-300 mt-2">The foundation of web structure, allowing me to create semantic and well-structured web pages.</p>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/csslogo.png"
              alt="CSS logo"
              width={100}
              height={100}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white p-4"
            />
            <h3 className="mt-4 text-xl font-semibold">CSS</h3>
            <p className="text-gray-300 mt-2">CSS allows me to style web pages, ensuring they are visually appealing and responsive across all devices.</p>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/typescriptlogo.png"
              alt="TypeScript logo"
              width={100}
              height={100}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white p-4"
            />
            <h3 className="mt-4 text-xl font-semibold">TypeScript</h3>
            <p className="text-gray-300 mt-2">TypeScript enhances JavaScript with static typing, helping me write more robust and scalable applications.</p>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/nextjslogo.png"
              alt="Next.js logo"
              width={100}
              height={100}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white p-4"
            />
            <h3 className="mt-4 text-xl font-semibold">Next.js</h3>
            <p className="text-gray-300 mt-2">Next.js empowers me to build fast, SEO-friendly React applications with its server-side rendering and static site generation capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
