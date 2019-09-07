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
checkIfHasUniqueCharactersInString("bhsgyuy");



//another implmentation if asked not to use another implmentation (you are okay to modify the inoust string)

// const checkIfHasUniqueCharactersInStringAnotherImpl = (charString) => {
//     let i = 0;

//     for(let j = 0; j < charString.length ; j++) {
//         if(charString.substr(i + 1,charString.length).includes(charString.substr(i, 1))) {
//             console.log(false);
//             return false;
//         }
//         charString = charString.substr(i + 1, charString.length);
//     }
//     console.log(true);
//     return true
// }
// checkIfHasUniqueCharactersInStringAnotherImpl("bhsgyub");