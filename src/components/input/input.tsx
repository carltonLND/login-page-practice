import React from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  type: string;
};

export const Input: React.FC<Props> = ({
  onChange,
  value,
  label,
  name,
  type,
}) => {
  return (
    <label className="input" htmlFor={label}>
      {label}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};
