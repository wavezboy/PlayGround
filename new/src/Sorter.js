import React from "react";

export default function Area() {
  const sorter = (digits) => {
    // const digitString = digits.toString();
    // const digitArray = digitString.split("");
    const digitArray = ("" + digits).split("");
    const sorting = digitArray.sort();
    const sorted = +sorting.join("");

    return sorted;
  };

  //   let a = 4569;

  //   const b = a.split("");

  //   const c = b.join("");

  //   const d = a.toString();

  //   console.log(typeof d);
  return <div className="camel">{sorter(54367885509)}</div>;
}
