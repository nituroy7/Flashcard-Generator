/*
The constructor should accept two arguments: text and cloze.
The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
The constructed object should have a partial property that contains only the partial text.
The constructed object should have a fullText property that contains only the full text.
The constructor should throw or log an error when the cloze deletion does not appear in the input text.
Use prototypes to attach these methods, wherever possible.

*/
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    var index = text.indexOf(cloze);
    if (index === -1) {
        throw "There is no word!"
    }

    this.partial = text.slice(0,index) + "..." + text.slice(index  + cloze.length);
    this.fullText = text; 

};

module.exports = ClozeCard;




