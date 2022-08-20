/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   
    let XORFINAL = 0
    for(num of nums){
      XORFINAL = XORFINAL ^ num
      console.log({XORFINAL, num})
    }
  return XORFINAL 
};