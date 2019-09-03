// Implmentation using Map


const checkIfHasUniqueCharactersInString = (charString) => {
    let charMap = {};
       for(let char of charString) {
           if(charMap[char]) {
               console.log(false);
               return false;
           }
           charMap[char] = char;
       }
       console.log(true);
       return true;
}
checkIfHasUniqueCharactersInString("bhsgyu");