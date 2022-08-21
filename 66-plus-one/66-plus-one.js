
var plusOne = function(digits) {
    let largeInt = BigInt(digits.map(String).join('')) + 1n
    return Array.from(String(largeInt), Number)
  
};