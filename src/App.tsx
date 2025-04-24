import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Facebook, MapPin, Building2, GraduationCap, Code } from 'lucide-react';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import ThemeToggle from './components/ThemeToggle';
import SkillsEducation from './components/SkillsEducation';
import SectionContainer from './components/SectionContainer';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const projects = [
    {
      title: "Paradise Resort",
      description: "Paradise Resort provides users with a seamless experience for booking rooms, viewing accommodations, checking in/out, and making payments. Administrators can efficiently manage the hotel by creating and overseeing room availability and reservations",
      image: "https://i.postimg.cc/gcRz49cN/Paradise-Resort.png",
      technologies: ["HTML", "JavaScript", "TypeScript", "NestJS", "PostgreSQL"],
      githubUrl: "https://github.com/lengo0951/Paradise-Resort.git",
      webUrl: "https://weekly-abby-lengo0951-13609064.koyeb.app/"
    },
    {
      title: "TableTick",
      description: "TableTick is a time management and timeline tracking application that helps users efficiently organize their schedules and notes",
      image: "https://i.postimg.cc/XvmWcLTR/Table-Tick.jpg",
      technologies: ["C#", "Firebase"],
      githubUrl: "https://github.com/lengo0951/TableTick"
    },
    {
      title: "CryptoPrice Notifier Bot",
      description: "CryptoPrice Notifier Bot is a Telegram bot designed to provide real-time cryptocurrency price updates and customizable alerts for key market indicators. Users can configure notifications based on price changes, trading volume, and other relevant metrics to stay informed",
      image: "https://i.postimg.cc/T2yL6HdD/cryptocurrency-bot-telegram.png",
      technologies: ["JavaScript", "Telegram Bot API", "Node.js", "Axios", "Webhooks"],
      githubUrl: "https://github.com/lengo0951/CryptoPriceBot.git",
      telegramUrl: "https://t.me/coolstar17_bot"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-light to-primary-dark dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <img
                src="https://i.postimg.cc/Dw3b5dKb/avatar.jpg"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl mx-auto md:mx-0"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-4">Le Quoc Ngo</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 text-teal-100 mb-2">
                <Building2 size={20} />
                <a href='https://www.uit.edu.vn'>University of Information Technology</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-teal-100 mb-2">
                <GraduationCap size={20} />
                <span>Information Security</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-teal-100 mb-6">
                <MapPin size={20} />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6">
                <a href="mailto:ngolq.work@gmail.com" className="text-white hover:text-teal-200 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://www.linkedin.com/in/le-quoc-ngo/" className="text-white hover:text-teal-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/lengo0951" className="text-white hover:text-teal-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://facebook.com/ngolq.bnb" className="text-white hover:text-teal-200 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionContainer
            title="Education"
            icon={<GraduationCap className="w-8 h-8" />}
          >
            <div className="pl-8">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">University of Information Technology</span> - Information Security
              </p>
              <p className="text-gray-500 dark:text-gray-400">2022 - Present | GPA: 3.2/4.0</p>
            </div>
          </SectionContainer>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionContainer
            title="Projects"
            icon={<Code className="w-8 h-8" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </SectionContainer>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SkillsEducation />
        </div>
      </section>
    </div>
  );
}

export default App;