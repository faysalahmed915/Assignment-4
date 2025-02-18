
function cashOut(money) {
    if (typeof money === 'number') {
        if (money >= 0) {
            let cashOutCharge = money * 0.0175;
            return cashOutCharge.toFixed(4);
        } else {
            const temp = "Invalid-1";
            return temp;
    }
           
    }
    else {
        const temp = "Invalid-2";
        return temp;
    }
}

let input = '1000';
let result = cashOut(input);
console.log(result);
