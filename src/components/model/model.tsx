import React from "react";
import "./model.css";

type Props = { title: string; children: React.ReactElement[] };

export function Model({ title, children }: Props) {
  return (
    <div className="model">
      <h1 className="title"> {title} </h1>
      {children}
    </div>
  );
}
