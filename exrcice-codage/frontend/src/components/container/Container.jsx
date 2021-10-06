import React from "react";
import { Alert } from "../alert";
import { Item } from "../item";
import { Title } from "../title";

const Container = ({ title, content, children }) => {
  return (
    <div
      style={{ width: "48%", height: "fitContent" }}
      className=" p-6 bg-my-blue rounded-xl sm:w-10/12 flex flex-col"
    >
      <div className="flex justify-center items-center mb-4">
        <Title text={title} />
      </div>
      <div className="mb-4">
        {content.length === 0 ? (
          <Alert type={"danger"} number={0} />
        ) : (
          <Alert type="success" number={content.length} />
        )}
      </div>
      <div className="w-11/12 mx-auto p-6 grid grid-cols-2 gap-4">
        {content.map((item, key) => (
          <Item
            codePostale={item.codePostal}
            villeName={item.nomCommune}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};
export default Container;
