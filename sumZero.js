//                           NAIVE


// function sumZero(arr){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i; j<arr.length; j++){
//             console.log(j)
//             if(arr[i]+arr[j] == 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// console.log(sumZero([-5,-4,0,1,4,8]))


//                        REFACTOR



function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == 0){
            return [arr[left], arr[right]]
        }
        if(sum  < 0){
            left++
        }else{
            right--
        }
    }
    return undefined
}

console.log(sumZero([-5,-4,0,1,,8,4]))