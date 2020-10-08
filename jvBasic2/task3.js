function calculateBMI(height, weight){
    let calculation = weight / (height*height);
    return Math.round(calculation);
};
function calculateIdealWeight(height){
    let calculation = 22.5*(height*height);
    return Math.round(calculation);
};
function calculateBMR(height, weight, age, gender){
    let initialCalculation = 10*weight + 6.25*(height*100) - 5*age;
    let finalCalculation = gender === 'm' ? initialCalculation + 50 : initialCalculation - 150;
    return Math.round(finalCalculation); 
};
function calculateWeightDifference(weight, idealWeight){
    let calculation = Math.round(weight - idealWeight);
    return Math.abs(calculation);
};
function calculateDailyCalories(BMR) {
    let calculation = 1.4*BMR;
    return Math.round(calculation);
};
function calculateDayCalWithEx(BMR, dailyExercise){
    let calculation = dailyExercise === 'yes' ? 1.6*BMR : 1.4*BMR ;
    return Math.round(calculation);
};
function calculateDietCalories (dailyCalories, BMI){
    if (BMI > 22.5) {
        let calculation = dailyCalories - 500;
        return Math.round(calculation)
    } else if (BMI < 22.5) {
        let calculation = dailyCalories + 500;
        return Math.round(calculation)
    } else {
        let calculation = 0;
        return Math.round(calculation)
    };
};
function calculateDietWeeks (weightDifference) {
    let calculation = weightDifference/0.5;
    return Math.round(calculation)
};
function conclusionBMI(BMI){
    let result;
    if (BMI < 18.5) {
        result = 'UNDERWEIGHT'
    }else if (BMI > 25) {
        result = 'OVERWEIGHT'
    }else {
        result = 'FIT'
    };
    return `You are ${result}`

};
function conclusionIdealWeight(weightDifference, BMI){
    let action;
    let conclusionWeightDifference = weightDifference;
    let sign;
    if (BMI > 22.5) {
        action = 'lose';
        sign = 'kg'
    } else if (BMI < 22.5) {
        action = 'gain';
        sign = 'kg';
    } else {
        action = 'maintain your ';
        conclusionWeightDifference = 'weight';
        sign = '.';
    };
    return `${action} ${conclusionWeightDifference} ${sign}`
};
function conclusionDailyExercise(dailyExercise, dailyCalories, dailyCaloriesExercise){
    let differenceCalorieAfter = dailyCaloriesExercise - dailyCalories;
    let exerciseFact;
    let exerciseFollow;
    let exerciseResult;
    if (dailyExercise === 'yes'){
        exerciseFact = 'you perform daily exercise';
        exerciseFollow = 'will be burning';
        exerciseResult = `In result, you will burn an extra ${Math.round(differenceCalorieAfter)} calories in a day`
    } else {
        exerciseFact = 'you do not perform daily exercise';
        exerciseFollow = 'will just burn';
        exerciseResult = `In result, you will not burn extra calories`
    };
    return `Because ${exerciseFact}, you ${exerciseFollow} ${dailyCaloriesExercise} calories
${exerciseResult}`
};
function validation(age, gender, heightInM, weightInKg){
    let lengthMistake;
    let numberMistake;
    let genderMistake;
    if (process.argv.length !== 8) {
        lengthMistake = true;
        return `
        You have inputed ${process.argv.length-2} argument(s) to the program
        
        Please input 6 arguments in the following order:
        
        First Name      i.e Lucy
        Age (years)     i.e 37
        Height (m)      i.e 1.62
        Weight (kg)     i.e 45
        Daily Exercise  i.e yes
        Gender          i.e f
        
        Example:
        ...node task.js Lucy 37 1.62 45 yes f`
    } else {
        lengthMistake = false
    };
    if (isNaN(heightInM)||isNaN(weightInKg)||isNaN(age)){
        numberMistake = true;
        return `
        Please make sure that the age, height, and weight are in numbers
        
        Age (years)     i.e 37      | You inputed: ${process.argv[3]}
        Height (m)      i.e 1.62    | You inputed: ${process.argv[4]}
        Weight (kg)     i.e 45      | You inputed: ${process.argv[5]}
        
        Example:
        ...node task.js Lucy 37 1.62 45 yes f`
    } else {
        numberMistake = false
    };
    if ((gender == 'f')||(gender == 'm')){
        genderMistake = false
    } else {
        genderMistake = true;
        return `
        Please make sure that you inputed you gender as the following
        
        Male    = m
        Female  = f
        
        Example:
        ...node task.js Lucy 37 1.62 45 yes f`
    };
    if ((numberMistake === false)&&(lengthMistake === false)&&(genderMistake === false)) {
        return false
    };
};
function formatOutput (
    name,
    age,
    gender,
    heightInM,
    weightInKg,
    dailyExercise,
    BMI,
    idealWeight,
    weightDifference,
    BMR,
    dailyCalories,
    dailyCaloriesExercise,
    dietWeeks,
    dietCalories
) {return `
~~~~HEALTH CHECKUP~~~~

First Name:     ${name}
Age:            ${age}
Gender:         ${gender}
Height:         ${heightInM} m
Weight:         ${weightInKg} kg
Daily Exercise: ${dailyExercise}

1. BMI CALCULATOR

Your BMI:   ${BMI}

${conclusionBMI(BMI)}

2. IDEAL WEIGHT CALCULATOR

Your ideal weight is: ${idealWeight} kg

You need to ${conclusionIdealWeight(weightDifference, BMI)}

3. BMR CALCULATION

Your BMR is: ${BMR}

You will burn ${dailyCalories} calories in a day, if you adopt a normal lifestyle

4. DAILY EXERCISE

${conclusionDailyExercise(dailyExercise, dailyCalories, dailyCaloriesExercise)}

5. DIET PLAN

To achieve your ideal weight of ${idealWeight} kg:

You must consume ${dietCalories} calories in a day for ${dietWeeks} weeks to ${conclusionIdealWeight(weightDifference, BMI)}

~~~~GOODLUCK~~~~
`
};

//healthInfo

function healthInfo(){
    const name = process.argv[2];
    const age = parseInt(process.argv[3]);
    const gender = process.argv[4];
    const heightInM = parseFloat(process.argv[5]);
    const weightInKg = parseInt(process.argv[6]);
    const dailyExercise = process.argv[7];
    
    const validationError = validation(age, gender, heightInM, weightInKg);

    const BMI = calculateBMI(heightInM, weightInKg);
    const idealWeight = calculateIdealWeight (heightInM);
    const weightDifference = calculateWeightDifference(weightInKg, idealWeight);
    const BMR = calculateBMR(heightInM, weightInKg, age, gender);
    const dailyCalories = calculateDailyCalories(BMR);
    const dailyCaloriesExercise = calculateDayCalWithEx(BMR, dailyExercise);
    const dietWeeks = calculateDietWeeks(weightDifference);
    const dietCalories = calculateDietCalories(dailyCaloriesExercise, BMI);

    if (validationError === false){
        console.log(formatOutput (
            name,
            age,
            gender,
            heightInM,
            weightInKg,
            dailyExercise,
            BMI,
            idealWeight,
            weightDifference,
            BMR,
            dailyCalories,
            dailyCaloriesExercise,
            dietWeeks,
            dietCalories
    ))} else {
        console.log(validation(age, gender, heightInM, weightInKg))
    };
};

healthInfo();