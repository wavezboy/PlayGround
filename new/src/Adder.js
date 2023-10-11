export default function Adder() {
  function adder(a, b) {
    // creating an array with range (a, b)
    const arrayOfNumber = [...Array(b - a + 1).keys()].map((x) => x + a);

    // creating the answer variable

    let answer = 0;

    // adding everything in the array together

    for (let i = 0; i < arrayOfNumber.length; i++) {
      answer = arrayOfNumber[i] + answer;
    }

    return answer;
  }

  adder(1, 200);

  return <div className="camel">{adder(1, 2000)}</div>;
}
