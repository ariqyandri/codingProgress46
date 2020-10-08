function calculateBMI(height, weight){
    return Math.round(weight / (height*height));
};
function calculateIdealWeight(height){
    return Math.round(22.5*(height*height));
};
function calculateBMR(height, weight, age, gender){
    let initialBMR = 10*weight + 6.25*(height*100) - 5*age;
    return Math.round(gender === 'm' ? initialBMR + 50 : initialBMR - 150); 
};
function calculateWeightDifference(weight, idealWeight){
    return Math.abs(Math.round(weight - idealWeight));
};
function calculateDailyCalories(BMR) {
    return Math.round(1.4*BMR);
};
function calculateDayCalWithEx(BMR, dailyExercise){
    return Math.round(dailyExercise === 'yes' ? 1.6*BMR : 1.4*BMR);
};
function calculateDietCalories (dailyCalories, BMI){
    if (BMI > 22.5) {
        return Math.round(dailyCalories - 500)
    } else if (BMI < 22.5) {
        return Math.round(dailyCalories + 500)
    } else {
        return 0
    };
};
function calculateDietWeeks (weightDifference) {
    return Math.round(weightDifference/0.5)
};
function conclusionBMI(BMI){
    if (BMI < 18.5) {
        return `You are UNDERWEIGHT.`
    }else if (BMI > 25) {
        return `You are OVERWEIGHT.`
    }else {
        return `You are FIT.`
    }
};
function conclusionIdealWeight(weightDifference, BMI){
    if (BMI > 22.5) {
        return `You must lose ${weightDifference} kg`
    } else if (BMI < 22.5) {
        return `You must gain ${weightDifference} kg`
    } else {
        return `You must maintain your weight`
    }
};
function conclusionDailyExercise(dailyExercise, dailyCalories, dailyCaloriesExercise){
    let differenceCalorieAfter = dailyCaloriesExercise - dailyCalories;
    if (dailyExercise === 'yes'){
        return `Because you perform daily exercise, you will be burning ${dailyCaloriesExercise} calories.
In result, you will burn an extra ${Math.round(differenceCalorieAfter)} calories in a day`
    } else {
        return `Because you do not perform daily exercise, you will not be burning extra calories`}
};
function validation(age, gender, heightInM, weightInKg){
    let lengthMistake;
    let numberMistake;
    let genderMistake;
    if (process.argv.length !== 8) {
        return `
        You have inputed ${process.argv.length-2} argument(s) to the program
        
        Please input 6 arguments in the following order:
        
        First Name      i.e Lucy
        Age (years)     i.e 37
        Gender          i.e f
        Height (m)      i.e 1.62
        Weight (kg)     i.e 45
        Daily Exercise  i.e yes
        
        Example:
        ...node task.js Lucy 37 f 1.62 45 yes`
    } else {
        lengthMistake = false
    };
    if (isNaN(process.argv[3])||isNaN(process.argv[5])||isNaN(process.argv[5])){
        return `
        Please make sure that the age, height, and weight are in numbers
        
        Age (years)     i.e 37      | You inputed: ${process.argv[3]}
        Height (m)      i.e 1.62    | You inputed: ${process.argv[4]}
        Weight (kg)     i.e 45      | You inputed: ${process.argv[5]}
        
        Example:
        ...node task.js Lucy 37 f 1.62 45 yes`
    } else {
        numberMistake = false
    };
    if ((gender == 'f')||(gender == 'm')){
        genderMistake = false
    } else {
        return `
        Please make sure that you inputed you gender as the following
        
        Male    = m
        Female  = f
        
        Example:
        ...node task.js Lucy 37 f 1.62 45 yes`
    };
    if ((numberMistake === false)&&(lengthMistake === false)&&(genderMistake === false)) {
        return false
    };
};

function formatOutput (userObj){
    return `
~~~~HEALTH CHECKUP~~~~

First Name:     ${userObj.name}
Age:            ${userObj.age}
Gender:         ${userObj.gender}
Height:         ${userObj.heightInM} m
Weight:         ${userObj.weightInKg} kg
Daily Exercise: ${userObj.dailyExercise}

~~1. BMI CALCULATOR

Your BMI is ${userObj.BMI}

${conclusionBMI(userObj.BMI)}

~~2. IDEAL WEIGHT CALCULATOR

Your ideal weight is ${userObj.idealWeight} kg

${conclusionIdealWeight(userObj.weightDifference, userObj.BMI)}

~~3. BMR CALCULATION

Your BMR is ${userObj.BMR}

You will burn ${userObj.dailyCalories} calories in a day, if you adopt a normal lifestyle

~~4. DAILY EXERCISE

${conclusionDailyExercise(userObj.dailyExercise, userObj.dailyCalories, userObj.dailyCaloriesExercise)}

~~5. DIET PLAN

To achieve your ideal weight of ${userObj.idealWeight} kg, you must consume ${userObj.dietCalories} calories in a day for ${userObj.dietWeeks} weeks}

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

    const user = {
        name: name,
        age: age,
        gender: gender,
        heightInM: heightInM,
        weightInKg: weightInKg,
        dailyExercise: dailyExercise,
        BMI: BMI,
        idealWeight: idealWeight,
        weightDifference: weightDifference,
        BMR: BMR,
        dailyCalories: dailyCalories,
        dailyCaloriesExercise: dailyCaloriesExercise,
        dietWeeks: dietWeeks,
        dietCalories: dietCalories
    };

    if (validationError === false){
        console.log(formatOutput (user))
    } else {
        console.log(validation(age, gender, heightInM, weightInKg))
    };
};

healthInfo()