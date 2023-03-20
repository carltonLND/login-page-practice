import React from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  type: string;
};

export function Input({ onChange, value, label, name, type }: Props) {
  return (
    <label className="input" htmlFor={label}>
      {label}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
}
