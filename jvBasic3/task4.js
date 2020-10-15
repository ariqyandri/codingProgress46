const { forEach } = require("./patients");
const patients = require("./patients");

// const firstPatient = patients[0];

// const firstPatientID = firstPatient["id"];



// console.log(firstPatientID)

// const array = [1, 2, 3, 4, 5];

// array.push(3);

// console.log(array);

// const email = process.argv[2];

// const thePatient = patients.find(function(patient){
//     return patient.email == email
// })

// if (thePatient !== undefined) {
//     console.log(thePatient.id)
// } else {
//     console.log(`Patient with email ${email} is non-existent`)
// };

//PRACTICE DAY 3

const fullNameCall = patients.map(function(patient){
    let {firstName, lastName, gender} = patient;
    let prefix = gender === 'm' ? `Mr.` : `Ms.`;
    return `${prefix}${firstName} ${lastName}`
});

// console.log(fullNameCall)

function calculateBMI(height, weight) {
    return Math.round(weight / (height*height))
};

const patientBMI = patients.map(function(patient){
    let {height, weight} = patient;
    return calculateBMI(height, weight)
});
// console.log(patientBMI);

const overweightBMI = 25;

const underweightBMI = 18;

// const overweightPatients = patients.filter(function(patient){
// // console.log(`patient is`, patient);
// // console.log('patient bmi is', patientBMI);
// // console.log('overweight is', overweightBMI);
// // console.log('result is', (patientBMI >= overweightBMI))
//     let {firstName, lastName, gender} = patient;
//     let prefix = gender === 'm' ? `Mr.` : `Ms.`;
//     const fullNameCall = `${prefix}${firstName} ${lastName}`;
//     let {height, weight} = patient;
//     const eachPatientBMI = calculateBMI(height, weight);
//     if (eachPatientBMI >= overweightBMI){
//         console.log(`${fullNameCall} is overwaight.`)
//     }; 
// });    

// const underweightPatients = patients.filter(function(patient){
//         let {firstName, lastName, gender} = patient;
//         let prefix = gender === 'm' ? `Mr.` : `Ms.`;
//         const fullNameCall = `${prefix}${firstName} ${lastName}`;
//         let {height, weight} = patient;
//         const eachPatientBMI = calculateBMI(height, weight);
//         if (eachPatientBMI <= underweightBMI){
//             console.log(`${fullNameCall} is underweight.`)
//         }; 
//     });

const underweightPatients = patients.filter(function(patient){
    let {height, weight} = patient;
    const eachPatientBMI = calculateBMI(height, weight);
    return (eachPatientBMI <= underweightBMI)
});

const overweightPatients = patients.filter(function(patient){
    let {height, weight} = patient;
    const eachPatientBMI = calculateBMI(height, weight);
    return (eachPatientBMI >= overweightBMI)
});

const listOverweight = overweightPatients.map(function(overweightPatient){
    let {firstName, lastName, gender} = overweightPatient;
    let prefix = gender === 'm' ? `Mr.` : `Ms.`;
    return `${prefix}${firstName} ${lastName}`
});

console.log(`${listOverweight.length} out of ${patients.length} patients are overweight`);

function greet(patient){
    let {firstName} = patient;
    console.log(`Hello ${firstName}`)
};

patients.forEach(greet);

overweightPatients.forEach(function(yall){
    let {firstName} = yall;
    console.log(`${firstName} you are fat`)
})



