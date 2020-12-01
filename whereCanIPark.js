const whereCanIPark = function (spots, vehicle) {
    let position;
    if (vehicle === 'regular'){
        for (let i = 0; i < spots.length; i++){
            for (let j = 0; j < spots[i].length; j++){
                if (spots[i][j] === 'R'){
                    position = [j, i];
                    return position;
                }
            }
        }
        if (position === undefined){
            return false;
        }
    } else if (vehicle === 'small'){
        for (let i = 0; i < spots.length; i++){
            for (let j = 0; j < spots[i].length; j++){
                if (spots[i][j] === 'R' || spots[i][j] === 'S'){
                    position = [j, i];
                    return position;
                }
            }
        }
        if (position === undefined){
            return false;
        }
    } else if (vehicle === 'motorcycle'){
        for (let i = 0; i < spots.length; i++){
            for (let j = 0; j < spots[i].length; j++){
                if (spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M'){
                    position = [j, i];
                    return position;
                }
            }
        }
        if (position === undefined){
            return false;
        }
    }
};
  
console.log(whereCanIPark(
    [
      ['s', 's', 's', 'S', 'R', 'M'],
      ['s', 'M', 's', 'S', 'r', 'M'],
      ['s', 'M', 's', 'S', 'r', 'm'],
      ['S', 'r', 's', 'm', 'r', 'M'],
      ['S', 'r', 's', 'm', 'r', 'M'],
      ['S', 'r', 'S', 'M', 'M', 'S']
    ],
    'regular'
));
  
console.log(whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ],
    'small'
));
  
console.log(whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
));