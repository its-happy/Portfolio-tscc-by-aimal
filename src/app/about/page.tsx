import React from "react";
import Link from "next/link";

function About() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-teal-600 text-white pt-28 pb-16 px-6 sm:px-12">
        {/* Heading Section */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-orange-600 mb-4">
          About Me
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-100 mb-6">
          I’m AImal Khan
        </h2>
        <div className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 space-y-4">
          <p>
            I am a passionate and driven Frontend Developer based in Karachi, Pakistan, with a deep
            interest in creating intuitive and visually appealing web applications. Currently, I am
            pursuing my studies at the Govener House (IT) Course, where I am enhancing my technical
            skills and building a solid foundation in programming.
          </p>

          <p>
            My journey in web development began with a fascination for how websites and applications
            come to life. I have a strong focus on HTML, CSS, JavaScript, and React, which enables me
            to bring responsive and user-friendly interfaces to life. I am particularly passionate about
            creating seamless user experiences and optimizing the performance of web applications.
          </p>

          <p>
            I continuously challenge myself to learn new technologies and improve my coding skills.
            Apart from my academic pursuits, I actively engage in personal projects and open-source
            contributions, as I believe that hands-on experience is key to mastering the craft. My goal
            is to build innovative and high-quality web solutions that make a positive impact.
          </p>

          <p>
            Outside of development, I am an avid learner and enjoy exploring new trends in the tech
            industry. I am always open to collaborating with like-minded individuals who share my
            enthusiasm for coding and technology. I am excited about the future of web development and
            look forward to making meaningful contributions to the field.
          </p>
        </div>
      </div>

      {/* Background Section to add depth */}
      <div className="bg-gray-800 py-8 px-6 sm:px-12 text-center text-white">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Let's Connect!</h3>
        <p className="text-base sm:text-lg mb-4">
          If you're interested in collaborating or just want to connect, feel free to reach out. I'm always open to new opportunities!
        </p>
        <Link href="/contact">
          <button className="bg-orange-600 px-6 py-2 rounded-lg text-sm sm:text-lg font-semibold hover:bg-orange-500 transition duration-300">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
