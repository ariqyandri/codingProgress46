const patients = require("./patients");

// const emails = patients.map(function(patient){
//     return patient.email;
// });

// console.log(emails)

// const fullName = patients.map(function(patient){
//     const {firstName, lastName } = patient;
//     return `${firstName} ${lastName}`
// });

// const id = patients.map(function(patient){
//     return patient.id
// });

// const phoneNumber = patients.map(function(patient){
//     return patient.phoneNumber
// });

// console.log(fullName, id, phoneNumber)

// const anaonymyzedData = patients.map(function(patient){
//     return {
//         id: patient.id,
//         gender: patient.gender,
//         height: patient.height,
//         weight: patient.weight,
//         dailyExercise: patient.dailyExercise,
//         age: patient.age
//     }
// });

// console.log(anaonymyzedData);

// const templates = patients.map(function(patient) {
//   const { lastName, gender } = patient;
//   const prefix = gender === "m" ? "Mr" : "Mrs";

//   return `
//     <html>
//         <head>
//             <title>Thanks for your participation</title>
//         </head>
//         <body>
//             <h1>You are awesome</h1>

//             <p>

//                 Dear ${prefix} ${lastName},

//                 Thank you for participating in this study ...

//             </p>
//         </body>
//     </html>
//   `;
// });

// console.log(templates[0]);
// console.log(templates[1]);

function calculateBMI(height, weight){
    return Math.round(weight / (height*height))
};

const BMI = patients.map(function(patient){
    const {height, weight} = patient;
    let bmi = calculateBMI(height, weight);
    return bmi
});

function calculateBMR(height, weight, age, gender){
    let bmr = Math.round(10*weight+6.25*(height*100)-5*age);
    bmr = gender === 'm' ? bmr+50 : bmr-150;
    return bmr
};

const BMR = patients.map(function(patient){
    const {height, weight, age, gender} = patient;
    return calculateBMR(height, weight, age, gender);
})


console.log(BMI, BMR);