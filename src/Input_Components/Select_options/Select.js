import React from 'react';

export default function Select({ label, options, className }) {
  return (
    <div className='grid grid-cols-1'>
      <label>{label}</label>
      <select className={`border rounded-md p-1 border-gray-600 w-48  ${className && className}`}>
        {options.map((option, index) => (
          <option key={index} value={option.value && option.value}>
            {option.label && option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
