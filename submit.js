function cashOut(money) {
    if (typeof money === 'number') {
        if (money >= 0) {
            let cashOutCharge = money * 0.0175;
            return cashOutCharge.toFixed(4);
        } else {
            const result = "Invalid";
            return result;
        }
    }
    else {
        const result = "Invalid";
        return result;
    }
}

function validEmail(email) {
    if (typeof email === "string") {
        let bannedChars = [".", "-", "_", "+", "@"];
        if (email[0] !== "." && email[0] !== "-" && email[0] !== "_" && email[0] !== "+" && email[0] !== "@" && email.includes !== " " && email[email.length - 1] === "m" && email[email.length - 2] === "o" && email[email.length - 3] === "c" && email[email.length - 4] === "." && email.includes("@")) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid";
    }
}

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
        if (finalResult.length === 1) {

            const result = newVoteArray[maxIndex];

            return result;
        }
        else if (finalResult.length === 0) {
            return "Draw";
        }
        else {
            const drawResult = [];
            for (let i = 0; i < finalResult.length; i++) {
                let temp = newVoteArray[finalResult[i]]
                drawResult.push(temp);
            }
            return "Draw";
        }
    }
    else {
        const temp = "Invalid";
        return temp;
    }
}

function isBestFriend(f1, f2) {
    if (typeof f1 == "object" && typeof f2 == "object" && f1.hasOwnProperty('bestFriend') && f1.hasOwnProperty ('name') && f2.hasOwnProperty ('name') && f2.hasOwnProperty('bestFriend') && f1.hasOwnProperty('roll') && f2.hasOwnProperty('roll')) {
        if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid";
    }
}

function calculateWatchTime(times) {
    if (Array.isArray(times) && times.every(i => typeof i === "number")) {
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            sum += times[i];
        }
        let hours = (sum - sum % 3600) / 3600;
        let minutes = ((sum % 3600) - (sum % 3600) % 60) / 60;
        let seconds = (sum % 3600) - minutes * 60;
        let result = {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
        return result; 
    }
    else {
        return "Invalid";
    }
}
