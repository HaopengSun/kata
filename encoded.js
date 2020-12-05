const urlDecode = function(text) {
    let mapping = {};
    let strs = text.split('&');
    for (const str of strs){
        let pairs = str.split('=');
        let key = pairs[0]
        let values = pairs[1].split('%20');
        let output = '';
        for (let i = 0; i < values.length; i++){
            output += values[i];
            if (i < values.length - 1){
                output += ' ';
            }
        }
        mapping[key] = output;
    }
    return mapping;
};
  
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
