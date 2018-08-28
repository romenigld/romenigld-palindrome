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
    const letterRegex = /[a-z]/i;
    Array.from(this.content).forEach(function(character) {
      if (character.match(letterRegex)) {
        theLetters.push(character);
      }
    });
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
