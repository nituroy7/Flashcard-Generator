
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard");

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

console.log("\n Basic Flashcard: ");
console.log("===================");
console.log("\n Question: " + firstPresident.front);
console.log("\n Answer: " + firstPresident.back);



var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log("\n Cloze Flashcard: ");

console.log(" ==================");
console.log("\n Question: " + firstPresidentCloze.partial);
console.log("\n Answer: " + firstPresidentCloze.cloze);
console.log("\n Full Text: " + firstPresidentCloze.fullText);


