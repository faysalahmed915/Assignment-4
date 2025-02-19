/*

// voteCount = [7, 5, 3, 1, 3, 7, 6, 7, 9];
// voteCount = ["7", "5", "3", "1", "3", "7", "6", "7", "9"];
let voteCount = ["7", "5", "3", "9", "1", "3", "9", "7", "6", "7", "9"];
let max = voteCount[0];
let maxIndex = 0;
for (let i = 0; i < voteCount.length; i++) {
    if (voteCount[i] > max) {
        max = voteCount[i];
        maxIndex = i;
    }
}
let finalResult = [];
for (let j = 0; j < voteCount.length; j++) {
    if (voteCount[j] === max) {
        finalResult.push(j);
    }
}
console.log(finalResult);

if (finalResult.length > 1) {
    console.log('Tie between : ');
    for (let i = 0; i < finalResult.length; i++) {
        console.log(voteCount[finalResult[i]]);
    }
}
else {
    console.log('Winner is : ' + maxIndex);
}
// console.log('Winner is : ' + maxIndex);

*/


// problem-02

// && email[email.length -2] === "o" && email[email.length -3] === "c" && email[email.length -4] === "."

function validEmail(email) {
    if (typeof email === "string") {
        if (email.includes("@") && email[email.length -1] === "m" && email[email.length -2] === "o" && email[email.length -3] === "c" && email[email.length -4] === ".") {
            return true;
        }
        else {
            return false;
        }
        // return true;
    }
    else {
        return "Invalid";
    }
}


let myEmail = "aysalahmed@gmail.com";
// let myEmail = 1000;
console.log(validEmail(myEmail)); 