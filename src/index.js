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

function decode(expr) {
    let resultStr = "";
    expr.split("**********").forEach((word) => {
      let letters = "";
      for (let i = 0; i <= word.length - 10; i = i + 10) {
        let decodedLetter = word.substring(i, i + 10);
        decodedLetter = decodedLetter.substring(decodedLetter.indexOf("1"));
  
        let morseLetter = "";
        for (let j = 0; j <= decodedLetter.length - 2; j += 2) {
          morseLetter = morseLetter.concat(
            decodedLetter.substring(j, j + 2) === "11" ? "-" : "."
          );
        }
       
        letters = letters.concat(MORSE_TABLE[morseLetter]);
      }
      resultStr = resultStr.concat(letters + " ");
    });
    
    return resultStr.trim();
}

module.exports = {
    decode
}