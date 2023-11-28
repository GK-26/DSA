
                  //    naive


// function countUniqueValues(arr){
//     // add whatever parameters you deem necessary - good luck!
//       let one = 0;
//       let two = 1;
//       if(arr.length <= 0){
//         return 0
//       }
//       while(two != arr.length){
//         console.log(two, arr.length);
//           if(arr[one] != arr[two]){
//               arr[one+1] = arr[two]
//               one++
//               two++
//           }else{
//               two++
//           }
//       }
//       return one+1
      
//   }

//   console.log(countUniqueValues([-2,-1,-1,0,1]))


    //               refactored



    function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
      let i = 0;
  
      if(arr.length <= 0){
        return 0
      }
      
      return i+1
      
  }

  console.log(countUniqueValues([-2,-1,-1,0,1]))
