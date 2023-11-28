function countDown (num){
    console.log(num)
    if(num <= 0){
        console.log(`all done`)
        return;
    }
    num--;
    countDown(num)
}

// countDown(5)


function sumRange (num){
    if( num === 1) return 1;
    return num + sumRange(num-1)
}


// console.log(sumRange(3))


// let total = 1;
// function factorial(num){
//     // console.log(total, num)
//     if(num == 1) return total;  
//     total *= num
//     return factorial(num-1)
// }

function factorial (num){
    if( num == 1) return 1;
    return num * factorial(num-1)
}
// console.log(factorial(4))

//   ***************  HELPER METHOD RECURSION  ************

function outer (input){
    var outerScoperVariable = [];

    function helper(helperInput){
        // modify the outerScoperVariable
        helper(helperInput--)
    }
    helper(input);

    return outerScoperVariable;
}


// function collectOddValues(input){
//     let result = [];
//     function helper(hInput){
//         console.log(hInput.length);
//         if(hInput.length === 0) return;
//         if(hInput[0] % 2 !== 0) result.push(hInput[0]);
//         helper(input.slice(1))
//     }
 
//     return result
// }

///    collectOddValues  in PURE RECURSSION FUNCTION

function collectOddValues(input){
    newArray = [];
    if(input.length === 0){
        return
    }

    if(input[0] % 2 !== 0){
        newArray.push(input[0])
    }

    newArray = newArray.concat(collectOddValues(input.slice(1)))
    return newArray;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))