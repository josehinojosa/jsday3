// 1.
// Without logging the values, list the value of `sports`
var sports = ['soccer', 'baseball'];
sports.push('football', 'swimming');
// A:
// sports = <your answer>



// 2.
// Using the `strings` array, write a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [18,12,4,1,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});



// 4.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:


console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 5.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 6.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function numbersOver10(value) {
   let results = [];
   for (let i = 0; i < value.length; i++){
     if (value[i] >10){
       results.push(value[i])

     }
   } return results;
 }



console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 7.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 8.
// Write a function `joinArrays()` that takes two arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlle = <your answer>

var instructorOne = instructors[4][0];
// instructorOne = <your answer>

var instructorTwo = instructors[0][1];
// instructorTwo = <your answer>

var instructorThree = instructors[2][0];
// instructorThree = <your answer>
