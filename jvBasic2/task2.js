//part 1.a
var firstName = process.argv[2];
var age = parseInt(process.argv[3]);
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
//part 1.b
var idealWeightInkg = 22.5 * (heightInM*heightInM)
let differenceInkg = weightInM - idealWeightInkg
if (differenceInkg > 0) {
    action = 'lose';
    sign = 'kg'
} else if (differenceInkg < 0) {
    action = 'gain';
    sign = 'kg';
} else {
    action = 'maintain your ';
    differenceInkg = 'weight';
    sign = '.';
}
let resultAction = action;
//part 1.c and 2.b
var gender = process.argv[7];
let bmr = 10*weightInM + 6.25*(heightInM*100) - 5*age;
bmr = gender === 'm' ? bmr + 50 : bmr - 150;
var dailyCalorie = 1.4*bmr;
//part 2.a
var exercise = process.argv[6];
var calorieAfter = exercise === 'yes' ? bmr*1.6 : dailyCalorie;
var differenceCalorieAfter = calorieAfter - dailyCalorie
if (exercise === 'yes'){
    var exerciseFact = 'you perform daily exercise';
    var exerciseFollow = 'will be burning';
    var exerciseResult = `In result, you will burn an extra ${Math.round(differenceCalorieAfter)} calories in a day`
} else {
    var exerciseFact = 'you do not perform daily exercise';
    var exerciseFollow = 'will just burn';
    var exerciseResult = `In result, you will not burn extra calories`
};
//part 1.d changed 2.c
if (differenceInkg < 0) {
    var dailyCalorieIntake = calorieAfter + 500;
} else {
    var dailyCalorieIntake = calorieAfter - 500;
}
var weeks = Math.abs(differenceInkg) / 0.5;
//part 2.d
if (process.argv.length !== 8) {
    var lengthMistake = true;
    console.log(`
    You have inputed ${process.argv.length-2} argument(s) to the program
    
    Please input 6 arguments in the following order:
    
    First Name      i.e Lucy
    Age (years)     i.e 37
    Height (m)      i.e 1.62
    Weight (kg)     i.e 45
    Daily Exercise  i.e yes
    Gender          i.e f
    
    Example:
    ...node task.js Lucy 37 1.62 45 yes f`)
} else {
    var lengthMistake = false
};
if (isNaN(heightInM)||isNaN(weightInM)||isNaN(age)){
    numberMistake = true;
    console.log(`
    Please make sure that the age, height, and weight are in numbers
    
    Age (years)     i.e 37      | You inputed: ${process.argv[3]}
    Height (m)      i.e 1.62    | You inputed: ${process.argv[4]}
    Weight (kg)     i.e 45      | You inputed: ${process.argv[5]}
    
    Example:
    ...node task.js Lucy 37 1.62 45 yes f`)
} else {
    var numberMistake = false
};
if ((gender == 'f')||(gender == 'm')){
    var genderMistake = false
} else {
    genderMistake = true;
    console.log(`
    Please make sure that you inputed you gender as the following
    
    Male    = m
    Female  = f
    
    Example:
    ...node task.js Lucy 37 1.62 45 yes f`)
};


var healthCheckup = (`
~~~~HEALTH CHECKUP~~~~

First Name:     ${firstName}
Age:            ${age}
Height:         ${heightInM} m
Weight:         ${weightInM} kg
Daily Exercise: ${exercise}
Gender:         ${gender}

1. BMI CALCULATOR

Your BMI:   ${Math.round(bmi)}

You are ${conclusion}

2. IDEAL WEIGHT CALCULATOR

Your ideal weight is: 
            ${Math.round(idealWeightInkg)} kg

You need to ${resultAction} ${Math.abs(Math.round(differenceInkg))} ${sign}

3. BMR CALCULATION

Your BMR is:
            ${Math.round(bmr)}

You burn ${Math.round(dailyCalorie)} calories in a day, if you adopt a normal lifestyle

4. DAILY EXERCISE

Because ${exerciseFact}, you ${exerciseFollow} ${Math.round(calorieAfter)} calories

${exerciseResult}

5. DIET PLAN

To achieve your ideal weight of ${Math.round(idealWeightInkg)} kg:

You must consume ${Math.round(dailyCalorieIntake)} calories in a day for ${Math.round(weeks)} weeks to ${resultAction} ${Math.abs(Math.round(differenceInkg))} ${sign}

~~~~GOODLUCK~~~~
`);

if ((numberMistake === false)&&(lengthMistake === false)&&(genderMistake === false)) {
    console.log(healthCheckup)
};

