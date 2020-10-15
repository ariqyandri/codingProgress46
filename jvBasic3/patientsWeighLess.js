const patients = require("./patients");

const weight = parseInt(process.argv[2]);

const patientsLighterThan = patients.filter(function(patient){
    return weight > patient.weight;
});

console.log(patientsLighterThan.length);
