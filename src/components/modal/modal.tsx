import React from "react";
import "./modal.css";

type Props = { title: string; children: React.ReactElement[] };

export function Modal({ title, children }: Props) {
  return (
    <div className="model">
      <h1 className="title"> {title} </h1>
      {children}
    </div>
  );
}
