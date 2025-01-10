import React from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-16 px-6 sm:px-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-orange-600 mb-12">
        My Projects
      </h1>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            Single Page HTML Website (CSS)
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            A simple, responsive single-page website created using only HTML and CSS. This project showcases my ability to create clean, visually appealing designs with just HTML and CSS.
          </p>
          <div className="flex justify-between items-center">
            <Link href="https://github.com/its-happy/Html-website-by-aimal.git" className="text-blue-500 hover:text-orange-600 text-xl">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </Link>
            <Link href="https://html-website-by-aimal.vercel.app/" className="text-green-500 hover:text-orange-600 text-xl">
              <FaExternalLinkAlt className="inline-block mr-2" />
              Vercel
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            Multipage Website (Next.js + CSS)
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            A multipage website built using Next.js for server-side rendering and styling with CSS. This project demonstrates my skills in working with React-based frameworks and routing.
          </p>
          <div className="flex justify-between items-center">
            <Link href="https://github.com/its-happy/multipage-website-css-by-aimal.git" className="text-blue-500 hover:text-orange-600 text-xl">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </Link>
            <Link href="https://multipage-website-css-by-aimal.vercel.app/" className="text-green-500 hover:text-orange-600 text-xl">
              <FaExternalLinkAlt className="inline-block mr-2" />
              Vercel
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            Multipage Website (Next.js + Tailwind CSS)
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            A multipage website developed using Next.js and Tailwind CSS. It highlights my proficiency in using utility-first CSS frameworks and React-based server-side rendering.
          </p>
          <div className="flex justify-between items-center">
            <Link href="https://github.com/its-happy/multipage-website-tcss-by-aimal.git" className="text-blue-500 hover:text-orange-600 text-xl">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </Link>
            <Link href="https://multipage-website-tcss-by-aimal.vercel.app/" className="text-green-500 hover:text-orange-600 text-xl">
              <FaExternalLinkAlt className="inline-block mr-2" />
              Vercel
            </Link>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            Static Resume Builder
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            A static resume builder that allows users to create a visually appealing resume using predefined templates. Built using HTML and CSS, this project highlights my focus on design and usability.
          </p>
          <div className="flex justify-between items-center">
            <Link href="https://github.com/its-happy/static-resume-by-aimal.git" className="text-blue-500 hover:text-orange-600 text-xl">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </Link>
            <Link href="https://static-resume-by-aimal.vercel.app/" className="text-green-500 hover:text-orange-600 text-xl">
              <FaExternalLinkAlt className="inline-block mr-2" />
              Vercel
            </Link>
          </div>
        </div>

        {/* Project 5 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            Dynamic Resume Builder
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            A dynamic resume builder that allows users to fill in their information and generate a professional resume in real-time. This project demonstrates my ability to handle user input and dynamically generate content.
          </p>
          <div className="flex justify-between items-center">
            <Link href="https://github.com/its-happy/dynamic-resume-by-aimall.git" className="text-blue-500 hover:text-orange-600 text-xl">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </Link>
            <Link href="https://dynamic-resume-by-aimall.vercel.app/" className="text-green-500 hover:text-orange-600 text-xl">
              <FaExternalLinkAlt className="inline-block mr-2" />
              Vercel
            </Link>
          </div>
        </div>

        {/* Project 6 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            Editable Resume Builder
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            An editable resume builder where users can modify their resume content before downloading or sharing. Built with JavaScript, this project showcases my skills in interactive web applications.
          </p>
          <div className="flex justify-between items-center">
            <Link href="https://github.com/its-happy/editable-resume-by-aimal.git" className="text-blue-500 hover:text-orange-600 text-xl">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </Link>
            <Link href="https://editable-resume-by-aimal.vercel.app/" className="text-green-500 hover:text-orange-600 text-xl">
              <FaExternalLinkAlt className="inline-block mr-2" />
              Vercel
            </Link>
          </div>
        </div>

        {/* Project 7 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            Sharable Resume Builder
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            A sharable resume builder that allows users to create and share their resumes online. This project integrates social sharing and provides users with a seamless experience in sharing their professional profiles.
          </p>
          <div className="flex justify-between items-center">
            <Link href="https://github.com/its-happy/sharable-resume-by-aimal.git" className="text-blue-500 hover:text-orange-600 text-xl">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </Link>
            <Link href="https://sharable-resume-by-aimal.vercel.app/" className="text-green-500 hover:text-orange-600 text-xl">
              <FaExternalLinkAlt className="inline-block mr-2" />
              Vercel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
