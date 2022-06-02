/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = 0;
    let arrtest = []
 for(let i = 0 ; i<nums.length ; i++){
    count = count + nums[i]
    arrtest.push(count)
  }
  return arrtest
};