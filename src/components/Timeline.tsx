import React from 'react';
import { Zap } from 'lucide-react';

const experiences = [
  {
    period: "01/2022 - 01/2023",
    company: "KDIGI TECHNOLOGY INVESTMENT COMPANY LIMITED",
    position: "Web Intern",
    description: [
      "Conducted vulnerability assessments and penetration testing",
      "Developed security monitoring tools using Python",
      "Collaborated with the incident response team"
    ]
  },
  {
    period: "2021 - 2022",
    company: "CyberTech Vietnam",
    position: "Security Researcher",
    description: [
      "Researched and documented new security threats",
      "Implemented security best practices",
      "Contributed to the development of security protocols"
    ]
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-600 dark:bg-teal-500"></div>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative" data-aos="fade-up">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
              <div className="w-8 h-8 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
            </div>
            <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm text-teal-600 dark:text-teal-400 font-semibold">{exp.period}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{exp.company}</h3>
                <div className="text-gray-600 dark:text-gray-300 font-medium mt-1">{exp.position}</div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-6 flex items-center">
                        <span className="text-teal-500 dark:text-teal-400 mr-2">•</span>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;