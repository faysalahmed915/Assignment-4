
function validEmail(email) {
    if (typeof email === "string") {
        let bannedChars = [".", "-", "_", "+", "@"];
        if (email[0] !== "." && email[0] !== "-" && email[0] !== "_" && email[0] !== "+" && email[0] !== "@" && email.includes !== " " && email[email.length -1] === "m" && email[email.length -2] === "o" && email[email.length -3] === "c" && email[email.length -4] === "." && email.includes("@")) {
            // console.log("Valid Email");
            return true;
        }
        else {
            // console.log("Invalid Email");
            return false;
        }
    }
    else {
        // console.log("Not a string");
        return "Invalid";
    }
}


let myEmail = "faysalahmed@gmail.com";
// let myEmail = 1000;
console.log(validEmail(myEmail)); 
// validEmail(myEmail);