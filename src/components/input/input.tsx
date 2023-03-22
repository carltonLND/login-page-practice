import React from "react";
import "./input.css";
import { FaLock, FaUserAlt } from "react-icons/fa";

type Props = {
  label: string;
  type: string | "username" | "password";
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
      <h2 className="label">{label}</h2>
      <div className="container">
        <FaUserAlt
          color="#b1b1b1"
          style={type === "username" ? {} : { display: "none" }}
        />
        <FaLock
          color="#b1b1b1"
          style={type === "password" ? {} : { display: "none" }}
        />
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </label>
  );
}
