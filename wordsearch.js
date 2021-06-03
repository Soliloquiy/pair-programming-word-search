const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    let newArray = [];

    for (let i = 0; i < letters[i].length; i++) {
        let innerArray = [];
        for (let j = 0; j < letters.length; j++) {
            innerArray.push(letters[j][i]);
        }
        newArray.push(innerArray);
    }
    
    const verticalJoin = newArray.map(ls => ls.join(''));

    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    return false;
}

module.exports = wordSearch