import React from 'react';
import './Input.css'; // Import your CSS file for styling

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClass?: string; // <- add this
}

function InputField({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  labelClass = '', // <- default to empty
}: InputFieldProps) {
  return (
    <div className="input-group">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
