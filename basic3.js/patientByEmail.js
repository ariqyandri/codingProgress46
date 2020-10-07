const patients = require("./patients");

const email = process.argv[2];

const thePatient = patients.find(function(patient){
    return email === patient.email
});

if (thePatient !== undefined){
    console.log(thePatient)
} else {
    console.log(`Patient with the email ${email} is non-existent`)
}

