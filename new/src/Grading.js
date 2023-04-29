import React from "react";

export default function New() {
  function gradingStudents(grades) {
    let scores = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] >= 38) {
        let nearestMultipleOfFive = (Math.floor(grades[i] / 5) + 1) * 5;
        let score = grades[i];

        let grade = nearestMultipleOfFive - score;
        console.log(grade);

        if (grade < 3) {
          scores.push(nearestMultipleOfFive);
        } else {
          scores.push(score);
        }
      } else {
        scores.push(grades[i]);
      }
    }
    return scores;
  }

  console.log(gradingStudents([73, 67, 38, 33]));
  return <div>New</div>;
}
