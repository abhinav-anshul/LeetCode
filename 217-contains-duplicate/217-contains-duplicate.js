/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
let st = new Set(nums)
if (st.size <
nums.length){
    return true
}
    else if (st.size === nums.length){
        return false
    }
    else false
};