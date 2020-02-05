// Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((acc, cur) => acc + cur)

// console.log("Total Rainfall", totalRainfall)


const words = ["Hey", "buddy,", "how", "are", "you?"]
const reducedWords = words.reduce((acc, cur) => {
    return acc + " " + cur;
})
// console.log("Reduced Words:", reducedWords)


// Lightning Exercise 2: Use the reduce method on the following array to build a sentence.

const wordArray = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = wordArray.reduce((acc, cur) => acc + " " + cur)

console.log(sentence)