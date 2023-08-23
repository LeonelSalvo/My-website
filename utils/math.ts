export function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export function getRandomLetter() {
    var alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]
    return alphabet[rand(0, alphabet.length - 1)]
}

export function getRandomWord(word: any) {
    var text = word.innerHTML

    var finalWord = ''
    for (var i = 0; i < text.length; i++) {
        finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
    }

    return finalWord
}