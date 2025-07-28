import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-md shadow p-4 ${className || ''}`}>
      {children}
    </div>
  );
};

export { Card };