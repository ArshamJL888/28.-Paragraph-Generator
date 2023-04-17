
// Declare and Import
let generateBtn = document.getElementById('generate');
let inputelem = document.getElementById('parNum');
let generatedText = document.querySelector('.generatedText')
let letterNum = 5;
let words= "";
let paragraphs = [];
let randIndex = 0;
let wordNum = 15;
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
letters = letters.split("");
console.log(letters.length);


//Events
generateBtn.addEventListener('click', generateParagraphHandler);


// Functions
function generateWordHandler() {
    let newWord = "";
    letterNum = Math.ceil(Math.random() * 4) + 4;
    for (let i = 0; i < letterNum; i++) {
        randIndex = Math.round(Math.random() * 51);
        newWord += letters[randIndex];
    }
    return newWord;
}

function generateParagraphHandler() {
    generatedText.textContent = ''
    paragraphs = [];
    let paragraphNumber = inputelem.value;
    for (let parCounter = 0; parCounter < paragraphNumber; parCounter++) {
        wordNum = Math.round(Math.random() * 30) + 20;
        words = ""
        for(let wordCounter = 0; wordCounter < wordNum; wordCounter++) {
            words += generateWordHandler() + " ";
        }
        paragraphs.push(words);
    }

    paragraphShow();
}

function paragraphShow() {
    paragraphs.forEach(function(paragraph) {
        let newp = document.createElement('p');
        newp.textContent = paragraph;
        generatedText.append(newp);
    })
}