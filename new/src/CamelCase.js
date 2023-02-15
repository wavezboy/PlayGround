import React from "react";

export default function CamelCase() {
  const toCamelCase = (snake) => {
    // check for dash or underscore

    if (snake.includes("-")) {
      const snakeString = snake.split("-");

      const uppercase = upperCase(snakeString);

      // uppercase

      const camelCase = uppercase.join("");

      return camelCase;
    }

    // store snake and covert it into a string
    const snakeString = snake.split("_");

    const uppercase = upperCase(snakeString);

    // uppercase

    const camelCase = uppercase.join("");

    return camelCase;
  };

  const upperCase = (letter) => {
    return letter.map((a, index) => {
      if (index == 0) {
        const firstLetter = a.slice(0, 1);
        const remainLetter = a.slice(1, a.length);

        if (firstLetter == firstLetter.toUpperCase()) {
          const word = firstLetter.toLowerCase() + remainLetter;

          return word;
        }
        return a;
      }
      const firstLetter = a.charAt(0);
      const cap = firstLetter.toUpperCase();
      const remainingWord = a.slice(1);
      const capitalizeWord = cap + remainingWord;

      return capitalizeWord;
    });
  };

  // console.log(toCamelCase("Bad-boy-love"));

  return <div className="camel"> {toCamelCase("The_stealth_health")}</div>;
}
