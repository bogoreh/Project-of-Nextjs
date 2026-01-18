export const calculateBMI = (
  height: number,
  weight: number,
  unit: 'metric' | 'imperial' = 'metric'
): number => {
  if (unit === 'metric') {
    // Convert cm to meters
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  } else {
    // Imperial: BMI = (weight in pounds / (height in inches * height in inches)) * 703
    return (weight / (height * height)) * 703;
  }
};

export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else {
    return 'Obesity';
  }
};