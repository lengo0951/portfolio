import React from 'react';

interface SectionContainerProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    title,
    children,
    icon,
    className = ''
}) => {
    return (
        <div className={`bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 ${className}`}>
            <div className="flex items-center gap-3 mb-8">
                {icon && <div className="text-teal-500">{icon}</div>}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
            </div>
            <div className="space-y-6">
                {children}
            </div>
        </div>
    );
};

export default SectionContainer; 