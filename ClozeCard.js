
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




