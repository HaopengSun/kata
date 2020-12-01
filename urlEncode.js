const urlEncode = function(text) {
    trimedtext = text.trim();
    let reply = [];
    for (let i = 0; i < trimedtext.length; i++){
        if (trimedtext[i] === ' '){
            reply += '%20';
        } else {
            reply += trimedtext[i];
        }
    }
    return reply;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));