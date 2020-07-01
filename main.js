/******************
 * YOUR CODE HERE *
******************/

const doubleAll = function(nums){
  const results = [];
for(let i =0;i< nums.length; i++){
results.push(nums[i]*2)
}
return results
}


const yelledGreetings = function(greeting){
let result =[];
for (let i=0; i <greeting.length; i++){
  result.push(greeting[i]+"!")
}
return result
}

const absoluteValues= function(value){
  let result =[];
  for(let i=0; i< value.length; i++){
result.push(Math.abs(value[i]))

  }
  return result
}

const upperCaseFirstLetters=function(name){
  let nameCase =[];
  for(let i=0; i < name.length; i++){
nameCase.push(name[i][0].toUpperCase()+name[i].slice(1).toLowerCase())
  }
return nameCase
}

const changeToInitials = function(name)
{
  let initials=[];
for(let i = 0; i < name.length; i++){
initials.push(name[i][1]+ name[i][name[i].indexOf(' ')+1])
}
return initials.toUpperCase()
}

/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
