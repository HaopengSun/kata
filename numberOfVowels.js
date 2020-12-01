const numberOfVowels = function(data) {
    let number_of_vowels = 0;
    for (let i = 0; i < data.length; i++){
        if (data[i] === 'a' || data[i] === 'e'|| data[i] === 'i' || data[i] === 'o' || data[i] === 'u'){
            number_of_vowels++;
        }
    }
    return number_of_vowels;
  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));