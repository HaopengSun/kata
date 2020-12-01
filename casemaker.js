const camelCase = function(input) {
    let camel = '';
    for (let i = 0; i<input.length; i++){
        if (input[i] !== ' '){
            camel += input[i];
        } else {
            i++;
            camel += input[i].toUpperCase();
        }
    }
    return camel;
};
  
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));