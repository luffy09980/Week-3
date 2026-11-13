// Portfolio Task: Learning Development and Reflection Log Script

const fullName = "Sanjeev Paneru";
const studentID = "U3005151";
const labGroup = "Group 7";

console.log("Student Name: " + fullName);
console.log("Student ID: " + studentID);
console.log("Lab Group: " + labGroup);

// 2. Display current date and time
const currentDateTime = new Date();
console.log("Current Date and Time:\n" + currentDateTime.toLocaleString());

// 3. Arrow function displaying favourite programming language
const favLanguage = (lang) => {
    console.log("Favourite Programming Language: " + lang);
};
favLanguage("JavaScript");

// 4. Calculate unique value: sum of the last 4 digits of Student ID
// ID: U1234567 -> digits: 4, 5, 6, 7 -> sum = 22
const calculateVerificationNumber = (id) => {
    const lastFour = id.slice(-4);
    let sum = 0;
    for (let i = 0; i < lastFour.length; i++) {
        sum += parseInt(lastFour[i], 10);
    }
    return sum;
};

const verificationNum = calculateVerificationNumber(studentID);
console.log("Verification Number: " + verificationNum);