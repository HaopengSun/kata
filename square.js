const squareCode = function(message) {
    let spaces = message.split(' ');
    let message_without_space = '';
    for (const space of spaces){
        message_without_space += space;
    }
    let line_number = 1;
    let line = '';
    let square_root = Math.ceil(Math.sqrt(message_without_space.length));
    for (let i = 0; i < message_without_space.length; i++){
        line += message_without_space[i];
        line_number++;
        if (line_number > square_root && i < message_without_space.length - 1){
            line += '\n';
            line_number = 1;
        }
    }
    let squares = line.split('\n')
    let output = '';
    for (let j = 0; j < squares[0].length; j++){
        for (let k = 0; k < squares.length; k++){
            if (squares[k][j] !== undefined){
                output += squares[k][j];
            }
        }
        output += ' ';
    }
    return output;
};
  
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));