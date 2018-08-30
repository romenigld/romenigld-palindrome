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
    const lettersRegEx = /[a-z]/i;
    return Array.from(this.content).filter(c => c.match(lettersRegEx)).join("");
  }

  // Returns true if the phrase is a palindorme, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
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
