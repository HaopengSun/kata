const multiplicationTable = function(maxValue) {
    let reply = '';
    for (let i = 1; i <= maxValue; i++){
        for (let j = 1; j <= maxValue; j++){
            reply += j * i;
            if (j === maxValue){
                reply += '\n';
            } else {
                reply += ' ';
            }
        }
    }
    return reply;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));