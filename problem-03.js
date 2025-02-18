// problem-03
/*function signature/sample */
// votes.constructor == Array

function electionResult(votes) {
    if (votes.constructor == Array && votes.every(i => typeof i === "string")) {
        const newVoteArray = [];
        for (let i = 0; i < votes.length; i++) {
            for (let j = i + 1; j < votes.length; j++) {
                if ((votes[i] === votes[j] || votes[i] !== votes[j]) && !newVoteArray.includes(votes[i])) {
                    newVoteArray.push(votes[i]);
                }
            }
        }
        let voteCount = []
        for (let i = 0; i < newVoteArray.length; i++) {
            let count = 0;
            for (let j = 0; j < votes.length; j++) {
                if (newVoteArray[i] === votes[j]) {
                    count++;
                }
            }
            voteCount.push(count);
        }
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
        // console.log(finalResult);
        if (finalResult.length === 1) {

            const temp = newVoteArray[maxIndex];

            return temp;
        }
        else {
            for (let i = 0; i < finalResult.length; i++) {
                const temp = newVoteArray[finalResult[i]]
                console.log(temp);

            }
            // return temp;
        }
    }
    else {
        const temp = "Invalid";
        return temp;

    }
}


// let voteArray = ["7", "5", "3", "1", "3", "7", "6", "7", "9"];
let voteArray = ["7", "5", "3", "9", "1", "3", "9", "7", "6", "7", "9"];
// let voteArray = ["mango", "banana", "mango", "banana", "mango", "mango", "banana", "banana", "banana", "Na-Vote", "mango", "mango", "banana", "jaker party", "no", "Mango", "bananA", "na vote", "na vote"];

// let voteArray = ["mango", "banana", "mango", "banana", "mango", "mango", "banana", "Na-Vote", "mango", "mango", "banana", "jaker party", "no", "mango", "BananA", "na vote", "na vote"];

// console.log(electionResult(voteArray));
electionResult(voteArray);