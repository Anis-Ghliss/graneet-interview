import React from "react";
import { Input } from "../Input";
import { Title } from "../title";

const Nav = () => {
  return (
    <div className="bg-my-blue px-9 h-1/5 py-3 flex lg:flex-row flex-col justify-evenly w-11/12 m-auto rounded-xl">
      <Title text={`Je recherche...`} />
      <Input />
    </div>
  );
};

export default Nav;
