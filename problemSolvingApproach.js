/**
 *  function charCount(str){
 *  // make object to return at end
 *  // loop over string, for each character
 *  // if the char is a number/letter AND is a key in object, add one to count
 *  // if the char is number/letter AND not in object, add it to object and set value to 1
 *  // if character is something else (space, period, etc.) don't do anything
 *    // return object at end 
 * }
 */


// function charCount(str){
//     let result = {};
    
//     for (let i = 0; i < str.length; i++){
//         // console.log(str[i])
//         char = str[i].toLowerCase();
//         if(/^[a-z0-9]+$/.test(char)){
//             if(result[char]>0){
//                 result[char]++
//             }else{
//                 result[char] = 1
//             }
//         }
//     }
//     console.log(result)
// }
// charCount('hello there!')

//  Optimized


function charCount(str){
    let result = {};
    
    for (char of str){
        // console.log(str[i])
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){
            result[char] = ++result[char] || 1
        }
    }
    console.log(result)
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(
        !(code > 47 && code < 58) && // numeric 0-9
        // !(code > 64 && code < 91) &&  // upper Alpha (A-Z)
        !(code > 96 && code < 123)  // lower Alpha (a-z)
        ){
            return false
        }
        return true
}

charCount('Hello there!')