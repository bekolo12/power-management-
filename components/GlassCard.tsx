import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;