import React from "react";

export default function CountingValley() {
  function countingValleys(steps, path) {
    let changeInAltitude = 0;
    let valleyCount = 0;

    const paths = path.split("");

    paths.forEach((element) => {
      if (element === "U") {
        changeInAltitude += 1;

        if (changeInAltitude === 0) {
          valleyCount++;
        }
      } else {
        changeInAltitude -= 1;
      }
    });
    return valleyCount;
  }

  // console.log(countingValleys(12, "DDUUDDUDUUUD"));

  function step(n) {
    for (let i = 1; i <= n; i++) {
      console.log(" ".repeat(n - i) + "#".repeat(i));
    }
  }

  function sum(number) {
    let sums = 0;
    let min = 0;
    let max = 0;

    number.forEach((element) => {
      sums += element;
    });

    for (let i = 0; i < number.length; i++) {
      let newSum = sums - number[i];

      if (i === 0) {
        max = newSum;
      }

      if (i === number.length - 1) {
        min = newSum;
      }
    }

    console.log(min, max);
  }

  function cande(candles) {
    let stringInput = candles.toString();

    let ni = stringInput.length;
    let cand = candles.toString().slice(1, ni);
    let n = cand.length;
    let candlle = [...cand].sort();
    let highestCandle = 0;

    for (let i = 0; i < n; i++) {
      if (candlle[i] === candlle[n - 1]) {
        highestCandle++;
      }
    }
    console.log(highestCandle);
  }

  // cande(67744776);
  // step(10);

  function jump(numb) {
    let x1 = numb.toString().slice(0, 1);
    let v1 = numb.toString().slice(1, 2);
    let x2 = numb.toString().slice(2, 3);
    let v2 = numb.toString().slice(3, 4);

    let p = (v2 * x1 - v1 * x2) / (v2 - v1);
    if (p > 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }

  // jump("0253");

  function fizzBuzz(n) {
    // Write your code here

    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz");
      }
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log("fizz");
      }
      if (i % 3 !== 0 && i % 5 === 0) {
        console.log("Buzz");
      }
      if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
      }
    }
  }

  fizzBuzz(15);

  return <div></div>;
}
