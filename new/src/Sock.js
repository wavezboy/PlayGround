import React from "react";

export default function Sock() {
  function sockMerchant(n, ar) {
    let count = 0;

    for (let i = 0; i <= 100; i++) {
      const find = ar.filter((item) => item === i);
      const number = Math.floor(find.length / 2);
      count += number;
    }
    return count;
  }

  console.log(sockMerchant(9, [10, 20, 10, 10, 10, 30, 30, 10, 20]));

  return <div>Sock</div>;
}

// if (find.length % 2 === 0) {
//     // box.concat(find);\
//     box = [...box, ...find];
//   } else if (find.length > 1 && find.length % 2 === 1) {
//     box = [...box, ...find];
//   }
