//Start of onlyOdds Function
const onlyOdds = (arr) => {
    const newArr = []; //init empty arr
    let i; //init iterator
    for (i=0; i<arr.length; i++){ //for each value of arr
        if (arr[i] % 2 !== 0) { //if the value at arr[i] is not divisible by 2
            newArr.push(arr[i]); //push value at arr[i] into new arr
        };
    };
    console.log(newArr);
};
//Execute and test onlyOdds function
onlyOdds([2,4,6,8,11,20,15,22]) //[11,15]
onlyOdds([1,2,3,4,5,6,7,8,9,10]) //[1,3,5,7,9]
onlyOdds([70,42,55,81,21,91,34]) //[55,81,21,91]
onlyOdds([2,4,6,8,10,11,12]) //[11]
//End of onlyOdds Function

//Start of onlyOddsAlt Function
const onlyOddsAlt = (arr) => {
    let myArr = [];
    arr.forEach(value => {
        if (value % 2 !== 0){
            myArr.push(value);
        }
    });
    console.log(myArr);
}
//Execute and test onlyOddsAlt function
onlyOddsAlt([2,4,6,8,11,20,15,22]) //[11,15]
onlyOddsAlt([1,2,3,4,5,6,7,8,9,10]) //[1,3,5,7,9]
onlyOddsAlt([70,42,55,81,21,91,34]) //[55,81,21,91]
onlyOddsAlt([2,4,6,8,10,11,12]) //[11]
//End of onlyOddsAlt function

//Start of vowelConsonantCounter function
const vowelConsonantCounter = (word) => {
    wordArr = word.split("")//split word string into wordArr
    let v = 0; //init v variable
    let c= 0; //init c variable
    wordArr.forEach(letter => { //for each letter of the wordArr
        if (letter === "a"||
            letter === "e"||
            letter === "i"||
            letter === "o"||
            letter === "u"){ //if letter is a vowel
                v++ //increase v by 1
        } else { //if letter is a consonant
            c++ //increase c by 1
        }
    })
    console.log(`There are ${v} vowels and ${c} consonants in ${word}`);//print to console
};
//Execute and test vowelConsonantCounter function
vowelConsonantCounter("hello"); // 2 vowels 2 consonants
vowelConsonantCounter("ukelele"); //4 vowels 3 consonants
vowelConsonantCounter("awesome"); //4 vowels 3 consonants
vowelConsonantCounter("onomatopoeia"); //8 vowels 4 consonants
vowelConsonantCounter("textbook"); //3 vowels 5 consonants
//End of vowelConsonantCounter function

//Start of reverseArray function
const reverseArray = (arr) => {
    console.log(arr.reverse())//print the arr in reverse
};
//Execute and test reverseArray function
reverseArray([1,2,3]); //[3,2,1]
reverseArray([1,3,5,7,9,11]); //[11,9,7,5,3,1]
reverseArray([20,50,30,60,200]); //[200,60,30,50,20]
reverseArray([1,-1,2,-3,5,-8,13]); //[13,-8,5,-3,2,-1,1]
//End of reverseArray function

//Start of FizzBuzz
const fizzBuzz = () => {
    let i=1;
    while (i<101){ //while i is less than 100
        if (i % 3 === 0 && i % 5 === 0) { //For every third iteration
            console.log('FizzBuzz');//Print Fizz
            i++;//increase i
        } else if (i % 3 === 0) { //For every fifth iteration
            console.log('Fizz'); //Priint Buzz
            i++;//increase i
        } else if (i % 5 === 0){
            console.log('Buzz'); //Print FizzBuzz
            i++;//increase i
        } else { //every normal iteration
            console.log(i);//print the number
            i++//increase i
        }
    }
}
//End of FizzBuzz
//fizBuzz();