const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

/* -------SlashDots decoder----------------- */

function slashDots(str) {
    let mo = []
    for(let i in str) {
     str[i] === '10' ? str[i] = '.' : str[i] === '11' ? str[i] = '-' : str[i] = ' '; 
     mo.push(str[i])
    }
    return mo.join('');
}

/* ----------DECIMAL FUNCTION--------------- */
function decimal(str, newSize) {
    let arr = [];
    while(str !== '') {
        arr.push(str.slice(0, newSize));
        str = str.slice(newSize);
    }
    return arr;
}

/* --------------Decimal decoder-------------- */

function decode(expr) {
    let decimalArray = decimal(expr, 10);
    let array = [];
    let morse = [];
    let keys = [];
    let morseKeys = [];
    let answer = [];
    let result = ''
    array = decimalArray.map(letter => {
        return letter.split('00').join('');
    })
    for(let index in array){
        let check = array[index];
        morse = decimal(check, 2);
        keys.push(morse);
    }
    for(let i in keys) {
        let temp = slashDots(keys[i])
        morseKeys.push(temp);
    }
    for(let i in morseKeys){
        let letter = MORSE_TABLE[morseKeys[i]];
        if(letter === undefined){
            letter = ' ';
        }
        answer.push(letter);
        result = answer.join('')
    }
    return result;
}
module.exports = {
    decode
}
