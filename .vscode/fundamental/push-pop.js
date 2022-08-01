// var numbers = [12, 13, 15, 16, 17, 24];
// console.log(numbers);
// // use push to add element
// numbers.push(25,23);
// console.log(numbers);
// //use pop to get rid of last element
// // numbers.pop();
// var element = numbers.
// console.log(numbers);

var firstName = ['Rahin', 'Rushi', 'Ramim', 'Rahit', 'Rahat'];
//print array
console.log(firstName);
//find full length
console.log(firstName.length);
//find name name using index numbers
console.log(firstName[3]);
console.log(firstName[2]);
//find index
var findIndex = firstName.indexOf('Rushi');
console.log(findIndex);
//add new string
var addNew = firstName.push('Rammam');
console.log(firstName);
//get rid of last element;
var ridOf = firstName.pop();
console.log(firstName);
console.log(ridOf);
//add element into the first position;
var removeFirst = firstName.unshift('Rakin');
console.log(firstName);
//concat two array
var arr1 = ['*', '*', '*'];
var arr2 = ['*', '*', '*'];
var addition = arr1.concat(arr2);
console.log(addition);
firstName.shift();
console.log(firstName);
console.log(firstName.length);