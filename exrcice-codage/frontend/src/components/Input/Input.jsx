import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useFetch } from "../../api/useFetch";
import { setMetropole, setOutreMer } from "../../redux/actions";

const Input = () => {
  const urlBase = "http://localhost:8000/villes";
  const dispatcher = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    if (isNaN(parseInt(inputRef.current.value))) {
      const response = await axios.get(
        urlBase + `/name/${inputRef.current.value}`
      );
      dispatcher(setMetropole(response.data.metropole));
      dispatcher(setOutreMer(response.data.outreMer));
      console.log(response.data.metropole);
    } else {
      const response = await axios.get(
        urlBase + `/code/${inputRef.current.value}`
      );
      dispatcher(setMetropole(response.data.metropole));
      dispatcher(setOutreMer(response.data.outreMer));
      console.log(response.data.outreMer);
    }
  };

  const inputRef = useRef();
  return (
    <div className="w-4/5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="w-full placeholder-placeholder font-Montserat font-bold text-3xl h-14 rounded-xl border-0 px-7 py-1 "
          type="text"
          name=""
          id=""
          ref={inputRef}
          placeholder="...une ville, code postale"
        />
      </form>
    </div>
  );
};

export default Input;
