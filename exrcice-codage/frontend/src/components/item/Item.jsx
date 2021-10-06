import React from "react";
import { ContentText } from "../contentText";

const Item = ({ villeName, codePostale }) => {
  return (
    <div className="bg-item-gray bg-opacity-70 flex justify-between px-4 py-3 w-full h-16">
      <ContentText text={villeName} />
      <ContentText text={codePostale} />
    </div>
  );
};

export default Item;
