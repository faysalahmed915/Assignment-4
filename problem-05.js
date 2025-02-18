// problem-05


function calculateWatchTime(times) {


    if (Array.isArray(times) && times.every(i => typeof i === "number")) {
        // console.log(times);
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            sum += times[i];
        }
        // console.log(sum) 
        let hours = (sum - sum % 3600) / 3600;
        let minutes = ((sum % 3600) - (sum % 3600) % 60) / 60;
        let seconds = (sum % 3600) - minutes * 60;

        let result = {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
        return result; 
        // console.log(result);
    }
    /* if (times.constructor == Array) {
        console.log(times); 
    } */    // it works too
    else {
        return "Invalid";
        // console.log('Invalid');
    }
}

// let watchTime = [2, 3, 45, 5, 6, 70, 8, 19, 10, 151, 123];
// let watchTime = [100, 99, 119, 300];
// let watchTime = "[5600]";
let watchTime = [1000, 2000, 725];

console.log(calculateWatchTime(watchTime));