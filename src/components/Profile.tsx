import React from "react";

const Profile: React.FC = () => {
  return (
    <section id="about" className="bg-white dark:bg-black pt-8">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mb-4 text-3xl">
            I'm a SOC Analyst focused on threat detection, incident response, and
            improving organizational security posture. I combine hands-on
            investigations with automation to find and stop threats quickly.
          </p>

          <p className="text-xl">
            I actively detect and analyze real-time security alerts in SOC simulation environments, distinguishing between genuine threats and false positives. Leveraging Microsoft Defender and SentinelOne alongside KQL (Kusto Query Language), I transform complex security telemetry into actionable intelligence for rapid threat response.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="./assets/Nikolas_Flocas_Resume.docx"
              download
              className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text-gray-900 border-4 border-green-300 hover:bg-green-100 dark:text-white dark:border-green-700"
              aria-label="Download CV"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download C.V.
            </a>

            <a
              href="#contact"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text-white bg-green-700 hover:bg-green-800"
              aria-label="Contact"
            >
              Contact Me
            </a>
          </div>
        </div>

        <aside className="mt-8 order-first lg:order-last">
          <div className="p-6 rounded-lg border-4 border-green-300 dark:border-green-700 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Niko Flocas
            </h3>
            <p className="text-green-500 font-semibold">SOC Analyst Intern</p>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Core Skills</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Alert triage & incident response</li>
                <li>Threat hunting & IOCs</li>
                <li>SIEM (Splunk/Elastic/QRadar) tuning</li>
                <li>Endpoint detection and response (EDR)</li>
                <li>Playbook & automation (SOAR)</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Tools</h4>
              <p className="text-gray-700 dark:text-gray-300">SentinelOne · Velociraptor · Wireshark · Microsoft Defender · Splunk · Wazuh · Kali Linux</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Certs</h4>
              <p className="text-gray-700 dark:text-gray-300">SOC Level 1 (TryHackMe) · Cisco Cyber Ops · Cisco Networking · FortiGate Operator & Administrator · Google IT Support · SC-200 (In Progress)</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="mailto:Nflocas407@gmail.com"
                className="text-sm font-medium text-gray-900 dark:text-white underline"
              >
                Nflocas407@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/nikoflocas1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-900 dark:text-white underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Nikoflocas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-900 dark:text-white underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Profile;
