import React from 'react';
import { Shield, Code, LineChart, Brain } from 'lucide-react';
import SectionContainer from './SectionContainer';

const SkillsEducation: React.FC = () => {
    const skills = [
        {
            category: "Trading & Financial Analysis",
            items: [
                "Technical Analysis",
                "Risk Management",
                "Cryptocurrency Trading",
                "Market Research"
            ],
            icon: <LineChart className="w-6 h-6 text-teal-600" />
        },
        {
            category: "Information Security",
            items: [
                "Network Security",
                "Cryptography",
                "Security Protocols",
                "System Hardening"
            ],
            icon: <Shield className="w-6 h-6 text-teal-600" />
        },
        {
            category: "Development",
            items: [
                "TypeScript/JavaScript",
                "Python",
                "Node.js",
                "PostgreSQL"
            ],
            icon: <Code className="w-6 h-6 text-teal-600" />
        }
    ];

    return (
        <SectionContainer
            title="Skills"
            icon={<Brain className="w-8 h-8" />}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-2 mb-4">
                            {skill.icon}
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 text-sm rounded-full"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default SkillsEducation; 