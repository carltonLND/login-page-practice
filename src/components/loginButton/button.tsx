// import React from "react";
import "./button.css";

type Props = { name: string; onClick: () => void };

export function LoginButton({ name, onClick }: Props) {
  return (
    <button type="submit" className="button" onClick={onClick}>
      {name}
    </button>
  );
}
