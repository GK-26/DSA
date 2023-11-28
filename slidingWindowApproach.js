function minSubArrayLen(nums, target) {
    let minLength = Infinity;
    let start = 0;
    let end = 0;
    let sum = 0;
    
    while(start < nums.length){
        if(sum < target && end < nums.length){
            sum += nums[end];
            end++;
        }else if(sum >= target){
            minLength = Math.min(minLength, end-start)
            // console.log(sum -= nums[start])
            sum  -= nums[start]
            start++
        }else{
            break
        }
    }
    return minLength === Infinity ? 0 : minLength
    
  }
  
  // Examples
  console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // Output: 2