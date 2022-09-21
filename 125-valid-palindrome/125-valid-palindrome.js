
var isPalindrome = function(s) {
  const a = s.replaceAll(' ', '')
  const b = a.replace(/[^0-9a-z]/gi, '').toLowerCase()
  const c = b.split("").reverse().join("").toLowerCase()
     
  if(c.localeCompare(b) === 0){
      return true
  }
 else return false
    
};