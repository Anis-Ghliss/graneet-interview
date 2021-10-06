import React from "react";
import { ContentText } from "../contentText";

const Alert = ({ type, number }) => {
  return (
    <div
      className={`${
        type === "danger" ? "bg-danger" : "bg-success"
      } flex justify-center w-full h-16 py-3 px-7 m-auto opacity-70`}
    >
      <ContentText
        text={`${
          type === "danger" ? "Aucune" : number
        } villes correspondant au text saisie`}
      />
    </div>
  );
};

export default Alert;
