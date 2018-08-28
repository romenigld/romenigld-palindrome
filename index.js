module.exports = Phrase;

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for aplindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();

  }

  //Returns the letters in the content.
  //for example:
  // new Phrase("Hello, World!").letters() === "Helloworld"
  this.letters = function letters() {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++) {
      let character = this.content.charAt(i);
      if (character.match(/[a-zA-Z]/)) {
        theLetters.push(character);
      }
    }
    return theLetters.join("");
  }

  // Returns true if the phrase is a palindorme, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();
