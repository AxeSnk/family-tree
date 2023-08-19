import React from 'react';

const Input: React.FC<{
  name: string;
  value: string;
  type?: 'text';
  placeholder: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, value, type = 'text', placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="rounded-md px-2 py-1.5 shadow-inner ring-1 ring-black/20"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default Input;
