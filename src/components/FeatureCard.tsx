
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBackground?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  iconBackground = 'bg-gradient-bein'
}) => {
  return (
    <div className="card-feature group">
      <div className={`w-14 h-14 ${iconBackground} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-800">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
