//this shows the first data in the process.argv array (what u type in terminal... ie. ...node[0] bmi.js[1] 68kg [2]...)
const location = process.argv[1];
console.log(location);
//this is defining an array
    //can be a combination of data types
const myArray = ['a', 1, false];
const secondData = myArray[1];
console.log(myArray); //[ 'a', 1, false ]
console.log(secondData); //1

const favFlav = (flavour) => {
    console.log(`I love ${flavour} icecream!`)
}
favFlav(`cookies and cream`) //I love cookies and cream icecream!

//Map - runs a callback function or argument to each data in array
const callbackTest = () => console.log('nerd');
const myArray2 = [1,2,3,4];
myArray2.map(callbackTest) //nerd, nerd, nerd, nerd
    //returning arguments- results as an ARRAY
const returmTest = (value) => `${value} is a nerd`;
const myArray3 = ['Andy', 'Ben', 'Jennifer', 'David'];
const bullying = myArray3.map(returmTest); //
console.log(bullying)//'Andy is a nerd', 'Ben is a nerd', 'Jennifer is a nerd','David is a nerd']



