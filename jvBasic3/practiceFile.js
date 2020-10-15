const patients = require("./patients");

function BMI(height, weight){
    return Math.round(weight / (height*height))
};

const patientListBMI = patients.map(patient => {
    patient.BMI = BMI(patient.height, patient.weight);
    return patient
})

const overWeightPatients= patientListBMI.filter(patient => patient.BMI > 25)

overWeightPatients.forEach(patient => {
    console.log(`${patient.firstName[0].toUpperCase()} is fat`)
})
