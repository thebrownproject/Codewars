// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// break it down
// create variable bmiCalc = weight / height * 2
// if statement for each

function bmi(weight, height) {
  const doubleHeight = height * 2;
  const bmiCal = weight / doubleHeight;
  if (bmiCal <= 18.5) {
    return "Underweight";
  } else if (bmiCal <= 25) {
    return "Normal";
  } else if (bmiCal <= 30) {
    return "Overweight";
  } else if (bmiCalc > 30) {
    return "Obese";
  }

  return "";
}

console.log(bmi(50, 1.8));
console.log(bmi(80, 1.8));
console.log(bmi(90, 1.8));
console.log(bmi(100, 1.8));
