import React from "react";
import NavBar from "../Components/NavBar";

export default function About() {
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <div className="max-h-full max-w-4xl flex items-center justify-center flex-wrap mx-auto">
          <div className="w-full lg:mt-6 mt-16 mb-4 lg:w-3/5 rounded-lg lg:rounded-lg shadow-2xl text-white mx-6 lg:mx-0 dark:bg-gray-800">
            <div className="p-4 mt-5 md:p-6 text-center">
              <div
                className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://d17ivq9b7rppb3.cloudfront.net/small/avatar/20210712163737a29d8c67fbfff034adf04c82c6003dc9.png)",
                }}
              ></div>

              <h1 className="text-3xl font-bold pt-5 lg:pt-0 text-gray-700 dark:text-white">
                Raditya Firman Syaputra
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
              <p className="pt-4 text-base font-semibold flex items-center justify-center text-black dark:text-white">
                <svg
                  className="h-4 fill-current text-blue-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path>
                </svg>
                Student at Sebelas Maret University
              </p>
              <p className="pt-2 text-white font-semibold text-xs lg:text-sm flex items-center justify-center text-gray-600 dark:text-white">
                <svg
                  className="h-4 fill-current text-blue-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"></path>
                </svg>
                Surakarta, Jawa Tengah
              </p>
              <p className="pt-5 text-sm text-black dark:text-white">
                Hello there, I'm Raditya Firman Syaputra, a student at Sebelas
                Maret University. I'm a student of Computer Science and
                Engineering. I'm a full-stack developer, and I'm currently
                learning React.
              </p>

              <div className="pt-5 pb-5 w-full flex justify-center text-black dark:text-white">
                <a
                  href={
                    "https://docs.google.com/document/d/11NW_54fIa_b14DbQ8S3qUtfB1htS8oEsLXiroF8hQMY/"
                  }
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className="bg-blue-700 lg:mr-4 mr-3 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
                >
                  Resume / CV
                </a>

                <a
                  href={"mailto:radityafiqa4@gmail.com"}
                  className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
