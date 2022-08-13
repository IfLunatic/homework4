function longword(word) {
    let wordmassive = Array.from(word);
    let wordlen = wordmassive.length;
    
    if(wordlen >= 10) {
        return console.log(wordmassive[0] + (wordlen-2) + wordmassive[wordlen-1])
    } else {
        return console.log(word)
    }
}

longword("inter");