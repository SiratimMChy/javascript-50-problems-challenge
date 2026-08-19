let sentence = "I am learning JavaScript programming";
let longestWord = "";
let sentence1 = sentence.split(' ');
for (let i = 0; i < sentence1.length; i++) {
    if (sentence1[i].length >= longestWord.length) {
        longestWord = sentence1[i];
    }
}
console.log(longestWord);
