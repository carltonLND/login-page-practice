import React from "react";
import "./model.css";

type Props = { title: string; children: React.ReactElement[] };

export const Model: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="model">
      <h1 className="title"> {title} </h1>
      {children}
    </div>
  );
};
