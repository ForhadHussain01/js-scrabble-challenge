

const letterValue = {

    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  

    
}

const alphabet = {
     0 : ["", " \t\n"],
    1 : ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "L", "l", "N","n", "R", "r", "S", "s", "T", "t" ],
    2 : ["D", "d", "G", "g"],
    3 : ["B", "b", "C", "c", "M", "m", "P", "p"],
    4 : ["F", "f", "H", "h", "V", "v", "W", "w", "Y", "y"],
    5 : ["K", "k"],
    8 : ["J", "j", "X", "x"],
    10: ["Q", "q", "Z", "z"]
}

// Key objective: input words with each letter having a value and totalling them up

// what needs to be done?
// create objects with letters = strings and value = number
// create function to add strings + values together and input loop
// return score value else 0
// make it case insensitive

// You'll need these:

// | Letter                        | Value  |
// | ----                          |  ----  |
// | A, E, I, O, U, L, N, R, S, T  |     1  |
// | D, G                          |     2  |
// | B, C, M, P                    |     3  |
// | F, H, V, W, Y                 |     4  |
// | K                             |     5  |
// | J, X                          |     8  |
// | Q, Z                          |     10 |

// Example
// "cabbage" should be scored as worth 14 points:

// - 3 points for C
// - 1 point for A, twice
// - 3 points for B, twice
// - 2 points for G
// - 1 point for E


function scrabble2(word) {
    if (word === null ||word === ""){
        return 0
    }
    

    sumOfLetterValue = 0 
    

    for (let i = 0; i < word.length; i++){
        const letter = word[i].toUpperCase()
        if (letter in letterValue) {
            sumOfLetterValue += letterValue[letter]
        }

        
    }


    
    return sumOfLetterValue
    
}

function scrabble(word){
    sumOfLetterValue = 0 
    
    if (word === null){
        return 0
    }

    for (let i = 0; i < word.length; i++){
        const letter = word[i]

      const keys = Object.keys(alphabet)
    //   console.log(keys)
        for (let j = 0; j < keys.length; j++){
            const currentKey = parseInt(keys[j])
            // console.log(alphabet[currentKey])
            // console.log(alphabet[currentKey].includes(letter))

            if (alphabet[currentKey].includes(letter)){
                sumOfLetterValue += currentKey
            }
        }
    }
    return sumOfLetterValue
}

// console.log(scrabble2("OXYPHENBUTAZONE"))
// console.log(scrabble2('quirky'))
// console.log(scrabble2(" \t\n"))
// console.log(scrabble2(null))


module.exports = scrabble

