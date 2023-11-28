
// function same(arr1, arr2){
//     if(arr1.length != arr2.length){
//         return false
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if(correctIndex === -1){
//             return false
//         }
//         arr2.splice(correctIndex, 1)
//     }
//     console.log(true);
//     return true;
// }


// same([1,2,3,2], [9,1,4,4])

// improved ONE

function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false
    }
    let frequencyConter1 = {}
    let frequencyConter2 = {}
    for(let val of arr1){
        frequencyConter1[val] = (frequencyConter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyConter2[val] = (frequencyConter2[val] || 0) + 1
    }

    for( let key in frequencyConter1){
        if(!(key ** 2 in frequencyConter2)){
            return false
        }
        if(frequencyConter2[key ** 2] != frequencyConter1[key]){
            return false
        }
    }
    console.log(true);
    return true
}

// same([1,2,3,2], [9,1,4,4])
                                    // validAnagram

// function validAnagram(str1, str2){
//     if(str1.length != str2.length){
//         return false
//     }
//     let obj1 = {};
//     let obj2 = {};

//     for(el of str1){
//         obj1[el] = (obj1[el] || 0) + 1
//     }
//     for(el of str2){
//         obj2[el] = (obj2[el] || 0) + 1
//     }

//     for(key in obj1){
//         if(!(key in obj2)){
//             return false
//         }
//         if(obj1[key] != obj2[key]){
//             return false
//         }
//     }
//     console.log(true);
//     return true
// }


// validAnagram('abcdefg', 'gfedcba')



function validAnagram(str1, str2){
    if(str1.length != str2.length){
        console.log(false);
        return false
    }
    let obj = {};

    for(el of str1){
        obj[el] = (obj[el] || 0) + 1
    }
    for(el of str2){
        console.log(el , obj[el])
        if(!obj[el]){
            console.log(false);
            return false
        }else{
            obj[el] -= 1
            console.log(obj)
        }
        
    }
    console.log(true);
    return true
}


validAnagram('lkjhgfdsa', 'asdfghjkl')




function sameFrequency(a, b){
    // good luck. Add any arguments you deem necessary.
    a = a.toString();
    b = b.toString();
    let objectA = {};
    
    for(let el of a){
        objectA[el] = (objectA[el] || 0) + 1
    }
   
    for(let el of b){
       
        if(objectA[el]){
            objectA[el] -= 1
        }else{
            return false;
        }
    }
    return true;
  }
  

//   sameFrequency(3589578, 5879385) // true




function areThereDuplicates(...args) {
    args.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
   console.log(args)
    let start = 0;
    let next = 1;
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
  }
//   console.log(areThereDuplicates(1, 2, 2));

function averagePair(a, b){
    // add whatever parameters you deem necessary - good luck!
    let i = 0;
    let j = a.length-1;
    
    console.log(a[i], a[j]);
    while (i <= j){
        
        if((a[i] + a[j])/2 == b){
            return true;
        }
        if((a[i] + a[j])/2 > b){
            j--
        }else{
            i++
        }
      
    }
    return false
  }


//   console.log(averagePair([1,3,3,5,6,7,10,12,19],8))



function isSubsequence(a, b) {
    // good luck. Add any arguments you deem necessary.
   let i = 0;
      let j = 0;
      let count = 0
      while(j < b.length){
          
          if(a[i] == b[j]){
              i++;
              count++
          }
            j++
       
          if(count == a.length-1){
              console.log(i, j, count, a.length-1)
              return true
          }
         
      }
      
          return false
  }


  //  console.log(isSubsequence('abc', 'abracadabra'));