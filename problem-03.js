// problem-03
/*function signature/sample */
// votes.constructor == Array

function electionResult(votes) {
    if (votes.constructor == Array) 
        { 
        const newVoteArray = [];
        for (let i=0; i < votes.length; i++) 
            {
            for (let j=i+1; j < votes.length; j++) 
                {
                if ((votes[i] === votes[j] || votes[i] !==votes[j]) && !newVoteArray.includes(votes[i]))
                { 
                    newVoteArray.push(votes[i]);
                }
                }
            }
            for (let i=0; i < newVoteArray.length; i++) 
            {
                let count = 0;
                for (let j=0; j < votes.length; j++) 
                {
                    if (newVoteArray[i] === votes[j]) 
                    {
                        count++;
                    }
                }
                console.log(newVoteArray[i] + " : " + count);
            }
        }
         
        else {
            console.log('Invalid');
        } 
    }   
    


// let voteArray = ["mango", "banana", "mango", "banana", "mango","mango", "banana", "Na-Vote", "mango","mango", "banana", "jaker party", "no","mango", "BananA", "na vote", "na vote"];
let voteArray = 1000;
electionResult(voteArray);