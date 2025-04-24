import React from 'react';
import { Github, Globe, Send } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  webUrl?: string;
  telegramUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  webUrl,
  telegramUrl
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-[500px] h-[200px] object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={20} />
            <span className="whitespace-nowrap">View on GitHub</span>
          </a>
          {webUrl && (
            <a
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Globe size={20} />
              <span className="whitespace-nowrap">Visit Website</span>
            </a>
          )}
          {telegramUrl && (
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Send size={20} />
              <span className="whitespace-nowrap">Try Bot</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;