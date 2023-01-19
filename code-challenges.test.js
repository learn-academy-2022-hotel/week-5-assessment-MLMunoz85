// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("secretCode", () => {
    it("takes in a string and returns a string with a coded message.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
  
      expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   FAIL  ./code-challenges.test.js
//   secretCode
//     ✕ takes in a string and returns a string with a coded message. (1 ms)
//   ● secretCode › takes in a string and returns a string with a coded message.
//     ReferenceError: secretCode is not defined

// b) Create the function that makes the test pass.
// Pseudocode
// input: a string
// output: a string with a coded message
// process: I will create a function called secretCode that will take in a string and return a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0. In order to do this I will first create an object called code that will have my key-value pairs {a: 4, e: 3, i: 1, o: 0}. Then I will use the RegEx method replace to replace the values /aeio/, gi refers to i: case sensitive, and g: global, matching all instances, not just one.

const code = {
    a: 4,
    A: 4,
    e: 3,
    E: 3,
    o: 0,
    O: 0,
    i: 1,
    I: 1,
}
const secretCode = (string) => {
    return string.replace(/[aeio]/gi, (newstring) => code[newstring])
}
// PASS  ./code-challenges.test.js
// secretCode
//   ✓ takes in a string and returns a string with a coded message. (3 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("letterArray", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(letterArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(letterArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
  
//   FAIL  ./code-challenges.test.js
// ReferenceError: letterArray is not defined

// b) Create the function that makes the test pass.
// Pseudocode
// input: an array of words and a letter
// output: an array of words that contain the letter
// process: I will create a function called letterArray that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. I will do this by filtering the array to see if each word includes the given letter.


const letterArray = (array, letter) => {
    return array.filter(word => word.includes(letter.toUpperCase()) || word.includes(letter.toLowerCase()))
}
// PASS  ./code-challenges.test.js
// letterArray
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (2 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
  })
//   FAIL  ./code-challenges.test.js
//   ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
// Pseudocode 
// input: array
// output: boolean value
// process: I will create a function called fullHouse that takes in an array of 5 numbers and determines whether or not the array is a full house. I will do this by using if/else statements to cover the different combinations of a full house: [5,5,5,2,2], [5,5,2,2,2], and [5,2,5,2,5]. If the array meets one of these conditions then it returns true, if not it returns false.


const fullHouse = (array) => {
    if (array[0] === array[1] && array[3] === array[4] && array[0] === array [2]) {
        return true
    } else if (array[0] === array[1] && array[2] === array[3] && array[4] === array [2]) {
        return true
    } else if (array[0] === array[2] && array[3] === array[1] && array[4] === array [2]) {
        return true
    } else {
        return false
    }
}

// PASS  ./code-challenges.test.js
// fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a full house. (1 ms)