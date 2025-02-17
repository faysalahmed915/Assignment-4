// Problem-01
// let cashOutCharge = 0;
function cashOut(money) {
    if (typeof money === 'number') {
        if (money >= 0) {
            let cashOutCharge = money * 0.0175;
            return cashOutCharge.toFixed(4);
        } else {
            console.log('Invalid');
    }
           
    }
    else {
        console.log('Invalid');
    }
}
let input = 99;
let result = cashOut(input);
console.log(result);