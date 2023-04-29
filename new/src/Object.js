import React from "react";
import { useState, useEffect } from "react";
import data from "./dataBase.json";

export default function Object() {
  const [file, setFile] = useState();

  const newKey = () => {
    const getRandomFour = () => {
      let key = "";
      for (let i = 0; i < 4; i++) {
        key += Math.floor(Math.random() * 10);
      }

      return key;
    };

    const value = `${getRandomFour()}-${getRandomFour()}-${getRandomFour()}`;

    return value;
  };

  const NewObj = (name, car) => {
    let object = { name, car, key: newKey() };

    fetch("http://localhost:8000/Example", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });
  };

  // const newArray = (name, car) => {
  //   const myArray = [];
  //   myArray.push(newObj(name, car));

  //   return myArray;
  // };

  // useEffect(() => {
  //   NewObj("sule", "volvo");
  // }, []);

  console.log([data]);
  return (
    <div>
      <button onClick={() => NewObj("baddo", "benz")}>Send</button>
    </div>
  );
}
