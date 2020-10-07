var firstName = process.argv[2];
var age = process.argv[3]
var heightInM = parseFloat(process.argv[4]);
var weightInM = parseInt(process.argv[5]);
let bmi = weightInM / (heightInM*heightInM);
if (bmi < 18.5) {
    result = 'UNDERWEIGHT'
}else if (bmi > 25) {
    result = 'OVERWEIGHT'
}else {
    result = 'FIT'
};
let conclusion = result;

var idealWeightInkg = 22.5 * (heightInM*heightInM)

let differenceInkg = weightInM - idealWeightInkg

if (differenceInkg > 0) {
    action = 'lose';
    sign = 'kg'
} else if (differenceInkg < 0) {
    action = 'gain';
    sign = 'kg'
} else {
    action = 'maintain your ';
    differenceInkg = 'weight';
    sign = null;
}
let resultAction = action;

let bmr = 10*weightInM + 6.35*(heightInM*100) - 5*age;

var dailyCalorie = 1.4*bmr;

var dailyCalorieIntake = dailyCalorie - 500;

var weeks = differenceInkg / 0.5;

console.log(`
~~~~HEALTH CHECKUP~~~~

First Name: ${firstName}
Age:        ${age}
Height:     ${heightInM} m
Weight:     ${weightInM} kg

1. BMI CALCULATOR

Your BMI:   ${Math.round(bmi)}

CONCLUSION

You are ${conclusion}

2. IDEAL WEIGHT CALCULATOR

Your ideal weight is: 
            ${Math.round(idealWeightInkg)} kg

CONCLUSION

You need to ${resultAction} ${Math.round(differenceInkg)} ${sign}

3. BMR CALCULATION

Your BMR is:
            ${Math.round(bmr)}

CONCLUSION

You burn ${Math.round(dailyCalorie)} calories in a day,
if you adopt a normal lifestyle

4. DIET PLAN

To achieve your ideal weight of ${Math.round(idealWeightInkg)} kg:

Eat ${Math.round(dailyCalorieIntake)} a day for ${Math.round(weeks)} weeks
`);