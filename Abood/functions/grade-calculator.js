try {
  let gradeCalculator = function (studentScore, totalScore) {
    if (typeof studentScore !== "number" || typeof totalScore !== "number")
      throw Error("Please enter a valid number");
    if (studentScore > totalScore) {
      let temp = totalScore;
      totalScore = studentScore;
      studentScore = temp;
    }

    let grade = (studentScore / totalScore) * 100;

    if (grade >= 90) return `You got a A (%${grade}) `;
    else if (grade >= 80 && grade < 90) return `You got a B (%${grade}) `;
    else if (grade >= 70 && grade < 80) return `You got a C (%${grade}) `;
    else if (grade >= 60 && grade < 70) return `You got a D (%${grade}) `;
    else return `You got a F (%${grade}) `;
  };

  console.log(gradeCalculator(19, 20));
} catch (e) {
  console.log(e);
}
