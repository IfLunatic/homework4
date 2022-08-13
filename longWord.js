function longWord(word) {
    let word_massive = Array.from(word);
    let wordlen = word_massive.length;
    
    if(wordlen >= 10) {
        return console.log(word_massive[0] + (wordlen-2) + word_massive[wordlen-1])
    } else {
        return console.log(word)
    }
}

longWord("inter");
