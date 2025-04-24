function processSentence() {

    // Declaration and input modification
    const input = document.getElementById('sentence').value.trim();
    const words = input.split(' ');

    const numberWords = [];
    const nonNumberWords = [];

    // For each statement for boolean 
    words.forEach(word => {
      if (!isNaN(word) && word.indexOf(',') === -1 && word !== '') {
        numberWords.push(Number(word));
      } else if (word !== '') {
        nonNumberWords.push(word);
      }
    });

    numberWords.sort((a, b) => a - b);
    nonNumberWords.sort();

    const numberList = document.getElementById('number-list');
    const wordList = document.getElementById('word-list');

   

    // map to create the li's
    // I dont think we covered join() yet in class however I couldnt figure out any other way to remove the commas that substrings are seperated
    // by due to the split() method
    numberList.innerHTML = numberWords.map(function(n) {
      return "<li>" + n + "</li>";
    }).join('');

    wordList.innerHTML = nonNumberWords.map(function(w) {
      return "<li>" + w + "</li>";
    }).join('');
  }