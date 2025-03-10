import React from 'react';
import { Award } from 'lucide-react';

interface AwardCardProps {
  title: string;
  organization: string;
  year: string;
  description: string;
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  organization,
  year,
  description
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
            <Award className="w-6 h-6 text-teal-600 dark:text-teal-300" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
          <div className="text-teal-600 dark:text-teal-400 font-medium mb-2">{organization}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{year}</div>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;