const sumLargestNumbers = function(data) {
    let biggest = 0;
    let secondBiggest = 0;
    for (let i = 0; i < data.length; i++){
        if (data[i] > biggest){
            secondBiggest = biggest;
            biggest = data[i];
        } else if (data[i] > secondBiggest){
            secondBiggest = data[i];
        }
    }
    return biggest + secondBiggest;  
};
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));