// voteCount = [7, 5, 3, 1, 3, 7, 6, 7, 9];
voteCount = ["7", "5", "3", "1", "3", "7", "6", "7", "9"];
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