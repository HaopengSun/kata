const makeCase_individual = function(input, cases) {
    let reply = '';
    if (cases === 'camel'){
        for (let i = 0; i < input.length; i++){
            if (input[i] === ' '){
                i++;
                reply += input[i].toUpperCase();
            } else {
                reply += input[i];
            }
        }
    }
    if (cases === 'pascal'){
        for (let i = 0; i < input.length; i++){
            if (input[i] === ' '){
                i++;
                reply += input[i].toUpperCase();
            } else if (i === 0){
                reply += input[i].toUpperCase()
            } else {
                reply += input[i];
            }
        }
    }
    if (cases === 'snake'){
        for (let i = 0; i < input.length; i++){
            if (input[i] === ' '){
                reply += '_';
            } else {
                reply += input[i];
            }
        }
    }
    if (cases === 'kebab'){
        for (let i = 0; i < input.length; i++){
            if (input[i] === ' '){
                reply += '-';
            } else {
                reply += input[i];
            }
        }
    }
    if (cases === 'title'){
        for (let i = 0; i < input.length; i++){
            if (i === 0){
                reply += input[i].toUpperCase();
            } else if (input[i - 1] === ' '){
                reply += input[i].toUpperCase();
            } else {
                reply += input[i];
            }
        }
    }
    if (cases === 'vowel'){
        let vowel = ['a', 'e', 'i', 'o', 'u'];
        for (let i = 0; i < input.length; i++){
            if (vowel.includes(input[i])){
                reply += input[i].toUpperCase();
            } else {
                reply += input[i];
            } 
        }
    }
    if (cases === 'consonant'){
        let vowel = ['a', 'e', 'i', 'o', 'u'];
        for (let i = 0; i < input.length; i++){
            if (vowel.includes(input[i])){
                reply += input[i];
            } else {
                reply += input[i].toUpperCase();
            } 
        }
    }
    if (cases === "upper"){
        for (let i = 0; i < input.length; i++){
            if (input[i] !== ' '){
                reply += input[i].toUpperCase();
            } else {
                reply += ' ';
            } 
        }
    }
    return reply;
};

const makeCase = function(input, cases){
    let reply = '';
    if (typeof cases === 'string'){
        return makeCase_individual(input, cases);
    }
    if (typeof cases === 'object'){
        reply = makeCase_individual(input, cases[0]);
        cases.splice(0, 1);
        while (cases.length > 0){
            reply = makeCase_individual(reply, cases[0]);
            cases.splice(0, 1);
        }
        return reply;
    }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));