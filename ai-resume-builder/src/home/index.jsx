import Header from "@/components/custom/Header";
import { UserButton, useUser } from "@clerk/clerk-react";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const { user, isSignedIn } = useUser();

  return (
    <div>
      <Header />
      <div>
        <section className=" z-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <Link
              to="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">
                ai-resumebuilder.vercel.app
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Build Your Resume <span className="text-primary">With AI</span>{" "}
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                to="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <h2 className="text-md text-gray-500">
            Get your resume in 3 simpler steps
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <span
              className="block cursor-pointer rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              to="#"
            >
              <AtomIcon className="h-8 w-8 mx-auto block" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Write prompt about yourself
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Provide information about yourself such as name, exprience,
                educations, skills, etc.
              </p>
            </span>

            <span
              className="block cursor-pointer rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              to="#"
            >
              <Edit className="h-8 w-8 mx-auto block" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Edit Your form
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Edit the AI generated form and information, if required.
              </p>
            </span>

            <span
              className="block cursor-pointer rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              to="#"
            >
              <Share2 className="h-8 w-8 mx-auto block" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Share & Start Accepting Responses
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Easy to download in PDF format and start applying for the jobs
                and internships.
              </p>
            </span>
          </div>

          <div className="mt-12 text-center">
            {isSignedIn ? (
              <Link
                to="/dashboard"
                className="inline-block rounded border-2 border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 px-12 py-3 text-sm font-medium transition  focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Continue with editing your resume
              </Link>
            ) : (
              <Link
                to="/auth/sign-in"
                className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
