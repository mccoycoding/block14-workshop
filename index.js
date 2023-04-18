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