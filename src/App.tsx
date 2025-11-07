// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "/public/assets/css/particles.css"; 

const App: React.FC = () => {
  

  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-white dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            <span id="dynamicWords" className="text-green-500 font-bold">
              Ethical Hacking Done Right
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
          Monitoring networks for threats, analyzing security events, and responding to incidents. As a SOC Analyst Intern, I'm committed to strengthening cybersecurity defenses through proactive threat detection and rapid response.

          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            More About Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Contact Me!
          </a>
        </div>
        <div
          id="hacker-logo"
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10 justify-center items-center"
          style={{ opacity: 0 }}  // This ensures it's initially invisible but still rendered
        >
          <img
            src="./assets/images/profile.jpg"
            alt="Niko Flocas"
            className="rounded-full shadow-2xl w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
            style={{ objectPosition: '50% 32%' }}
          />
        </div>
      </div>
    </section>

    {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-2 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="2">0</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Years of Experience</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="3">0</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Labs Completed</dd>
              </div>
          </dl>
                    </div>

        </section>

        {/* #### LAB PROJECTS SECTION #### */}
          <section id="labs" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">

              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Lab Projects
                </h2>
                <p className="text-gray-500 text-2xl dark:text-gray-400">
                A collection of hands-on lab projects demonstrating defensive and offensive security techniques, tooling, and automation. Click any project to view its repo or demo.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path stroke="currentColor" strokeWidth="1" d="M12 2v20M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold dark:text-white">SIEM Hunt Lab</h3>
                  <p className="text-gray-500 text-lg dark:text-gray-400">
                    Hunt for simulated adversary activity using Elastic/Splunk, develop sigma rules and triage workflows.
                  </p>
                  <a href="#" className="mt-3 inline-block text-green-600 dark:text-green-400 font-medium">View Repo</a>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path stroke="currentColor" strokeWidth="1" d="M3 3l18 18M21 3L3 21" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold dark:text-white">EDR Analysis Lab</h3>
                  <p className="text-gray-500 text-lg dark:text-gray-400">
                    Endpoint telemetry collection and hunting with OSQuery and Velociraptor; example detections and response playbooks.
                  </p>
                  <a href="#" className="mt-3 inline-block text-green-600 dark:text-green-400 font-medium">View Repo</a>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path stroke="currentColor" strokeWidth="1" d="M12 3l4 8-4 8-4-8 4-8z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold dark:text-white">Network Lab</h3>
                  <p className="text-gray-500 text-lg dark:text-gray-400">
                    Simulated network segmentation testing and firewall rule validation with automated scanners and reporting.
                  </p>
                  <a href="#" className="mt-3 inline-block text-green-600 dark:text-green-400 font-medium">View Repo</a>
                </div>
              </div>
            </div>
          </section>
          



          {/* #### ABOUT / PROFILE SECTION #### */}
          <Profile />
        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-white dark:bg-black transition-all duration-300">
          <div className="py-12 px-4 mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Get in touch
            </h2>
            <p className="mb-6 font-light text-center text-gray-500 dark:text-gray-400 text-xl lg:text-2xl">
              I don't include a direct contact form on this site. Please use the links below to reach me via email or LinkedIn.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:Nflocas407@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-sm"
              >
                Email Niko
              </a>

              <a
                href="https://www.linkedin.com/in/nikoflocas1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 rounded-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
