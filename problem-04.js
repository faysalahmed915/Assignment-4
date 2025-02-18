
function isBestFriend(f1, f2) {
    if (typeof f1 == "object" && typeof f2 == "object") {
        if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
            // console.log(true);
            return true;
        } else {
            // console.log(false);
            return false;
        }
    }
    else {
        // console.log('Invalid');
        return "Invalid";
    }

}


let hashemData = {
    name: 'Hashem',
    roll: 1,
    bestFriend: 2
}
let kashemData = {
    name: 'Kashem',
    roll: 2,
    bestFriend: 1
}
// let kashemData = [
//     "name: 'Kashem'",
//     "roll: 2",
//     "bestFriend: 1"
// ]
// let kashemData = "kotha koio na"

// isBestFriend(hashemData, kashemData); // Output: true
console.log(isBestFriend(hashemData, kashemData)); 