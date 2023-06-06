//1
const maxOfTwoNumbers = (num1, num2) => {
    if (num1 > num2) {
        console.log(`maxOfTwoNumbers: ${num1}`);
    } else{
        console.log(`maxOfTwoNumbers: ${num2}`);
    }
}
maxOfTwoNumbers(3,8);
// ----------------------------------------------
//2
const maxOfThree = (num1, num2, num3) => {
    numArr = [num1, num2, num3];
    number = num1;
    for (x of numArr) {
        if (numArr[x] > number) {
            number = numArr[x];
            // console.log(x); print the index of largest num
        }
    }
    console.log(`maxOfThree: ${number}`);
}
maxOfThree(2,1,6);
// ------------------------------------------------
//3
const isCharAVowel = (char) => {
    charArr = char.split("");
    isVow = false;
    for (x of charArr) {
        switch (x) {
            case 'o':
                isVow = true;
            case 'e':
                isVow = true;
            case 'i':
                isVow = true;
            case 'u':
                isVow = true;
            case 'a':
                isVow = true;
        }
    }
    console.log(`isCharVowel: ${isVow}`);
}
isCharAVowel("hyyyyt");

//3 Jordan
// const isCharAVowel = (letter)=>{
//     vowels = ["a","e","i","o","u","y"];
//     vowels.forEach((char)=>{
//         if(char === letter){
//             console.log(`${char} is a vowel`);
//         }
//     })
// }
//3 Jordan
// const isCharAVowel = (letter)=>{
//     const vowels = "aeoiouy";
//     if(letter.includes(vowels)){
//         console.log(`${letter} is a vowel`);
//     }
// }
// isCharAVowel("hello");
// -----------------------------------------------------

//4
arr = [1, 2, 3];
const sumArray = (ar) => {
    let sum = 0;
    for (z of ar) {
        sum = sum + z;
    } return sum;
}
console.log(sumArray(arr));

//5
const multiplyArray = () => {
    let product = 1;
    for (y of arr) {
        product = product * y;
    } return product;
}
console.log(`multiplyArray: ${multiplyArray(arr)}`);
//5 Jordan
// const multiplyArray = (arr) =>{
//     let finalNum=1;
//     arr.forEach((num)=>{
//         finalNum=finalNum*num;
//     })
//     console.log(`mulyiplyArray: ${finalNum}`);
// }
// -----------------------------------------------------
//6
const numArgs = (a) => {
    console.log(a.length);
}
numArgs(arr);
// //6 Jordan ** Spread operator */
// const numArgs = (...args)=>{
//     console.log(args.length)
// }
// ------------------------------------------------------
//7
let str = "STRING";
const reverseString = (b) => {
    sArr = str.split("");
    newArr = [];
    console.log(sArr);
    //can use arr.reverse() method too
    for (i = str.length - 1; i >= 0; i--) {
        newArr.push(str[i]);
    }
    console.log(newArr)
}
reverseString(str);
//7 Jordan
// const reverseString = (str) =>{
//     let choppedWord = str.split("");
//     let reverseWord = choppedWord.reverse();
//     console.log(`reverseString: ${reverseWord}`);
// }
reverseString("word")
// ---------------------------------------------------------
//8 incomplete
// longArr = ["hiyo", "oho", "heyhey"]
// const longestStringInArray = (arr) => {
//     for (x of arr) {
//         let temp = [];
//         temp = x.split("");

//     }
// }
// longestStringInArray(longArr);
//8 Jordan
// const longestStrArr=(b)=>{
//     let longestCount = 0;
//     let longestWord;
//     b.forEach((item)=>{
//         //console.log(str,str.length());
//         if(item.length>longestCount){
//             longestWord = item;
//             longestCount=item.length;
//         }
//     })
//     console.log(`longestStrArr ${item} ${item.length}`)
// }
// longestStrArr(["red","blue","green"])
// ----------------------------------------------------------
//9
const stringsLongerThan = (arr, num) => {
    for (x of arr) {
        let temp = [];
        temp = x.split("");
        if (temp.length > num) {
            console.log(x)
        }
    }
}
stringsLongerThan(longArr, 4);
//9 Jordan
// const stringLongerThan = (str,num)=>{
//     let longerThan = [];
//     str.forEach((word)=>{
//         if(word.length > num){
//             longerThan.push(word);
//         }
//     })
//     console.log(`stringLongerThan: ${longerThan}`);
// }
// stringLongerThan(["lou","bob","tucker"],5);