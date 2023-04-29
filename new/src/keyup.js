import React, { useEffect, useState } from "react";

export default function Keyup() {
  const [key, setKey] = useState("");
  useEffect(() => {
    let newKey = [];
    window.addEventListener("keyup", ({ key }) => {
      if (key === "Backspace") {
        newKey = newKey.pop();
        setKey(newKey);
      } else {
        newKey += key;
        setKey(newKey);
      }
    });

    return () =>
      window.removeEventListener("keyup", ({ key }) => {
        newKey += key;
        setKey(newKey);
      });
  }, [setKey]);
  return <div>{key}</div>;
}
