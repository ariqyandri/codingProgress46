const patients = require("./patients");

const age = parseInt(process.argv[2]);

const patientsOlderThan = patients.filter(function(patient){
    return age > patient.age;
});

console.log(patientsOlderThan.length);
