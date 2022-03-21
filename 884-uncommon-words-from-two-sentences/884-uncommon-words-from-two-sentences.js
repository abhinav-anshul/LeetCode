/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    

let s11 = s1.split(" ")
let s22 = s2.split(" ")


let combine = [...s11, ...s22]
let stAdd = new Set()
let stRem = new Set()

for(let word of combine){
  if(stAdd.has(word) || stRem.has(word)){
    stAdd.delete(word)
    stRem.add(word)
  }
  else{
    stAdd.add(word)
  }
  
}
  return [...stAdd]  
};