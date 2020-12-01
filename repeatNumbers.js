const repeatNumbers = function(datas) {
    let reply = '';
    let space = 0;
    for (const data of datas){
        for (let i = 0; i < data[1]; i++){
            reply += data[0];
        }
        space++;
        if (space < datas.length){
            reply += ', ';
        }
    }
    return reply;
  };
  
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));