const calculateChange = function(total, cash) {
    let change = cash - total;
    let reply = {};
    const bill = [ 'Twenty dollars', 'Ten dollars', 'Five dollars', 'Two dollars', 'One dollar', 'Quarter', 'Dime', 'Nickel', 'Penny'];
    const denominations = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
    for (let i = 0; i < denominations.length; i++){
        let value = Math.floor(change / denominations[i]);
        if (value >= 1){
            reply[bill[i]] = value;
            change = change - denominations[i] * value;
        }
    }
    return reply;
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));