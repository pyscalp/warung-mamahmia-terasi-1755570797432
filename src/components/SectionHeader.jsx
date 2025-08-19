import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-secondary mb-2">{title}</h2>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;