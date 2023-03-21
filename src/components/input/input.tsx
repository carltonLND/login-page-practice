import React from "react";
import "./input.css";

type Props = {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <label className="input" htmlFor={label}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}
